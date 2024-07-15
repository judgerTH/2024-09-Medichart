import styles from "../components/translate.css";

function Translate() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.sectionLeft}>
          <h2>
            <button type="button">건강진단서 해석</button>
          </h2>
          <div id={styles.line}>
            <ul>
              <li>-한국어</li>
              <li>-Eng</li>
              <li>-汉文</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Translate;
