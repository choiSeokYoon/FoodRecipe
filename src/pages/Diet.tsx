import React from "react";
import DietPost from "../components/Diet/DietPost";
import "./Diet.scss";

export default function Diet() {
  return (
    <div className="diet">
      <div className="container">
        <DietPost />
      </div>
    </div>
  );
}
