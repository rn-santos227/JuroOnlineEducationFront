import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Index.vue";
import Signup from "../views/signup/Index.vue";
import Books from "../views/books/Index.vue";
import Faqs from "../views/faqs/Index.vue";
import About from "../views/about/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/books",
    name: "Books",
    component: Books
  },
  {
    path: "/faqs",
    name: "Faqs",
    component: Faqs
  },
  {
    path: "/about",
    name: "About",
    component: About
  }

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
