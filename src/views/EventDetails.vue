<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
  <div v-else>Loading....</div>
</template>

<script>
// import { getEvent } from "../services/EventService.js";
// import EventService from "@/services/EventService.js";
import EventService from "@/services/EventService.js";
export default {
  data() {
    return {
      event: null,
    };
  },

  created() {
    // console.log(EventService);
    EventService.getEvent(this.$route.params.id)
      .then((response) => {
        console.log("One Event", response.data);
        this.event = response.data;
      })
      .catch((error) => {
        console.log("Error occured:", error);
      });
  },
};
</script>

<style></style>
