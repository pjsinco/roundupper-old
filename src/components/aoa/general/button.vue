<template lang="pug">

  workspace
    include ./../../../views/aoa/general/forms/button
    include ./../../../views/aoa/general/renders/button

</template>

<script>
  import { debounce } from 'lodash-es';
  import workspace from './../../workspace.vue';
  import mixins from './../../../mixins';

  export default {
    name: 'aoa-general-button',

    components: {
      'workspace': workspace,
    },

    mixins: [mixins],

    mounted() {
    },

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
        text: 'Learn more',
        link: '',
      }
    },

  }
  
</script>
<style>
</style>

