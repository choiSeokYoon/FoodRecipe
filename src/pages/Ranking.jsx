import React from "react";
import RankingPost from "../components/ranking/RankingPost";
import "./Ranking.scss";

export default function Ranking() {
  return (
    <div className="ranking">
      <div className="container">
        <RankingPost />
      </div>
    </div>
  );
}
