import styles from "../components/korean.module.css";
import { Link } from "react-router-dom";
function Translate() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.sectionLeft}>
          <h2>건강진단서 해석</h2>
          <div id={styles.line}>
            <ul>
              <li>
                <Link to="/Korean" className={styles.link}>
                  {" "}
                  -한국어
                </Link>
              </li>
              <li>
                <Link to="/English" className={styles.link}>
                  -Eng
                </Link>
              </li>
              <li>
                <Link to="/Chinese" className={styles.link}>
                  -汉文
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.imgBox}></div>
        </div>
      </div>
    </div>
  );
}

export default Translate;
