import React, { useState, useContext, useEffect } from "react";
import FAQ from "./FAQ";
import Inquiry from "./Inquiry"; // 1:1 문의
import Notice from "./Notice"; // 공지사항
import { WebSocketContext } from "../components/WebSocketProvider"; // 웹소켓 컨텍스트 가져오기
import "../pages/CustomerService.css";

function CustomerService() {
  const [activeTab, setActiveTab] = useState("faq");
  const [messages, setMessages] = useState([]);
  const [inquiryContent, setInquiryContent] = useState("");

  const { userSocket, adminSocket } = useContext(WebSocketContext);

  useEffect(() => {
    if (adminSocket) {
      adminSocket.onmessage = (event) => {
        setMessages(prevMessages => [...prevMessages, event.data]);
      };
    }
    return () => {
      if (adminSocket) {
        adminSocket.close();
      }
    };
  }, [adminSocket]);

  const handleSubmitInquiry = (content) => {
    if (userSocket) {
      userSocket.send(content);
      setInquiryContent(""); // 폼 리셋
    }
  };

  return (
      <div className="customer_top">
        <main>
          <div className="banner"></div>
          <nav className="tabs">
            <h2
                onClick={() => setActiveTab("faq")}
                className={activeTab === "faq" ? "active" : ""}
            >
              자주 묻는 질문
            </h2>
            <h2
                onClick={() => setActiveTab("inquiry")}
                className={activeTab === "inquiry" ? "active" : ""}
            >
              1:1 문의
            </h2>
            <h2
                onClick={() => setActiveTab("notice")}
                className={activeTab === "notice" ? "active" : ""}
            >
              공지사항
            </h2>
          </nav>
          {activeTab === "faq" && <FAQ />}
          {activeTab === "inquiry" && (
              <>
                <Inquiry
                    addInquriy={(content) => handleSubmitInquiry(content)}
                />
                <div className="inquiry-messages">
                  <h3>Recent Messages:</h3>
                  <ul>
                    {messages.map((msg, index) => (
                        <li key={index}>{msg}</li>
                    ))}
                  </ul>
                </div>
              </>
          )}
          {activeTab === "notice" && <Notice />}
        </main>
      </div>
  );
}

export default CustomerService;
