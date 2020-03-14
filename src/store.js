import Vue from "vue";
import Vuex from "vuex";
import storeApiUtil from "vuex-api-util";

import { fetchBook } from "./bookApi";

Vue.use(Vuex);

// This namespace param passed into storeApiUtil fn is quite important!
// It is used all over the place. Here are some examples:
// - as a mutation: SET_FETCH_BOOK_API_DATA
// - as a getter: isFetchBookApiPending
const fetchBookApi = storeApiUtil("fetchBookApi");

// You could also mix `fetchBookApi.state` into existing state!
const state = fetchBookApi.state();

// You could also mix `fetchBookApi.mutations` into existing mutations!
const mutations = fetchBookApi.mutations();

const actions = {
  fetchBook(ctx, id) {
    // Returns the data from the `fetchBook` method.
    // At this point, you could copy this into other state areas if necessary!
    return fetchBookApi
      .runAction(ctx, () => fetchBook(id))
      .catch(() => {
        // Handle error if necessary
      });
  }
};

// You could also mix `fetchBookApi.getters` into existing mutations!
const getters = fetchBookApi.getters();

export default new Vuex.Store({ state, mutations, actions, getters });
