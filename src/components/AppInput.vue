<template>
  <v-container class="input">
    <h2>LeadHit</h2>
    <v-text-field
      label="Site id"
      :rules="rules"
      hide-details="auto"
      @update:error="setErrorValue"
      v-model="value"
    ></v-text-field>
    <v-btn
      class="mt-4"
      :disabled="isError"
      @click="onBtnClick"
    >Button</v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    value: '',
    isError: true,
    rules: [
      (value) => !!value || 'Обязательное поле',
      (value) => (value && value.length >= 24) || 'id сайта должен содержать 24 символа',
    ],
  }),
  methods: {
    setErrorValue(value) {
      this.isError = value;
    },
    onBtnClick() {
      this.$emit('getUser', this.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 40%;
}
</style>
