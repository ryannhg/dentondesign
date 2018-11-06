<template>
  <nav id="navigation" class="navigation" :class="{'navigation--egg-expanded': isExpandedEgg}">
    <button id="navburger" @click.prevent="toggle" class="navigation__hamburger" aria-label="Toggle navigation">
      <burger :is-expanded="isOpen"></burger>
    </button>
    <nav-egg id="navegg" v-on:transition-finished="handleEggTransition" :is-expanded="isExpandedEgg"></nav-egg>

    <ul ref="menu" class="navigation__menu">
      <li @click="closeMenu" class="navigation__menu-item navigation__menu-item--primary" :class=[visibilityClass]>
        <nuxt-link ref="work" to="/work" class="navigation__menu-link navigation__menu-link--large navigation__menu-link--white-onred">
          <span class="navigation__menu-label" v-text="menuLabel('work')"></span>
          <span class="navigation__menu-background" :style="menuBackground('work')"></span>
        </nuxt-link>
      </li>
      <li @click="closeMenu" class="navigation__menu-item" :class=[visibilityClass]>
        <nuxt-link ref="about" to="/about" class="navigation__menu-link navigation__menu-link--beige-coal navigation__menu-link--beige-cool" >
          <span class="navigation__menu-label" v-text="menuLabel('about')"></span>
          <span class="navigation__menu-background" :style="menuBackground('about')"></span>
        </nuxt-link>
      </li>
      <li @click="closeMenu" class="navigation__menu-item" :class=[visibilityClass]>
        <nuxt-link  ref="contact" to="/contact" class="navigation__menu-link navigation__menu-link--red-white">
          <span class="navigation__menu-label" v-text="menuLabel('contact')"></span>
          <span class="navigation__menu-background" :style="menuBackground('contact')"></span>
        </nuxt-link>
      </li>
    </ul>
    
    <social-links :class=[visibilityClass] ref="sociallinks" :social-options="social.links" :label="social.label" :direction="'horizontal'" ></social-links>
  </nav>
</template>

<script>
import Burger from '~/components/Burger'
import SocialLinks from '~/components/SocialLinks'
import NavEgg from '~/components/NavEgg'
import windowresize from '~/mixins/windowresize'
import page from '~/static/content/work.json'
import { TimelineLite, TweenLite } from 'gsap'

const RADIUS__OFFSET = 0.85
const EGG_WIDTH = 141
const EGG_HEIGHT = 126

const EGG_RESPONSIVE_WIDTH =  {
  mobile: 68,
  tablet: 141
}

const attempt = (fn, fallback = undefined) => {
  try {
    return fn()
  } catch (_) {
    return fallback
  }
}

const MENU__HEIGHT__ANIMATED = 120
const MENU__MOBILE__SPEED = 0.5

