<template>
<main class="layout__main">
  <div class="layout__content layout__content--above-fold">
    <page-heading :caption="page.description" :image="page.titleImage"></page-heading>
  </div>
</main>
</template>


<script>
import pageHeading from '~/components/PageHeading'
import page from '~/static/content/work/burns-mcdonnell.json'


export default {
  components: {
    pageHeading
  },
  data: () =>({page})
}
</script>
