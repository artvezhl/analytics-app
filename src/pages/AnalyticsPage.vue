<template>
  <v-container class="justify-center align-center fill-height">
    <h2>Analytics Page</h2>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
// eslint-disable-next-line import/no-cycle
import router from '@/router';

export default {
  computed: {
    ...mapState(['isLoggedIn']),
  },
  created() {
    if (!this.isLoggedIn) router.push('auth');
  },
  watch: {
    isLoggedIn(newValue) {
      if (newValue === false) router.push('auth');
    },
  },
};
</script>

<style scoped>

</style>
