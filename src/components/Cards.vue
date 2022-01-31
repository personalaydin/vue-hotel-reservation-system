<template>
  <v-container>
    <v-row class="text-center">
      <div class="cards">
        <div class="cards-items">
          <DateSelectCard />
        </div>
        <div class="cards-items">
          <RoomSelectCard />
        </div>
        <div class="cards-items">
          <PaymentSelectCard />
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import DateSelectCard from "./DateSelectCard.vue";
import RoomSelectCard from "./RoomSelectCard.vue";
import PaymentSelectCard from "./PaymentSelectCard.vue";

export default {
  name: "Cards",
  components: {
    DateSelectCard,
    RoomSelectCard,
    PaymentSelectCard,
  },
};
</script>

<style lang="scss">
.cards {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0.5rem 0;
  margin-top: 1rem;
  background-color: #d3d3d3;

  .cards-items {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    .v-list-item {
      &__title {
        color: #40405a;
        white-space: normal;
        font-weight: bold;
      }
    }
  }
}
</style>