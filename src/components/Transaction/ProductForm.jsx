import React, { useState } from "react";
import "./ProductForm.scss";

const ProductForm = () => {
  const [targetAmount, setTargetAmount] = useState(""); // 목표 금액
  const [title, setTitle] = useState(""); // 제목
  const [image, setImage] = useState(""); // 이미지
  const [description, setDescription] = useState(""); // 설명
  // const [privatePrice, setPrivatePrice] = useState("");
  // const [publicPrice, setPublicPrice] = useState("");
  const [endDate, setEndDate] = useState(""); // 마지막 날짜

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-wrapper">
      <div className="top-contents">
        <div className="top-title">프로젝트 계획</div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="product-targetAmount">
          <p className="target">목표 금액</p>
          <p>상품의 최소 목표 금액을 설정해주세요.</p>
          <div className="amount-input">
            <span className="amount-inner">
              <input
                className="amount"
                type="text"
                placeholder="목표 금액을 입력해주세요"
                onChange={(e) => setTargetAmount(e.target.value)}
              ></input>
              원
            </span>
          </div>
        </div>
        <div className="product-title">
          <label htmlFor="title">제목</label>
          <div className="amount-input">
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="product-image">
          <label htmlFor="image">프로젝트 이미지</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="product-description">
          <label htmlFor="description">설명</label>
          <div className="amount-input">
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        {/* <div className="product-privatePrice">
          <label htmlFor="privatePrice">개인구매 가격</label>
          <div className="amount-input">
            <span className="amount-inner">
              <input
                className="amount"
                type="text"
                id="privatePrice"
                value={privatePrice}
                onChange={(e) => setPrivatePrice(e.target.value)}
              ></input>
              원
            </span>
          </div>
        </div>
        <div className="product-publicPrice">
          <label htmlFor="publicPrice">공동구매 가격</label>
          <div className="amount-input">
            <span className="amount-inner">
              <input
                className="amount"
                type="text"
                id="publicPrice"
                value={publicPrice}
                onChange={(e) => setPublicPrice(e.target.value)}
              />
              원
            </span>
          </div>
        </div> */}

        <div className="product-endDate">
          <label htmlFor="endDate">End date</label>
          <input
            type="datetime-local"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button className="submit-button" type="submit">제출</button>
      </form>
    </div>
  );
};

export default ProductForm;