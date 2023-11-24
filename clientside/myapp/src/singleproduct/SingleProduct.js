import styled from "styled-components";
import Header from "../components/Header";
import { ItemCard } from "../components/ItemCard";
import s1 from "../images/s1.png";
import sprinkles4 from "../images/sprinkles4.png";
import sprinkles5 from "../images/sprinkles5.png";
import { ReviewCard } from "../components/ReviewCard";
import { StarFill } from "react-bootstrap-icons";

export const SingleProdStyled = styled.div`
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

  @media only screen and (min-width: 768px) {
    width: 90%;
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
    margin-top: 12%;
    .pic {
      img {
        transform: scale(120%);
        filter: drop-shadow(30px 5px 5px #666666);
      }
    }
    .text {
      /* width: 90%; */
      margin-top: 10%;
      h1 {
        font-size: 22px;
        font-weight: 900;
        letter-spacing: 5px;
      }
      h4 {
        margin-top: 5%;
        font-size: 16px;
        font-weight: 900;
      }
      p {
        margin-top: 5%;
        text-align: justify;
        font-size: 14px;
        letter-spacing: 0.8px;
      }
    }
    .sizes {
      margin-top: 8%;
      button {
        width: 20%;
        border-radius: 10px;
      }
    }
    .action {
      button {
        width: 100%;
        margin-top: 8%;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    margin-top: 8%;
    .pic {
      img {
        transform: scale(110%);
        filter: drop-shadow(30px 5px 5px #666666);
      }
    }
    .text {
      width: 85%;
      margin-left: 7.5%;
      h1 {
        font-size: 32px;
        font-weight: 900;
        letter-spacing: 5px;
      }
      h4 {
        margin-top: 3%;
        font-size: 22px;
        font-weight: 900;
      }
      p {
        margin-top: 5%;
        text-align: justify;
        font-size: 15px;
        letter-spacing: 0.8px;
      }
    }
    .sizes {
      margin-top: 8%;
      button {
        width: 20%;
        border-radius: 10px;
      }
    }
    .action {
      button {
        width: 90%;
        margin-left: 5%;
        margin-top: 8%;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    /* margin-bottom: 8%;
    .pic {
      width: 50%;
      img {
        transform: scale(110%);
        filter: drop-shadow(30px 5px 5px #666666);
        margin-left: -15%;
      }
    }
    .otherside {
      width: 50%;
      .text {
        margin-top: 10%;
      }
    } */

    .pic {
      img {
        /* margin-left: -10%; */
        transform: scale(105%);
        margin-left: -9%;
        margin-top: 10%;
        /* transform: scale(150%); */
      }
    }

    .otherside {
      width: 25%;
      margin-left: -15%;
      border-radius: 10px;
      background-color: #ff6e31;
      .sizes {
        margin-top: 5%;
        button {
          width: 15%;
          border-radius: 10px;
        }
      }
      .text {
        div {
          h4,
          div {
            margin-top: 8%;
          }
        }
      }
    }
    .details {
      width: 25%;
      margin-left: 10%;
      border-radius: 10px;
      background-color: #ff6e31;
      .cover {
        height: 90%;
        width: 90%;
        margin-left: 5%;
        margin-top: 5%;
        div {
          margin-top: 8%;
          margin-left: 5%;
          p {
            font-size: 14px;
          }
          h2 {
            font-size: 18px;
            font-weight: 600;
            margin-top: 5px;
          }
          div {
            p {
              font-size: 14px;
            }
          }
        }
      }
    }
    .sprinkle1 {
      position: absolute;
      transform: scale(30%);
      top: 0%;
      left: 0;
    }
    .sprinkle2 {
      position: absolute;
      transform: scale(40%);
      top: 58%;
      left: 76%;
    }
  }
  @media only screen and (min-width: 1200px) {
    .pic {
      img {
        transform: scale(105%);
        margin-left: -9%;
        margin-top: 10%;
      }
    }

    .otherside {
      width: 25%;
      margin-left: -4%;
      border-radius: 10px;
      background-color: #ff6e31;
      .sizes {
        margin-top: 5%;
        button {
          width: 15%;
          border-radius: 10px;
        }
      }
      .text {
        div {
          h4,
          div {
            margin-top: 8%;
          }
        }
      }
    }
    .details {
      width: 25%;
      margin-left: 10%;
      border-radius: 10px;
      background-color: #ff6e31;
      .cover {
        height: 90%;
        width: 90%;
        margin-left: 5%;
        margin-top: 5%;
        div {
          margin-top: 8%;
          margin-left: 5%;
          p {
            font-size: 14px;
          }
          h2 {
            font-size: 18px;
            font-weight: 600;
            margin-top: 5px;
          }
          div {
            p {
              font-size: 14px;
            }
          }
        }
      }
    }
    .sprinkle1 {
      position: absolute;
      transform: scale(30%);
      top: 0%;
      left: 0;
    }
    .sprinkle2 {
      position: absolute;
      transform: scale(40%);
      top: 58%;
      left: 76%;
    }
  }
`;

