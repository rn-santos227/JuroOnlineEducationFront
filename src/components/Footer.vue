<template>
  <v-footer color="#2c6195" dark>
    <v-flex cols="1">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="app_download shrink mr-2 footer-log"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
    </v-flex>
    <v-flex cols="2">
      <div v-for="link in links" :key="link" class="my-2">
        <v-btn color="white" rounded text small> {{ link }} </v-btn>
      </div>
    </v-flex>
    <v-flex cols="3">
      <v-flex class="ml-3 mt-3">
        <h2 color="white">Download Juro Online Education</h2>
      </v-flex>
      <v-flex>
        <v-btn class="app_download ma-3" color="black" large>
          <v-icon class="pr-6">mdi-36px mdi-apple</v-icon>
          <span style="white-space: normal;">
            Get it on<br />
            <h3>App Store</h3>
          </span>
        </v-btn>
        <v-btn class="app_download ma-3" color="black" large>
          <v-icon class="pr-6">mdi-36px mdi-google-play</v-icon>
          <span style="white-space: normal;">
            Get it on<br />
            <h3>Google Play</h3>
          </span>
        </v-btn>
      </v-flex>
      <v-flex>
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mr-6 mb-3 white--text"
            icon
          >
            <v-icon size="32px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
      </v-flex>
    </v-flex>
    <v-flex cols="6">
      <v-card-text class="copyright white--text" align="end">
        &copy; Juro Online Education {{ new Date().getFullYear() }}
      </v-card-text>
    </v-flex>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Terms and Condition", "Privacy Policy", "FAQ"],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"]
  }),
  methods: {}
};
</script>

<style>
.content {
  margin: 10px;
}

.app_download {
  margin-left: auto;
  width: 200px;
}

.copyright {
  margin-top: 140px;
}

@media screen and (max-width: 600px) {
  .app_download {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
