import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../pages/Mypage.css";
import { Link } from "react-router-dom";
function Mypage() {
  return (
    <div className="my-page">
      <div className="sectionLeft">
        <h2>마이페이지</h2>
        <div id="line">
          <ul>
            <li>
              <Link to="/Mypage" className="link">
                -계정 정보
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <div className="account-info">
          <h2>계정 정보</h2>
          <div className="info">
            <label>이름</label>
            <input type="text" value="" readOnly />
          </div>
          <div className="info">
            <label>생년월일</label>
            <input type="text" value="2024-12-34" readOnly />
          </div>
          <div className="info">
            <label>연락처</label>
            <input type="text" value="123-4567-8912" readOnly />
          </div>
          <div className="info">
            <label>이메일</label>
            <input type="text" value="abc@naver.com" readOnly />
            <span className="verified">인증 완료</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
