import React from 'react';
import styles from "./mymedicheck.module.css";
import { Link } from "react-router-dom";
import axios from 'axios';
const AdminNoticeList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sectionLeft}>
                <h2 className={styles.side}>공지사항 관리</h2>
                <div id="line">
                    <ul>
                        <li>
                            <Link to="/admin/noticeList" style={{textDecoration: "none"}} className="link">
                                - 공지사항 목록
                            </Link>
                        </li>
                        <li>
                            <Link to="/adminNoticeList" style={{textDecoration: "none"}} className="link">
                                - 공지사항 작성
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  );
};

export default AdminNoticeList;
