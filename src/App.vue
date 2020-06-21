<template>
  <v-app class="background">
    <Header />
    <v-content>
      <v-row>
        <v-flex xs11>
          <v-fade-transition>
            <router-view />
          </v-fade-transition>
        </v-flex>
        <v-flex class="nav_con"><Navigation /></v-flex>
      </v-row>
    </v-content>
    <Footer />
    <Login />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Login from "./components/Login";

export default {
  name: "App",

  components: {
    Header,
    Navigation,
    Footer,
    Login
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

.nav_con {
  position: absolute;
  display: flex;
  flex-flow: column;
  height: 100%;
}
</style>
