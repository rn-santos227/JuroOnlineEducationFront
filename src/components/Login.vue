<template>
  <v-dialog v-model="login_show" persistent max-width="500px">
    <v-card>
      <v-card-title color="#3B84CD">
        <span class="headline">LOGIN</span>
        <v-spacer></v-spacer>
        <v-btn @click="login_show = false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container fill-height fluid>
          <v-col cols="12">
            <v-text-field
              v-model="username"
              :error-messages="usernameError"
              label="Username"
              prepend-inner-icon="mdi-account"
              required
              @input="$v.username.$touch()"
              @blur="$v.username.$touch()"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="password"
              :error-messages="passwordError"
              label="Password"
              type="password"
              prepend-inner-icon="mdi-lock"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            ></v-text-field>
          </v-col>
          <v-col align="center" justify="center" cols="12">
            Or Sign-in using.
          </v-col>
          <v-row align="center" justify="center">
            <v-btn color="primary" x-large icon>
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn color="primary" x-large icon>
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn color="primary" x-large icon>
              <v-icon>mdi-google-plus</v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-flex class="ma-2" xs4>
          <v-btn color="#F8D766" @click.prevent="signup()" large block>
            SIGN UP
          </v-btn>
        </v-flex>
        <v-flex class="ma-2" xs4>
          <v-btn
            class="white--text"
            color="#3B84CD"
            @click.prevent="signup()"
            large
            block
            >SIGN IN</v-btn
          >
        </v-flex>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    username: { required },
    password: { required }
  },
  data: () => ({
    username: "",
    password: "",
    login_show: false
  }),
  methods: {
    login() {
      //http login here
    },
    signup() {
      this.$router.push("/signup");
      this.login_show = false;
    }
  },
  computed: {
    usernameError() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push("Username is Empty.");
      return errors;
    },
    passwordError() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is Empty.");
      return errors;
    }
  },
  mounted() {
    this.$root.$on("show_login", () => {
      this.login_show = true;
    });
  }
};
</script>
