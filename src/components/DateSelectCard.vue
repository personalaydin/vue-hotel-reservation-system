<template>
  <v-col xs="12" sm="6" md="4">
    <v-list-item-avatar
      class="rounded-circle"
      tile
      size="50"
      color="grey"
    ></v-list-item-avatar>
    <v-list-item-title class="text-caption mb-1">
      {{ title.roomTypeSelectTitle }}
    </v-list-item-title>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    title: {
      type: String,
      roomTypeSelectTitle: "Oda Tipi ve Manzara Seçimi",
    },
  }),
};
</script>