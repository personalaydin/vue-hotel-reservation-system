<template>
  <div>
    <v-row>
      <Cards />
    </v-row>
    <v-row>
      <RoomTypeCards />
    </v-row>
  </div>
</template>

<script>
import Cards from "../components/Cards";
import RoomTypeCards from "../components/RoomTypeCards";

export default {
  name: "Second",

  components: {
    Cards,
    RoomTypeCards,
  },
};
</script>

