import styles from "../components/home.module.css";

function Home() {
  return (
    <section className={styles.featureContainer}>
      <div className={styles.featureItem}>
        <h2>건강진단서 해석</h2>
        <p>
          익숙하지 않은 의학용어들을 쉽게 해석해 사용자들의 편의성을 높입니다.
        </p>
      </div>
      <div className={styles.featureItem}>
        <h2>질병 예측 </h2>
        <p>예측 소개 같이 말을 해주세요 아ㅏㅏㅏㅏㅏㅏㅏ 폰트 아직 안 바꿈</p>
      </div>
      <div className={styles.featureItem}>
        <h2>건강검진센터 찾기</h2>
        <p>병원찾아드림...은 아니고 소개!!!!!!!!!</p>
      </div>
    </section>
  );
}
export default Home;
