<template>
<main class="layout__main">
  <div class="layout__content layout__content--above-fold">
    <div class="layout__hide-edges">
      <featured-screenshot :image="page.images[0]" :caption="page.imageCaption" ></featured-screenshot>

      <page-heading :caption="page.description" :image="page.titleImage"></page-heading>

      <div class="wrapper wrapper--narrow richtext">
        <p>Officia et deserunt proident esse et cupidatat exercitation. Reprehenderit consequat commodo consequat culpa culpa ullamco aliqua esse id aliqua dolore mollit adipisicing. Aliqua ipsum aliquip pariatur sint consequat non sint ut do anim. Cupidatat cupidatat sint amet quis consequat sunt.</p>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <ul>
          <li>Magna mollit quis adipisicing deserunt reprehenderit aliqua eiusmod elit esse ex. Nulla aliqua dolore aliqua tempor minim ullamco sunt laborum anim. Dolore proident do nisi sint aliqua est culpa eiusmod et tempor sint exercitation. Commodo adipisicing cupidatat in veniam qui nulla consequat aliqua fugiat consequat proident ut est. Amet aliquip ipsum duis ut ipsum. Voluptate fugiat nostrud laboris eiusmod nulla aliquip sit non nostrud id magna. Aliquip enim dolor consectetur sint anim officia qui sunt.</li>
          <li>Occaecat duis eu esse magna Lorem proident cillum ea nostrud non tempor culpa cupidatat ullamco. Dolore non magna pariatur reprehenderit incididunt pariatur nisi ea enim qui dolor. Ea voluptate sit do culpa fugiat dolor culpa sit ad. Laborum mollit dolor eiusmod aliqua sit laboris cupidatat aliquip nulla non sit culpa anim aliqua. Sunt est aliquip mollit excepteur cillum laborum consectetur est anim non pariatur. Pariatur pariatur commodo proident duis mollit culpa qui velit duis cupidatat consequat ea. Ullamco eu excepteur proident nostrud incididunt incididunt amet proident eiusmod consectetur incididunt reprehenderit.</li>
          <li>Ex consectetur consequat culpa commodo et adipisicing consectetur eiusmod. Dolore et nulla culpa fugiat eu Lorem do aliqua velit velit pariatur commodo pariatur. Duis minim laborum nisi in in id. Nisi deserunt eu dolor aliqua aliquip fugiat elit. Aliquip et consequat ut dolore ullamco sit elit non commodo officia nulla incididunt incididunt. Labore adipisicing Lorem minim nostrud consectetur laboris pariatur mollit Lorem id do.</li>
          <li>Dolore ad sit mollit voluptate irure anim ut. Nostrud adipisicing amet nulla commodo aliquip sint consequat. Quis velit id qui id amet. Dolore occaecat cillum voluptate ipsum veniam sint aliqua cillum nostrud non. Esse ad dolore aliqua quis officia est nisi sint laborum cupidatat pariatur ad fugiat do. Esse aliqua deserunt tempor laborum laborum ex qui nulla duis cillum.</li>
        </ul>
      </div>
      
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
