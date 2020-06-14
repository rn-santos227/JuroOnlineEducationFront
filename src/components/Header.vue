<template>
  <v-app-bar absolute prominent flat color="#3B84CD">
    <v-flex>
      <v-img
        alt="Vuetify Logo"
        class="shrink ma-6"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
    </v-flex>
    <v-flex>
      <v-row justify="end" class="ma-6">
        <v-text-field
          class="search_text"
          v-model="search"
          label="Search Here"
          single-line
          clearable
          solo
          flat
        ></v-text-field>
        <v-btn
          class="hidden-sm-and-down search_button"
          depressed
          large
          height="48px"
          color="#F8D766"
        >
          <h2><v-icon>mdi-36px mdi-magnify</v-icon></h2>
        </v-btn>
      </v-row>
    </v-flex>
    <v-col cols="5" align="end">
      <v-row justify="end">
        <v-btn text color="white" small>
          <v-icon class="ma-1">mdi-apps</v-icon>
          <span class="hidden-sm-and-down">App</span>
        </v-btn>
        <v-btn text color="white" small>
          <v-icon class="ma-1">mdi-account-group</v-icon>
          <span class="hidden-sm-and-down">Partner with Us</span>
        </v-btn>
        <v-btn text color="white" small>
          <v-icon class="ma-1">mdi-account-tie-voice</v-icon>
          <span class="hidden-sm-and-down">Customer Care</span>
        </v-btn>
      </v-row>
      <v-row justify="end"></v-row>
      <v-btn class="mr-3 ml-3 mt-4 white--text" color="#326FAB" large>
        <v-icon class="ma-2">mdi-account-circle</v-icon> Sign-In
      </v-btn>
    </v-col>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    search: ""
  })
};
</script>

<style scoped>
.search_text {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.search_button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
