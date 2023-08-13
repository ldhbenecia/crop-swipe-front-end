import React, { useState } from "react";
import "./ProductStart.scss";

import leftContents from "../../assets/images/envir/start-left1.jpg";
import { isLoggedInState } from "../../recoil/authState";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductStart = () => {
  const category = [
    "과일",
    "채소",
    "수산물 · 건해산",
    "정육",
    "쌀 · 잡곡 · 견과",
    "우유 · 유제품",
    "크롭",
    "스와이프",
  ];

  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [activeButton, setActiveButton] = useState(null);

  const [title, setTitle] = useState(""); // 제목
  const [description, setDescription] = useState(""); // 설명
  const [targetAmount, setTargetAmount] = useState(""); // 목표 금액
  const [image, setImage] = useState(""); // 이미지
  const [endDate, setEndDate] = useState(""); // 마지막 날짜

  const navigate = useNavigate();

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const handleDisabledButton = () => {
    if (activeButton === null || !description) {
      return true; // activeButton이 null이거나 textarea 값이 비어 있을 때는 버튼을 비활성화
    }
    return false; // 그 외의 경우에는 버튼을 활성화
  };

  const projectData = {
    category: category[activeButton],
    title: title,
    project_pic1: image,
    description: description,
    goal_amount: parseInt(targetAmount),
    end_date: endDate,
  };

  const handleSubmit = async () => {
    try {
      if (!isLoggedIn) {
        alert("글쓰기 권한이 없습니다.");
        navigate("/signin");
      }

      console.log(projectData);
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/crop/projects`, projectData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        navigate("/productpostform");
      } else {
        console.error("프로젝트 생성에 실패했습니다.");
      }
    } catch (error) {
      console.error("오류가 발생했습니다:", error);
    }
  };


  return (
    <div className="start-wrapper">
      <div className="left-contents">
        <img src={leftContents} alt="Left Content" />
      </div>
      <div className="right-contents">
        <div className="right-wrap">
          <div className="contents">
            <h2>
              멋진 아이디어가 있으시군요!
              <br />
              어떤 프로젝트를 계획 중이신가요?
            </h2>
            <p>카테고리를 선택해주세요.</p>
            <div className="category-wrap">
              <ul className="categoryList">
                {category.map((button, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      className={activeButton === index ? "active" : ""}
                      onClick={() => handleButtonClick(index)}
                    >
                      {button}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="contents">
              <h2>프로젝트를 소개해주세요.</h2>
              <p>편하게 적어주세요.</p>
              <div className="summary-wrap">
                <input
                  type="text"
                  placeholder="간단한 제목을 입력해주세요."
                  className="titleInput"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
                <textarea
                  className="textareas"
                  placeholder="간단하게 프로젝트 요약을 입력해주세요."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <input
                  className="amount"
                  type="text"
                  placeholder="목표 금액을 입력해주세요"
                  onChange={(e) => setTargetAmount(e.target.value)}
                ></input>

                <div>
                  <label className="input-file-button" htmlFor="image">프로젝트 이미지 업로드</label>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    className="input-file"
                    placeholder="파일 선택"
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="endDate">End date</label>
                  <input
                    type="datetime-local"
                    id="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>

                <div className="next">
                  <button
                    className="next-button"
                    disabled={handleDisabledButton()}
                    onClick={handleSubmit}
                  >
                    다음
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStart;
