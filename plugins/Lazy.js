import Vue from 'vue'

const delay = 300

const hideImage = (el) => {
  el.oldStyle = {
    opacity: el.style.opacity,
    transition: el.style.transition
  }
  el.style.opacity = 0
  el.style.transition = `opacity ${delay}ms ease-in-out`
  return Promise.resolve(el)
}

const waitUntilLoaded = (src) => el => new Promise((resolve) => {
  const image = new window.Image()
  image.onload = _ => resolve(el)
  image.src = src
})

const showImage = el => {
  el.style.opacity = el.oldStyle.opacity
  setTimeout(_ => {
    el.style.transition = el.oldStyle.transition
  }, delay)
  return Promise.resolve(el)
}

Vue.directive('Lazy', {
  bind (el) {
    hideImage(el)
      .then(waitUntilLoaded(el.getAttribute('src')))
      .then(showImage)
  }
})
