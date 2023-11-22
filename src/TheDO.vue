<template lang="pug">
div.blank
  navbar(templateName="The DO")
    select-template(slot="select" v-on:template-selected="handleTemplateSelect")
      optgroup(label="Stories")
        option(value="the-do-top-story") Top Story
        option(value="the-do-feature") Feature
        option(value="the-do-brief") Brief
      optgroup(label="Other parts")
        option(value="the-do-ad") Ad
        option(value="the-do-quote") Quote
        option(value="the-do-section-title") Section Title
        option(value="the-do-note") Note
        option(value="the-do-sponsored-content") Sponsored Content
        option(value="the-do-date" selected) Date
  transition(name="fade" appear mode="out-in")
    component(v-bind:is="currentTemplate" v-bind:current-template="currentTemplate")

  include ./views/includes/toast
</template>

<script>
import ad from './components/the-do/ad.vue';
import navbar from './components/navbar.vue';
import selectTemplate from './components/select-template.vue';
import topStory from './components/the-do/top-story.vue';
import brief from './components/the-do/brief.vue';
import feature from './components/the-do/feature.vue';
import quote from './components/the-do/quote.vue';
import sectionTitle from './components/the-do/section-title.vue';
import date from './components/the-do/date.vue';
import note from './components/the-do/note.vue';
import sponsoredContent from './components/the-do/sponsored-content.vue';

export default {
  name: 'the-do',

  components: {
    navbar: navbar,
    'select-template': selectTemplate,
    'the-do-top-story': topStory,
    'the-do-brief': brief,
    'the-do-feature': feature,
    'the-do-quote': quote,
    'the-do-section-title': sectionTitle,
    'the-do-date': date,
    'the-do-note': note,
    'the-do-sponsored-content': sponsoredContent,
    'the-do-ad': ad,
  },

  data: function() {
    return {
      currentTemplate: 'the-do-date',
    };
  },

  methods: {
    handleTemplateSelect: function(template) {
      this.currentTemplate = template;
    },

    toastClose: function() {
      document.getElementById('toastContainer').classList.remove('active');
    },
  },
};
</script>
