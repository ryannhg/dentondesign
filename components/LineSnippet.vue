<template>
<div class="line-snippet">
  <div class="line-snippet__header">
    <h2 class="line-snippet__title">{{title}}</h2>
    <img v-if="image" :src="image" class="line-snippet__image" />
  </div>
  <p class="line-snippet__copy">{{copy}}</p>
</div>
</template>

<script>
export default {
  props: {
    socialOptions: {type: Array, default: () => ([])},
    label: {type: String, default: ''},
    direction: String
  }
}
</script>