import React from "react";
import "./Detail.scss";
import projectImage from "../../assets/images/cover.jpeg";

const Detail = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects-container">
        <div className="main-titlebox">
          <h1 className="main-title">푸른 날개 옷 '청릭', 새로운 답호 철릭</h1>
        </div>

        <div className="cover">
          <img
            src={projectImage}
            alt="프로젝트 커버 이미지"
            className="cover-image"
          ></img>

          <aside className="projects-info">
            <section className="high-section">
              <div className="info-item">
                <div className="info-label">모인 금액</div>
                <div className="info-value">56,073,000원</div>
              </div>
              <div className="info-item">
                <div className="info-label">남은 시간</div>
                <div className="info-value">8일</div>
              </div>
              <div className="info-item">
                <div className="info-label">후원자</div>
                <div className="info-value">226명</div>
              </div>
            </section>

            <div className="low-div">
              <section className="low-section">
                <dl className="info-small-item">
                  <dt className="info-small-label">목표 금액</dt>
                  <dd className="info-small-value">2,000,000원</dd>
                </dl>
                <dl className="info-small-item">
                  <dt className="info-small-label">펀딩 기간</dt>
                  <dd className="info-small-value">2023.08.07 ~ 2023.08.15</dd>
                </dl>
                <dl className="info-small-item">
                  <dt className="info-small-label">결제</dt>
                  <dd className="info-small-value">
                    목표 금액 달성시 2023.08.16에 결제 진행
                  </dd>
                </dl>
              </section>
            </div>

            <div className="projects-button">
              <button className="support-button">이 프로젝트 후원하기</button>
            </div>
          </aside>
        </div>

        <div className="projects-contents">
          <div className="projects-width">
            <div className="projects-padding">
              <div className="projects-intro">프로젝트 소개</div>
              <div className="projects-content">프로젝트 내용</div>
            </div>
            <div className="projects-right">
              <div className="right-container">
                <div className="right-head">선물 선택</div>
                <div className="right-card">
                  <div className="right-card-style">
                    <div className="right-card-inner">
                      <div className="right-card-inner2">
                        <div className="sub-wrapper">
                          <div className="card-price">1,000원 +</div>
                          <div className="card-description">
                            선물 없이 후원하기
                          </div>
                          <div className="card-inline"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right-card">
                  <div className="right-card-style">
                    <div className="right-card-inner">
                      <div className="right-card-inner2">
                        <div className="sub-wrapper">
                          <div className="card-price">1,000원 +</div>
                          <div className="card-description">
                            선물 없이 후원하기
                          </div>
                          <div className="card-inline"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right-card">
                  <div className="right-card-style">
                    <div className="right-card-inner">
                      <div className="right-card-inner2">
                        <div className="sub-wrapper">
                          <div className="card-price">1,000원 +</div>
                          <div className="card-description">
                            선물 없이 후원하기
                          </div>
                          <div className="card-inline"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right-card">
                  <div className="right-card-style">
                    <div className="right-card-inner">
                      <div className="right-card-inner2">
                        <div className="sub-wrapper">
                          <div className="card-price">1,000원 +</div>
                          <div className="card-description">
                            선물 없이 후원하기
                          </div>
                          <div className="card-inline"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
