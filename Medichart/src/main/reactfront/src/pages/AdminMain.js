import React, { useState, useEffect } from 'react';
import styles from "./AdminMain.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const AdminMain = () => {

  const [todaySignupCount, setTodaySignupCount] = useState(0);
  const [data, setData] = useState([
    { name: "7/10", 방문자: 4000, 문의사항: 2400 },
    { name: "7/11", 방문자: 3000, 문의사항: 1398 },
    { name: "7/12", 방문자: 2000, 문의사항: 9800 },
    { name: "7/13", 방문자: 2780, 문의사항: 3908 },
    { name: "7/14", 방문자: 1890, 문의사항: 4800 },
    { name: "7/15", 방문자: 2390, 문의사항: 3800 },
    { name: "7/16", 방문자: 3490, 문의사항: 4300 }
  ]);

  const getTodaySignupCount = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admin/today-signup-count');
      setTodaySignupCount(response.data);
    } catch (error) {
      console.error('Error fetching signup count:', error);
    }
  };

  useEffect(() => {
    getTodaySignupCount();
  }, []);

  useEffect(() => {
    // 첫 번째 항목의 방문자 수를 todaySignupCount로 업데이트
    setData(prevData => {
      const updatedData = [...prevData];
      updatedData[0] = { ...updatedData[0], 방문자: todaySignupCount };
      return updatedData;
    });
  }, [todaySignupCount]);

  return (
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2>관리자 메뉴</h2>
          <div id={styles.line}>
            <ul>
              <li>
                <Link to="/admin/noticeList" className={styles.link}>
                  - 공지사항 관리
                </Link>
              </li>
              <li>
                <Link to="/admin/inquiryList" className={styles.link}>
                  - 문의사항 관리
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ flex: 1, marginLeft: '10px' }}>
          <div className="chart-container" style={{ marginTop: '140px' }}>
            <div style={{ textAlign: 'right', marginBottom: '10px' }}>
              <Link to="/admin/main" className={styles.button}>오늘/</Link>
              <Link to="/admin/month" className={styles.button}>월별/</Link>
              <Link to="/admin/year" className={styles.button}>연도별</Link>
            </div>
            <ResponsiveContainer width="97%" height={600}>
              <LineChart data={data}
                         margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="방문자" stroke="#8884d8" />
                <Line type="monotone" dataKey="문의사항" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className={styles.inner}>
          <h2>오늘 가입자 수: {todaySignupCount}</h2>
          <div id={styles.line}>
            <ul>
              <li>
                광고자리------
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default AdminMain;
