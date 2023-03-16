import { atom } from "recoil";
import { ICartItem, IData } from './../type/data.type';
import { IUser } from './../type/user.type';

//검색기능을 담는
export const foodSearchAtom = atom({
  key: "foodSearchAtom",
  default: "",
});
//
export const recoilPostsPage = atom({
  key: "recoilPostsPerPage",
  default: 1,
});
//페이지네이션에 담은 아이템 숫자
export const recoilLimit = atom({
  key: "recoilLimit",
  default: 12,
});

export const recoilPageCount = atom({
  key: "recoilPageCount",
  default: 0,
});

//디테일 api
export const recoilDetailData = atom<IData>({
  key: "recoilDetailData",
  default: undefined,
});

export const recoilUserCart = atom<ICartItem[]>({
  key: "recoilUserCart",
  default: [],
});
