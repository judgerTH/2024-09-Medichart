// import React, { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./prediction.module.css";

const Prediction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionLeft}>
        <h2 className={styles.side}>나의 메디체크</h2>
        <div id="line">
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: "none" }} className="link">
                - 건강검진정보
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }} className="link">
                - 질병 예측
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }} className="link">
                - 건강검진 센터 찾기
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.inner}>
        <h2 className={styles.title}>질병 예측</h2>
        <div className={styles.out}>예측내용</div>
      </div>
    </div>
  );
};

export default Prediction;
