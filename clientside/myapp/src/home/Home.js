import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import donut from "../images/donut.png";
import sprinkles from "../images/sprinkles.png";
import carnil from "../images/carnil.jpg";
import caramel from "../images/caramel.jpg";
import choc from "../images/choc.jpg";
import choc2 from "../images/choc2.jpg";
import choc3 from "../images/choc3.jpg";
import banana from "../images/banana.jpg";
import { Button } from "flowbite-react";

export const HomePagestyled = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  /* background-color: red; */
  /* background-color: rgba(0, 0, 0, 0.9, 8); */
`;
export const Contatiner = styled.div`
  width: 85%;
  height: 95%;
`;

export const MainDiv = styled.div`
  width: 100%;
  height: 90%;
`;

export const LeftDiv = styled.div`
  height: 100%;
  width: 30%;
  img {
    height: 350px;
    width: 800px;
    transform: scale(140%);
    margin-top: -150px;
    margin-left: 100px;
  }
  @media (max-width: 480px) {
    height: 50%;
    width: 100%;
    margin-top: 70px;
    img {
      height: 250px;
      width: 750px;
      margin-top: 50px;
      margin-left: 7%;
    }
  }
`;

export const RightDiv = styled.div`
  height: 100%;
  width: 70%;
  .text {
    margin-top: 8%;
    margin-left: 5%;
    div {
      h2 {
        font-weight: 600;
        margin-left: 20px;
        font-size: 22px;
        color: #e90064;
      }
      button {
        background-color: #e90064;
      }
      img {
        position: absolute;
      }
    }
    h1 {
      font-size: 64px;
      font-weight: 500;
      margin-top: 80px;
    }
  }
  .flavours {
    height: 60px;
    margin-left: 4.5%;
    p {
      margin-left: 10px;
    }
    div {
      height: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-position: center;
      background-size: cover;
      margin-left: 10px;
    }
  }
  .cards {
    margin-left: 3%;
  }
  @media (max-width: 480px) {
    height: 50%;
    width: 100%;
    .text {
      div {
        margin-left: 16%;
      }
      h1 {
        font-size: 32px;
        text-align: center;
      }
    }
    .flavours {
      margin-left: 0;
      p {
        font-size: 10px;
      }
      div {
        height: 70%;
        margin-left: 5px;
      }
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
  width: 100%;
  background-color: black;
`;

const TheCard = ({ pic }) => {
  return (
    <TheCardStyled>
      <img src={pic} alt="donut" />
      <MyButton>Order R50</MyButton>
    </TheCardStyled>
  );
};

export const Home = () => {
  return (
    <HomePagestyled className=" d-flex justify-content-center align-items-center">
      <Contatiner>
        <Header />
        <MainDiv className=" d-flex flex-column flex-md-row">
          <LeftDiv className=" d-flex justify-content-center align-items-center">
            <img src={donut} alt="donut" />
          </LeftDiv>
          <RightDiv>
            <div className="text">
              <h1>
                The Best Donut <br></br>Emhlathuze
              </h1>
              <div className=" d-flex align-items-center mt-4 ">
                <Button>Order Now</Button>
                <h2>R 49.99</h2>
              </div>
              <img src={sprinkles} alt="donut" />
            </div>
            <div className="flavours d-flex mt-4 align-items-center">
              <p>Carnil</p>
              <div style={{ backgroundImage: `url(${carnil})` }}></div>
              <p>Black Forest</p>
              <div style={{ backgroundImage: `url(${caramel})` }}></div>
              <p>Caramel Bliss</p>
              <div style={{ backgroundImage: `url(${choc})` }}></div>
              <p>Banana Cream Pie</p>
              <div style={{ backgroundImage: `url(${banana})` }}></div>
            </div>
            <div className="cards d-none d-md-flex mt-5">
              <TheCard pic={choc} />
              <TheCard pic={choc2} />
              <TheCard pic={choc3} />
            </div>
          </RightDiv>
        </MainDiv>
      </Contatiner>
    </HomePagestyled>
  );
};
