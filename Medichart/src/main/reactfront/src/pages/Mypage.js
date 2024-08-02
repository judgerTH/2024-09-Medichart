import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Mypage.css";
import { AuthContext } from "./AuthContext";

function Mypage() {
  const { isLoggedIn, username } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // username을 쿼리 파라미터로 추가
        const response = await fetch(`/api/user/info?username=${encodeURIComponent(username)}`);
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error("Failed to fetch user info");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    if (isLoggedIn) {
      fetchUserInfo();
    }
  }, [isLoggedIn, username]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options).replace(/\//g, '-');
  };

  const logout = () => {
    console.log("로그아웃 버튼 클릭됨");
    // 로그아웃 작업 수행
  };

  return (
      <div className="my-page">
        <div className="sectionLeft">
          <h2>마이페이지</h2>
          <div id="line">
            <ul>
              <li>
                <Link to="/Mypage" className="link">
                  - 계정 정보
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="UserInformation">
          <div className="account-info">
            <h2>계정 정보</h2>
            {user && (
                <div className="info">
                  <label>이름</label>
                  <input type="text" value={user.name} readOnly />
                </div>
            )}
            {user && (
                <div className="info">
                  <label>이메일</label>
                  <input type="text" value={user.email} readOnly />
                </div>
            )}
            {user && (
                <div className="info">
                  <label>가입일</label>
                  <input type="text" value={formatDate(user.createdDate)} readOnly />
                </div>
            )}
            <button onClick={logout}>로그아웃</button>
          </div>
        </div>
      </div>
  );
}

export default Mypage;
