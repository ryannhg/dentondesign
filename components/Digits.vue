<template>
  <div class="digits">
    <p class="digits__entry fonts__small">
      <span class="digits__prefix">E</span> <a class="digits__contact" :href="'mailto:' + contactInfo.email">{{contactInfo.email}}</a>
    </p>
    <p class="digits__entry fonts__small">
      <span class="digits__prefix">P</span> <a class="digits__contact digits__contact--dark-link" :href="'mailto:' + contactInfo.phone">{{contactInfo.phone}}</a>
    </p>
    <address class="digits__entry fonts__small">
      <span class="digits__prefix">E</span> <div class="digits__contact"  v-html="marked(contactInfo.address)"></div>
    </address>
  </div>
</template>


<script>
import marked from 'marked'

export default {
  props: { contactInfo: Object },
  methods: {
    marked
  }
}
</script>
