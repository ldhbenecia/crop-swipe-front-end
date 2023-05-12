import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./FreeBoard.scss";

const FreeBoard = () => {
  const [posts, setPosts] = useState([]);

  // 임시 API 사용해서 구성
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="board_wrapper">
      <div className="board_title">
        <h1>CropSwipe 자유게시판</h1>
        <p>임시 자유게시판입니다.</p>
        <div className="bt_wrap">
          <Link to="/postform" className="write">글쓰기</Link>
        </div>
      </div>
      <div className="board_list_wrap">
        <div className="board_list">
          <div className="top">
            <div className="post_num">번호</div>
            <div className="post_title">제목</div>
          </div>
          <div className="post_wrap">
            {posts.map((post) => (
              <li className="post_list" key={post.id}>
                <span className="post_num">{post.id}</span>
                <Link to={`/post/${post.id}`} className="post_title">
                  {post.title}
                </Link>
              </li>
            ))}
          </div>
          <div className="num"></div>
        </div>
      </div>
    </div>
  );
};

export default FreeBoard;
