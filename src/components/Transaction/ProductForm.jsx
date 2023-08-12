import React, { useState } from "react";
import "./ProductForm.scss";
import leftContents from "../../assets/images/envir/start-left2.jpg";

const ProductForm = () => {
  const [price, setPrice] = useState(""); // 가격
  const [price2, setPrice2] = useState(""); // 가격
  const [price3, setPrice3] = useState(""); // 가격
  const [title, setTitle] = useState(""); // 제목
  const [description, setDescription] = useState(""); // 설명

  const handleSubmit = (e) => {
    e.preventDefault();
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
              프로젝트에 대한 가격 정보를 등록합니다.
              <br />
              가격은 얼마로 생각하고 계시나요?
            </h2>
            <p>가격을 입력해주세요.</p>
            <input
              className="amount"
              type="text"
              placeholder="가격을 입력해주세요"
              onChange={(e) => setPrice(e.target.value)}
            ></input>
            <input
              className="amount"
              type="text"
              placeholder="가격을 입력해주세요"
              onChange={(e) => setPrice2(e.target.value)}
            ></input>
            <input
              className="amount"
              type="text"
              placeholder="가격을 입력해주세요"
              onChange={(e) => setPrice3(e.target.value)}
            ></input>

            <div className="contents">
              <h2>프로젝트를 소개해주세요.</h2>
              <p>편하게 적어주세요.</p>
              <div className="summary-wrap">
                <input
                  type="text"
                  placeholder="프로젝트 제목을 입력해주세요."
                  className="titleInput"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
                <textarea
                  className="textareas"
                  placeholder="프로젝트 설명을 입력해주세요."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <div className="next">
                  <button className="next-button" onClick={handleSubmit}>
                    제출
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

export default ProductForm;