export default {
  components: {
    Burger,
    SocialLinks,
    NavEgg
  },
  data: () => ({
    isOpen: false,
    isExpandedEgg: false,
    showTextVisibility: false,
    masterTimeline: null,
    viewportChange: 'mobile'
  }),
  props: ['menu', 'social'],
  mixins: [windowresize],
  computed: {
    eggRatio () {
      return (EGG_WIDTH / EGG_HEIGHT) * 100
    },
    eggWidth () {
      return (!this.isOpen || this.viewportChange === 'mobile' || this.viewportChange === 'desktop')
        ? {width: this.getDefaultSize()}
        : {width: this.getViewportEggSize()}
    },
    visibilityClass () {
      return {
        'navigation__menu-item--show-text' : this.showTextVisibility
      }
    }
  },
  watch: {
    isOpen (newVal, oldVal) {
      (newVal === true )
      ? this.isExpandedEgg = newVal
      : this.reverseTimeline()
    }
  },
  methods: {
    windowResizeCallbackEvent () {
      this.closeMenu()
      this.updateViewportChange()
    },
    toggle () {
      this.isOpen = !this.isOpen
    },
    closeMenu() {
      this.isOpen = false
    },
    updateViewportChange () {
      
      this.viewportChange = window.innerWidth < 768 ? 'mobile' : 'desktop' 
    },
    menuBackground (name) {
      return {
        backgroundImage: `url('${this.menu.links[name].image}')`
      }
    },
    menuLabel (name) {
      return this.menu.links[name].label
    },
    isMobile () {
      return attempt(_ => window.innerWidth < 768, false) 
    },
    getBiggerWindowWidthOrHeight () {
      return attempt(_ => window.innerWidth < window.innerHeight, false)
        ? attempt(_ => window.innerHeight, 0)
        : attempt(_ => window.innerWidth, 0)
    },
    getViewportEggSize () {
      let preferredViewportWidth = this.getBiggerWindowWidthOrHeight()
      
      return preferredViewportWidth * 3 + 'px'
    },
    getDefaultSize () {
      return (this.isMobile())
        ? EGG_RESPONSIVE_WIDTH.mobile + 'px'
        : EGG_RESPONSIVE_WIDTH.tablet + 'px'
    },
    buildDesktopTimeline () {
      let {about, contact, work} = this.$refs

      this.tlDesktop = new TimelineLite()
      // this.tlDesktop = new TimelineMax({paused: true})

      this.tlDesktop
        .to(about, 1, { bottom: '100%' }, { bottom: '0%' }, 'stage1')
    },
    tweenTextVisibility () {
      this.showTextVisibility = !this.showTextVisibility
    },
    buildNavTimeline (navEl, growDirection = 'toTop', time = 0.75 ) {
      let tl = new TimelineLite()
      
      navEl.isTextVisible = false
      let topOffset  = (growDirection === 'toBottom')
        ? 0
        : '100%'
      let bottomOffset  = (growDirection === 'toBottom')
        ? '100%'
        : 0

      let changeFactor = (growDirection === 'toBottom')
        ? 'bottom'
        : 'top'

      tl
        .set(navEl, { top: topOffset, bottom: bottomOffset, opacity: .3})
        .to(navEl, time, { [changeFactor]: '0%' }, 'height' )
        .to(navEl, time, { opacity: 1 }, 'height=-0.25' )
        .eventCallback('onReverseComplete', () => {  
          TweenLite.set(navEl, {clearProps: 'all'})
        })

      return tl
    },
    playTimeline() {
      let {about, contact, work, menu} = this.$refs

      if (this.masterTimeline !== null ) this.masterTimeline.clear()
      this.masterTimeline = new TimelineLite()

      this.masterTimeline.eventCallback('onReverseComplete', () => {
        this.isExpandedEgg = false
      })

      if (window.innerWidth < 767) {
        this.masterTimeline.add(this.buildNavTimeline(about.$el, 'toBottom', MENU__MOBILE__SPEED))
          .add(this.buildNavTimeline(contact.$el, 'toBottom', MENU__MOBILE__SPEED))
          .add(this.buildSocialLinks())
          .to(work.$el, MENU__MOBILE__SPEED, {opacity: 1}, 'step2-=0.75')
          .call(this.tweenTextVisibility, [], '-=0.2')
          .to(work.$el, 0.1, {opacity: 1})
          
      } else {
        this.masterTimeline.add(this.buildNavTimeline(contact.$el, 'toTop'), 'step1')
          .add(this.buildNavTimeline(about.$el, 'toBottom'), 'step1')
          .to(work.$el, 0.75, {opacity: 1}, '-=0.75')
          .call(this.tweenTextVisibility, [], '-=0.2')
          .to(work.$el, 0.1, {opacity: 1})
      }

      return this.masterTimeline
    },
    buildSocialLinks () {
      let tl = new TimelineLite()
      let height = this.$refs.sociallinks.$el.getBoundingClientRect().height

      tl.set(this.$refs.sociallinks.$el, {height: 0, opacity: 1})
        .to(this.$refs.sociallinks.$el, MENU__MOBILE__SPEED, {height: height})

      return tl
    },
    handleEggTransition () {
      if (this.isOpen) {
        this.playTimeline().timeScale(1.75)
      }
    },
    reverseTimeline () {
      this.masterTimeline
        .timeScale(1.75)
        .reverse()
    }
  }
}
</script>
