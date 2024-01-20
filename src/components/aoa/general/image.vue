<template lang="pug">

  workspace
    include ./../../../views/aoa/general/forms/image
    include ./../../../views/aoa/general/renders/image

</template>

<script>
  import { debounce } from 'lodash-es';
  import workspace from './../../workspace.vue';
  import mixins from './../../../mixins';

  export default {
    name: 'aoa-general-image',

    components: {
      'workspace': workspace,
    },

    mixins: [mixins],

    mounted() { },

    methods: {
      update: debounce(function(evt) {
        this.input = evt.target.value;
      }, 100),


      copy() {
        this.copyHtml();
      },

      copyTextVersion() {
        // TODO
        return;
      }
    },

    computed: {
    },

    data: function() {
      return {
        imageUrl: 'https://resources.osteopathic.org/instructions_528',
        imageWidth: '528',
        altText: '',
      }
    },

  }
  
</script>
<style>
  #rendered > table {
    margin: 0 auto;
  }
</style>



