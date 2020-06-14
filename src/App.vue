<template>
  <v-app class="background">
    <Header />
    <v-content>
      <v-row>
        <v-flex class="nav_con"><Navigation /></v-flex>
        <v-flex xs10>
          <v-fade-transition>
            <router-view />
          </v-fade-transition>
        </v-flex>
      </v-row>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

export default {
  name: "App",

  components: {
    Header,
    Navigation,
    Footer
  },

  data: () => ({
    miniFocus: true
  })
};
</script>

<style scoped>
.background {
  background-color: #f3f3f3;
}
</style>
