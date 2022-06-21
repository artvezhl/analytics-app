<template>
  <v-container class="justify-center align-center fill-height">
    <AppInput @getUser="getUserRequest" :errorId="isError" />
    <ErrorDialog v-model="isError" />
  </v-container>
</template>

<script>
import AppInput from '@/components/AppInput.vue';
import ErrorDialog from '@/components/ErrorDialog.vue';
import { API_KEY, API_URL } from '@/constants';
// eslint-disable-next-line import/no-cycle
import router from '@/router';

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
  methods: {
    getUserRequest(id) {
      this.getAuth(id);
    },
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
          router.push('analytics');
          // this.isAuthorized = true;
        } else {
          console.log('false');
        }
      }).catch((error) => {
        this.isError = true;
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>

</style>
