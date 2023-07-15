import { http } from "./https";

export function getAllBreeds() {
  return http.get("breeds/list/all");
}
export function getRandomDogImages(amount: any) {
  return http.get(`breeds/image/random/${amount}`);
}
export function getDogImagesByBreed(breed: any) {
  return http.get(`/breed/${breed}/images`);
}
export function subBreedImages(breed: any, sub: any, amount: any) {
  return http.get(`/breed/${breed}/${sub}/images/random/${3}`);
}
