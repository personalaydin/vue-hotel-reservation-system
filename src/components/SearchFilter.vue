<template>
  <div class="search-filter">
    <v-autocomplete
      v-model="value"
      :items="items"
      dense
      outlined
      label="Rezervasyon yapmak istediğiniz oteli seçiniz."
    ></v-autocomplete>
  </div>
</template>

<script>
export default {
  name: "SearchFilter",
  async created() {
    await this.getPostsAsync();
  },

  data: () => ({
    items: [],
    values: ["foo", "bar"],
    value: null,
  }),
  methods: {
    async getPostsAsync() {
      try {
        const response = await this.$axios.get("/hotels");

        this.items = response.data.flatMap((x) => x.hotel_name);
      } catch (error) {
        this.errors.push(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-filter {
  width: 100%;
  padding: 1rem 0;
}
</style>