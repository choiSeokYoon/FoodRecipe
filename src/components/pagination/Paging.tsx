import { useRecoilState, useRecoilValue } from "recoil";
import { recoilPostsPage, recoilLimit } from "../../recoil/atom";
import "./Paging.scss";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { IData } from "../../type/data.type";

type IFilteredDataProps = {
  filteredData:IData[]
}

export default function Paging({ filteredData }:IFilteredDataProps) {
  const RecipePost = filteredData.length;
  const limit = useRecoilValue(recoilLimit);
  const [postsPage, setPostsPage] = useRecoilState(recoilPostsPage);
  const numPages = Math.ceil(RecipePost / limit); //페이지 숫자

  return (
    <div className="pagination">
      <button
        className="pagination_btn_prev"
        onClick={() => setPostsPage(postsPage - 1)}
        disabled={postsPage === 1}
      >
        <GrFormPrevious />
      </button>
      {Array(numPages)
        .fill(null)
        .map((_, idx) => (
          <button
            key={idx + 1}
            className={
              postsPage === idx + 1 ? "pagination_btn active" : "pagination_btn"
            }
            onClick={() => setPostsPage(idx + 1)}
            aria-current={postsPage === idx + 1 ? "page" : undefined}
          >
            {idx + 1}
          </button>
        ))}
      <button
        className="pagination_btn_next"
        onClick={() => setPostsPage(postsPage + 1)}
        disabled={postsPage === numPages}
      >
        <GrFormNext />
      </button>
    </div>
  );
}
