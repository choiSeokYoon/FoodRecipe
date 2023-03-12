import { atom } from "recoil";

export const recoilUserList = atom({
  key: "userListState",
  default: [],
});

export const recoilAuthUser = atom({
  key: "authUser",
  default: true,
});
