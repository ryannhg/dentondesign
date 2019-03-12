import Vue from 'vue'

Vue.directive('ImageLineSlapper', {
  bind (el, { expression }, vnode) {
    const imageSelector = 'p > img, .line-snippet__image'
    const images = [ ...el.querySelectorAll(imageSelector) ]
    images.forEach((img, i) => {
      const parent = img.parentElement
      const src = img.getAttribute('src')
      const zoomBoy = `<div data-zoomboy-id="${i}" class="zoom-boy"><img class="zoom-boy__image" src="${src}" /></div>`
      parent.innerHTML = [
        '<div class="line__top"></div>',
        zoomBoy,
        parent.innerHTML
      ].join('\n')
      parent.children[parent.children.length - 1]
        .addEventListener('click', _ => {
          document.querySelector(`[data-zoomboy-id="${i}"]`).classList.toggle('zoom-boy--visible')
          document.getElementById('fancy-cursor').classList.toggle('fancy-cursor--closing')
        })
    })
    const zoomBoys = [ ...el.querySelectorAll('.zoom-boy') ]

    zoomBoys
      .forEach(el => el.addEventListener('click', _ => {
        el.classList.toggle('zoom-boy--visible')
        document.getElementById('fancy-cursor').classList.toggle('fancy-cursor--closing')
      }))

    setTimeout(_ => Vue.set(vnode.context, expression, [ ...el.querySelectorAll(imageSelector) ], 300))
  }
})
