<template>
  <v-container>
    <v-row>
      <Cards />
      <SearchFilter />
      <div class="selecting-area">
        <DatePicker />
        <div class="guest-select">
          <AdultSelect />
          <ChildSelect />
        </div>
      </div>
    </v-row>

    <v-footer class="py-4 mt-8" padless>
      <v-col class="text-right" cols="12">
        <v-btn depressed color="primary"> Kaydet ve Devam Et </v-btn>
      </v-col>
    </v-footer>
  </v-container>
</template>

<script>
import Cards from "./Cards";
import SearchFilter from "./SearchFilter";
import DatePicker from "./DatePicker";
import AdultSelect from "./AdultSelect.vue";
import ChildSelect from "./ChildSelect.vue";

export default {
  name: "FirstStep",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
  components: {
    Cards,
    SearchFilter,
    DatePicker,
    AdultSelect,
    ChildSelect,
  },
};
</script>


<style lang="scss" scoped>
.selecting-area {
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: space-around;
}
.guest-select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
</style>
