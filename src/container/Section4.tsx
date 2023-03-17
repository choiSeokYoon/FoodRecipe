import "./Section4.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Section4() {
  return (
    <div className="section4">
      <div className="section4_img">
        <div className="section4_left">
          <img src={require("../assets/main6.jpg")} alt="베너 이미지" />
        </div>
        <div className="section4_right">
          <img src={require("../assets/main3.jpg")} alt="베너 이미지" />
          <img src={require("../assets/main4.jpg")} alt="베너 이미지" />
          <img src={require("../assets/main5.jpg")}alt="베너 이미지" />
          <img src={require("../assets/main8.jpg")} alt="베너 이미지" />
        </div>
      </div>
    </div>
  );
}
