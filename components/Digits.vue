<template>
  <div class="digits">
    <p class="digits__entry fonts__small">
      <span class="digits__prefix">E</span> <a class="digits__contact" :href="'mailto:' + contactInfo.email">{{contactInfo.email}}</a>
    </p>
    <p class="digits__entry fonts__small">
      <span class="digits__prefix">P</span> <a class="digits__contact digits__contact--dark-link" :href="'tel:' + contactInfo.phone">{{contactInfo.phone}}</a>
    </p>
    <address class="digits__entry fonts__small">
      <span class="digits__prefix">A</span> <a class="digits__contact digits__contact--dark-link" target="_blank" :href="addressLink" v-html="marked(contactInfo.address)"></a>
    </address>
  </div>
</template>


<script>
import marked from 'marked'

export default {
  props: { contactInfo: Object },
  computed: {
    addressLink () {
      return this.contactInfo.address
        ? `https://maps.google.com?q=${this.contactInfo.address.split('\n').join(' ')}`
        : ''
    }
  },
  methods: {
    marked
  }
}
</script>
