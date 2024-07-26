import React, { useState } from "react";
import FAQ from "./FAQ";
import Inquiry from "./Inquiry"; //1:1문의
import Notice from "./Notice"; // 공지사항
// import InquiryList from "./InquiryList"; //문의내역

import "../pages/CustomerService.css";

function Customer() {
  const [activeTab, setActiveTab] = useState("faq");

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
        {activeTab === "inquiry" && <Inquiry />}
        {activeTab === "notice" && <Notice />}
      </main>
    </div>
  );
}
export default Customer;
