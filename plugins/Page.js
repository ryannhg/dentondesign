export default {
  head () {
    const { title, description, image } = this.meta
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: title },
        { name: 'og:description', content: description },
        { name: 'og:image', content: 'https://www.dentondesign.com' + image }
      ]
    }
  },
  computed: {
    meta () {
      return this.page.meta || console.warn('No meta tags!') || {}
    }
  }
}
