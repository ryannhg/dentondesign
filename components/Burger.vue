<template>
  <div class="burger" :class="{'burger--is-expanded': isExpanded}">
    <span class="burger__line burger__buns"></span>
    <span class="burger__line burger__fillings"></span>
    <span class="burger__line burger__buns burger__buns--bottom"></span>
  </div>
</template>


<script>

export default {
  props: { isExpanded: Boolean }
}
</script>
