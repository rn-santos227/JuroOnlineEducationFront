<template>
  <v-app-bar absolute prominent color="#3B84CD">
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
          class="search_button"
          depressed
          large
          height="48px"
          color="yellow"
        >
          <h2><v-icon>mdi-magnify</v-icon></h2>
        </v-btn>
      </v-row>
    </v-flex>
    <v-col cols="4" align="end">
      <v-row justify="end">
        <v-btn text color="white" large>
          <v-icon class="ma-2">mdi-apps</v-icon> App
        </v-btn>
        <v-btn text color="white" large>
          <v-icon class="ma-2">mdi-account-group</v-icon> Partner with Us
        </v-btn>
        <v-btn text color="white" large>
          <v-icon class="ma-2">mdi-account-tie-voice</v-icon> Customer Care
        </v-btn>
      </v-row>
      <v-row justify="end"></v-row>
      <v-btn class="mr-3 ml-3 mt-1 white--text" color="#326FAB" large>
        <v-icon class="ma-2">mdi-account-circle</v-icon> Sign-In
      </v-btn>
    </v-col>
  </v-app-bar>
</template>

<script>
export default {};
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
