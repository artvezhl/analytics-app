<template>
  <v-container class="justify-center align-center fill-height">
    <AppInput @getUser="getUserRequest" :errorId="isError" />
    <ErrorDialog />
  </v-container>
</template>

<script>
import AppInput from '@/components/AppInput.vue';
import ErrorDialog from '@/components/ErrorDialog.vue';
// eslint-disable-next-line import/no-cycle
import router from '@/router';
import { mapState } from 'vuex';

export default {
  name: 'AuthPage',
  data() {
    return {
      isError: false,
    };
  },
  components: {
    AppInput,
    ErrorDialog,
  },
  computed: {
    ...mapState(['isLoggedIn']),
  },
  methods: {
    getUserRequest(id) {
      this.$store.dispatch('fetchAuth', id);
    },
  },
  created() {
    if (this.$store.state.isLoggedIn) {
      router.push('analytics');
    }
  },
  watch: {
    isLoggedIn(newValue) {
      if (newValue === true) router.push('analytics');
    },
  },
};
</script>

<style scoped>

</style>
