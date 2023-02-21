import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import AboutView from "../views/AboutView.vue";
import EventDetails from "../views/EventDetails.vue";
import EventCreate from "../views/EventCreate.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "AboutView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  },

  {
    path: "/event-details/:id",
    name: "EventDetails",
    component: EventDetails,
    props: true,
  },

  {
    path: "/event-create",
    name: "EventCreate",
    component: EventCreate,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
