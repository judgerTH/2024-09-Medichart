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
import Loading from "./Loading";

const yAxisTickFormatter = (value) => {
  if (value === 25) return "주의";
  if (value === 50) return "경고";
  if (value === 75) return "위험";
  return "";
};

const Prediction = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    if (showChart) {
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:8080/api/predictions?userId=testIdNum1");
          const result = await response.json();
          console.log("Fetched data:", result); // 데이터 확인

          // 데이터 변환
          const transformedData = result.length ? [
            { name: "당뇨병", '예측 확률': result[0].diabetes },
            { name: "심장병", '예측 확률': result[0].heartDisease },
            { name: "고혈압", '예측 확률': result[0].hypertension },
            { name: "신장질환", '예측 확률': result[0].kidney },
            { name: "비만", '예측 확률': result[0].obesity },
            { name: "뇌졸중", '예측 확률': result[0].stroke }
          ] : [];

          setChartData(transformedData);
        } catch (error) {
          console.error("Error fetching data: ", error);
        } finally {
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
          <p className={styles.content}>
            인공지능 건강 예측 프로그램은 예측결과와 주요인자 분석을 통해
            건강위험요인을 미리 확인하고 예방하기 위한 목적으로 개발되었습니다.
          </p>
          <p className={styles.content2}>
            ※질환에 대한 정확한 진단과 치료는 의료진과 상의하시기 바랍니다.
          </p>

          <button className={styles.pButton} onClick={handleButtonClick}>
            등록
          </button>
          {showChart &&
              (loading ? (
                  <Loading />
              ) : (
                  <>
                    <ResponsiveContainer width={900} height={500}>
                      <BarChart
                          width={500}
                          height={300}
                          data={chartData}
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
                            domain={[0, 100]}
                            tickFormatter={yAxisTickFormatter}
                            ticks={[25, 50, 75]}
                        />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar
                            dataKey="예측 확률"
                            fill="#8884d8"
                            background={{ fill: "#eee" }}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </>
              ))}
        </div>
      </div>
  );
};

export default Prediction;
