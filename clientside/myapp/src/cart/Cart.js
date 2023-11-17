import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import {
  Facebook,
  Github,
  Instagram,
  Trash,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";
import donut from "../images/donut.png";
import sprinkles from "../images/sprinkles.png";
import sprinkles2 from "../images/sprinkles2.png";
import sprinkles3 from "../images/sprinkles3.png";
import Button from "react-bootstrap/Button";
// import { motion } from "framer-motion";

export const CartPagestyled = styled.div`
  width: 100vw;
  /* @media (max-width: 480px) {
    background-color: #ec8f5e;
    height: auto;
  } */
  margin-bottom: 50px;
`;
export const Contatiner = styled.div`
  width: 95%;
  height: 90%;
  border-radius: 20px;
  background-color: #ec8f5e;
  @media only screen and (max-width: 600px) {
    width: 90%;
    overflow-x: visible;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 2rem;
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
  width: 5%;
  height: 100%;
  img {
    filter: drop-shadow(30px 5px 5px #666666);
  }
  .icons {
    svg {
      filter: drop-shadow(10px 2px 2px #666666);
      transform: scale(150%);
      margin-top: 20px;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        fill: #ec8f5e;
      }
    }
  }
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
      margin-top: -18rem;
    }
  }
  @media only screen and (min-width: 768px) {
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
      transform: scale(400%);
      margin-left: 8rem;
      margin-top: -18rem;
    }
  }

  @media only screen and (min-width: 992px) {
    .icons {
      margin-top: 7rem;
      svg {
        transform: scale(150%);
        margin-top: 20px;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          fill: #f3b664;
        }
      }
    }
    img {
      margin-top: -18rem;
      margin-left: 14rem;
    }
  }
`;

export const Middle = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-bottom: 50px;
    .text {
      margin-top: 2rem;
      h1 {
        font-size: 2rem;
        text-align: center;
        letter-spacing: 1rem;
        font-weight: 700;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    width: 90%;
    height: 90%;
    margin-left: 5%;
    padding-bottom: 50px;
    .text {
      h1 {
        font-size: 3rem;
        letter-spacing: 2rem;
        text-align: center;
        margin-top: 2rem;
        font-weight: 500;
      }
    }
  }
  @media only screen and (min-width: 992px) {
    width: 90%;
    height: 90%;
    padding-bottom: 50px;
    .text {
      h1 {
        font-size: 3rem;
        letter-spacing: 2rem;
        text-align: center;
        margin-top: 5rem;
        font-weight: 700;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    width: 90%;
    height: 100%;
    .text {
      h1 {
        font-size: 2rem;
        letter-spacing: 1.5rem;
        text-align: center;
        margin-top: 3rem;
        font-size: 600;
      }
    }
  }
`;

export const RightDiv = styled.div`
  width: 5%;
  height: 100%;
  img {
    filter: drop-shadow(30px 5px 5px #666666);
  }
  @media only screen and (max-width: 600px) {
    height: 100%;
    width: 5%;
    img {
      position: absolute;
      height: 5rem;
      right: 1rem;
      top: 14rem;
    }
  }
  @media only screen and (min-width: 768px) {
    height: 100%;
    width: 5%;
    img {
      position: absolute;
      height: 7rem;
      right: 4rem;
      top: 15rem;
    }
  }
  @media only screen and (min-width: 1200px) {
    .sprinkles {
      height: 15rem;
      position: absolute;
      top: 40rem;
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

export const CartDiv = styled.div`
  @media only screen and (max-width: 600px) {
    /* height: 70vh; */
    height: auto;
    width: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar-button {
      display: none;
    }
    .cart {
      width: 100%;
      .tablecontent {
        width: 70%;
        margin-top: 2%;
        border-radius: 10px;
        h3 {
          font-weight: 700;
          margin-left: 10%;
        }
        div {
          width: 100%;

          div {
            h3 {
            }
          }
        }
      }
    }
    .promo {
      width: 100%;
      margin-top: 10%;
      .check-cover {
        width: 100%;
        h6 {
          margin-top: 10px;
          margin-bottom: 10px;
        }
        div {
          input {
            border-radius: 5px;
          }
          button {
            background-color: #ff6e31;
            border: 1px solid #ff6e31;
            transition: 0.5s ease-in-out;
            &:hover {
              box-shadow: 0 5px 15px #ff6e31;
            }
          }
          p {
            padding-bottom: 7px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    /* height: 70vh; */
    height: auto;
    width: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar-button {
      display: none;
    }
    .cart {
      width: 100%;
      .tablecontent {
        width: 70%;
        margin-top: 2%;
        border-radius: 10px;
        h3 {
          font-weight: 700;
          margin-left: 10%;
        }
        div {
          width: 100%;

          div {
            h3 {
            }
          }
        }
      }
    }
    .promo {
      width: 100%;
      margin-top: 8%;
      .check-cover {
        width: 100%;
        h6 {
          margin-top: 10px;
          margin-bottom: 10px;
        }
        div {
          input {
            border-radius: 5px;
          }
          button {
            background-color: #ff6e31;
            border: 1px solid #ff6e31;
            transition: 0.5s ease-in-out;
            &:hover {
              box-shadow: 0 5px 15px #ff6e31;
            }
          }
          p {
            padding-bottom: 7px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 992px) {
    height: auto;
    width: 90%;
    overflow-y: scroll;
    &::-webkit-scrollbar-button {
      display: none;
    }
    .cart {
      width: 100%;
      .tablecontent {
        width: 70%;
        margin-top: 2%;
        border-radius: 10px;
        h3 {
          font-weight: 700;
          margin-left: 10%;
        }
        div {
          width: 100%;

          div {
            h3 {
            }
          }
        }
      }
    }
    .promo {
      width: 100%;
      margin-top: 8%;
      .check-cover {
        width: 100%;
        h6 {
          margin-top: 10px;
          margin-bottom: 10px;
        }
        div {
          input {
            border-radius: 5px;
          }
          button {
            background-color: #ff6e31;
            border: 1px solid #ff6e31;
            transition: 0.5s ease-in-out;
            &:hover {
              box-shadow: 0 5px 15px #ff6e31;
            }
          }
          p {
            padding-bottom: 7px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    /* height: auto; */
    height: 75vh;
    width: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .cart {
      width: 70%;
      .tablecontent {
        width: 70%;
        margin-left: 20%;
        margin-top: 2%;
        border-radius: 10px;
        h3 {
          margin-left: 25%;
          font-weight: 700;
        }
        div {
          width: 100%;

          div {
            margin-left: 20px;
            h3 {
            }
          }
        }
      }
    }
    .promo {
      width: 25%;
      margin-top: 1%;
      .check-cover {
        width: 100%;
        h6 {
          margin-top: 10px;
          margin-bottom: 10px;
        }
        div {
          input {
            border-radius: 5px;
          }
          button {
            background-color: #ff6e31;
            border: 1px solid #ff6e31;
            transition: 0.5s ease-in-out;
            &:hover {
              box-shadow: 0 5px 15px #ff6e31;
            }
          }
          p {
            padding-bottom: 7px;
          }
        }
      }
    }
  }
`;

export const CartCardStyled = styled.div`
  @media only screen and (max-width: 600px) {
    height: 60px;
    width: 100%;
    margin-top: 2%;
    background-color: #f3b664;
    border-radius: 10px;
    div {
      width: 100%;
      .pic {
        img {
          height: 50px;
          aspect-ratio: 1 / 1;
          margin-left: -20%;
        }
      }
      div {
        .counter {
          height: 60px;
          margin: 0;
          margin-left: -10%;
          .minus {
            height: 50%;
            width: 30px;
            border-radius: 0 30px 30px 0;
            background-color: #ff6e31;
            margin: 0;
            margin-top: 15%;
            cursor: pointer;
            transition: 0.5s ease-in-out;
            &:hover {
              box-shadow: 0 5px 15px #ff6e31;
            }
          }
          .count {
            width: 30px;
            height: 50%;
            margin: 0;
            margin-top: 15%;
          }
          .add {
            height: 50%;
            width: 30px;
            border-radius: 30px 0 0 30px;
            margin: 0;
            margin-top: 15%;
            background-color: #ff6e31;
            cursor: pointer;
            transition: 0.5s ease-in-out;
            &:hover {
              box-shadow: 0 5px 15px #ff6e31;
            }
          }
        }
        svg {
          transform: scale(150%);
          cursor: pointer;
          transition: 0.5s ease-in-out;
          margin-left: 15%;
          &:hover {
            fill: #ff6e31;
          }
        }
        h3 {
          font-size: 12px;
          margin-left: 30%;
        }
        .price {
          margin-left: -10%;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    height: 60px;
    width: 100%;
    margin-top: 2%;
    background-color: #f3b664;
    border-radius: 10px;
    div {
      width: 100%;
      .pic {
        img {
          height: 50px;
          aspect-ratio: 1 / 1;
          margin-left: -20%;
        }
      }
      div {
        .counter {
          height: 60px;
          margin: 0;
          margin-left: -10%;
          .minus {
            height: 50%;
            width: 30px;
            border-radius: 0 30px 30px 0;
            background-color: #ff6e31;
            margin: 0;
            margin-top: 15%;
            cursor: pointer;
            transition: 0.5s ease-in-out;
            &:hover {
              box-shadow: 0 5px 15px #ff6e31;
            }
          }
          .count {
            width: 30px;
            height: 50%;
            margin: 0;
            margin-top: 15%;
          }
          .add {
            height: 50%;
            width: 30px;
            border-radius: 30px 0 0 30px;
            margin: 0;
            margin-top: 15%;
            background-color: #ff6e31;
            cursor: pointer;
            transition: 0.5s ease-in-out;
            &:hover {
              box-shadow: 0 5px 15px #ff6e31;
            }
          }
        }
        svg {
          transform: scale(150%);
          cursor: pointer;
          transition: 0.5s ease-in-out;
          margin-left: 15%;
          &:hover {
            fill: #ff6e31;
          }
        }
        h3 {
          font-size: 12px;
          margin-left: 30%;
        }
        .price {
          margin-left: -10%;
        }
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    height: 80px;
    width: 100%;
    margin-top: 2%;
    background-color: #f3b664;
    border-radius: 10px;
    div {
      width: 100%;
      .pic {
        img {
          height: 80px;
          aspect-ratio: 1 / 1;
        }
      }
      div {
        .counter {
          height: 60px;
          margin: 0;
          .minus {
            height: 80%;
            width: 60px;
            border-radius: 0 30px 30px 0;
            background-color: #ff6e31;
            margin: 0;
            margin-top: 5%;
            cursor: pointer;
            transition: 0.5s ease-in-out;
            &:hover {
              box-shadow: 0 5px 15px #ff6e31;
            }
          }
          .count {
            width: 60px;
            height: 80%;
            margin: 0;
            margin-top: 5%;
          }
          .add {
            height: 80%;
            width: 60px;
            border-radius: 30px 0 0 30px;
            margin: 0;
            margin-top: 5%;
            background-color: #ff6e31;
            cursor: pointer;
            transition: 0.5s ease-in-out;
            &:hover {
              box-shadow: 0 5px 15px #ff6e31;
            }
          }
        }
        svg {
          transform: scale(150%);
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            fill: #ff6e31;
          }
        }
        h3 {
          font-size: 16px;
        }
      }
    }
  }
`;

export const CartCard = () => {
  return (
    <CartCardStyled>
      <div className=" d-flex justify-content-md-around align-items-center">
        <div>
          <h3>1</h3>
        </div>
        <div className=" d-none d-md-block">
          <h3>Chocolate Donuts</h3>
        </div>
        <div className="pic">
          <img src={donut} alt="donut" />
        </div>
        <div>
          <h3 className="price">R 120</h3>
        </div>
        <div>
          <div className="counter d-flex">
            <div className="add d-flex justify-content-center align-items-center">
              -
            </div>
            <div className="count d-flex justify-content-center align-items-center">
              0
            </div>
            <div className="minus d-flex justify-content-center align-items-center">
              +
            </div>
          </div>
        </div>
        <div>
          <Trash />
        </div>
      </div>
    </CartCardStyled>
  );
};

export const Cart = () => {
  return (
    <CartPagestyled className=" d-flex justify-content-center align-items-center overflow-x-hidden">
      <Contatiner className=" d-flex justify-content-center align-items-center overflow-x-hidden">
        <MainDiv>
          <Header />
          <HeroDiv className=" d-flex">
            <LeftDiv className=" d-none d-lg-flex flex-lg-column justify-content-lg-center align-items-lg-center">
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
              <div className="text text-start">
                <h1>Cart</h1>
              </div>
              <CartDiv className=" d-flex flex-column flex-lg-row justify-content-lg-between  text-white">
                <div className="cart">
                  <div className="tablecontent d-none ">
                    <div>
                      <h3>#</h3>
                    </div>

                    <div className=" d-none d-md-block">
                      <h3>Name</h3>
                    </div>
                    <div className="pic">
                      <h3>Image</h3>
                    </div>
                    <div>
                      <h3>Price</h3>
                    </div>
                    <div>
                      <h3>Counter</h3>
                    </div>
                    <div>
                      <h3>Action</h3>
                    </div>
                  </div>
                  <CartCard />
                  <CartCard />
                  <CartCard />
                  <CartCard />
                </div>
                <div className="promo">
                  <div className="check-cover text-white">
                    <h6>Promo Code</h6>
                    <div className=" d-flex justify-content-between">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type here"
                      />
                      <Button>Apply</Button>
                    </div>
                    <div className=" text-white mt-3 mt-md-5">
                      <div className=" d-flex justify-content-between">
                        <p>Subtotal</p>
                        <p>R 00.00</p>
                      </div>
                      <div className=" d-flex justify-content-between">
                        <p>Discount</p>
                        <p>R 00.00</p>
                      </div>
                      <div className=" d-flex justify-content-between">
                        <p>Total</p>
                        <p>R 00.00</p>
                      </div>
                      <Button style={{ width: "100%" }}>
                        Continue to checkout
                      </Button>
                    </div>
                  </div>
                </div>
              </CartDiv>
            </Middle>
            <RightDiv className=" d-none d-lg-block ">
              <img src={sprinkles} alt="sprinkles" />
              <img
                className="sprinkles d-none d-md-block"
                src={sprinkles3}
                alt="sprinkles"
              />
            </RightDiv>
          </HeroDiv>
        </MainDiv>
      </Contatiner>
    </CartPagestyled>
  );
};
