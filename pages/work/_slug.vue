<template>
<main class="layout__main">
  <div class="layout__content layout__content--above-fold">
    <page-heading :caption="page.description" :image="page.titleImage"></page-heading>

    <line-snippet v-if="hasSnippetFor('Obstacle')" 
      :title="'Obstacle'" :copy="page.obstacle" :image-type="'egg'"></line-snippet>
    <line-snippet v-if="hasSnippetFor('Objective')" 
      :title="'Objective'" :copy="page.objective" :image-type="'shell'"></line-snippet>
    <line-snippet v-if="hasSnippetFor('Outcome')" 
      :title="'Outcome'" :copy="page.outcome" :image-type="'sandwich'"></line-snippet>
  </div>
</main>
</template>


<script>
import pageHeading from '~/components/PageHeading'
import LineSnippet from '~/components/LineSnippet'
import page from '~/static/content/work/burns-mcdonnell.json'


export default {
  components: {
    pageHeading,
    LineSnippet
  },
  data: () =>({page}),
  methods: {
    hasSnippetFor (section) {
      return this.$data.page[section.toLowerCase()] 
    }
  }
}
</script>
