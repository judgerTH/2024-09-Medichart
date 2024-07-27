import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../pages/Mypage.css";
import { Link } from "react-router-dom";
import React from "react";

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
      <div className="UserInformation">
        {/* <FontAwesomeIcon icon={faUser} className="icon" /> */}
        <div className="account-info">
          <h2>계정 정보</h2>
          <div className="info">
            <label>이름</label>
            <input type="text" value="이름" readOnly />
            {/* <input type="text" value={user.name} readOnly /> */}
          </div>
          <div className="info">
            <label>생년월일</label>
            <input type="text" value="2002-01-01" readOnly />
            {/* <input type="text" value={user.birthDate} readOnly /> */}
          </div>
          <div className="info">
            <label>연락처</label>
            <input type="text" value="010-1234-1234" readOnly />
            {/* <input type="text" value={user.contact} readOnly /> */}
          </div>
          <div className="info">
            <label>이메일</label>
            <input type="text" value="1234@naver.com" readOnly />
            {/* <input type="text" value={user.email} readOnly /> */}
          </div>
          {/* <button onClick={logout}>로그아웃</button> */}
        </div>
      </div>
    </div>
  );
}

export default Mypage;
