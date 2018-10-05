import Vue from 'vue'

const updatePercent = ({ el, vnode, expression }) => _ => {
  const { height, bottom } = el.getBoundingClientRect()
  const windowHeight = window.innerHeight
  const value = (height - bottom) / (height - windowHeight)
  vnode.context[expression] = Math.min(1, Math.max(0, value))
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

Vue.directive('Percentage', {
  bind (el, { expression }, vnode) {
    el.percentHandler = updatePercent({ el, vnode, expression })
    window.addEventListener('scroll', el.percentHandler, options)
    window.addEventListener('resize', el.percentHandler)
  },
  unbind (el) {
    window.removeEventListener('scroll', el.percentHandler)
    window.removeEventListener('resize', el.percentHandler)
  }
})
