<template>
  <div class="share">
    <button class="share__egg" aria-label="Toggle share links" @click="toggle">
      <img class="share__egg-icon" src="~/assets/images/share-egg.svg" alt="Egg" v-show="!isOpen" />
      <span class="share__egg-icon-share icon-share" v-show="!isOpen"></span>
      <img class="share__egg-icon share__egg-icon--cracked" src="~/assets/images/share-egg-cracked.svg" alt="Cracked egg" v-show="isOpen" />
    </button>
    <div class="share__links-wrapper" ref="links">
      <div class="share__links">
        <a class="share__link" 
          v-for="link in links" :key="link.url"
          target="_blank" :href="link.url"
          :aria-label="link.label" ref="link">
          <span :class="'share__link-icon icon-'+ link.icon"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineLite, TweenLite } from 'gsap'
import social from '~/static/content/social.json'

export default {
  data: () => ({
    ...social,
    isOpen: false,
    timeline: undefined
  }),
  mounted () {
    this.timeline = this.initTimeline()
  },
  watch: {
    isOpen (value) {
      if (this.timeline) {
        if (value) {
          this.timeline.invalidate().play()
        } else {
          this.timeline.reverse()
        }
      }
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
    initTimeline () {
      const { links, link } = this.$refs

      return new TimelineLite()
        .set(links, { height: 'auto' })
        .from(links, .3, { height: 0 })
        .fromTo(link, .3, { opacity: 0 }, { opacity: 1 })
        .eventCallback('onReverseComplete', () => {
          TweenLite.set(links, { height: 0 })
        })
        .pause()
    }
  }
}
</script>
