import React, { useState } from "react";
import "../pages/FAQ.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQ, faA } from "@fortawesome/free-solid-svg-icons";

const questions = [
  {
    question: "메디차트는 무슨 사이트인지 궁금합니다.",
    answer:
      "메디차트는 사용자의 건강을 위해 종합적인 서비스를 제공하는 플랫폼입니다.<br/>건강진단서 번역, 입력받은 사용자의 건강정보를 기반으로 한 질병 예측, 그리고 AI 챗봇 상담 기능을 통해 보다 편리하고 효율적인 건강 관리를 지원합니다.",
  },
  {
    question:
      "제가 의사한테 조직검사를 했는데 영어로 되어 있어요. 어떻게 할까요?",
    answer: "의사에게 ...",
  },
  {
    question: "질문이 뭐가있을까..",
    answer: "기록서를 ...",
  },
  {
    question: "메디차트는 무슨 사이트인지 궁금합니다",
    answer: "메디차트는 ...",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq">
      {questions.map((item, index) => (
        <div className="faq-item" key={index}>
          <button className="faq-question" onClick={() => handleToggle(index)}>
            <div className="question-content">
              <FontAwesomeIcon icon={faQ} />
              <span className="question-text">{item.question}</span>
            </div>
            <span
              className={`toggle-icon ${activeIndex === index ? "open" : ""}`}
            >
              &#9660;
            </span>
          </button>

          {activeIndex === index && (
            <div className="faq-answer">
              <span className="answer-prefix">
                {" "}
                <FontAwesomeIcon icon={faA} style={{ color: "#56AEFF" }} />{" "}
              </span>
              <span dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
