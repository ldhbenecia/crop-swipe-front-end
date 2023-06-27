import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../../recoil/authState";
import "./QnABoard.scss";

const QnABoard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const isLoggedIn = useRecoilValue(isLoggedInState);

  // 게시글 조회
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/post/posts`)
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  const handleWriteButton = () => {
    if (!isLoggedIn) {
      alert("글쓰기 권한이 없습니다.");
      navigate("/signin"); 
    } else {
      navigate("/postform");
    }
  };


  return (
    <div className="board_wrapper">
      <div className="board_title">
        <h1>CropSwipe Q&A게시판</h1>
        <p>Q&A게시판입니다.</p>
        <div className="bt_wrap">
          <button className="qna-write-button" onClick={handleWriteButton}>
            글쓰기
          </button>
        </div>
      </div>
      <div className="board_list_wrap">
        <div className="board_list">
          <div className="top">
            <div className="post_num">번호</div>
            <div className="post_title">제목</div>
            <div className="post_writer">작성자</div>
          </div>
          <div className="post_wrap">
            {posts.map((post) => (
              <li className="post_list" key={post.id}>
                <span className="post_num">{post.id}</span>
                <Link to={`/post/${post.id}`} className="post_title">
                  {post.title}
                </Link>
                <span className="post_writer">{post.author.nickname}</span>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnABoard;
