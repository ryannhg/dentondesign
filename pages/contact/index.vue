<template>
  <div class="layout__main layout__main--no-scroll">
    <parallax-background :image="page.backgroundImage.src" :anchor-image="'bottom'"></parallax-background>
    <div class="layout__content layout__content--above-fold layout__content--bottom-title ">
      <page-heading :caption="page.caption" :image="page.titleImage" :anchor-title="'bottom'"></page-heading>
      <digits :contact-info="contactInfo" ></digits>
    </div>
  </div>
</template>

<script>
import ParallaxBackground from '~/components/ParallaxBackground'
import PageHeading from '~/components/PageHeading'
import Digits from '~/components/Digits'
import page from '~/static/content/contact.json'
import Page from '~/plugins/Page'

export default {
  mixins: [ Page ],
  components: {
    ParallaxBackground,
    PageHeading,
    Digits
  },
  data: () => ({
    page
  }),
  computed: {
    contactInfo () {
      return {
        email: this.page.email,
        phone: this.page.phone,
        address: this.page.address
      }
    }
  }
}
</script>
