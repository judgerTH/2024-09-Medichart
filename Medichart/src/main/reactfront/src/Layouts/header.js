import styles from "./header.module.css";
// import { Link } from "react-router-dom";
import logo from "../MediChart.png";
import { useState } from "react";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState([false, false]);

  const toggleDropdown = (index) => {
    const newDropdownOpen = dropdownOpen.map((isOpen, i) =>
      i === index ? !isOpen : false
    );
    setDropdownOpen(newDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div style={{ display: "flex" }}>
          <img className={styles.logo} src={logo}></img>
          <p>MediChart</p>
        </div>

        <nav className={styles.navigation}>
          <ul>
            <li onClick={() => toggleDropdown(0)}>
              건강진단서 해석
              <span
                className={`${styles.triangle} ${
                  dropdownOpen[0] ? styles.open : ""
                }`}
              ></span>
              {dropdownOpen[0] && (
                <ul className={styles.dropdown}>
                  <li>-한국어</li>
                  <li>-Eng</li>
                  <li>-汉文</li>
                </ul>
              )}
            </li>
            <li onClick={() => toggleDropdown(1)}>
              나의 메디체크
              <span
                className={`${styles.triangle} ${
                  dropdownOpen[1] ? styles.open : ""
                }`}
              ></span>
              {dropdownOpen[1] && (
                <ul className={styles.dropdown}>
                  <li>-건강검진정보</li>
                  <li>-질병 예측</li>
                  <li>-건강검진 센터 찾기</li>
                </ul>
              )}
            </li>
            <li>FAQ / 문의</li>
            <li>로그인/회원가입</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
