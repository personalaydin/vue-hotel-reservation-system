<template>
  <div class="card-items">
    <div class="room-type-title">
      <v-card-title> Oda Tipi Seçimi</v-card-title>
    </div>
    <div class="card-contents">
      <v-card class="mx-auto" max-width="344">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>

        <div class="content-top">
          <v-card-title> Standard</v-card-title>

          <v-card-title> 5900TL </v-card-title>
        </div>

        <div class="content-bottom">
          <v-card-subtitle> 5 Gün </v-card-subtitle>
          <v-card-subtitle> 1 Yetişkin </v-card-subtitle>
        </div>
      </v-card>
      <v-card class="mx-auto" max-width="344">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>

        <div class="content-top">
          <v-card-title> Deluxe</v-card-title>

          <v-card-title> 5900TL </v-card-title>
        </div>

        <div class="content-bottom">
          <v-card-subtitle> 5 Gün </v-card-subtitle>
          <v-card-subtitle> 1 Yetişkin </v-card-subtitle>
        </div>
      </v-card>
      <v-card class="mx-auto" max-width="344">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>

        <div class="content-top">
          <v-card-title> Suit</v-card-title>

          <v-card-title> 5900TL </v-card-title>
        </div>

        <div class="content-bottom">
          <v-card-subtitle> 5 Gün </v-card-subtitle>
          <v-card-subtitle> 1 Yetişkin </v-card-subtitle>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomCards",

  data: () => ({
    show: false,
  }),
};
</script>

<style lang="scss">
.card-items {
  margin: 0 auto;
  gap: 1rem;
  padding-top: 1rem;

  .card-contents {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    gap: 1rem;
    padding-top: 1rem;
  }
}
.content-top {
  display: flex;
  justify-content: space-between;
}
.content-bottom {
  .v-card {
    &__subtitle {
      padding: 0 1rem;
    }
  }
}
</style>