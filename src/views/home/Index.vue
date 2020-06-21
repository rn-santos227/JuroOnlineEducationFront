<template>
  <div class="home">
    <v-container>
      <v-row align="center" justify="center" class="text-center">
        <v-flex xs12>
          <v-carousel
            cycle
            height="500"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            >
              <div class="message_box hidden-sm-and-down display-1">
                {{ item.text }}
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    items: [
      {
        src: require("@/assets/images/slide0.png"),
        text: '"We make learning affordable and available anytime, anywhere."'
      },
      {
        src: require("@/assets/images/slide0.png"),
        text: '"We make learning affordable and available anytime, anywhere."'
      },
      {
        src: require("@/assets/images/slide0.png"),
        text: '"We make learning affordable and available anytime, anywhere."'
      },
      {
        src: require("@/assets/images/slide0.png"),
        text: '"We make learning affordable and available anytime, anywhere."'
      }
    ]
  })
};
</script>

<style scoped>
.home {
  margin-top: 150px;
}

.message_box {
  margin-left: 20px;
  margin-top: 160px;
  width: 400px;
}
</style>
