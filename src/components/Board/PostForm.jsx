import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./PostForm.scss";
axios.defaults.withCredentials = true;
const PostForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postData = { title, content };

  const saveBoard = async () => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/post/posts`, postData)
      .then((response) => {
        alert("등록되었습니다.");
        navigate("/board");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 입력값이 비어있는지 확인하는 함수
  const isFormEmpty = () => {
    return title.trim() === "" || content.trim() === "";
  };

  const backToBoard = () => {
    navigate("/board");
  };

  return (
    <form className="post-form" method="POST">
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
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
          type="button"
        >
          글 작성 완료
        </button>
      </div>
    </form>
  );
};

export default PostForm;
