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
      <router-link class="link" to="/auth">
        <v-btn outlined class="ml-3">
          Auth
        </v-btn>
      </router-link>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
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
