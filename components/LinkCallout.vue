<template>
<div class="link-callout wrapper wrapper--narrow">
  <a :href="linkContent.url" target="_blank" rel="noopener" class="link-callout__heading fonts__h5">{{linkContent.label}}<span class="icon-launch-off"></span></a>
</div>
</template>

<script>
export default {
  props: {
    linkContent: Object
  },
}
</script>