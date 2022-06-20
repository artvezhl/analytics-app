<template>
  <v-container class="justify-center align-center fill-height">
    <AppInput @getUser="getUserRequest" />
  </v-container>
</template>

<script>
import AppInput from '@/components/AppInput.vue';

export default {
  components: {
    AppInput,
  },
  methods: {
    getUserRequest(id) {
      console.log('AuthPageId', id);
    },
  },
};
</script>

<style scoped>

</style>
