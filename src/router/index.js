import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  {
    path: "/services",
    name: "services",
    component: function () {
      return import("../views/ServicesView.vue");
    },
  },
  {
    path: "/assessments",
    name: "assessments",
    component: function () {
      return import("../views/AssessmentsView.vue");
    },
  },
  {
    path: "/payments",
    name: "payments",
    component: function () {
      return import("../views/PaymentsView.vue");
    },
  },
  {
    path: "/logins",
    name: "logins",
    component: function () {
      return import("../views/LoginsView.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
