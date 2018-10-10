<template>
  <nav class="navigation">
    <div class="navigation__menu">
      <div class="navigation__svg-container">
      <!-- <svg class="menu__egg-svg" viewBox="0 0 141 126" xmlns="http://www.w3.org/2000/svg"><path d="M61.702 126C23.14 126 0 101.24 0 63 0 24.761 23.14 0 61.702 0 100.262 0 141 24.761 141 63c0 38.24-40.737 63-79.298 63z" fill="#C21E4E" fill-rule="evenodd"/></svg> -->
        <img class="navigation__egg" src="~/assets/images/eggmenu.svg" />
      </div>
      <span class="navigation__burger">
        <span class="navigation__burger-buns"></span>
        <span class="navigation__burger-fillings"></span>
        <span class="navigation__burger-buns navigation__burger-buns--bottom"></span>
      </span>
    </div>
  </nav>
</template>

<script>

export default {
  props: ['content']
}
</script>
