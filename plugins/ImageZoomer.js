import Vue from 'vue'

Vue.directive('ImageZoomer', {
  bind (el, { expression }, vnode) {
    console.log('doof')
    const images = [ ...el.querySelectorAll('img') ]
    images.forEach(img => {
      const parent = img.parentElement
      const src = img.getAttribute('src')
      const zoomBoy = `<div class="zoom-boy"><img class="zoom-boy__image src="${src}" /></div>`
      console.log(zoomBoy)
      parent.innerHTML = [
        zoomBoy,
        parent.innerHTML
      ].join('\n')
    })
    // setTimeout(_ => Vue.set(vnode.context, expression, [ ...el.querySelectorAll('img') ], 300))
  }
})
