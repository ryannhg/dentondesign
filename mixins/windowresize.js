export default {
  data: function () {
    return {
      timeoutID: undefined
    }
  },
  mounted: function () {
    window.addEventListener('resize'
      , this.resizeThrottle
      , false)
  },
  methods: {
    windowResizeCallbackEvent () {
      // console.log('size me')
    },
    resizeThrottle () {
      if (!this.timeoutID) {
        this.timeoutID = setTimeout(() => {
          this.timeoutID = undefined
          this.windowResizeCallbackEvent()
        }, 66)
      }
    }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize'
      , this.resizeThrottle
      , false)
  }
}
