<template lang="pug">

  workspace
    include ./../../views/the-do/forms/article
    include ./../../views/the-do/renders/brief
    

</template>

<script>

  import workspace from './../workspace.vue';
  import mixins from './../../mixins';

  export default {
    
    name: 'the-do-brief',

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
        imageUrl: 'https://picsum.photos/134/89',
        ruleBelow: true,
        ruleAbove: false,
        hasRules: true,
        buttonText: 'Read now'
      };
    },

  }
</script>
