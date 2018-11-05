<template>
  <div class="layout__main">
    <parallax-background id="parallax-background" :image="page.backgroundImage.src"></parallax-background>
    <div class="layout__content">
      <page-heading id="home-heading" :large-caption="true" :caption="page.caption" :image="page.titleImage"></page-heading>
      <cta-links v-bind="page.explore"></cta-links>
    </div>
  </div>
</template>


<script>
import ParallaxBackground from '~/components/ParallaxBackground'
import PageHeading from '~/components/PageHeading'
import CtaLinks from '~/components/CtaLinks'
import page from '~/static/content/home.json'
import Page from '~/plugins/Page'
import { TimelineLite, TweenLite, Power1 } from 'gsap'

const ANIM_DURATIONS = {
  stage1: 0.75,
  stage2: 0.75,
  stage3: 0.5,
  stage4: 0.75
}

const ELEM_ID = {
  background: '#parallax-background',
  logo: '#main-logo',
  egg: '#navegg',
  burgerLines: '.burger__line',
  navigation: '#navigation',
  teaserLine: '#scroll-teaser-line',
  teaserEgg: '#scroll-teaser-egg',
  teaserMessage: '#scroll-teaser-message',
  shareEgg: '#share-egg',
  heading: 'home-heading'
}

export default {
  mixins: [ Page ],
  components: {
    ParallaxBackground,
    PageHeading,
    CtaLinks
  },
  data: () => ({ 
    page
  }),
  mounted () {
    this.startIntroAnimation()
  },
  methods: {
    startIntroAnimation () {
      let timeline = new TimelineLite();

      let { logo } = ELEM_ID

      timeline
        .fromTo(logo, 1, {opacity: 0}, {opacity: 1}, 'stage1')
        .add(this.buildNavigationTimeline(), 'stage1')
        .add(this.buildChickenTimeline(), 'stage2')
        .add(this.buildTaglineTimeline(), 'stage3')
        .add(this.buildTeaserAndSocialTimeline(), 'stage4')
    },
    buildNavigationTimeline() {
      let tl = new TimelineLite()
      let { navigation, burgerLines } = ELEM_ID
      
      tl.set(navigation, {scale: 0})
        .set(burgerLines, {width: '0%'})
        .to(navigation, ANIM_DURATIONS.stage1, {scale: 1})
        .eventCallback('onComplete', this.runBurgerAnimation)


      return tl
    },
    buildChickenTimeline () {
      let tl = new TimelineLite()
      let { background } = ELEM_ID
      
      tl.set(background, {opacity: 0})
        .to(background, ANIM_DURATIONS.stage2, {opacity: 1, ease: Power1.easeIn})
      
      return tl
    },
    buildTaglineTimeline () {
      let tl = new TimelineLite()
      let { heading } = ELEM_ID
      let headingDOM = document.getElementById( heading )
      let viewportOffset = window.innerHeight - (headingDOM.getBoundingClientRect().top - window.pageYOffset)
      
      tl.set(headingDOM, {y: viewportOffset})
        .to(headingDOM, ANIM_DURATIONS.stage3, {y: 0, ease: Power1.easeIn})
      
      return tl
    },
    runBurgerAnimation () {
      let tl = new TimelineLite()
      let {  burgerLines } = ELEM_ID

      tl.staggerTo(burgerLines, 0.5, {width: '100%', ease: Power1.easeOut}, 0.2, 'stage2')
    },
    buildTeaserAndSocialTimeline () {
      let tl = new TimelineLite()
      let {  teaserLine, teaserEgg, teaserMessage, shareEgg} = ELEM_ID
      let teaserLineDOM = document.getElementById( teaserLine.split('#')[1] )
      let finalHeight = window.getComputedStyle(teaserLineDOM).height

      tl.set(teaserLineDOM, {height: 0})
        .set(teaserEgg, {opacity: 0})
        .set(teaserMessage, {opacity: 0})
        .set(shareEgg, {opacity: 0})
        .to(teaserLine, ANIM_DURATIONS.stage4, {height: finalHeight, ease: Power1.easeOut})
        .to(teaserEgg, ANIM_DURATIONS.stage4, {opacity: 1}, 'fadein')
        .to(teaserMessage, ANIM_DURATIONS.stage4, {opacity: 1}, 'fadein')
        .to(shareEgg, ANIM_DURATIONS.stage4, {opacity: 1}, 'fadein')
        .eventCallback('onComplete', () => {  
          TweenLite.set(teaserLineDOM, {clearProps: 'all'})
        })
      return tl
    }
  }
}
</script>
