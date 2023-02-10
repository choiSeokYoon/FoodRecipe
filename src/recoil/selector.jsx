import { selector } from 'recoil';
import axios from 'axios'


const url = `https://openapi.foodsafetykorea.go.kr/api/22c0222d1bb745cebfb9/COOKRCP01/json/1/100`
// selector와 axios를 이용해 비동기식으로 전체음식아이템 받아오기
export const fetchPostData = selector({
    key  : "fetchPostData",
    get: async({get}) => {
        try {
            const response = await axios.get(url);
            return response.data.COOKRCP01.row;
        } catch (err) {
            console.error(err)
        }
    }
})