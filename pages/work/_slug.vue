<template>
<main class="layout__main">
  <div class="layout__content layout__content--above-fold">
    <div class="layout__hide-edges">
      <featured-screenshot :image="page.images[0]" :caption="page.imageCaption" ></featured-screenshot>

      <page-heading :caption="page.description" :image="page.titleImage"></page-heading>
      
      <line-snippet v-if="hasSnippetFor('Obstacle')" 
        :title="'Obstacle'" :copy="page.obstacle" :image-type="'egg'"></line-snippet>
      <line-snippet v-if="hasSnippetFor('Objective')" 
        :title="'Objective'" :copy="page.objective" :image-type="'shell'"></line-snippet>
      <line-snippet v-if="hasSnippetFor('Outcome')" 
        :title="'Outcome'" :copy="page.outcome" :image-type="'sandwich'"></line-snippet>

      <link-callout :link-content="page.siteLink"></link-callout>

      <pagination-paddles :left-link="leftLink" :right-link="rightLink"></pagination-paddles>
      
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
import work from '~/static/content/work.json'


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
    return {
      page,
      slug: route.params.slug,
      work
    }
  },
  computed: {
    indexOfLink () {
      return this.work.links
        .map((link, i) => ({ link, i }))
        .filter(({ link }) => link.url === '/work/' + this.slug)
        .map(({ i }) => i)[0] || 0
    },
    leftLink () {
      return this.work.links[(this.indexOfLink - 1 + this.work.links.length) % this.work.links.length]
    },
    rightLink () {
      return this.work.links[(this.indexOfLink + 1 + this.work.links.length) % this.work.links.length]
    }
  },
  methods: {
    hasSnippetFor (section) {
      return this.$data.page[section.toLowerCase()] 
    }
  }
}
</script>
