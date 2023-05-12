import React, { useState } from "react";
import axios from "axios";
import "./PostForm.scss";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = { title, body };

    axios.post("/api/posts", postData).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
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
      <button type="submit">글쓰기</button>
    </form>
  );
};

export default PostForm;
