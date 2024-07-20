import React, { useState, useEffect } from "react";
import "../pages/email.css";
import { Link, useLocation } from "react-router-dom";

function Email() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);
  const [allAccepted, setAllAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const location = useLocation();

  const isEmailVerified = localStorage.getItem("isEmailVerified") === "true";
  useEffect(() => {
    if (location.state && location.state.isEmailVerified) {
      localStorage.setItem("isEmailVerified", "true");
    }
  }, [location.state]);

  //비밀번호 유효성 검사
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validatePassword(password)) {
      newErrors.password =
        "비밀번호는 영문자, 숫자, 특수문자를 포함한 8~20자여야 합니다.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    if (!termsAccepted) {
      newErrors.termsAccepted = "이용약관에 동의해야 합니다.";
    }
    if (!privacyAccepted) {
      newErrors.privacyAccepted = "개인정보 수집 및 이용에 동의해야 합니다.";
    }

    if (!isEmailVerified) {
      newErrors.email = "이메일 인증이 필요합니다.";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // 제출 로직 추가하면 됨
      console.log({
        name,
        email,
        password,
        confirmPassword,
        termsAccepted,
        marketingAccepted,
        isEmailVerified,
      });
    }
  };
  const handleAllAcceptedChange = (e) => {
    const { checked } = e.target;
    setAllAccepted(checked);
    setTermsAccepted(checked);
    setPrivacyAccepted(checked);
    setMarketingAccepted(checked);
  };
  return (
    <div className="email-signup-container">
      <h2>이메일 회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>이름</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해 주세요"
            required
          />
        </div>
        <div className="form-group">
          <label>이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            required
          />
          <Link
            to={{ pathname: "/signup/email-verification", state: { email } }}
            className="verify-button"
          >
            이메일 인증하기
          </Link>
        </div>
        <div className="form-group">
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="영문자, 숫자, 특수문자 포함 8~20자"
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label>비밀번호 확인</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="비밀번호를 확인해 주세요"
            required
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={allAccepted}
              onChange={handleAllAcceptedChange}
              required
            />
            전체 동의
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            이용약관동의
          </label>
          {errors.termsAccepted && (
            <p className="error">{errors.termsAccepted}</p>
          )}
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              required
            />
            개인정보 수집 및 이용 동의
          </label>
          {errors.privacyAccepted && (
            <p className="error">{errors.privacyAccepted}</p>
          )}
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={marketingAccepted}
              onChange={(e) => setMarketingAccepted(e.target.checked)}
            />
            [선택] 마케팅 활용 동의 및 광고 수신 동의
          </label>
        </div>
        <button type="submit" className="submit-button">
          회원가입
        </button>
      </form>
    </div>
  );
}

export default Email;
