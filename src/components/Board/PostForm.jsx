import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./PostForm.scss";

const PostForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const postData = { title, body };

  const saveBoard = async () => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/board`, postData)
      .then((res) => {
        alert("등록되었습니다.");
        navigate("/board");
      });
  };

  // 입력값이 비어있는지 확인하는 함수
  const isFormEmpty = () => {
    return title.trim() === "" || body.trim() === "";
  };

  const backToBoard = () => {
    navigate("/board");
  };

  return (
    <form className="post-form">
      <div>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="body">내용</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className="button-wrap">
        <button className="cancel-button" onClick={backToBoard} type="button">
          취소
        </button>
        <button
          className="submit-button"
          disabled={isFormEmpty()}
          onClick={saveBoard}
          type="submit"
        >
          글 작성 완료
        </button>
      </div>
    </form>
  );
};

export default PostForm;
