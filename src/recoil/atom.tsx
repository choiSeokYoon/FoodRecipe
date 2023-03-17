import { atom } from "recoil";
import { ICartItem, IData } from './../type/data.type';


//검색기능을 담는
export const foodSearchAtom = atom<string>({
  key: "foodSearchAtom",
  default: "",
});
//
export const recoilPostsPage = atom<number>({
  key: "recoilPostsPerPage",
  default: 1,
});
//페이지네이션에 담은 아이템 숫자
export const recoilLimit = atom<number>({
  key: "recoilLimit",
  default: 12,
});

export const recoilPageCount = atom<number>({
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
