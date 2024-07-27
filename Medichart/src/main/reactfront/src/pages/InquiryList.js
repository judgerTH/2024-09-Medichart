//1:1 문의내역 컴포넌트

//수정할 예정
import React from "react";
import "../pages/InquiryList.css";

const InquiryList = ({ inquiries }) => {
  return (
    <section className="inquiry-list">
      <h2>문의 내역</h2>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>문의 제목</th>
            <th>문의 내용</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{inquiry.title}</td>
              <td>{inquiry.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default InquiryList;
