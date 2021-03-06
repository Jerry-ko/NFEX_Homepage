import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

const Container = styled.div``;

const Wrap = styled.div`
  padding-top: 130px;
`;

const Section = styled.section`
  text-align: center;
  .title {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .desc {
    font-size: 22px;
    line-height: 32px;
    color: #151439;
    opacity: 40%;
  }
`;

const Article = styled.article`
  margin-top: 62px;

  .top-item,
  .bottom-item {
    display: flex;
    justify-content: center;
  }

  .bottom-item {
    margin-top: 20px;
  }

  .item {
    &:nth-child(1),
    &:nth-child(3) {
      margin-right: 20px;
    }

    .imgBox {
      width: 446px;
      height: 303px;
      overflow: hidden;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .text {
      padding: 51px 55px;
      border: 2px solid #ebeaed;
      width: 446px;
      height: 289.18px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      box-shadow: 0px 5px 5px #ebeaed;

      .title {
        font-size: 20px;
        color: #1e0e62;
      }

      .desc {
        font-size: 18px;
        line-height: 26px;
      }
    }
  }
`;

const Keyword = styled.div`
  margin-top: 146px;
  margin-bottom: 166px;
  display: flex;
  justify-content: space-between;
  width: 1200px;

  .keyword_item {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 24px;
      line-height: 46px;
      font-weight: 700;
      margin-top: 24px;
      margin-bottom: 20px;
    }
    img {
      margin-left: 40px;
    }

    &:nth-child(1) {
      img {
        width: 114px;
        margin-top: 5px;
      }
    }

    &:nth-child(2) {
      img {
        width: 91px;
      }
    }

    &:nth-child(3) {
      img {
        width: 118px;
        margin-top: 8.8px;
      }
    }

    span {
      color: #696871;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      width: 320px;
    }
  }
`;

const Nfex = () => {
  return (
    <Container>
      <Element name="nfex">
        <Wrap>
          <Section>
            <div className="title">????????????</div>
            <div className="desc">
              We are creating a financial environment where anyone can invest
              easily
              <br />
              and effectively.
            </div>
            <Article>
              <div className="top-item">
                <div className="item">
                  <div className="imgBox">
                    <img
                      src="/assets/img/nfex/img_coreValue.png"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <div className="title">CORE VALUE</div>
                    <div className="desc">
                      ????????? ???????????? ??????, ?????? ?????? ??? ??????
                      <br />
                      ?????? ?????? ??????????????? ????????? ????????? ???<br />??? ?????????
                      ???????????? ???????????????.
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="imgBox">
                    <img
                      src="/assets/img/nfex/img_whoYouAre.png"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <div className="title">WHO WE ARE</div>
                    <div className="desc">
                      NFEX??? ?????? ?????? ????????? ??????
                      <br /> ???????????? ?????? ???????????? ????????????
                      <br /> ???????????????.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bottom-item">
                <div className="item">
                  <div className="imgBox">
                    <img src="/assets/img/nfex/img_mission.png" alt="" />
                  </div>
                  <div className="text">
                    <div className="title">MISSION</div>
                    <div className="desc">
                      ???????????? ????????? ?????? ????????????
                      <br />
                      ???????????? ????????? ?????? ???????????? ?????????
                      <br /> ???????????????.
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="imgBox">
                    <img src="/assets/img/nfex/img_future.png" alt="" />
                  </div>
                  <div className="text">
                    <div className="title">WINDOW TO THE FUTURE</div>
                    <div className="desc">
                      ????????? ?????? ??????????????? ?????? ??? ?????????
                      <br /> ?????? ????????? ???????????? ????????????.
                    </div>
                  </div>
                </div>
              </div>
            </Article>
          </Section>
          <Keyword>
            <div className="keyword_item">
              <img src="/assets/img/nfex/img_card.png" alt="" />
              <p>?????????</p>
              <span>
                See how you stack up against comparable
                <br /> companies in similar stages.
              </span>
            </div>
            <div className="keyword_item">
              <img src="/assets/img/nfex/img_calculator.png" alt="" />
              <p>????????????</p>
              <span>
                Benchmark the health of your monetization <br /> and pricing
                strategy.
              </span>
            </div>
            <div className="keyword_item">
              <img src="/assets/img/nfex/img_camera.png" alt="" />
              <p>?????????</p>
              <span>
                Audit where revenue leakage exists and
                <br /> where you can increase retention.
              </span>
            </div>
          </Keyword>
        </Wrap>
      </Element>
    </Container>
  );
};

export default Nfex;
