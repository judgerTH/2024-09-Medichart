import { Link } from "react-router-dom";
import styles from "./prediction.module.css";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Prediction = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    if (showChart) {
      setLoading(true);
      // API 호출 함수??
      const fetchData = async () => {
        try {
          const response = await fetch("YOUR_API_ENDPOINT");
          const result = await response.json();
          setData(result);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data: ", error);
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [showChart]);

  const handleButtonClick = () => {
    setShowChart(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sectionLeft}>
        <h2 className={styles.side}>나의 메디체크</h2>
        <div id="line">
          <ul>
            <li>
              <Link
                to="/MedicalInform"
                style={{ textDecoration: "none" }}
                className={styles.link}
              >
                - 건강검진정보
              </Link>
            </li>
            <li>
              <Link
                to="/Prediction"
                style={{ textDecoration: "none" }}
                className={styles.link}
              >
                - 질병 예측
              </Link>
            </li>
            <li>
              <Link
                to="/SearchHospital"
                style={{ textDecoration: "none" }}
                className={styles.link}
              >
                - 검진센터 찾기
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.inner}>
        <h2 className={styles.title}>질병 예측</h2>
        <button className={styles.pButton} onClick={handleButtonClick}>
          등록
        </button>
        {showChart &&
          (loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <ResponsiveContainer width={900} height={500}>
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  barSize={50}
                >
                  <XAxis
                    dataKey="name"
                    scale="point"
                    padding={{ left: 70, right: 10 }}
                  />
                  <YAxis
                    tick={false}
                    label={{
                      value: "위험도",
                      angle: 0,
                      position: "insideLeft",
                      dy: -200,
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar
                    dataKey="pv"
                    fill="#8884d8"
                    background={{ fill: "#eee" }}
                  />
                </BarChart>
              </ResponsiveContainer>

              {/* 단계 설명 */}
              <div className={styles.stageInfo}>
                {data.map((item) => (
                  <div key={item.name} className={styles.stageItem}>
                    {item.name}: {item.stage}
                  </div>
                ))}
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Prediction;
