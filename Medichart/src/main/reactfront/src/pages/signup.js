import "../pages/signup.css";

function Signup() {
  return (
    <div className="container">
      <h3>회원가입</h3>
      <p className="subtitle">소셜 로그인 및 이메일로 가입할 수 있습니다.</p>
      <p className="line"></p>

      <div className="loginForm_bottom ">
        <input type="submit" value="이메일로 로그인" className="button"></input>

        <div className="section_find">
          <ul>
            <li>아이디 찾기</li>
            <li>비밀번호 찾기</li>
          </ul>
          <p style={{ fontSize: "small", paddingTop: "20px" }}>회원가입</p>
          <p
            style={{
              color: "grey",
              display: "inline",
              borderBottom: "1px solid grey",
            }}
          >
            SNS 로그인
          </p>
          <div className="SNS"></div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
