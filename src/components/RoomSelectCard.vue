<template>
  <v-col xs="12" sm="6" md="4">
    <v-list-item-avatar
      loading
      class="rounded-circle"
      tile
      size="50"
      color="grey"
    ></v-list-item-avatar>
    <v-list-item-title class="text-caption mb-1">
      {{ title.dateSelectTitle }}
    </v-list-item-title>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    title: {
      type: String,
      dateSelectTitle: "Otel ve Tarih Seçimi",
    },
  }),
};
</script>