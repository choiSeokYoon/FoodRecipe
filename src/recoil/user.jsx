import { atom } from 'recoil';

export const recoUluserList = atom({
  key: "userListState",
  default: [],
});


export const recoilAuthUser = atom({
  key: 'authUser',
  default: null,
});