import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>로고자리</div>

        <nav className={styles.navigation}>
          <ul>
            <li>건강진단서 해석</li>
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
