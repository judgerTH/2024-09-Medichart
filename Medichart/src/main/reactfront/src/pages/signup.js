import "../pages/signup.css";
import K_signup from "../K_signup.png";
import N_signup from "../N_signup.png";
import G_signup from "../G_signup.png";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="container">
      <h3>회원가입</h3>
      <p className="subtitle">소셜 로그인 및 이메일로 가입할 수 있습니다.</p>
      <p className="line"></p>

      <div className="signupForm ">
        <Link to="/signup/email" className="button">
          <p>이메일로 시작하기</p>
        </Link>
        <img src={K_signup}></img>
        <img src={N_signup}></img>
        <img src={G_signup}></img>
      </div>
    </div>
  );
}
export default Signup;
