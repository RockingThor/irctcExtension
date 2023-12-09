import { Data } from "@/lib/interfaces";
import { atom } from "recoil";

export const dataState = atom<Data | null>({
  key: "dataState",
  default: null,
});
