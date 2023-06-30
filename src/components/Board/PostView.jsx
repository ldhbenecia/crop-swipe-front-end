import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../../recoil/authState";
import axios from "axios";

import MainHeader from "../Header/MainHeader";
import "./PostView.scss";

const PostView = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({}); // 게시글 상세 정보
  const [comment, setComment] = useState(""); // 댓글
  const [comments, setComments] = useState([]); // 댓글 리스트
  const [editCommentId, setEditCommentId] = useState(null); // 수정 댓글 Id 판단
  const [updatedCommentContent, setUpdatedCommentContent] = useState(""); // 수정 내용 관리
  const { postId } = useParams();
  const isLoggedIn = useRecoilValue(isLoggedInState);

  // 해당 게시글 정보 가져오기
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/post/posts/${postId}`)
      .then((response) => {
        setPostData(response.data);
        console.log(response.data);
      });
  }, [postId]);

  // 해당 게시글의 댓글 가져오기
  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/post/posts/${postId}/comments`
        );
        setComments(response.data.comments);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getComments();
  }, [postId]);

  const handleWriteButton = () => {
    if (!isLoggedIn) {
      alert("글쓰기 권한이 없습니다.");
      navigate("/signin");
    } else {
      navigate("/postform");
    }
  };

  // 댓글Id를 통해 수정할 댓글 선정
  const isEditableComment = (commentId) => {
    return editCommentId === commentId;
  };

  // 수정할 댓글 Id, 내용 설정
  const handleCommentEdit = (commentId, content) => {
    setEditCommentId(commentId);
    setUpdatedCommentContent(content);
  };

  // 댓글 수정
  const handleCommentUpdate = async (commentId, updatedContent) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_API_URL}/api/v1/post/posts/${postId}/comments/${commentId}`,
        { content: updatedContent }
      );
      alert("댓글이 수정되었습니다.");
      setEditCommentId(null);
      setUpdatedCommentContent("");
      // 수정 후 최신 댓글 목록 가져오기
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/post/posts/${postId}/comments`
      );
      setComments(response.data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  // 댓글 삭제
  const handleCommentDelete = async (commentId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/v1/post/posts/${postId}/comments/${commentId}`
      );
      alert("댓글이 삭제되었습니다.");
      // 삭제 후 최신 댓글 목록 가져오기
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/post/posts/${postId}/comments`
      );
      setComments(response.data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  // 댓글 등록
  const handleCommentRegister = async (event) => {
    event.preventDefault();
    if (!isLoggedIn) {
      alert("댓글 권한이 없습니다.");
      navigate("/signin");
    } else {
      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/api/v1/post/posts/${postId}/comments`,
          { content: comment }
        );
        alert("댓글이 등록되었습니다.");
        setComment("");
        // 등록 후 최신 댓글 목록 가져오기
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/post/posts/${postId}/comments`
        );
        setComments(response.data.comments);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <MainHeader />
      <div className="qna-title">Q&A</div>
      {postData.post && (
        <div className="qna-post-wrapper">
          <div className="qna-post-title">
            <p>{postData.post.title}</p>
          </div>
          <div className="qna-post-subtitle">
            <p>{postData.post.author.nickname}</p>
            <p className="qna-created_at">{postData.post.created_at}</p>
          </div>
          <div className="qna-post-view">
            <p>{postData.post.content}</p>
          </div>
        </div>
      )}
      <div className="qna-back">
        <button className="qna-post-list">글 목록</button>
        <button className="qna-post-write" onClick={handleWriteButton}>
          글쓰기
        </button>
      </div>
      <form className="comment-wrapper" method="POST">
        <input
          type="text"
          placeholder="댓글을 입력해주세요."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="comment-register-button"
          onClick={handleCommentRegister}
        >
          등록
        </button>
      </form>
      <div className="comment-view">
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <div className="comment-wrapper">
              <div className="comment-user">
                <p>{comment.author.nickname}</p>
                <p className="comment-created">{comment.created_at}</p>
              </div>
              <div className="comment-edit-delete-button">
                {isEditableComment(comment.id) ? (
                  <button
                    className="comment-update-button"
                    onClick={() =>
                      handleCommentUpdate(comment.id, updatedCommentContent)
                    }
                  >
                    수정 완료
                  </button>
                ) : (
                  isLoggedIn && (
                    <button
                      className="comment-edit-button"
                      onClick={() =>
                        handleCommentEdit(comment.id, comment.content)
                      }
                    >
                      수정
                    </button>
                  )
                )}
                {isLoggedIn && (
                  <button
                    className="comment-delete-button"
                    onClick={() => handleCommentDelete(comment.id)}
                  >
                    삭제
                  </button>
                )}
              </div>
            </div>
            <div className="comment-detail">
              {isEditableComment(comment.id) ? (
                <input
                  type="text"
                  value={updatedCommentContent}
                  onChange={(e) => setUpdatedCommentContent(e.target.value)}
                />
              ) : (
                <p>{comment.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostView;
