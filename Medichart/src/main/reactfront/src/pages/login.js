import "../pages/login.css";

function Login() {
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
            <li>아이디 찾기 </li>
            <li>비밀번호 찾기</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Login;
