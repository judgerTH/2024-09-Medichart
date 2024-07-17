import React, { useState } from "react";
import "./mymedicheck.module.css";

const Mymedicheck = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [waistInch, setWaistInch] = useState("");
  const [bmi, setBmi] = useState("");
  const [systolicBP, setSystolicBP] = useState("");
  const [diastolicBP, setDiastolicBP] = useState("");
  const [bloodSugar, setBloodSugar] = useState("");
  const [totalCholesterol, setTotalCholesterol] = useState("");
  const [ldlCholesterol, setLdlCholesterol] = useState("");
  const [triglycerides, setTriglycerides] = useState("");
  const [hdlCholesterol, setHdlCholesterol] = useState("");

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

  return (
    <div className="inner">
      <div className="title">비만도 측정</div>

      <div className="cont-area pt00">
        <div
          className="row-table v1 box-in-table"
          data-title="비만도 측정 입력"
        >
          <table>
            <colgroup>
              <col width="55%" />
              <col width="45%" />
            </colgroup>
            <tbody>
              <tr>
                <td colSpan="2">
                  ※ 신장, 체중, 허리둘레 정보를 입력해 주십시오
                </td>
              </tr>
              <tr>
                <td>
                  <p className="tit pb10">신장</p>
                  <input
                    type="text"
                    className="input-text imp w200px"
                    id="heightVl"
                    name="heightVl"
                    maxLength="5"
                    placeholder="신장을 입력해주세요."
                    title="신장 입력"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    onBlur={calculateBmi}
                  />
                  <em className="dash ml10">cm</em>
                </td>
                <td>
                  <p className="tit pb10">체중</p>
                  <input
                    type="text"
                    className="input-text imp"
                    id="weightVl"
                    name="weightVl"
                    maxLength="5"
                    placeholder="체중을 입력해주세요."
                    title="체중 입력"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    onBlur={calculateBmi}
                  />
                  <em className="dash ml10">kg</em>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="tit pb10">허리둘레</p>
                  <input
                    type="text"
                    className="input-text imp w200px"
                    id="waistVl"
                    name="waistVl"
                    maxLength="5"
                    placeholder="허리둘레를 입력해주세요."
                    title="허리둘레 입력"
                    value={waist}
                    onChange={(e) => setWaist(e.target.value)}
                    onBlur={() => convertWaistToInch(waist)}
                  />
                  <em className="dash ml10">cm</em>
                  <input
                    type="text"
                    className="input-text w70px ml20"
                    id="waistVlInch"
                    maxLength="3"
                    readOnly
                    title="인치 입력"
                    value={waistInch}
                  />
                  <em className="dash ml10">inch</em>
                </td>
                <td>
                  <p className="tit pb10">체질량지수 (BMI)</p>
                  <input
                    type="text"
                    className="input-text"
                    readOnly
                    id="bmi"
                    title="체질량지수 (BMI) 입력"
                    value={bmi}
                  />
                  <em className="dash ml10">kg/m²</em>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="medi_request_02" className="tit-area">
        검진결과 확인 및 질병예측
      </div>

      <div className="cont-area">
        <div
          className="row-table v1 box-in-table"
          data-title="검진결과 확인 및 질병예측 입력"
        >
          <table>
            <caption>
              검진결과 확인 및 질병예측 입력의 항목으로 구성된 표입니다.
            </caption>
            <colgroup>
              <col />
            </colgroup>
            <tbody>
              <tr>
                <td>
                  ※ 고혈압, 당뇨, 이상지질혈증, 동맥경화 등의 질환 정보를 입력해
                  주십시오.
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-wrap box-in-table">
                    <p className="tit">고혈압</p>
                    <p className="line">
                      <em className="txt">수축기 혈압</em>
                      <input
                        type="text"
                        className="input-text"
                        id="systcBpVl"
                        name="systcBpVl"
                        maxLength="3"
                        title="수축기 혈압 입력"
                        value={systolicBP}
                        onChange={(e) => setSystolicBP(e.target.value)}
                      />
                      <span className="inline-block">
                        mmHg (표준 참고치 : 120미만)
                      </span>
                    </p>
                    <p className="line">
                      <em className="txt">이완기 혈압</em>
                      <input
                        type="text"
                        className="input-text"
                        id="distcBpVl"
                        name="distcBpVl"
                        maxLength="3"
                        title="이완기 혈압 입력"
                        value={diastolicBP}
                        onChange={(e) => setDiastolicBP(e.target.value)}
                      />
                      <span className="inline-block">
                        mmHg (표준 참고치 : 80미만)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-wrap box-in-table">
                    <p className="tit">당뇨병</p>
                    <p className="line">
                      <em className="txt">공복혈당</em>
                      <input
                        type="text"
                        className="input-text"
                        id="empstoBdsgVl"
                        name="empstoBdsgVl"
                        maxLength="3"
                        title="공복혈당 입력"
                        value={bloodSugar}
                        onChange={(e) => setBloodSugar(e.target.value)}
                      />
                      <span className="inline-block">
                        mmHg (표준 참고치 : 100미만)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-wrap box-in-table">
                    <p className="tit">고혈압, 이상지질혈증, 동맥경화</p>
                    <p className="line">
                      <em className="txt">총 콜레스테롤</em>
                      <input
                        type="text"
                        className="input-text"
                        id="totClstrVl"
                        name="totClstrVl"
                        maxLength="3"
                        title="총 콜레스테롤 입력"
                        value={totalCholesterol}
                        onChange={(e) => setTotalCholesterol(e.target.value)}
                      />
                      <span className="inline-block">
                        mg/dL (표준 참고치 : 200미만)
                      </span>
                    </p>
                    <p className="line">
                      <em className="txt">LDL-콜레스테롤</em>
                      <input
                        type="text"
                        className="input-text"
                        id="ldlClstrVl"
                        name="ldlClstrVl"
                        maxLength="3"
                        title="LDL-콜레스테롤 입력"
                        value={ldlCholesterol}
                        onChange={(e) => setLdlCholesterol(e.target.value)}
                      />
                      <span className="inline-block">
                        mg/dL (표준 참고치 : 130미만)
                      </span>
                    </p>
                    <p className="line">
                      <em className="txt">중성지방</em>
                      <input
                        type="text"
                        className="input-text"
                        id="tgClstrVl"
                        name="tgClstrVl"
                        maxLength="3"
                        title="중성지방 입력"
                        value={triglycerides}
                        onChange={(e) => setTriglycerides(e.target.value)}
                      />
                      <span className="inline-block">
                        mg/dL (표준 참고치 : 150미만)
                      </span>
                    </p>
                    <p className="line">
                      <em className="txt">HDL-콜레스테롤</em>
                      <input
                        type="text"
                        className="input-text"
                        id="hdlClstrVl"
                        name="hdlClstrVl"
                        maxLength="3"
                        title="HDL-콜레스테롤 입력"
                        value={hdlCholesterol}
                        onChange={(e) => setHdlCholesterol(e.target.value)}
                      />
                      <span className="inline-block">
                        mg/dL (표준 참고치 : 60이상)
                      </span>
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mymedicheck;
