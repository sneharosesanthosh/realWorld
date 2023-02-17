<template>
  <h1>{{ event.title }}</h1>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>

<script>
import EventService from "@/services/EventService.js"
export default {
    data () {
        return {
            event: null,
        }
    }
};

created () {
    EventService.ApiClient.get("/events/")
}
</script>

<style></style>
