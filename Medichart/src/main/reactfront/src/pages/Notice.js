import React, { useState } from "react";
import "../pages/Notice.css";

const notices = [
  {
    title: "공지사항 1",
    date: "2024-07-22",
    content: "공지사항 내용 1",
  },
  {
    title: "공지사항 2",
    date: "2024-07-23",
    content: "공지사항 내용 2...",
  },
  {
    title: "공지사항 3",
    date: "2024-07-24",
    content: "공지사항 내용 3...",
  },
];

const Notice = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="notice">
      <h2>공지사항</h2>
      <table className="notice-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((item, index) => (
            <React.Fragment key={index}>
              <tr onClick={() => handleToggle(index)} className="notice-header">
                <td>{index + 1}</td>
                <td className="notice-title">{item.title}</td>
                <td className="notice-date">{item.date}</td>
              </tr>
              {activeIndex === index && (
                <tr>
                  <td colSpan="3" className="notice-content">
                    {item.content}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default Notice;
