import React from "react";
import styles from "./privacyModal.module.css";

function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h1>개인정보처리방침</h1>
        <p>
          개인정보처리방침 내용을 작성 필요 개인정보처리방침 내용을 작성 필요
          개인정보처리방침 내용을 작성 필요 개인정보처리방침 내용을 작성 필요
          개인정보처리방침 내용을 작성 필요 개인정보처리방침 내용을 작성 필요
          개인정보처리방침 내용을 작성 필요 개인정보처리방침 내용을 작성 필요
        </p>
      </div>
    </div>
  );
}

export default PrivacyModal;
