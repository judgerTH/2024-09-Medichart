import React, { useState } from "react";
import "../pages/FAQ.css";

const questions = [
  {
    question: "메디차트는 무슨 사이트인지 궁금합니다",
    answer: "메디차트는 ...",
  },
  {
    question:
      "제가 의사한테 조직검사를 했는데 영어로 되어 있어요. 어떻게 할까요?",
    answer: "의사에게 ...",
  },
  {
    question: "메디차트 기록서를 다운로드 하고 싶어요!",
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
      <h2>자주 묻는 질문</h2>
      {questions.map((item, index) => (
        <div className="faq-item" key={index}>
          <button className="faq-question" onClick={() => handleToggle(index)}>
            {item.question}
          </button>
          <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
