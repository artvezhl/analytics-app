<template>
  <v-app>
    <Navbar />
    <router-view />
  </v-app>
</template>

<script>
import Navbar from '@/components/NavBar.vue';
// import { API_KEY, API_URL } from '@/constants';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  mounted() {
    const id = localStorage.getItem('leadhit-site-id');
    if (id) this.$store.dispatch('fetchAuth', id);
  },
};
</script>
