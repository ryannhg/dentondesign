import Vue from 'vue'

Vue.directive('ImageLineSlapper', {
  bind (el, { expression }, vnode) {
    const images = [ ...el.querySelectorAll('p > img') ]
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
          console.log('HAW', i)
          document.querySelector(`[data-zoomboy-id="${i}"]`).classList.toggle('zoom-boy--visible')
        })
    })
    const zoomBoys = [ ...el.querySelectorAll('.zoom-boy') ]
      .forEach(el => el.addEventListener('click', _ => {
        el.classList.toggle('zoom-boy--visible')
      }))

    setTimeout(_ => Vue.set(vnode.context, expression, [ ...el.querySelectorAll('p > img') ], 300))
  }
})
