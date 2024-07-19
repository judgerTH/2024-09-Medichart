import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../pages/korean.css";

function Translate() {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
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
                <Link to="/English" className="link">
                  -Eng
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
              <label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                ></input>

                <FontAwesomeIcon icon={faCloudArrowUp} className="upload" />
                <p>Drag file(s) here to upload or click to select file.</p>
              </label>
            </div>
            {file && (
              <div className="file-info">
                {file.type.startsWith("image/") && (
                  <img src={preview} alt="Preview" className="preview-image" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Translate;
