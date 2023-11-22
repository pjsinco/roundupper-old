<template lang="pug">

  workspace
    include ./../../views/the-do/forms/ad
    include ./../../views/the-do/renders/ad
    
</template>

<script>

  import workspace from './../workspace.vue';
  import mixins from './../../mixins';

  export default {
    name: 'the-do-ad',

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
          this.altText,
          '------------------------------------' +
            '------------------------------------',
          this.adUrl,
        ].join('\n');

        return this.copyText(text);
      },

    },

    data: function() {
      return {
        adUrl: '',
        adSrc: 'https://picsum.photos/300/250',
        ruleBelow: true,
        hasRules: true,
        altText: 'ADVERTISEMENT - ',
      };
    },
  }

</script>

