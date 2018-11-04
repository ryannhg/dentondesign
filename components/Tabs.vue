<template>
  <div class="tabs">
    <div class="tabs__navigation wrapper wrapper--narrow">
      <button class="tabs__navbutton" :class="{'tabs__navbutton--is-active': isActiveTab(0)}" @click.prevent="updateTab(0)"><span class="tabs__navbutton-label">{{approach.label}}</span></button>
      <button class="tabs__navbutton" :class="{'tabs__navbutton--is-active': isActiveTab(1)}" @click.prevent="updateTab(1)"><span class="tabs__navbutton-label">{{timeline.label}}</span></button>
    </div>
    
    <div class="tabs__panels">
      <transition name="tabs" mode="out-in" tag="div">
         <div  v-if="isActiveTab(0)" class="tabs__panel" key="panel1" >
          <div class="wrapper wrapper--narrow">
            <div class="richtext richtext--color-white" v-html="marked(approach.content)"></div>
            <closing-callout :callout-content="timeline.contact"></closing-callout>
          </div>
        </div>
        <div v-else class="tabs__panel"  key="panel2" >
          <timeline-snippet
            :is-brown="true"
            :years="timeline.brownEvent.years"
            :title="timeline.brownEvent.title"
            :caption="timeline.brownEvent.content"
            :top="true">
          </timeline-snippet>
          <timeline-snippet 
            v-for="(snippet, index) in timeline.events"
            :top="index === 0"
            :years="snippet.years"
            :title="snippet.title"
            :caption="snippet.content"
            :key="'snippet'+index"
              ></timeline-snippet>
            
          <closing-callout :callout-content="timeline.contact" :with-border="true"></closing-callout>
            
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import TimelineSnippet from '~/components/TimelineSnippet'
import ClosingCallout from '~/components/ClosingCallout'
import marked from 'marked'

export default {
  components: {
    TimelineSnippet,
    ClosingCallout
  },
  props: {
    approach: Object,
    timeline: Object,
  },
  data: () => ({
    activePanel: 0
  }),
  methods: {
    marked,
    updateTab (tabID) {
      this.activePanel = tabID
    },
    isActiveTab (tabID) {
      return tabID === this.activePanel
    }
  }
}
</script>
