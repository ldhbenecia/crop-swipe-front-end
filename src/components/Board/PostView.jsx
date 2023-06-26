import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PostView.scss";

const PostView = () => {
  const [postData, setPostData] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/post/posts/${postId}`)
      .then((response) => {
        setPostData(response.data);
        console.log(response.data)
      });
  }, [postId]); // postId가 변경될 때마다 (각 해당하는 게시글을 들어갈 때마다)

  console.log(postData);
  return (
    <div>
      <h2 align="center">게시글 상세정보</h2>
      {postData.post && (
        <div className="voc-view-wrapper">
          <div className="voc-view-row">
            <label>게시글 번호</label>
            <label>{postData.post.id}</label>
          </div>
          <div className="voc-view-row">
            <label>제목</label>
            <label>{postData.post.title}</label>
          </div>
          <div className="voc-view-row">
            <label>내용</label>
            <div>{postData.post.content}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostView;
