import "./Section4.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import section4Img8 from "../assets/main8.jpg";
import section4Img3 from "../assets/main3.jpg";
import section4Img4 from "../assets/main4.jpg";
import section4Img5 from "../assets/main5.jpg";
import section4Img6 from "../assets/main6.jpg";

export default function Section4() {
  return (
    <div className="section4">
      <div className="section4_img">
        <div className="section4_left">
          <img src={section4Img6} alt="베너 이미지" />
        </div>
        <div className="section4_right">
          <img src={section4Img3} alt="베너 이미지" />
          <img src={section4Img4} alt="베너 이미지" />
          <img src={section4Img5} alt="베너 이미지" />
          <img src={section4Img8} alt="베너 이미지" />
        </div>
      </div>
    </div>
  );
}
