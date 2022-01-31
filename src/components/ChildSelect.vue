<template>
  <div class="child-select">
    <v-select :items="items" label="Çocuk Sayısı"></v-select>
  </div>
</template>

<script>
export default {
  name: "ChildSelect",
  data: () => ({
    items: ["1", "2", "3", "4", "5"],
  }),
};
</script>

<style lang="scss" >
.v-text-field {
  &__details {
    display: none;
  }
}
</style>