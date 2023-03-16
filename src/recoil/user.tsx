import { atom } from "recoil";
import {recoilPersist} from "recoil-persist"
import { IUser } from "../type/user.type";

const {persistAtom} =recoilPersist()

export const recoilUserList = atom({
  key: "userListState",
  default: [],
});

export const recoilAuthUser = atom({
  key: "authUser",
  default: null,
  effects_UNSTABLE:[persistAtom]
});
