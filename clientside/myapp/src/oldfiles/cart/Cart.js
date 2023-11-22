import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import {
  Facebook,
  Github,
  Instagram,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";
import donut from "../images/donut.png";
import sprinkles from "../images/sprinkles.png";
import sprinkles2 from "../images/sprinkles2.png";
// import { motion } from "framer-motion";

export const LoginPagestyled = styled.div`
  height: 100vh;
  width: 100vw;
  @media (max-width: 480px) {
    background-color: #ec8f5e;
  }
`;
export const Contatiner = styled.div`
  width: 95%;
  height: 90%;
  border-radius: 20px;
  background-color: #ec8f5e;
  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const MainDiv = styled.div`
  width: 95%;
  height: 95%;
`;

export const HeroDiv = styled.div`
  height: 90%;
  width: 100%;
`;

export const LeftDiv = styled.div`
  height: 100%;
  width: 5%;
  img {
    margin-top: 60px;
  }
  .icons {
    margin-top: -20px;
    svg {
      transform: scale(150%);
      margin-top: 20px;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        fill: #ec8f5e;
      }
    }
  }
  @media (max-width: 480px) {
    img {
      transform: scale(600%);
      margin-top: -1800%;
      margin-left: 70px;
    }
    .icons {
      position: absolute;
      top: 65%;
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 767px) {
    img {
      transform: scale(600%);
      margin-top: -900%;
      margin-left: 70px;
    }
    .icons {
      position: absolute;
      top: 65%;
    }
  }
`;

export const Middle = styled.div`
  width: 90%;
  height: 100%;
  .text {
    h1 {
      font-size: 62px;
      letter-spacing: 30px;
      text-align: center;
      margin-top: 3%;
    }
  }
  .donut {
    img {
      height: 500px;
    }
  }
  .action {
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    .text {
      margin-top: 20%;
      h1 {
        font-size: 26px;
        letter-spacing: 20px;
      }
    }
    .donut {
      img {
        height: 250px;
        margin-top: 25%;
      }
    }
    .action {
      margin-top: 40%;
    }
  }
`;

export const RightDiv = styled.div`
  height: 100%;
  width: 5%;
  img {
    position: absolute;
    height: 120px;
    right: 5%;
    top: 20%;
  }
  @media (max-width: 480px) {
    img {
      top: 27%;
      height: 80px;
      right: 3%;
    }
  }
`;

export const TheCardStyled = styled.div`
  height: 250px;
  width: 200px;
  margin-left: 30px;
  border-radius: 10px;
  img {
    height: 80%;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
  button {
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
    color: #e90064;
    background-color: transparent;
    border: 1px solid #e90064;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #e90064;
      color: white;
    }
  }
`;

export const MyButton = styled.button`
  height: 50px;
  width: 180px;
  border-radius: 30px;
  background-color: #f3b664;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    color: white;
  }
`;

export const LoginForm = styled.div`
  height: 550px;
  width: 400px;

  background-color: red;
`;

export const Cart = () => {
  return (
    <LoginPagestyled className=" d-flex justify-content-center align-items-center overflow-x-hidden">
      <Contatiner className=" d-flex justify-content-center align-items-center overflow-x-hidden">
        <MainDiv>
          <Header />
          <HeroDiv className=" d-flex">
            <LeftDiv className=" d-flex flex-column justify-content-center align-items-center">
              <div className="icons">
                <Facebook />
                <Whatsapp />
                <Twitter />
                <Instagram />
                <Github />
              </div>
              <img src={sprinkles2} alt="sprinkles" />
            </LeftDiv>
            <Middle className=" d-flex flex-column  align-items-center  ">
              <div className="text">
                <h1>Cart</h1>
              </div>
              <div className="login-form">
                <LoginForm></LoginForm>
              </div>
            </Middle>
            <RightDiv>
              <img src={sprinkles} alt="sprinkles" />
            </RightDiv>
          </HeroDiv>
        </MainDiv>
      </Contatiner>
    </LoginPagestyled>
  );
};
