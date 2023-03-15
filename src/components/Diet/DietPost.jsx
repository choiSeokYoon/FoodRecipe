import { useRecoilValue } from "recoil";
import { fetchPostData } from "../../recoil/selector";
import "./DietPost.scss";
import { Link } from "react-router-dom";

export default function DietPost() {
  const posts = useRecoilValue(fetchPostData);
  const dietFood = [...posts];
  dietFood.sort((a, b) => a.INFO_ENG - b.INFO_ENG);

  return (
    dietFood && (
      <div className="diet_posts">
        <div className="container">
          <div className="title">
            <h1>저칼로리</h1>
          </div>
        </div>
        <div className="diet_box">
          <ul className="diet_table">
            <li className="diet_table_top">
              <p className="num">No.</p>
              <p className="diet_img">이미지</p>
              <p className="diet_title">이름</p>
              <p className="food_type">칼로리</p>
              <p className="food_type">카테고리</p>
              <p className="food_tag">태그</p>
            </li>
            {dietFood.map((item, idx) => (
              <li className="diet_list" key={idx}>
                <p className="num">{idx + 1}</p>
                <div className="diet_img">
                  <img src={item.ATT_FILE_NO_MAIN} alt="" />
                </div>
                <Link to={`/detail/${item.RCP_NM}`} className="diet_title">
                  <p>{item.RCP_NM}</p>
                </Link>
                <div className="diet_nutriment">{item.INFO_ENG}</div>
                <div className="food_type">{item.RCP_PAT2}</div>
                <div className="food_tag">{item.HASH_TAG}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
}
