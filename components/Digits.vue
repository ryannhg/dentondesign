<template>
  <div class="digits">
    <p class="digits__entry fonts__small">
      <span class="digits__prefix">Email</span> <a class="digits__contact" :href="'mailto:' + contactInfo.email">{{contactInfo.email}}</a>
    </p>
    <p class="digits__entry fonts__small">
      <span class="digits__prefix">Phone</span> <a class="digits__contact digits__contact--dark-link" :href="'tel:' + contactInfo.phone">{{contactInfo.phone}}</a>
    </p>
    <address v-show="contactInfo.address" class="digits__entry fonts__small">
      <span class="digits__prefix">Address</span> <a class="digits__contact digits__contact--dark-link" target="_blank" :href="addressLink" v-html="marked(contactInfo.address)"></a>
    </address>
    <p class="digits__entry fonts__small" v-show="hasSocialLinks">
      <span class="digits__prefix" v-text="contactInfo.connectLabel"></span>
      <a class="digits__contact digits__social-link" v-show="contactInfo.linkedin" :href="contactInfo.linkedin" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      <a class="digits__contact digits__social-link" v-show="contactInfo.dribbble" :href="contactInfo.dribbble" target="_blank"><i class="fab fa-dribbble"></i></a>
      <a class="digits__contact digits__social-link" v-show="contactInfo.behance" :href="contactInfo.behance" target="_blank"><i class="fab fa-behance"></i></a>
      <a class="digits__contact digits__social-link" v-show="contactInfo.resume" :href="contactInfo.resume" target="_blank"><i class="far fa-file"></i></a>
    </p>
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
    },
    hasSocialLinks () {
      return this.contactInfo.connectLabel && this.contactInfo.linkedin || this.contactInfo.dribbble || this.contactInfo.behance || this.contactInfo.resume
    }
  },
  methods: {
    marked
  }
}
</script>
