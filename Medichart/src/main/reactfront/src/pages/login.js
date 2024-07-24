import "../pages/login.css";
import { Link } from "react-router-dom";
import kakaologo from "../kakaotalk_sharing_btn_small.png";
import naverlogo from "../naverlogo.png";
import googlelogo from "../btn_google.svg";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext"; // AuthContext 경로 수정

function Login() {
    const { login } = useContext(AuthContext); // AuthContext에서 login 함수 사용
    const navigate = useNavigate();

    // 상태 관리
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                login(data); // AuthContext의 login 함수 호출
                navigate("/");
            } else {
                const errorData = await response.json();
                alert(errorData.message || "로그인에 실패했습니다.");
            }
        } catch (error) {
            alert("서버와의 통신에 문제가 발생했습니다.");
        }
    };

    const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;
    const K_REDIRECT_URI = `http://localhost:3001/`;
    //카카오 로그인 화면
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;

    const handlekakaoLogin = () => {
        window.location.href = kakaoURL; //kakaoURL로 이동
    };

    //네이버
    const N_clientID = process.env.REACT_APP_NAVER_CLIENT_ID; //발급 받은 Client ID 입력
    const N_REDIRECT_URI = "http://localhost:3001/naverlogin"; //작성했던 Callback URL 입력
    const stateString = process.env.REACT_APP_NAVER_STATE; //애플리케이션 등록시 받은 시크릿 키 입력
    const NAVER_URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${N_clientID}&response_type=code&redirect_uri=${N_REDIRECT_URI}&state=${stateString}`;

    const handlenaverLogin = () => {
        window.location.href = NAVER_URL; //naverURL로 이동
    };

    //구글
    const G_ClientID = process.env.REACT_APP_GOOGLE_KEY;
    const G_REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
    const G_URL = ` https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${G_ClientID}&redirect_uri=${G_REDIRECT_URI}&scope=openid%20email%20profile`;

    const handlegoogleLogin = () => {
        window.location.href = G_URL; //구글 URL로 이동
    };

    return (
        <div className="container">
            <h3>로그인</h3>
            <p style={{ color: "red", margin: " 0 0 30px 9px" }}>
                로그인 후 이용해주세요
            </p>
            <div className="loginForm ">
                <input
                    type="email"
                    id="user_id"
                    placeholder="이메일을 입력하세요"
                    className="loginInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    type="password"
                    id="user_password"
                    placeholder="비밀번호를 입력하세요"
                    className="loginInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
            </div>

            <div className="loginForm_bottom ">
                <input
                    onClick={handleLogin}
                    type="submit"
                    value="이메일로 로그인"
                    className="button"
                ></input>

                <div className="section_find">
                    <p
                        style={{
                            fontSize: "small",
                            paddingTop: "20px",
                            marginLeft: "10px",
                        }}
                    >
                        <Link to="/login/signup" style={{ color: "black" }}>
                            회원가입
                        </Link>{" "}
                    </p>
                    <p
                        style={{
                            color: "grey",
                            display: "inline",
                            borderBottom: "1px solid grey",
                            marginLeft: "10px",
                        }}
                    >
                        SNS 로그인
                    </p>
                    <div className="SNS">
                        <img onClick={handlenaverLogin} src={naverlogo} alt="naver logo"></img>
                        <img onClick={handlekakaoLogin} src={kakaologo} alt="kakao logo"></img>
                        <img onClick={handlegoogleLogin} src={googlelogo} alt="google logo"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
