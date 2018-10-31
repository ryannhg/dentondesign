<template>
  <div class="tabs">
    <!-- <div class="tabs__navigation wrapper wrapper--narrow">
      <button class="tabs__navigation">{{approach.label}}</button>
      <button class="tabs__navigation">{{timeline.label}}</button>
    </div> -->

    <div class="tabs__panel">
      <div class="wrapper wrapper--narrow">
        <div class="richtext richtext--color-white" v-html="marked(approach.content)"></div>
      </div>
    </div>

    <div class="tabs__panel" style="padding-top: 20vh">
      
      <timeline-snippet
        :is-brown="true"
        :years="timeline.brownEvent.years"
        :title="timeline.brownEvent.title"
        :caption="timeline.brownEvent.content">
      </timeline-snippet>
      <timeline-snippet 
          v-for="(snippet, index) in timeline.events"
        :years="snippet.years"
        :title="snippet.title"
        :caption="snippet.content"
        :key="'snippet'+index"
          ></timeline-snippet>
    </div>

  </div>
</template>

<script>
import TimelineSnippet from '~/components/TimelineSnippet'
import marked from 'marked'

export default {
  components: {
    TimelineSnippet
  },
  props: {
    approach: Object,
    timeline: Object,
  },
  methods: {
    marked
  }
}
</script>
