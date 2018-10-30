<template>
<main class="layout__main">
  <div class="layout__content layout__content--above-fold">
    <div class="layout__hide-edges">
      <featured-screenshot :image="'/images/pages/work/burns-mcdonnell/featured.png'" :caption="page.imageCaption" ></featured-screenshot>

      <page-heading :caption="page.description" :image="page.titleImage"></page-heading>
      
      <line-snippet v-if="hasSnippetFor('Obstacle')" 
        :title="'Obstacle'" :copy="page.obstacle" :image-type="'egg'"></line-snippet>
      <line-snippet v-if="hasSnippetFor('Objective')" 
        :title="'Objective'" :copy="page.objective" :image-type="'shell'"></line-snippet>
      <line-snippet v-if="hasSnippetFor('Outcome')" 
        :title="'Outcome'" :copy="page.outcome" :image-type="'sandwich'"></line-snippet>

      <link-callout :link-content="page.siteLink"></link-callout>

      <pagination-paddles :left-link='{label: "BURNS MCDONNELL", url: "/works/burns-mcdonnell"}' :right-link='{label: "kirkland & Ellis", url: "/works/sidley-austin"}'></pagination-paddles>
      
    </div>
    
  </div>
</main>
</template>


<script>
import pageHeading from '~/components/PageHeading'
import FeaturedScreenshot from '~/components/FeaturedScreenshot'
import LineSnippet from '~/components/LineSnippet'
import LinkCallout from '~/components/LinkCallout'
import PaginationPaddles from '~/components/PaginationPaddles'
import page from '~/static/content/work/burns-mcdonnell.json'


export default {
  components: {
    pageHeading,
    LineSnippet,
    LinkCallout,
    FeaturedScreenshot,
    PaginationPaddles
  },
  asyncData ({ route }) {
    const page = require(`~/static/content/work/${route.params.slug}.json`)
    return { page }
  },
  methods: {
    hasSnippetFor (section) {
      return this.$data.page[section.toLowerCase()] 
    }
  }
}
</script>