export const RightDiv = styled.div`
  @media only screen and (max-width: 600px) {
    /* height: 54vh; */

    .recommended {
      margin-top: 10%;
      h3 {
        font-size: 12px;
      }
    }
    .reviews {
      margin-top: 10%;
      h3 {
        font-size: 12px;
      }
      margin-bottom: 30px;
    }
  }
  @media only screen and (min-width: 768px) {
    .recommended {
      margin-top: 7%;
      h3 {
        font-size: 18px;
        font-weight: 600;
      }
      div {
        .itemCard {
          margin-left: 0;
          margin-left: 3.5%;
        }
      }
    }
    .reviews {
      margin-top: 7%;
      margin-bottom: 30px;
      h3 {
        font-size: 18px;
        font-weight: 600;
      }
      div {
        .reviewCard {
          margin-left: 2%;
        }
      }
    }
  }
  @media only screen and (min-width: 992px) {
    .recommended {
      div {
        .itemCard {
          margin-left: 5%;
        }
      }
    }
    .reviews {
      div {
        .reviewCard {
          margin-left: 3%;
        }
      }
    }
  }
  @media only screen and (min-width: 1200px) {
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

const SingleProduct = () => {
  return (
    <SingleProdStyled className=" d-flex justify-content-around ">
      <Contatiner className=" d-flex justify-content-around ">
        <MainDiv>
          <Header />
          <HeroDiv className=" d-flex flex-column">
            <LeftDiv className=" d-flex flex-column flex-lg-row">
              <div className="pic">
                <img src={s1} alt="donut" />
              </div>

              <div className="otherside">
                <div className="text text-center">
                  <h1>Chocolate Donut</h1>
                  <div className=" d-flex align-items-center justify-content-between">
                    <h4>R 35.00</h4>

                    <div className=" d-flex align-items-center">
                      <label style={{ fontWeight: "600" }}>5.0</label>
                      <StarFill style={{ marginLeft: "5px" }} />
                    </div>
                  </div>
                  <p>
                    This donut is made of the italian chocolate what what i just
                    need some text to fill this space so that my disigns can at
                    least look decent enough
                  </p>
                </div>
                <div className="sizes d-flex justify-content-around ">
                  <MyButton>sm</MyButton>
                  <MyButton>md</MyButton>
                  <MyButton>lg</MyButton>
                  <MyButton>xl</MyButton>
                </div>
                <div className="action">
                  <MyButton>Add to cart</MyButton>
                </div>
              </div>
              <div className="details d-none d-lg-flex flex-column">
                <div className="cover">
                  <div>
                    <p>TYPE</p>
                    <h2>Amber</h2>
                  </div>

                  <div>
                    <p>TOTAL VOLUME</p>
                    <h2>20 BOTTLES 0F 5.9</h2>
                  </div>

                  <div>
                    <p>STOCK LEFT</p>
                    <h2>250 Bottles</h2>
                  </div>

                  <div style={{ marginLeft: "0" }}>
                    <div className=" d-flex justify-content-between ">
                      <p>Number</p> <p>b-123-67</p>
                    </div>
                    <div className=" d-flex justify-content-between ">
                      <p>Released</p> <p>12-11-2022</p>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={sprinkles4}
                alt="sprinkles"
                className="sprinkle1 d-none d-lg-flex flex-column"
              />
              <img
                src={sprinkles5}
                alt="sprinkles"
                className="sprinkle2 d-none d-lg-flex flex-column"
              />
            </LeftDiv>
            <RightDiv>
              <div className="recommended">
                <div>
                  <h3>Recommended</h3>
                </div>
                <div className="d-flex flex-wrap">
                  <ItemCard />
                  <ItemCard />
                  <ItemCard />

                  <ItemCard />
                  <ItemCard />
                </div>
              </div>
              <div className="reviews d-flex flex-wrap">
                <div>
                  <h3>reviews</h3>
                </div>
                <div className=" d-flex flex-wrap">
                  <ReviewCard />
                  <ReviewCard />
                  <ReviewCard />
                  <ReviewCard />
                  <ReviewCard />
                </div>
              </div>
            </RightDiv>
          </HeroDiv>
        </MainDiv>
      </Contatiner>
    </SingleProdStyled>
  );
};

export default SingleProduct;
