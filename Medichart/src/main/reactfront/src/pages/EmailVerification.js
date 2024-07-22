import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../pages/EmailVerification.css";

function EmailVerification() {
  const [verificationCode, setVerificationCode] = useState("");
  const [errors, setErrors] = useState({});
  const location = useLocation();
  const email = location.state ? location.state.email : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (verificationCode.length !== 6) {
      newErrors.verificationCode = "인증 코드는 6자리여야 합니다.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // 이메일 인증 로직 추가
      // 인증이 완료되면 로컬 스토리지에 상태 저장
      localStorage.setItem("isEmailVerified", "true");
    }
  };

  return (
    <div className="email-verification-container">
      <h2>이메일 인증</h2>
      <p>인증 코드를 {email}로 전송했습니다. 인증 코드를 입력하세요.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>인증 코드</label>
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="인증 코드를 입력하세요"
            required
          />
          {errors.verificationCode && (
            <p className="error">{errors.verificationCode}</p>
          )}
        </div>
        <button type="submit" className="submit-button">
          인증하기
        </button>
      </form>
      <Link
        to={{ pathname: "/signup/email", state: { isEmailVerified: true } }}
        className="back-button"
      >
        돌아가기
      </Link>
    </div>
  );
}

export default EmailVerification;
