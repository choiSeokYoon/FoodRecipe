import { selector } from "recoil";
import axios from "axios";
import { IData } from "../type/data.type";

const url = `${process.env.REACT_APP_API_URL}/COOKRCP01/json/1/100`;
export const fetchPostData = selector<IData[]>({
  key: "fetchPostData",
  get: async ({ get }) => {
    try {
      const response = await axios.get(url);
      return response.data.COOKRCP01.row;
    } catch (err) {
      console.error(err);
      return [];
    }
  },
});

export const recoilTotalPosts = selector({
  key: "recoilTotalPosts",
  get: ({ get }) => get(fetchPostData).length,
});
