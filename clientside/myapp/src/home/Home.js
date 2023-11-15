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

export const HomePagestyled = styled.div`
  /* height: auto; */
  height: 100vh;
  width: 100vw;
  @media (max-width: 480px) {
    background-color: #ec8f5e;
    height: auto;
  }
`;
export const Contatiner = styled.div`
  width: 95%;
  height: 90%;
  border-radius: 20px;
  background-color: #ec8f5e;
  /* @media (max-width: 480px) {
    width: 90%;
  } */
  @media only screen and (max-width: 600px) {
    width: 90%;
    overflow-x: visible;
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
  @media only screen and (max-width: 600px) {
    height: auto;
    width: 5%;
    .icons {
      position: absolute;
      top: 34rem;
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
    img {
      transform: scale(600%);
      margin-left: 5rem;
      margin-top: -21rem;
    }
  }
`;

export const Middle = styled.div`
  @media only screen and (max-width: 600px) {
    width: 90%;
    overflow-x: visible;
    .text {
      margin-top: 5rem;
      h1 {
        font-size: 2rem;
        text-align: center;
        letter-spacing: 1rem;
        font-weight: 700;
      }
    }
    .donut {
      margin-top: 4rem;
      img {
        height: 20rem;
        aspect-ratio: 1 /1;
      }
    }
    .action {
      margin-top: 5rem;
      margin-bottom: 5rem;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 90%;
    height: 100%;
    .text {
      h1 {
        font-size: 42px;
        letter-spacing: 30px;
        text-align: center;
        margin-top: 15%;
      }
    }
    .donut {
      img {
        height: 350px;
        margin-top: 15%;
      }
    }
    .action {
      margin-top: 15%;
    }
  }
  @media only screen and (min-width: 992px) {
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
  }
  @media only screen and (min-width: 1200px) {
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
  }
`;

export const RightDiv = styled.div`
  /* height: 100%;
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
  } */

  @media only screen and (max-width: 600px) {
    height: 100%;
    width: 5%;
    img {
      position: absolute;
      height: 5rem;
      right: 1rem;
      top: 13rem;
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

export const Home = () => {
  return (
    <HomePagestyled className=" d-flex justify-content-center align-items-center overflow-x-hidden">
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
                <h1>MHLATHUZE DONUTS</h1>
              </div>
              <div className="donut">
                <img src={donut} alt="donut" />
              </div>
              <div className="action">
                <MyButton>Buy</MyButton>
              </div>
            </Middle>
            <RightDiv>
              <img src={sprinkles} alt="sprinkles" />
            </RightDiv>
          </HeroDiv>
        </MainDiv>
      </Contatiner>
    </HomePagestyled>
  );
};
