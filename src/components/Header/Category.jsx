import React from "react";
import "./Category.scss";

const Category = () => {
  return (
    <header className="category">
      <div className="category-in">
        <div className="search-bar">
          <input
            className="search"
            type="text"
            placeholder="검색어를 입력해주세요."
          ></input>
          <div className="search-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  opacity="0.1"
                  d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  fill="#323232"
                ></path>{" "}
                <path
                  d="M17 17L21 21"
                  stroke="#323232"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#323232"
                  strokeWidth="2"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Category;
