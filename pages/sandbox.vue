<template>
  <div class="layout__main">
    
  </div>
</template>

<script>
import ParallaxBackground from '~/components/ParallaxBackground'
import PageHeading from '~/components/PageHeading'
import page from '~/static/content/work.json'
import Page from '~/plugins/Page'

export default {
  mixins: [ Page ],
  components: {
    ParallaxBackground,
    PageHeading
  },
  data: () => ({ page })
}
</script>
