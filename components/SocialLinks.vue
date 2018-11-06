<template>
<div class="social-links" :class="withLabelClass">
  <div v-if="label !== ''" class="social-links__label">{{label}}</div>
  <ul class="social-links__list" :class="[directionClass]" >
		<li v-for="(social, index) in socialOptions" class="social-links__item" :key="'socialid'+index ">
			<a target="_blank"
        rel="noopener"
        :class="'social-links__icon icon-'+ social.icon"
        :title="social.label"
        :href="relativeUrl(social.url)"></a>
		</li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    socialOptions: {type: Array, default: () => ([])},
    label: {type: String, default: ''},
    direction: {type: String},
    url: String
  },
  computed: {
    directionClass () {
      return (this.direction === 'horizontal') 
        ? 'social-links__list--horizontal'
        : false
    },
    withLabelClass () {
      return (this.label !== '')
        ? 'social-links--with-label'
        : false
    }
  },
  methods: {
    relativeUrl (url) {
      return url.split('{{URL}}').join(this.url)
    }
  }
}
</script>