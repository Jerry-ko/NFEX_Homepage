import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";


const Container = styled.div`
  height: 397px;
  background-color: #1B2E49;
  position: relative;
  padding: 90px 115px;
  font-size: 14px;
  line-height: 18px;
`;

const Logo = styled.div`
  position: absolute;
  top: 91px;
  right: 116px;

  img {
    width: 98px;
  }
`;

const Contract = styled.div`
  color: white;
  font-weight: 700;
  margin-bottom: 40px;

  button {
    all: unset;
    cursor: pointer;

    :first-child {
      height: 12px;
      border-right: 0.5px solid white;
      padding-right: 74px;
    }
    :last-child {
      padding-left: 56px;
    }
  }
`;

const Info = styled.div`
  color: rgba(255, 255, 255, 0.8);
`;

const Line = styled.div`
  margin-bottom: 10px;

  :first-child {
    .value:first-child {
      color: white;
      margin-right: 20px;
    }
  }

  .key {
    font-weight: 700;
    margin-right: 8px;
  }
  .value {
    font-weight: 300;
    margin-right: 8px;
  }
`;

const Footer = () => {
  return (
    <Container className="full-width">
      <Logo>
        <img src="/assets/img/common/nfex_logo_white.png" alt="" />
      </Logo>

      <Contract>
        <button>이용약관</button>
        <button>개인정보처리방침</button>
      </Contract>

      <Info>
        <Line>
          <span className="key">엔에프이엑스(주)</span>
          <span className="key">대표이사</span>
          <span className="value">김성완</span>
        </Line>
        <Line>
          <span className="key">주소</span>
          <span className="value">서울특별시 강남구 언주로94길 15, 2층 (역삼동)</span>
        </Line>
        <Line>
          <span className="key">사업자 등록번호</span>
          <span className="value">204-99-02118</span>
        </Line>
        <Line>
          <span className="key">고객센터</span>
          <span className="key">EMAIL</span>
          <span className="value">cs@nfex.co.kr</span>
          <span className="key">TEL</span>
          <span className="value">070-4278-1256</span><br/>
          <span className="value">(전화상담 09:00 - 18:00 (점심시간: 12:00 - 13:30))</span>
        </Line>
        <Line>
          <span className="value">© 2021 nfex.co.kr All Rights Reserved.</span>
        </Line>
      </Info>
    </Container>
  );
};

export default Footer;
