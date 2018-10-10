import Vue from 'vue'

const updatePixelsScrolled = ({ vnode, expression }) => _ => {
  const pixelsScrolled = window.pageYOffset
  vnode.context[expression] = pixelsScrolled
}

const options = () => {
  /* Feature detection */
  var options = false

  try {
    window.addEventListener(
      'test',
      null,
      Object.defineProperty({}, 'passive', {
        get: function () { options = { passive: true } }
      })
    )
  } catch (err) {}

  return options
}

Vue.directive('PixelsScrolled', {
  bind (el, { expression }, vnode) {
    el.percentHandler = updatePixelsScrolled({ vnode, expression })
    window.addEventListener('scroll', el.percentHandler, options)
    window.addEventListener('resize', el.percentHandler)
  },
  unbind (el) {
    window.removeEventListener('scroll', el.percentHandler)
    window.removeEventListener('resize', el.percentHandler)
  }
})
