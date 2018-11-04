<template>
  <div class="digits">
    <p class="digits__entry">
      <span class="digits__prefix">E</span> <a class="digits__contact" :href="'mailto:' + contactInfo.email">{{contactInfo.email}}</a>
    </p>
    <p class="digits__entry">
      <span class="digits__prefix">P</span> <a class="digits__contact digits__contact--dark-text" :href="'mailto:' + contactInfo.phone">{{contactInfo.phone}}</a>
    </p>
    <address class="digits__entry">
      <span class="digits__prefix">E</span> <span class="digits__contact">{{contactInfo.address}}</span>
    </address>
  </div>
</template>


<script>

export default {
  props: { contactInfo: Object }
}
</script>
