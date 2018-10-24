<template>
  <nav class="navigation" :class="{'navigation--egg-expanded': isExpandedEgg}">
    <button @click.prevent="toggle" class="navigation__hamburger">
      <burger :is-expanded="isOpen"></burger>
    </button>
    <nav-egg v-on:transition-finished="handleEggTransition" :is-expanded="isExpandedEgg"></nav-egg>

    <ul ref="menu" class="navigation__menu">
      <li ref="work" class="navigation__menu-item navigation__menu-item--primary">
        <nuxt-link to="work" class="navigation__menu-link navigation__menu-link--large navigation__menu-link--white-onred ">
          <span class="navigation__menu-label">Work</span>
        </nuxt-link>
      </li>
      <li ref="about" class="navigation__menu-item">
        <nuxt-link to="about" class="navigation__menu-link navigation__menu-link--beige-coal">
          <span class="navigation__menu-label">About</span>
        </nuxt-link>
      </li>
      <li ref="contact" class="navigation__menu-item">
        <nuxt-link to="contact" class="navigation__menu-link navigation__menu-link--red-white">
          <span class="navigation__menu-label">Contact</span>
        </nuxt-link>
      </li>
    </ul>
    
    <social-links ref="sociallinks" :social-options="social.links" :label="social.label" :direction="'horizontal'" ></social-links>
  </nav>
</template>

<script>
import Burger from '~/components/Burger'
import SocialLinks from '~/components/SocialLinks'
import NavEgg from '~/components/NavEgg'
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

export default {
  components: {
    Burger,
    SocialLinks,
    NavEgg
  },
  data: () => ({
    isOpen: false,
    isExpandedEgg: false,
    masterTimeline: null
  }),
  props: ['menu', 'social'],
  computed: {
    eggRatio () {
      return (EGG_WIDTH / EGG_HEIGHT) * 100
    },
    eggWidth () {
      return (!this.isOpen)
        ? {width: this.getDefaultSize()}
        : {width: this.getViewportEggSize()}
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
    toggle () {
      this.isOpen = !this.isOpen
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
    tweenTextVisibility (element) {
      (element.isTextVisible)
        ? TweenLite.set(element, {className:"-=navigation__menu-item--show-text"})
        : TweenLite.set(element, {className:'+=navigation__menu-item--show-text '})
      element.isTextVisible = !element.isTextVisible
    },
    buildMobileTimeline () {
      let {about, contact, work, menu} = this.$refs

      this.tlDesktop = new TimelineLite()
      // this.tlDesktop = new TimelineMax({paused: true})
      
      let menuHeight = menu.getBoundingClientRect().height
      let workOffset = work.getBoundingClientRect().bottom
      let workHeight = work.getBoundingClientRect().height
      
      work.isTextVisible = false

      this.tlDesktop
        .set(work, { position: 'absolute', bottom: menuHeight, height: MENU__HEIGHT__ANIMATED, opacity: .3 })
        .to(work, 0.75, { bottom: menuHeight - workOffset}, 'stage1' )
        .to(work, 0.5, { height: workHeight, opacity: 1},  '-=0.25')
        .call(this.tweenTextVisibility, [ work ])
        .to(work, 0.01, { opacity: 1 })
        .eventCallback('onReverseComplete', () => {  
          TweenLite.set(work, {clearProps: 'all'})
        })
    },
    buildNavTimeline (navEl, menuHeight, menuLeftOffset, hardOffsetLeft = false ) {
      let tl = new TimelineLite()
      let boundingRect = navEl.getBoundingClientRect()
      let navOffset = boundingRect.bottom
      let navHeight = boundingRect.height
      let leftOffset = (hardOffsetLeft)
        ? boundingRect.width
        : Math.floor(boundingRect.left - menuLeftOffset)
      
      navEl.isTextVisible = false

      tl
        .set(navEl, { position: 'absolute', left: leftOffset, bottom: menuHeight, height: MENU__HEIGHT__ANIMATED, opacity: .3 })
        .to(navEl, 0.75, { bottom: menuHeight - navOffset}, 'stage1' )
        .to(navEl, 0.5, { height: navHeight, opacity: 1}  )
        .call(this.tweenTextVisibility, [ navEl ], '-=0.2')
        .to(navEl, 0.01, { opacity: 1 })
        .eventCallback('onReverseComplete', () => {  
          TweenLite.set(navEl, {clearProps: 'all'})
        })

      return tl
    },
    playTimeline() {
      let {about, contact, work, menu} = this.$refs
      let menuHeight = menu.getBoundingClientRect().height
      let menuLeftOffset = menu.getBoundingClientRect().left

      if (this.masterTimeline !== null ) this.masterTimeline.clear()
      this.masterTimeline = new TimelineLite()

      this.masterTimeline.eventCallback('onReverseComplete', () => {  
        this.isExpandedEgg = false
      })

      if (window.innerWidth > 767) {
        this.masterTimeline.add(this.buildNavTimeline(about, menuHeight, menuLeftOffset), 'step1')
        this.masterTimeline.add(this.buildNavTimeline(contact, menuHeight, menuLeftOffset, true), 'step1+=0.25')
        this.masterTimeline.add(this.buildNavTimeline(work, menuHeight, menuLeftOffset), 'step1+=0.75')
      } else {
        
        this.masterTimeline.add(TweenLite.to(this.$refs.sociallinks.$el, 0.5, {opacity: 1} ))
        this.masterTimeline.add(this.buildNavTimeline(contact, menuHeight, menuLeftOffset), 'step1')
        this.masterTimeline.add(this.buildNavTimeline(about, menuHeight, menuLeftOffset), 'step1+=0.5')
        this.masterTimeline.add(this.buildNavTimeline(work, menuHeight, menuLeftOffset), 'step1+=1')

      }
    },
    handleEggTransition () {
      if (this.isOpen) {
        this.playTimeline()
      }
    },
    reverseTimeline () {
      this.masterTimeline
        .timeScale(1.75)
        .reverse()
    }
  },
  mounted () {
    
    // this.playTimeline()

    //   setTimeout(() => {
    //     this.reverseTimeline()
    //   }, 5000);
    
  }
}
</script>
