import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PostView.scss";
import { useParams } from "react-router-dom";

const PostView = () => {
  const [data, setData] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setData(response.data);
      });
  }, [postId]);

  return (
    <div>
      <h2 align="center">게시글 상세정보</h2>
      <div className="voc-view-wrapper">
        <div className="voc-view-row">
          <label>게시글 번호</label>
          <label>{data.id}</label>
        </div>
        <div className="voc-view-row">
          <label>제목</label>
          <label>{data.title}</label>
        </div>
        <div className="voc-view-row">
          <label>내용</label>
          <div>{data.body}</div>
        </div>
      </div>
    </div>
  );
};

export default PostView;
