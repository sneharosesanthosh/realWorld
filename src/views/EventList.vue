/* eslint-disable */
<template>
  <div class="events">
    <h1>Events for Good</h1>
    <!-- how to pass this h1 dynamically as a prop -->

    <EventCard
      v-for="event in events"
      :key="event.id"
      msg="Event"
      :event="event"
    ></EventCard>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import { getEvents } from "@/services/EventService.js";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    getEvents()
      .then((response) => {
        console.log("Response:", response);
        this.events = response.data;
      })
      .catch((error) => {
        console.log("Error occured:", error);
      });
  },
};
</script>
