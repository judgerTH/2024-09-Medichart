<<<<<<< HEAD
import React from "react";
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 87be8396b2233890dc0d2047c47e33591ded521c
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
} from "recharts";

const AdminMain = () => {
<<<<<<< HEAD
  const data = [
    { name: "7/10", 방문자: 4000, 문의사항: 2400 },
    { name: "7/11", 방문자: 3000, 문의사항: 1398 },
    { name: "7/12", 방문자: 2000, 문의사항: 9800 },
    { name: "7/13", 방문자: 2780, 문의사항: 3908 },
    { name: "7/14", 방문자: 1890, 문의사항: 4800 },
    { name: "7/15", 방문자: 2390, 문의사항: 3800 },
    { name: "7/16", 방문자: 3490, 문의사항: 4300 },
  ];
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

      <div style={{ flex: 1, marginLeft: "10px" }}>
        <div className="chart-container" style={{ marginTop: "140px" }}>
          <div style={{ textAlign: "right", marginBottom: "10px" }}>
            <Link to="/admin/main" className={styles.button}>
              오늘/
            </Link>
            <Link to="/admin/month" className={styles.button}>
              월별/
            </Link>
            <Link to="/admin/year" className={styles.button}>
              연도별
            </Link>
          </div>
          <ResponsiveContainer width="97%" height={600}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
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
        <h2>광고배너</h2>
        <div id={styles.line}>
          <ul>
            <li>광고자리------</li>
          </ul>
        </div>
      </div>
    </div>
=======
  const [data, setData] = useState([]);

  const getWeeklySignupData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admin/weekly-visitor-count');
      const rawData = response.data;

      // 날짜 생성 함수
      const generateDateLabels = (daysAgo) => {
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        return `${date.getMonth() + 1}/${date.getDate()}`;
      };

      // 데이터 변환
      const formattedData = rawData.map((value, index) => ({
        name: generateDateLabels(index),
        방문자: value
      }));

      setData(formattedData);
      console.log(formattedData);
    } catch (error) {
      console.error('Error fetching weekly visitor data:', error);
    }
  };

  useEffect(() => {
    getWeeklySignupData();
  }, []);

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

        <div style={{flex: 1, marginLeft: '1px'}}>
          <div className="chart-container" style={{marginTop: '140px'}}>
            <div style={{textAlign: 'right', marginBottom: '10px'}}>
              <Link to="/admin/main" className={styles.button}>오늘/</Link>
              <Link to="/admin/month" className={styles.button}>월별/</Link>
              <Link to="/admin/year" className={styles.button}>연도별</Link>
            </div>
            <ResponsiveContainer width="97%" height={500}>
              <LineChart data={data}
                         margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Line type="monotone" dataKey="방문자" stroke="#8884d8"/>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className={styles.inner}>
          <h2>광고배너</h2>
          <div id={styles.line}>
            <ul>
              <li>
                광고자리------
              </li>
            </ul>
          </div>
        </div>
      </div>
>>>>>>> 87be8396b2233890dc0d2047c47e33591ded521c
  );
};

export default AdminMain;
