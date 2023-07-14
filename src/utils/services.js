import { http } from "./http";

export function getAllBreeds() {
  return http.get("breeds/list/all");
}
export function getRandomDogImages(amount) {
  return http.get(`breeds/image/random/${amount}`);
}
export function getDogImagesByBreed(breed, amount) {
  return http.get(`/breed/${breed}/images`);
}
export function subBreedImages(breed, sub, amount) {
  return http.get(`/breed/${breed}/${sub}/images/random/${3}`);
}
