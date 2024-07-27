import styles from "./home.module.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <section className={styles.featureContainer}>
      <div className={styles.featureItem}>
        <Link to="/Korean" className={styles.mainLink}>
          <h2>건강진단서 해석</h2>
          <p>
            익숙하지 않은 의학용어들을 쉽게 해석해 사용자들의 편의성을 높입니다.
          </p>
        </Link>
      </div>
      <div className={styles.featureItem}>
        <Link to="/Prediction" className={styles.mainLink}>
          <h2>질병 예측 </h2>
          <p>왜 안되냐고 오류 좀 그만떠라 </p>
        </Link>
      </div>
      <div className={styles.featureItem}>
        <Link to="/Prediction" className={styles.mainLink}>
          <h2>건강검진센터 찾기</h2>
          <p>병원찾아드림...은 아니고 소개!!!!!!!!!</p>
        </Link>
      </div>
    </section>
  );
}
export default Home;
