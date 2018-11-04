<template>
<div class="timeline-snippet wrapper wrapper--narrow" ref="snippet"
  :class="{ 'timeline-snippet--intro': isBrown, 'timeline-snippet--line-top': !top, 'timeline-snippet--line-top-ready': inView }">
  <div class="timeline-snippet__year fonts__h3">{{years}}</div>
  <h2 class="timeline-snippet__title fonts__h4">{{title}}</h2>
  <p class="timeline-snippet__caption fonts__h6" ref="caption"
    :class="{ 'timeline-snippet__caption--brownie': isBrown, 'timeline-snippet__caption--brownie-ready': brownInView }">{{caption}}</p>
</div>
</template>

<script>
export default {
  props: {
    isBrown: { type:Boolean, default: false },
    years:  String,
    title: String,
    caption: String,
    top: { type: Boolean, default: false }
  },
  data: () => ({
    inView: false,
    brownInView: false
  }),
  mounted () {
    window.addEventListener('scroll', this.checkIfVisible)
    window.addEventListener('scroll', this.checkIfBrownVisible)
  },
  destroyed () {
    try {
      window.removeEventListener('scroll', this.checkIfVisible)
      window.removeEventListener('scroll', this.checkIfBrownVisible)
    } catch (e) {}
  },
  methods: {
    checkIfVisible () {
      const PERCENT_UNTIL_LINE_TRIGGER = 0.75
      if (this.$refs.snippet.getBoundingClientRect().top < window.innerHeight * PERCENT_UNTIL_LINE_TRIGGER) {
        window.removeEventListener('scroll', this.checkIfVisible)
        this.inView = true
      }
    },
    checkIfBrownVisible () {
      const PERCENT_UNTIL_LINE_TRIGGER = 0.5
      if (this.$refs.caption.getBoundingClientRect().top < window.innerHeight * PERCENT_UNTIL_LINE_TRIGGER) {
        window.removeEventListener('scroll', this.checkIfVisible)
        this.brownInView = true
      }
    }
  }
}
</script>