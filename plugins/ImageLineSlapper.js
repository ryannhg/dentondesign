import Vue from 'vue'

Vue.directive('ImageLineSlapper', {
  bind (el, { expression }, vnode) {
    [ ...el.querySelectorAll('img') ].forEach(img => {
      const parent = img.parentElement
      parent.innerHTML = [
        '<div class="line__top"></div>',
        parent.innerHTML
      ].join('\n')
    })

    setTimeout(_ => Vue.set(vnode.context, expression, [ ...el.querySelectorAll('img') ], 300))
  }
})
