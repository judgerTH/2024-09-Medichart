import React, { useState } from "react";
import "../pages/Inquiry.css";
import InquiryList from "../pages/InquiryList";

const Inquiry = ({ addInquiry }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [inquiries, setInquiries] = useState([]); // 문의사항 리스트를 저장할 상태
  const [showList, setShowList] = useState(false); // 접수 내역 표시 상태

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      // 새로운 문의사항을 리스트에 추가
      setInquiries([...inquiries, { title, content }]);
      // 웹소켓 메시지 전송
      addInquiry(title, content);
      // 입력 필드 초기화
      setTitle("");
      setContent("");
      // 접수 내역 표시
      setShowList(true);
      alert("접수되었습니다.");
    } else {
      alert("제목과 내용을 모두 입력해주세요.");
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
