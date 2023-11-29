import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Bell } from "react-bootstrap-icons";

export const HomePagestyled = styled.div`
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
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }
`;

export const Middle = styled.div`
  @media only screen and (max-width: 600px) {
    height: 75vh;
    width: 100%;
    margin-top: 5%;
    .icon {
      width: 100%;
      svg {
        transform: scale(160%);
      }
      h3 {
        font-weight: 700;
        font-size: 20px;
      }
    }
    .search {
      width: 100%;
      margin-top: 5%;
      input {
        width: 100%;
      }
    }
    .chats {
      width: 100%;
      margin-top: 5%;
      .chat {
        width: 100%;
        background-color: #9fbb73;
        border-radius: 10px;
        margin-top: 3%;
        .container {
          width: 95%;
          height: 90%;
          padding: 2%;
          .pic {
          }
          .text {
            width: 75%;
            h3 {
              font-weight: 600;
              color: rgb(40, 40, 40);
            }
            p {
              font-size: 11px;
              margin-top: 3%;
              color: rgb(220, 220, 220);
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    height: 75vh;
    width: 100%;
    margin-top: 5%;
    .icon {
      width: 100%;
      svg {
        transform: scale(160%);
      }
      h3 {
        font-weight: 700;
        font-size: 20px;
      }
    }
    .search {
      width: 100%;
      margin-top: 3%;
      input {
        width: 100%;
      }
    }
    .chats {
      width: 100%;
      margin-top: 1%;
      .chat {
        width: 100%;
        background-color: #9fbb73;
        border-radius: 10px;
        margin-top: 2%;
        .container {
          width: 95%;
          height: 90%;
          padding: 2%;
          .pic {
          }
          .text {
            width: 85%;
            h3 {
              font-weight: 600;
              color: rgb(40, 40, 40);
            }
            p {
              font-size: 11px;
              margin-top: 2%;
              color: rgb(220, 220, 220);
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`;

export const RightDiv = styled.div`
  width: 5%;
  height: 100%;
  background-color: red;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1200px) {
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

export const Message = () => {
  return (
    <HomePagestyled className=" d-flex justify-content-center align-items-center overflow-x-hidden">
      <Contatiner className=" d-flex justify-content-center align-items-center overflow-x-hidden">
        <MainDiv>
          <Header />
          <HeroDiv className=" d-flex">
            <LeftDiv className=" d-flex flex-column justify-content-center align-items-center"></LeftDiv>
            <Middle className=" d-flex flex-column  align-items-center  ">
              <div className="icon d-flex justify-content-between">
                <h3>Messages</h3>
                <Bell />
              </div>
              <div className="search">
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Search for message"
                />
              </div>
              <div className="chats">
                <div className="chat justify-content-center align-items-center">
                  <div className="container d-flex justify-content-between">
                    <div
                      className="pic"
                      style={{
                        height: "60px",
                        aspectRatio: 1 / 1,
                        borderRadius: "50%",
                        backgroundColor: "black",
                      }}
                    ></div>
                    <div className="text">
                      <h3>SIYA SAMKELO</h3>
                      <p>
                        Ayow bro we gotta talk about something there's a problem
                        here we
                      </p>
                    </div>
                  </div>
                </div>
                <div className="chat justify-content-center align-items-center">
                  <div className="container d-flex justify-content-between">
                    <div
                      className="pic"
                      style={{
                        height: "60px",
                        aspectRatio: 1 / 1,
                        borderRadius: "50%",
                        backgroundColor: "black",
                      }}
                    ></div>
                    <div className="text">
                      <h3>SIYA SAMKELO</h3>
                      <p>
                        Ayow bro we gotta talk about something there's a problem
                        here we
                      </p>
                    </div>
                  </div>
                </div>
                <div className="chat justify-content-center align-items-center">
                  <div className="container d-flex justify-content-between">
                    <div
                      className="pic"
                      style={{
                        height: "60px",
                        aspectRatio: 1 / 1,
                        borderRadius: "50%",
                        backgroundColor: "black",
                      }}
                    ></div>
                    <div className="text">
                      <h3>SIYA SAMKELO</h3>
                      <p>
                        Ayow bro we gotta talk about something there's a problem
                        here we
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Middle>
            <RightDiv></RightDiv>
          </HeroDiv>
        </MainDiv>
      </Contatiner>
    </HomePagestyled>
  );
};
