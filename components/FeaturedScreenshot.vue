<template>
<div class="featured-screenshot wrapper wrapper--narrow">
  <figure class="featured-screenshot__figure" >
    <img class="featured-screenshot__image" :src="image" />
    <p class="featured-screenshot__copy">{{caption}}</p>
  </figure>
</div>
</template>

<script>
export default {
  props: {
    caption: String,
    image: String
  } 
}
</script>