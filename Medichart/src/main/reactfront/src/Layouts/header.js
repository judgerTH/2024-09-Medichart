import styles from "./header.module.css";
// import { Link } from "react-router-dom";
import logo from "../MediChart.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div style={{ display: "flex" }}>
          <img className={styles.logo} src={logo}></img>
          <p>MediChart</p>
        </div>

        <nav className={styles.navigation}>
          <ul>
            <li>건강진단서 해석 </li>
            <li>나의 메디체크</li>
            <li>FAQ / 문의</li>
            <li>로그인/회원가입</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
