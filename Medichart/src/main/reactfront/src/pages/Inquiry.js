import React, { useState } from "react";
import "../pages/Inquiry.css";

const Inquiry = ({ addInquriy }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      // 상위 컴포넌트의 addInquriy 함수 호출
      addInquriy(`Title: ${title}, Content: ${content}`);
      alert("접수되었습니다.");
      setTitle("");
      setContent("");
    }
  };

  return (
      <section className="inquiry">
        <h2>1:1 문의</h2>
        <form className="inquiry-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">
              문의 제목
              <span style={{ color: "red", marginLeft: "5px" }}>*</span>
            </label>
            <input
                type="text"
                id="title"
                name="title"
                placeholder="제목을 입력해주세요"
                required
                value={title}
                onChange={handleTitleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">
              문의 내용
              <span style={{ color: "red", marginLeft: "5px" }}>*</span>
            </label>
            <textarea
                id="content"
                name="content"
                placeholder="내용을 입력해주세요"
                required
                value={content}
                onChange={handleContentChange}
                className="content-textarea"
            ></textarea>
          </div>
          <button type="submit">접수</button>
        </form>
      </section>
  );
};

export default Inquiry;
