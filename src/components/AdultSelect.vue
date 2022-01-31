<template>
  <div class="adult-select">
    <v-select
      class="white-text"
      :items="items"
      label="Yetişkin Sayısı"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "AdultSelect",
  data: () => ({
    items: ["1", "2", "3", "4", "5"],
  }),
};
</script>