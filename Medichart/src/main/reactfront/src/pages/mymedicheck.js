import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./mymedicheck.module.css";

const Mymedicheck = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightError, setHeightError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [waist, setWaist] = useState("");
  const [waistInch, setWaistInch] = useState("");
  const [bmi, setBmi] = useState("");
  const [systolicBP, setSystolicBP] = useState("");
  const [diastolicBP, setDiastolicBP] = useState("");
  const [bloodSugar, setBloodSugar] = useState("");
  const [ast, setAst] = useState("");
  const [alt, setAlt] = useState("");
  const [ggtp, setGgtp] = useState("");
  // const [hdlCholesterol, setHdlCholesterol] = useState("");
  const [hemoglobin, setHemoglobin] = useState("");
  const [serumCreatinine, setSerumCreatinine] = useState("");
  // const [gfr, setGfr] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [smoking, setSmoking] = useState("1");
  const [drinking, setDrinking] = useState("1");

  const handleAgeGroupChange = (e) => {
    const value = e.target.value;
    setAgeGroup(value);
    if (value === "" || value % 5 === 0) {
      setErrorMessage("");
    } else {
      setErrorMessage("※ 5단위로 입력해주세요.");
    }
  };

  const handleBlur = () => {
    if (ageGroup && ageGroup % 5 !== 0) {
      setErrorMessage("※ 5단위로 입력해주세요.");
    } else {
      setErrorMessage("");
    }
  };
  //여기까지 연령대

  const [selectedGender, setSelectedGender] = useState("1"); // 초기값 남성으로 설정

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  //여기까지 성별

  const handleHeightChange = (e) => {
    const value = e.target.value;
    setHeight(value);
    if (value === "" || value % 5 === 0) {
      setHeightError("");
    } else {
      setHeightError("5단위로 입력해주세요.");
    }
  };

  const handleWeightChange = (e) => {
    const value = e.target.value;
    setWeight(value);
    if (value === "" || value % 5 === 0) {
      setWeightError("");
    } else {
      setWeightError("5단위로 입력해주세요.");
    }
  };

  const handleHeightBlur = () => {
    if (height && height % 5 !== 0) {
      setHeightError("5단위로 입력해주세요.");
    } else {
      setHeightError("");
    }
  };

  const handleWeightBlur = () => {
    if (weight && weight % 5 !== 0) {
      setWeightError("5단위로 입력해주세요.");
    } else {
      setWeightError("");
    }
  };
  //여기까지 신장, 체중

  const isNumber = (value) => !isNaN(value);

  const calculateBmi = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  const convertWaistToInch = (cm) => {
    const inch = (cm / 2.54).toFixed(2);
    setWaistInch(inch);
  };

  const handleSubmit = () => {
    if (
      height &&
      weight &&
      waist &&
      systolicBP &&
      diastolicBP &&
      bloodSugar &&
      ast &&
      alt &&
      ggtp
      // hdlCholesterol
    ) {
      alert("등록되었습니다.");
    } else {
      alert("정확한 정보를 입력해주세요.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sectionLeft}>
        <h2 className={styles.side}>나의 메디체크</h2>
        <div id="line">
          <ul>
            <li>
              <Link
                to="/MedicalInform"
                style={{ textDecoration: "none" }}
                className="link"
              >
                - 건강검진정보
              </Link>
            </li>
            <li>
              <Link
                to="/Prediction"
                style={{ textDecoration: "none" }}
                className="link"
              >
                - 질병 예측
              </Link>
            </li>
            <li>
              <Link
                to="/SearchHospital"
                style={{ textDecoration: "none" }}
                className="link"
              >
                - 검진센터 찾기
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.inner}>
        <h2 className={styles.title}>검진 정보 입력</h2>
        <div class="standard-data col-2">
          <div className={styles.topline}>
            <div className={styles.dataBox}>
              <div className={styles.inputGroup}>
                <span className={styles.titleTop}>나이</span>
                <input
                  type="number"
                  className={styles.tiA1}
                  id="ageGroup"
                  name="ageGroup"
                  value={ageGroup}
                  onChange={handleAgeGroupChange}
                  onBlur={handleBlur}
                  title="나이"
                  // placeholder="연령대를 5단위로 입력"
                />
                <span className={styles.cham}>세</span>
              </div>
              {errorMessage && (
                <div
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginLeft: "30px",
                    marginBottom: "10px",
                  }}
                >
                  {errorMessage}
                </div>
              )}
              <div className={styles.textContainer_top}>
                ※ 0~2 : 0세 / 3~7 : 5세 / 8~12 : 10세로 입력해 주십시오.
              </div>
            </div>

            <div className={styles.dataBox}>
              {/* <span className={styles.titleTop}>성별</span> */}
              <div className={styles.genderGroup}>
                <span className={styles.bgchk1}>
                  {/* <label htmlFor="gender_1">남성</label> */}
                  <input
                    className={styles.radiog1}
                    type="radio"
                    id="gender_1"
                    name="gender"
                    value="1"
                    checked={selectedGender === "1"}
                    onChange={handleGenderChange}
                  />
                  <label htmlFor="gender_1">남성</label>
                </span>
                <span className={styles.bgchk2}>
                  {/* <label htmlFor="gender_2">여성</label> */}
                  <input
                    className={styles.radiog2}
                    type="radio"
                    id="gender_2"
                    name="gender"
                    value="2"
                    checked={selectedGender === "2"}
                    onChange={handleGenderChange}
                  />
                  <label htmlFor="gender_2">여성</label>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.out}>
          <div className={styles.title__1}>비만도 측정</div>

          <div className={styles.outline}>
            <div
              className="row-table v1 box-in-table"
              data-title="비만도 측정 입력"
            >
              <table className={styles.title__table1}>
                <tbody className={styles.tbody_1}>
                  {/* <tr>
                    <td className={styles.title__1_a}>
                      <div className={styles.textContainer}>
                        ※ 신장, 체중, 허리둘레 정보를 입력해 주십시오.
                      </div>
                      <div className={styles.inputContainer}>
                        <p className={styles.inputtext1}>신장</p>
                        <input
                          type="text"
                          className={styles.ti_a1_1}
                          name="heightVl"
                          maxLength="5"
                          title="신장 입력"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          onBlur={calculateBmi}
                        />
                        <em className="dash ml10">cm</em>
                      </div>
                    </td>
                    <td className={styles.title__1_a}>
                      <div className={styles.inputContainer_c}>
                        <p className={styles.inputtext2}>체중</p>
                        <input
                          type="text"
                          className={styles.ti_a1_1}
                          name="weightVl"
                          maxLength="5"
                          title="체중 입력"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          onBlur={calculateBmi}
                        />
                        <em className="dash ml10"> kg</em>
                      </div>
                    </td>
                  </tr> */}
                  <tr>
                    <td className={styles.title__1_a}>
                      <div className={styles.textContainer}>
                        ※ 신장, 체중, 허리둘레 정보를 입력해 주십시오.
                      </div>
                      <div className={styles.inputContainer}>
                        <p className={styles.inputtext1}>신장</p>
                        <input
                          type="text"
                          className={styles.ti_a1_1}
                          name="heightVl"
                          maxLength="5"
                          // placeholder="신장을 입력해주세요."
                          title="신장 입력"
                          value={height}
                          onChange={handleHeightChange}
                          // onBlur={handleHeightBlur}
                          onBlur={calculateBmi}
                        />
                        <em className="dash ml10">cm</em>
                        {heightError && (
                          <div className={styles.error}>{heightError}</div>
                        )}
                      </div>
                    </td>
                    <td className={styles.title__1_a}>
                      <div className={styles.inputContainer_c}>
                        <p className={styles.inputtext2}>체중</p>
                        <input
                          type="text"
                          className={styles.ti_a1_1}
                          name="weightVl"
                          maxLength="5"
                          // placeholder="체중을 입력해주세요."
                          title="체중 입력"
                          value={weight}
                          onChange={handleWeightChange}
                          // onBlur={handleWeightBlur}
                          onBlur={calculateBmi}
                        />
                        <em className="dash ml10">kg</em>
                        {weightError && (
                          <div className={styles.error2}>{weightError}</div>
                        )}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.title__1_a}>
                      <div className={styles.inputContainer}>
                        <p className={styles.label_top}>허리둘레</p>
                        <input
                          type="text"
                          className={styles.ti_a1_1}
                          name="waistVl"
                          maxLength="5"
                          // placeholder="허리둘레를 입력해주세요."
                          title="허리둘레 입력"
                          value={waist}
                          onChange={(e) => setWaist(e.target.value)}
                          onBlur={() => convertWaistToInch(waist)}
                        />
                        <em className="dash ml10"> cm</em>
                        <input
                          type="text"
                          className={styles.ti_a1_1}
                          readOnly
                          maxLength="3"
                          title="허리둘레 (inch)"
                          value={waistInch}
                          style={{ marginLeft: "20px", width: "70px" }}
                        />
                        <em className="dash ml10"> inch</em>
                      </div>
                    </td>
                    <td className={styles.title__1_a}>
                      <div className={styles.inputContainer}>
                        <p className={styles.pb10}>체질량지수 (BMI)</p>
                        <input
                          type="text"
                          className={styles.ti_a1_1}
                          readOnly
                          title="체질량지수 (BMI) 입력"
                          value={bmi}
                        />
                        <em className="dash ml10"> kg/m²</em>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.title__2}>검진결과 확인 및 질병예측</div>

          <div className="cont-area">
            <div
              className="row-table v1 box-in-table"
              data-title="검진결과 확인 및 질병예측 입력"
            >
              <table>
                <tbody>
                  <tr>
                    <div className={styles.textContainer1}>
                      ※ 고혈압, 당뇨, 이상지질혈증, 동맥경화 등의 질환 정보를
                      입력해 주십시오.
                    </div>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-wrap box-in-table">
                        <p className={styles.tit}>고혈압</p>
                        <div className={styles.inputContainer2}>
                          <p className={styles.label}>ㅡ 수축기 혈압</p>
                          <input
                            type="text"
                            className={styles.ti_a1_1}
                            id="systcBpVl"
                            name="systcBpVl"
                            maxLength="3"
                            title="수축기 혈압 입력"
                            value={systolicBP}
                            onChange={(e) => setSystolicBP(e.target.value)}
                          />
                          <em className="inline-block">mmHg</em>
                          <span className={styles.cham}>
                            (표준 참고치 : 120 미만)
                          </span>
                        </div>
                        <div className={styles.inputContainer2}>
                          <p className={styles.label}>ㅡ 이완기 혈압</p>
                          <input
                            type="text"
                            className={styles.ti_a1_1}
                            id="distcBpVl"
                            name="distcBpVl"
                            maxLength="3"
                            title="이완기 혈압 입력"
                            value={diastolicBP}
                            onChange={(e) => setDiastolicBP(e.target.value)}
                          />
                          <em className="inline-block">mmHg</em>
                          <span className={styles.cham}>
                            (표준 참고치 : 80 미만)
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-wrap box-in-table">
                        <p className={styles.tit}>당뇨병</p>
                        <div className={styles.inputContainer2}>
                          <p className={styles.label}>ㅡ 공복혈당</p>
                          <input
                            type="text"
                            className={styles.ti_a1_1}
                            id="empstoBdsgVl"
                            name="empstoBdsgVl"
                            maxLength="3"
                            title="공복혈당 입력"
                            value={bloodSugar}
                            onChange={(e) => setBloodSugar(e.target.value)}
                          />
                          <em className="inline-block">mmHg</em>
                          <span className={styles.cham}>
                            (표준 참고치 : 100 미만)
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-wrap box-in-table">
                        <p className={styles.tit}>간장질환</p>
                        <div className={styles.inputContainer2}>
                          <p className={styles.label}>ㅡ 혈청지오티 (AST) </p>
                          <input
                            type="text"
                            className={styles.ti_a1_1}
                            id="ast"
                            name="ast"
                            maxLength="3"
                            title="혈청지오티 (AST) 입력"
                            value={ast}
                            onChange={(e) => setAst(e.target.value)}
                          />
                          <em className="inline-block">mg/dL</em>
                          <span className={styles.cham}>
                            (표준 참고치 : 40 이하)
                          </span>
                        </div>
                        <div className={styles.inputContainer2}>
                          <p className={styles.label}>ㅡ 혈청지피티(ALT)</p>
                          <input
                            type="text"
                            className={styles.ti_a1_1}
                            id="alt"
                            name="alt"
                            maxLength="3"
                            title="LDL-콜레스테롤 입력"
                            value={alt}
                            onChange={(e) => setAlt(e.target.value)}
                          />
                          <em className="inline-block">mg/dL</em>
                          <span className={styles.cham}>
                            (표준 참고치 : 50 이하)
                          </span>
                        </div>
                        <div className={styles.inputContainer2_1}>
                          <p className={styles.label}>ㅡ 감마지티피 (γ-GTP)</p>
                          <input
                            type="text"
                            className={styles.ti_a1_1}
                            id="ggtp"
                            name="ggtp"
                            maxLength="3"
                            title="감마지티피 입력"
                            value={ggtp}
                            onChange={(e) => setGgtp(e.target.value)}
                          />
                          <em className="inline-block">mg/dL</em>
                          <sapn className={styles.cham}>
                            (표준 참고치 : 남 11~63 / 여 8~35)
                          </sapn>
                        </div>
                        {/* <div className={styles.inputContainer2}>
                          <p className={styles.label}>ㅡ HDL-콜레스테롤</p>
                          <input
                            type="text"
                            className={styles.ti_a1_1}
                            id="hdlClstrVl"
                            name="hdlClstrVl"
                            maxLength="3"
                            title="HDL-콜레스테롤 입력"
                            value={hdlCholesterol}
                            onChange={(e) => setHdlCholesterol(e.target.value)}
                          />
                          <em className="inline-block">mg/dL</em>
                          <span className={styles.cham}>
                            (표준 참고치 : 60이상)
                          </span>
                        </div> */}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="medi_request_03" className={styles.title__3}>
            옵션사항, 민간 검진기관 검진 내역 결과 입력
          </div>
          <div class="cont-area">
            <div
              class="row-table v1 box-in-table"
              data-title="옵션사항, 민간 검진기관 검진 내역 결과 입력"
            >
              <table>
                {/* <colgroup>
              <col></col>
            </colgroup> */}
                <tbody>
                  <tr>
                    <div className={styles.textContainer1}>
                      ※ 예측 프로그램에서 세부 진단용으로 사용할 수 있습니다.
                    </div>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-wrap box-in-table">
                        <p class={styles.tit}>신장질환</p>
                        <div className={styles.inputContainer2}>
                          <p class={styles.label}>ㅡ 요단백</p>
                          <select
                            class="w190px"
                            className={styles.ti_a1_1}
                            name="oligProteCd"
                            id="oligProteCd"
                            title="요단백 항목 선택"
                          >
                            <option value=""></option>
                            <option value="1">음성(-)</option>
                            <option value="2">약약성(±)</option>
                            <option value="3">양성(+1)</option>
                            <option value="4">양성(+2)</option>
                            <option value="5">양성(+3)</option>
                            <option value="6">양성(+4)</option>
                          </select>
                          <span className={styles.cham}>
                            (표준 참고치 : 음성)
                          </span>
                        </div>

                        <div className={styles.inputContainer2}>
                          <p class={styles.label}>ㅡ 혈청크레아티닌</p>
                          <input
                            type="text"
                            class={styles.ti_a1_1}
                            id="serumCreatinine"
                            name="serumCreatinine"
                            maxlength="3"
                            title="혈청크레아티닌 입력"
                            value={serumCreatinine}
                            onChange={(e) => setSerumCreatinine(e.target.value)}
                          />
                          <em class="inline-block">mg/dL</em>

                          <span className={styles.cham}>
                            (표준 참고치 : 1.5 이하)
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-wrap box-in-table">
                        <p class={styles.tit}>빈혈 등</p>
                        <div className={styles.inputContainer2}>
                          <p class={styles.label}>ㅡ 혈색소</p>
                          <input
                            type="text"
                            className={styles.ti_a1_1}
                            id="hemoglobin"
                            name="hemoglobin"
                            maxlength="4"
                            title="혈색소 입력"
                            value={hemoglobin}
                            onChange={(e) => setHemoglobin(e.target.value)}
                          />
                          <em class="inline-block">g/dL</em>
                          <span className={styles.cham}>
                            (표준 참고치 : 남 13~16.5 / 여 12~15.5)
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-wrap box-in-table">
                        <div className={styles.inputRow}>
                          <div className={styles.inputContainer2_bottom}>
                            <div className={styles.labelAndRadios}>
                              <p className={styles.label_s}>ㅡ 흡연 여부</p>
                              <div className={styles.radioGroup1}>
                                <label className={styles.radioLabel_y}>
                                  <input
                                    type="radio"
                                    name="smoking"
                                    value="1"
                                    checked={smoking === "1"}
                                    onChange={(e) => setSmoking(e.target.value)}
                                  />
                                  예
                                </label>
                                <label className={styles.radioLabel_n}>
                                  <input
                                    className={styles.smokbtn}
                                    type="radio"
                                    name="smoking"
                                    value="2"
                                    checked={smoking === "2"}
                                    onChange={(e) => setSmoking(e.target.value)}
                                  />
                                  아니오
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className={styles.inputContainer2_bottom}>
                            <div className={styles.labelAndRadios}>
                              <p className={styles.label_d}>ㅡ 음주 여부</p>
                              <div className={styles.radioGroup2}>
                                <label className={styles.radioLabel_y}>
                                  <input
                                    className={styles.drinkbtn}
                                    type="radio"
                                    name="drinking"
                                    value="1"
                                    checked={drinking === "1"}
                                    onChange={(e) =>
                                      setDrinking(e.target.value)
                                    }
                                  />
                                  예
                                </label>
                                <label className={styles.radioLabel_n}>
                                  <input
                                    type="radio"
                                    name="drinking"
                                    value="2"
                                    checked={drinking === "2"}
                                    onChange={(e) =>
                                      setDrinking(e.target.value)
                                    }
                                  />
                                  아니오
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* <p class={styles.tit}>만성신장질환</p>
                        <div className={styles.inputContainer2}>
                          <p class={styles.label}>ㅡ 혈청크레아티닌</p>
                          <input
                            type="text"
                            class={styles.ti_a1_1}
                            id="serumCreatinine"
                            name="serumCreatinine"
                            maxlength="3"
                            title="혈청크레아티닌 입력"
                            value={serumCreatinine}
                            onChange={(e) => setSerumCreatinine(e.target.value)}
                          />
                          <em class="inline-block">mg/dL</em>

                          <span className={styles.cham}>
                            (표준 참고치 : 1.5 이하)
                          </span>
                        </div>
                        <div className={styles.inputContainer2}>
                          <p class={styles.label}>ㅡ 신사구체여과율(GFR)</p>
                          <input
                            type="text"
                            className={styles.ti_a1_1}
                            id="gfr"
                            name="gfr"
                            maxlength="3"
                            title="신사구체여과율(GFR) 입력"
                            value={gfr}
                            onChange={(e) => setGfr(e.target.value)}
                          />
                          <em className="inline-block">mL/min</em>
                          <span className={styles.cham}>
                            (표준 참고치 : 60 이상)
                          </span>
                        </div> */}
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button className={styles.registerButton} onClick={handleSubmit}>
          등록
        </button>
      </div>
    </div>
  );
};

export default Mymedicheck;
