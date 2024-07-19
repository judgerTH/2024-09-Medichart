import "../pages/login.css";
import { Link } from "react-router-dom";
import kakaologo from "../kakaotalk_sharing_btn_small.png";
import naverlogo from "../naverlogo.png";

function Login() {
  const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;
  const K_REDIRECT_URI = `http://localhost:3001/oauth`;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

  const handlekakaoLogin = () => {
    window.location.href = kakaoURL; //kakaoURL로 이동
  };
  return (
    <div className="container">
      <h3>로그인</h3>

      <div className="loginForm ">
        <input
          type="email"
          id="user_id"
          placeholder="이메일을 입력하세요"
        ></input>
        <input
          type="password"
          id="user_password"
          placeholder="비밀번호를 입력하세요"
        ></input>
      </div>

      <div className="loginForm_bottom ">
        <input type="submit" value="이메일로 로그인" className="button"></input>

        <div className="section_find">
          <ul>
            <li>
              <Link to="id_find" className="link">
                아이디 찾기{" "}
              </Link>{" "}
            </li>
            <li>
              <Link to="pw_find" className="link">
                비밀번호 찾기{" "}
              </Link>
            </li>
          </ul>
          <p style={{ fontSize: "small", paddingTop: "20px" }}>
            <Link to="/login/signup" style={{ color: "black" }}>
              회원가입
            </Link>{" "}
          </p>
          <p
            style={{
              color: "grey",
              display: "inline",
              borderBottom: "1px solid grey",
            }}
          >
            SNS 로그인
          </p>
          <div className="SNS">
            <img src={naverlogo} className="naver"></img>
            <img onClick={handlekakaoLogin} src={kakaologo}></img>
            <img></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
