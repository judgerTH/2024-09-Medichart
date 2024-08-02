import React, { useState } from "react";
import "../pages/email.css";
import Useagree from "../pages/Useagree";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import range from "lodash/range";
import axios from "axios";

function Email() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);
  const [allAccepted, setAllAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  //비밀번호 유효성 검사
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
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

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // 제출 로직 추가
      try {
        console.log("Submitting data:", {
          name,
          email,
          password,
          birthdate,
          confirmPassword,
          termsAccepted,
          marketingAccepted,
        });
        const response = await axios.post("/api/users/register", {
          name,
          email,
          password,
          birthdate,
          confirmPassword,
          termsAccepted,
          marketingAccepted,
        });
        // 성공 시 처리 로직
        console.log(response.data);
        alert("회원가입이 완료되었습니다.");
      } catch (error) {
        // 실패 시 처리 로직
        console.error("Error during submission:", error);
        setErrors({ submit: "회원가입 중 오류가 발생했습니다." });
      }
    }
  };

  const handleAllAcceptedChange = (e) => {
    const { checked } = e.target;
    setAllAccepted(checked);
    setTermsAccepted(checked);
    setPrivacyAccepted(checked);
    setMarketingAccepted(checked);
  };

  const years = range(1900, getYear(new Date()) + 1, 1);
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

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
        <div className="form-inline-group">
          <div className="form-group">
            <label>성별</label>
            <div style={{ display: "flex" }}>
              <label>
                <input
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                남
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                여
              </label>
            </div>
          </div>

          <div className="form-group birthdate">
            <label>생년월일</label>
            <DatePicker
              selected={birthdate}
              showDateSelect
              onChange={(date) => setBirthdate(date)}
              dateFormat="yyyy년 MM월 dd일"
              placeholderText="생년월일 선택"
              required
              renderCustomHeader={({ date, changeYear, changeMonth }) => (
                <div
                  style={{
                    margin: 10,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <select
                    value={getYear(date)}
                    onChange={({ target: { value } }) => changeYear(value)}
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>

                  <select
                    value={months[getMonth(date)]}
                    onChange={({ target: { value } }) =>
                      changeMonth(months.indexOf(value))
                    }
                  >
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            />
          </div>
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
          {errors.email && <p className="error">{errors.email}</p>}
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
          <label style={{ fontWeight: "bold" }}>
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
          <label
            onClick={() => setIsTermsModalOpen(true)}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            [필수] 이용약관동의
          </label>
          {errors.termsAccepted && (
            <p className="error">{errors.termsAccepted}</p>
          )}
        </div>
        <div className="form-group">
          <label
            onClick={() => setIsTermsModalOpen(true)}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            <input
              type="checkbox"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              required
            />
            [필수] 개인정보 수집 및 이용 동의
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
            [선택] 마케팅 정보 메일 수신 동의
          </label>
        </div>
        <button type="submit" className="submit-button">
          회원가입
        </button>
      </form>

      <Useagree
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
    </div>
  );
}

export default Email;
