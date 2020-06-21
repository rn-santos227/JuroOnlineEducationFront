<template>
  <div v-if="authenticated" class="nav_main">
    <v-navigation-drawer
      v-model="drawer"
      style="z-index:2"
      clipped
      stateless
      :mini-variant.sync="mini"
      hide-overlay
      permanent
    >
      <v-list-item class="px-2 nav_head">
        <v-list-item-avatar>
          <v-icon>mdi-view-headline</v-icon>
        </v-list-item-avatar>
        <v-list-item-title><h3>CATEGORIES</h3></v-list-item-title>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-divider></v-divider>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Professional Review", icon: "mdi-school" },
        { title: "Entrance Exam Review", icon: "mdi-notebook" },
        { title: "Books", icon: "mdi-book-open-variant" }
      ],
      mini: false,
      authenticated: true
    };
  }
};
</script>

<style scoped>
.nav_main {
  margin-top: 125px;
  height: 100%;
}

.nav_head {
  background: #f8d766;
}
</style>
