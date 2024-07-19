import React from 'react';
import styles from "./AdminMain.module.css";
import { Link } from "react-router-dom";
import axios from 'axios';
const AdminNoticeList = () => {
    return (
        <div className={styles.container}>
        <div className={styles.inner}>
            <h2>공지사항 관리</h2>
            <div id={styles.line}>
            <ul>
                <li>
                <Link to="/admin/noticeList" className={styles.link}>
                    - 공지사항 목록
                </Link>
                </li>
                <li>
                <Link to="/admin/writeNotice" className={styles.link}>
                    - 공지사항 작성
                </Link>
                </li>
                <li>
                <Link to="/admin/deleteNotice" className={styles.link}>
                    - 공지사항 삭제
                </Link>
                </li>
                <li>
                <Link to="/admin/updateNotice" className={styles.link}>
                    - 공지사항 수정
                </Link>
                </li>
            </ul>
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
  );
};

export default AdminNoticeList;
