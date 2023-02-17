<template>
  <h1>{{ event.title }}</h1>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>

<script>
import { getEventById } from "../services/EventService.js";
// import EventService from "@/services/EventService.js";
export default {
  data() {
    return {
      event: null,
      id: 5928101,
    };
  },
  created() {
    // console.log(EventService);
    getEventById(this.id)
      .then((response) => {
        console.log("One Event", response);
        this.event = response;
      })
      .catch((error) => {
        console.log("Error occured:", error);
      });
  },
};
</script>

<style></style>
