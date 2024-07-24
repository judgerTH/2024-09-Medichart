import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../pages/korean.css";

function Korean() {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [originalText, setOriginalText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      const formData = new FormData();
      formData.append("image", file);
      formData.append("language", "ko"); // 예시로 한국어로 설정

      // Axios POST 요청
      axios
        .post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setOriginalText(response.data.uploadedText);
          setTranslatedText(response.data.translatedText);
        })
        .catch((error) => {
          if (error.response) {
            console.error("Error response:", error.response.data);
          } else if (error.request) {
            console.error("Error request:", error.request);
          } else {
            console.error("Error message:", error.message);
          }
        });

      return () => URL.revokeObjectURL(objectUrl); // 메모리 해제
    }
  }, [file]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreview("");
    setOriginalText("");
    setTranslatedText("");
  };

  return (
    <div className="container">
      <div className="inner">
        <div className="sectionLeft">
          <h2>건강진단서 해석</h2>
          <div id="line">
            <ul>
              <li>
                <Link to="/Korean" className="link">
                  -한국어
                </Link>
              </li>
              <li>
                <Link to="/Japanese" className="link">
                  -日本語
                </Link>
              </li>
              <li>
                <Link to="/Chinese" className="link">
                  -汉文
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="contents">
          <div className="imgBox">
            <div
              className={`forUser ${dragging ? "dragging" : ""}`}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {!file && (
                <label>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <FontAwesomeIcon icon={faCloudArrowUp} className="upload" />
                  <p>Drag file(s) here to upload or click to select file.</p>
                </label>
              )}
            </div>
            {file && (
              <div className="file-info">
                {file.type.startsWith("image/") && (
                  <div className="preview-container">
                    <img
                      src={preview}
                      alt="Preview"
                      className="preview-image"
                    />
                    <button
                      onClick={handleRemoveFile}
                      className="remove-button"
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </div>
                )}
                <div style={{ marginBottom: "50px" }}>
                  {originalText && (
                    <div className="ocr-text">
                      <h3>원본 텍스트:</h3>
                      <p>{originalText}</p>
                    </div>
                  )}
                  {translatedText && (
                    <div className="translated-text">
                      <h3>번역된 텍스트:</h3>
                      <p>{translatedText}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Korean;
