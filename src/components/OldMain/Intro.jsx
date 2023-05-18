import React from "react";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro">
      <h1
        style={{
          color: "black",
        }}
        className="intro-title"
      >
        CropSwipe는 안전하고 혁신적인 농산물 거래 방식을 통해 <br />
        농가와 소비자를 연결하여 농업 경쟁력을 강화하고 지역 커뮤니티를
        활성화합니다.
      </h1>

      <p className="intro-contents">
        CropSwipe는 물가 상승과 농가 수익성 저하로 인한 농산물 시장 구조의
        변화가 필요한 시점에서, 농산물 생산자와 소비자를 연결하여 보다 안전하고
        쉬운 농산물 거래를 제공합니다.
        <br />
        새로운 거래 방식과 더욱 안전한 구매를 통해 생산자와 소비자 모두에게 높은
        가치를 제공하며, 지역 커뮤니티 활성화와 농업 경쟁력 강화를 위한 다양한
        정보와 솔루션을 제공합니다.
        <br />
        CropSwipe와 함께하는 미래 농업, 지금 경험해보세요!
      </p>
    </div>
  );
};

export default Intro;
