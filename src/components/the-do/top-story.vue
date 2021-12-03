<template lang="pug">
  workspace
    include ./../../views/the-do/forms/article
    include ./../../views/the-do/renders/top-story
</template>

<script>

  import workspace from './../workspace.vue';
  import mixins from './../../mixins';

  export default {
    
    name: 'the-do-top-story',

    components: {
      'workspace': workspace,
    },

    mixins: [mixins],

    methods: {
      copy: function() {
        this.copyHtml();
      },

      copyTextVersion: function() {

        const text = [
          this.kicker,
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

    data: function() {

      return {
        kicker: 'lorem kicker',
        headline: 'Lorem headline',
        excerpt: 'Lorem excerpt',
        link: '',
        imageUrl: 'https://picsum.photos/480/320',
        hasRules: false,
        buttonText: 'Read now'
      };
    },
  }
</script>
