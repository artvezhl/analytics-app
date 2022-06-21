<template>
    <v-dialog
      transition="dialog-top-transition"
      width="600"
      v-model="$store.state.isDialogOpen"
      @click:outside="$store.commit('hideDialog')"
    >
      <v-card>
        <v-card-title>Ошибка</v-card-title>
        <v-card-text>{{ $store.state.errorMessage }}</v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
};
</script>

<style scoped>

</style>
