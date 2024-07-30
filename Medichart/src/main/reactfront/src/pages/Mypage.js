// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../pages/Mypage.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Mypage() {
  const [user, setUser] = useState({
    name: "홍길동",
    birthDate: "2002-01-01",
    gender: "남자",
    contact: "010-1234-1234",
    email: "1234@naver.com",
  });

  useEffect(() => {
    // ex. api호출로 사용자 데이터 가져올 수 있음
    // setUser({
    //   name: fetchedName,
    //   birthDate: fetchedBirthDate,
    //   gender: fetchedGender,
    //   contact: fetchedContact,
    //   email: fetchedEmail
    // });
  }, []);

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

            <input type="text" value={user.name} readOnly />
          </div>
          <div className="info">
            <label>생년월일</label>
            <input type="text" value={user.birthDate} readOnly />
          </div>
          <div className="info">
            <label>성별</label>

            <input type="text" value={user.gender} readOnly />
          </div>
          <div className="info">
            <label>연락처</label>
            <input type="text" value={user.contact} readOnly />
          </div>
          <div className="info">
            <label>이메일</label>
            <input type="text" value={user.email} readOnly />
          </div>
          {/* <button onClick={logout}>로그아웃</button> */}
        </div>
      </div>
    </div>
  );
}

export default Mypage;
