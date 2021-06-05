import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Index from "../views/recipes/Index.vue";
import Show from "../views/recipes/Show.vue";
import NewRecipe from "../views/recipes/NewRecipe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/recipes",
    name: "index",
    component: Index,
  },
  {
    path: "/recipes/:id",
    name: "recipes-show",
    component: Show,
  },
  {
    path: "/recipe/new",
    name: "recipes-new",
    component: NewRecipe,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
