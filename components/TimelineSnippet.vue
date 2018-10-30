<template>
<div class="timeline-snippet wrapper wrapper--narrow"
  :class="{'timeline-snippet--intro': isBrown}">
  <div class="timeline-snippet__year fonts__h3">{{years}}</div>
  <h2 class="timeline-snippet__title fonts__h4">{{title}}</h2>
  <p class="timeline-snippet__caption fonts__h6"
    :class="{'timeline-snippet__caption--brownie': isBrown}">{{caption}}</p>
</div>
</template>

<script>
export default {
  props: {
    isBrown: {type:Boolean, default: false},
    years:  String,
    title: String,
    caption: String
  }
}
</script>