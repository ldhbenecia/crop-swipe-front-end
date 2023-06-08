import React from "react";
import "./Main.scss";

import exCard from "../../assets/images/whiteTitle3.jpeg";
import SimpleSlider from "./ImageSlider";


const Main = () => {
  return (
    <div className="HomeWrapper">
      <div className="FrontPage">
        <div className="FrontComponent">
          <SimpleSlider />
          <div className="popular">
            <div className="popularTitle">주목할만한 상품</div>
            <div className="projectList">
              <div className="projectWrapper">
                <div className="card-wrapper">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={exCard} alt="exCard" />
                    </div>
                    <div className="info-wrapper">
                      <dl>
                        <dd className="project-sub-info">
                          <span>농작물</span>
                        </dd>
                        <dt>설희관의농작물마술</dt>
                      </dl>
                      <div className="funding-status">
                        <span className="percentage">1011% 달성</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-wrapper">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={exCard} alt="exCard" />
                    </div>
                    <div className="info-wrapper">
                      <dl>
                        <dd className="project-sub-info">
                          <span>농작물</span>
                        </dd>
                        <dt>다른 프로젝트 제목</dt>
                      </dl>
                      <div className="funding-status">
                        <span className="percentage">800% 달성</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-wrapper">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={exCard} alt="exCard" />
                    </div>
                    <div className="info-wrapper">
                      <dl>
                        <dd className="project-sub-info">
                          <span>농작물</span>
                        </dd>
                        <dt>더 다른 프로젝트 제목</dt>
                      </dl>
                      <div className="funding-status">
                        <span className="percentage">1200% 달성</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-wrapper">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={exCard} alt="exCard" />
                    </div>
                    <div className="info-wrapper">
                      <dl>
                        <dd className="project-sub-info">
                          <span>농작물</span>
                        </dd>
                        <dt>마지막 프로젝트 제목</dt>
                      </dl>
                      <div className="funding-status">
                        <span className="percentage">500% 달성</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-wrapper">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={exCard} alt="exCard" />
                    </div>
                    <div className="info-wrapper">
                      <dl>
                        <dd className="project-sub-info">
                          <span>농작물</span>
                        </dd>
                        <dt>마지막 프로젝트 제목</dt>
                      </dl>
                      <div className="funding-status">
                        <span className="percentage">500% 달성</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-wrapper">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={exCard} alt="exCard" />
                    </div>
                    <div className="info-wrapper">
                      <dl>
                        <dd className="project-sub-info">
                          <span>농작물</span>
                        </dd>
                        <dt>마지막 프로젝트 제목</dt>
                      </dl>
                      <div className="funding-status">
                        <span className="percentage">500% 달성</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-wrapper">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={exCard} alt="exCard" />
                    </div>
                    <div className="info-wrapper">
                      <dl>
                        <dd className="project-sub-info">
                          <span>농작물</span>
                        </dd>
                        <dt>마지막 프로젝트 제목</dt>
                      </dl>
                      <div className="funding-status">
                        <span className="percentage">500% 달성</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-wrapper">
                  <div className="card">
                    <div className="image-wrapper">
                      <img src={exCard} alt="exCard" />
                    </div>
                    <div className="info-wrapper">
                      <dl>
                        <dd className="project-sub-info">
                          <span>농작물</span>
                        </dd>
                        <dt>마지막 프로젝트 제목</dt>
                      </dl>
                      <div className="funding-status">
                        <span className="percentage">500% 달성</span>
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

export default Main;
