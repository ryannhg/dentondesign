<template>
<div class="link-callout wrapper wrapper--narrow">
  <a :href="linkContent.url" target="_blank" rel="noopener" class="link-callout__heading fonts__h5">
    <span>{{linkContent.label}}</span>
    <span class="link-callout__icon">
      <span class="link-callout__icon--off icon-launch-off"></span>
      <span class="link-callout__icon--hover icon-launch-hover"></span>
    </span>
  </a>
</div>
</template>

<script>
export default {
  props: {
    linkContent: Object
  }
}
</script>