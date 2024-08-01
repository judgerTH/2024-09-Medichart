import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./mymedicheck.module.css";

const AdminNoticeNew = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchNotice = async () => {
        try {
          const response = await axios.get(`/api/admin/notice/${id}`);
          const notice = response.data;
          setTitle(notice.title);
          setContent(notice.content);
          setIsEditing(true);
        } catch (error) {
          console.error("Failed to fetch notice", error);
          alert("공지사항을 가져오는 데 실패했습니다.");
        }
      };
      fetchNotice();
    } else {
      setIsEditing(false);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`/api/admin/notice/${id}`, { title, content });
        alert("공지사항이 수정되었습니다.");
      } else {
        await axios.post("/api/admin/notice", { title, content });
        alert("공지사항이 추가되었습니다.");
      }
      navigate("/admin/noticeList");
    } catch (error) {
      console.error("Failed to save notice", error);
      alert("공지사항 저장 실패");
    }
  };

  return (
    <section className={styles.noticeForm}>
      <h2>{isEditing ? "공지사항 수정" : "새 공지사항 작성"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isEditing ? "수정" : "제출"}</button>
      </form>
    </section>
  );
};

export default AdminNoticeNew;
