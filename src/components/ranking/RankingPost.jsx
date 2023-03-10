
import { useRecoilValue } from 'recoil';
import { fetchPostData } from '../../recoil/selector';
import './RankingPost.scss';

export default function RankingPost() {
  const posts = useRecoilValue(fetchPostData)
    const dietFood = [...posts];
    dietFood.sort((a, b) => a.INFO_ENG - b.INFO_ENG);
    console.log(dietFood);
    
  return (
    dietFood && (
      <div className="ranking_posts">
        <div className="container">
          <div className="title">
            <h1>저칼로리</h1>
          </div>
        </div>
        <div className="ranking_box">
          <ul className="ranking_table">
            <li className='ranking_table_top'>
              <p className='num'>No.</p>
              <p className="ranking_img">이미지</p>
              <p className="ranking_title">음식 레시피</p>
              <p className="food_type">칼로리</p>
              <p className="food_type">카테고리</p>
              <p className="food_tag">태그</p>
            </li>
            {dietFood.map((item, idx) => (
              <li className="ranking_list" key={item.id}>
                <p className="num">{idx + 1}</p>
                <div className="ranking_img">
                  <img src={item.ATT_FILE_NO_MAIN} alt="" />
                </div>
                <div className="ranking_title">{item.RCP_NM}</div>
                <div className="ranking_nutriment">{item.INFO_ENG}</div>
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
