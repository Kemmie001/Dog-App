import { createStore } from "vuex";
import {
  getAllBreeds,
  getRandomDogImages,
  getDogImagesByBreed,
} from "../utils/services";

export default createStore({
  state: {
    breeds: [],
    dogs: [],
    filteredDogs: [],
    loading: false,
  },
  getters: {
    breedsList: (state) => state.breeds,
  },
  mutations: {
    setBreedsList: (state, breed) => (state.breeds = breed),
    setGettingDogs: (state, status) => (state.loading = status),
    setDogs: (state, dogs) => (state.dogs = dogs),
    setFilteredDogs: (state, dogs) => (state.filteredDogs = dogs),
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
        console.log(error);
      } finally {
        context.commit("setFilteredDogs", [...context.state.dogs]);
        context.commit("setGettingDogs", false);
      }
    },
    async getABreedImages(context, payload) {
      try {
        context.state.loading = true;
        const { data } = await getDogImagesByBreed(payload.breed);
        context.commit("setFilteredDogs", [
          ...context.state.filteredDogs,
          ...data.message,
        ]);
        // eslint-disable-next-line no-empty
      } catch (error) {
        console.log(error);
      } finally {
        context.state.loading = false;
      }
    },
    filterByBreeds(context, payload) {
      if (payload.length <= 0) {
        context.commit("setFilteredDogs", [...context.state.dogs]);
        return;
      }
      context.state.filteredDogs = [];
      payload.forEach((link: string) => {
        const result = context.state.dogs.filter((img: string) => {
          return img.toLowerCase().includes(link.toLowerCase());
        });
        if (result.length < 50) {
          context.dispatch("getABreedImages", { breed: link });
        }
        context.commit("setFilteredDogs", [
          ...context.state.filteredDogs,
          ...result,
        ]);
      });
    },
  },
  modules: {},
});
