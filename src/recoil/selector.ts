import { selector } from "recoil";
import { dataState } from "./atom";

export const currentData = selector({
  key: "currentData",
  get: ({ get }) => {
    return get(dataState);
  },
});

export const passengersData = selector({
  key: "passengersData",
  get: ({ get }) => {
    const data = get(dataState);
    if (data) {
      return data?.passengers;
    }
  },
});
