<template>
  <v-container fluid>
    <v-app-bar
      elevation="4"
      shaped
      dark
    >
      <v-app-bar-title class="text-h4">Analytics App</v-app-bar-title>
      <v-spacer />
      <router-link class="link" to="/">
        <v-btn outlined class="ml-3">
          Main
        </v-btn>
      </router-link>
      <router-link class="link" to="/analytics">
        <v-btn outlined class="ml-3">
          Analytics
        </v-btn>
      </router-link>
      <router-link v-if="!isLoggedIn" class="link" to="/auth">
        <v-btn outlined class="ml-3">
          Auth
        </v-btn>
      </router-link>
      <v-btn
        v-else
        outlined
        class="ml-3"
        @click="logOut"
      >LogOut
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['setUserStatus']),
    logOut() {
      this.setUserStatus(false);
      localStorage.removeItem('leadhit-site-id');
    },
  },
  computed: {
    ...mapState(['isLoggedIn']),
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: white;
}
.link:hover {
  text-decoration: underline;
}
</style>
