import "./Home.scss";
import Section1 from "../container/Section1";
import Section2 from "../container/Section2";
import Section3 from "../container/Section3";
import Section4 from "../container/Section4";

export default function Home() {
  return (
    <>
      <div className="main_contents">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </>
  );
}
