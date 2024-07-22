// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloudArrowUp, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import Tesseract from "tesseract.js";
// import OpenAI from "openai";
// import "../pages/korean.css";

// //오픈 AI API 설정
// const openai = new OpenAI({
//   apiKey: process.env.REACT_APP_OPENAI_API_KEY, // 환경변수로 API 키 설정
//   dangerouslyAllowBrowser: true, //브라우저 환경에서 사용 허용(원래는 백엔드서버에서 하는게 나음)
// });

// function Korean() {
//   const [dragging, setDragging] = useState(false);
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState("");
//   const [ocrText, setOcrText] = useState("");
//   const [translatedText, setTranslatedText] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (file) {
//       const objectUrl = URL.createObjectURL(file);
//       setPreview(objectUrl); //이미지 파일 미리보기

//       //OCR을 통해 이미지에서 텍스트 추출
//       Tesseract.recognize(
//         objectUrl,
//         "eng", // 사용할 언어 설정
//         {
//           logger: (m) => console.log(m),
//           tessedit_char_whitelist:
//             "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.:-()",
//         }
//       ).then(({ data: { text } }) => {
//         setOcrText(text);
//         translateTextWithBackoff(text); // 추출된 텍스트 번역
//       });

//       return () => URL.revokeObjectURL(objectUrl);
//     }
//   }, [file]);

//   const translateTextWithBackoff = async (text, retries = 5) => {
//     console.log("번역할 텍스트: ", text); //번역할 텍스트 출력
//     try {
//       const response = await openai.chat.completions.create({
//         messages: [
//           {
//             role: "user",
//             content: `Translate the following text from English to Korean:\n\n${text}`,
//           },
//         ],
//         model: "gpt-3.5-turbo",
//         temperature: 0.5,
//       });
//       console.log("번역 응답:", response);
//       setTranslatedText(response.data.choices[0].message.content.trim());
//       setError(""); // 에러 초기화
//     } catch (error) {
//       if (error.response && error.response.status === 429 && retries > 0) {
//         console.error("번역 오류 (요청 과다):", error);
//         console.log(`대기 중... ${6 - retries}초 후에 다시 시도합니다.`);
//         setTimeout(
//           () => translateTextWithBackoff(text, retries - 1),
//           (6 - retries) * 1000
//         );
//       } else {
//         console.error("번역 오류:", error);
//         setError("번역 중 오류가 발생했습니다. 사용량을 초과했을 수 있습니다.");
//         if (error.response) {
//           console.error("번역 오류 응답 데이터: ", error.response.data);
//         }
//       }
//     }
//   };

//   const handleDragEnter = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragging(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragging(false);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragging(false);

//     const files = e.dataTransfer.files;
//     if (files && files.length > 0) {
//       setFile(files[0]);
//     }
//   };

//   const handleFileChange = (e) => {
//     const files = e.target.files;
//     if (files && files.length > 0) {
//       setFile(files[0]);
//     }
//   };

//   const handleRemoveFile = () => {
//     setFile(null);
//     setPreview("");
//     setOcrText("");
//     setTranslatedText("");
//   };
//   return (
//     <div className="container">
//       <div className="inner">
//         <div className="sectionLeft">
//           <h2>건강진단서 해석</h2>
//           <div id="line">
//             <ul>
//               <li>
//                 <Link to="/Korean" className="link">
//                   -한국어
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/English" className="link">
//                   -Eng
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/Chinese" className="link">
//                   -汉文
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="contents">
//           <div className="imgBox">
//             <div
//               className={`forUser ${dragging ? "dragging" : ""}`}
//               onDragEnter={handleDragEnter}
//               onDragLeave={handleDragLeave}
//               onDragOver={handleDragOver}
//               onDrop={handleDrop}
//             >
//               {!file && (
//                 <label>
//                   <input
//                     type="file"
//                     style={{ display: "none" }}
//                     onChange={handleFileChange}
//                   ></input>

//                   <FontAwesomeIcon icon={faCloudArrowUp} className="upload" />
//                   <p>Drag file(s) here to upload or click to select file.</p>
//                 </label>
//               )}
//             </div>
//             {file && (
//               <div className="file-info">
//                 {file.type.startsWith("image/") && (
//                   <div className="preview-container">
//                     <img
//                       src={preview}
//                       alt="Preview"
//                       className="preview-image"
//                     />
//                     <button
//                       onClick={handleRemoveFile}
//                       className="remove-button"
//                     >
//                       <FontAwesomeIcon icon={faTrashAlt} />
//                     </button>
//                   </div>
//                 )}
//                 {ocrText && (
//                   <div className="ocr-text">
//                     <h3>원본 텍스트:</h3>
//                     <p>{ocrText}</p>
//                   </div>
//                 )}
//                 {translatedText && (
//                   <div className="translated-text">
//                     <h3>번역된 텍스트:</h3>
//                     <p>{translatedText}</p>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Korean;
