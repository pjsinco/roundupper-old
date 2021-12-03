<template lang="pug">

  workspace
    include ./../../views/the-do/forms/sponsored-content
    include ./../../views/the-do/renders/sponsored-content

</template>

<script>
import workspace from './../workspace.vue';
import mixins from './../../mixins';

export default {
  name: 'the-do-sponsored-content',

  mixins: [mixins],

  components: {
    workspace,
  },

  methods: {
    copy: function() {
      this.copyHtml();
    },

    copyTextVersion: function() {
      const text = [
        this.headline.toUpperCase(),
        '------------------------------------' +
          '------------------------------------',
        this.excerpt,
        this.link,
        '',
      ].join('\n');

      return this.copyText(text);
    },
  },

  data() {
    return {
      headline: 'Lorem headline',
      excerpt: 'Lorem excerpt',
      link: '',
      imageUrl: 'https://picsum.photos/320/213',
      ruleBelow: true,
      ruleAbove: false,
      hasRules: true,
    };
  },
};
</script>

<style scoped></style>
