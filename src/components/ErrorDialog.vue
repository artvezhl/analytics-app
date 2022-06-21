<template>
    <v-dialog
      transition="dialog-top-transition"
      width="600"
      v-model="idDialogVisible"
    >
      <v-card>
        <v-card-title>Ошибка</v-card-title>
        <v-card-text>Передан неверный ID</v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      idDialogVisible: false,
    };
  },
  created() {
    this.idDialogVisible = this.value;
  },
  watch: {
    value(newValue) {
      this.idDialogVisible = newValue;
    },
    idDialogVisible(newValue) {
      this.$emit('input', newValue);
    },
  },
};
</script>

<style scoped>

</style>
