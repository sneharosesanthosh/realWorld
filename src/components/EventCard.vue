<template>
  <router-link
    class="event-card-router"
    :to="{ name: 'EventDetails', params: { id: event.id } }"
  >
    <div class="event-card">
      <h1>{{ msg }}</h1>
      <h4>@ {{ event.date }} {{ event.time }}</h4>
      <h3>{{ event.title }}</h3>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    msg: String,
    event: Object,
  },
  // data() {
  //   return {
  //   };
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  /* margin: 40px 0 0; */
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.event-card {
  border: #42b983;
  background-color: antiquewhite;
  width: 50%;
  margin: 20px auto;
  padding: 15px;
  border-radius: 9px;
}
</style>
