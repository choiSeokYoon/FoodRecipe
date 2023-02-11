import {atom} from 'recoil'



//검색기능을 담는 
export const foodSearchAtom = atom({
    key: "foodSearchAtom",
    default:""
})
//
export const recoilPostsPage = atom({
    key: "recoilPostsPerPage",
    default: 1
})

export const recoilLimit = atom({
    key: "recoilLimit",
    default: 20
})

export const recoilPageCount = atom({
    key: "recoilPageCount",
    default: 0
})

