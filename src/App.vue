<template>
  <div>
    <button @click="handleBookClick(6)">Get book:6 (success)</button>
    <br>
    <button @click="handleBookClick(9)">Get book:9 (error)</button>
    <pre>
    "requestStatus": {{fetchBookApi.requestStatus}}
    "data": {{fetchBookApi.data || 'null'}}
    "error": {{fetchBookApi.error ? fetchBookApi.error.message : 'null'}}
    </pre>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  computed: {
    // There are many more available getters.
    // Use them if you need to get more granular!
    // - fetchBookApi - returns entire object
    // - isFetchBookApiNotStarted - returns true/false based requestStatus === 'not_started'
    // - isFetchBookApiPending - returns true/false based requestStatus === 'pending'
    // - isFetchBookApiSuccess - returns true/false based requestStatus === 'success'
    // - isFetchBookApiError - returns true/false based requestStatus === 'error'
    // - fetchBookApiStatus - returns status, could be 'not_started', 'pending', 'error', 'success'
    // - fetchBookApiData - returns response data
    // - fetchBookApiError - returns error data
    ...mapGetters(["fetchBookApi"])
  },
  methods: {
    ...mapActions({
      handleBookClick: "fetchBook"
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
