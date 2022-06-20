<template>
  <v-app>
    <Navbar />
    <router-view />
  </v-app>
</template>

<script>
import Navbar from '@/components/NavBar.vue';
import { API_KEY, API_URL } from '@/constants';

export default {
  name: 'App',
  components: {
    Navbar,
  },

  data: () => ({
    isAuthorized: false,
  }),
  methods: {
    getAuth(id) {
      this.axios.get(API_URL, {
        method: 'GET',
        headers: {
          'Api-Key': API_KEY,
          'Leadhit-Site-Id': id,
        },
      }).then((res) => {
        if (res.status === 200 && res.data.message === 'ok') {
          localStorage.setItem('leadhit-site-id', id);
          this.isAuthorized = true;
        }
      }).catch((e) => console.log(e));
    },
  },
  mounted() {
    const id = localStorage.getItem('leadhit-site-id');
    if (id) this.getAuth(id);
  },
};
</script>
