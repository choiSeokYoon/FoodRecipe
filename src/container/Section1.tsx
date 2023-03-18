import React from "react";
import SectionSlide from "../components/slide/SectionSlide";
import "./Section1.scss";

export default function Section1() {
  return (
    <section className="Section1">
      <div className="title">
        <h1>추천 레시피</h1>
      </div>
      <SectionSlide />
    </section>
  );
}
