import { createStore } from "vuex";
import { getAllBreeds, getRandomDogImages } from "../utils/services";

export default createStore({
  state: {
    breeds: [],
    dogs: [],
    loading: false,
  },
  getters: {
    breedsList: (state) => state.breeds,
  },
  mutations: {
    setBreedsList: (state, breed) => (state.breeds = breed),
    setGettingDogs: (state, status) => (state.loading = status),
    setDogs: (state, dogs) => (state.dogs = dogs),
  },
  actions: {
    async getBreeds({ commit }) {
      try {
        const { data } = await getAllBreeds();
        const rawBreeds = Object.keys(data.message);
        commit("setBreedsList", [...rawBreeds]);
      } catch (error) {
        console.log(error);
      }
    },
    async getDogImages(context, payload) {
      context.commit("setGettingDogs", true);
      try {
        if (payload > 50) {
          const repeat = Math.floor(payload / 50);
          for (let i = 0; i < repeat; i++) {
            const { data } = await getRandomDogImages(50);
            context.commit("setDogs", [...context.state.dogs, ...data.message]);
          }
          console.log("kemi:", context.state.dogs.length);
        }
        // eslint-disable-next-line no-empty
      } catch (error) {
      } finally {
        context.commit("setGettingDogs", false);
      }
    },
  },
  modules: {},
});
