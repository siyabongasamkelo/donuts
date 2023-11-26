import styled from "styled-components";
import Header from "../components/Header";
import { ItemCard } from "../components/ItemCard";
import sprinkles4 from "../images/sprinkles4.png";
import sprinkles5 from "../images/sprinkles5.png";
import { ReviewCard } from "../components/ReviewCard";
import { StarFill } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BaseUrl } from "../utils/BaseUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "flowbite-react";
import axios from "axios";

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

  @media only screen and (max-width: 600px) {
    width: 90%;
    overflow-x: visible;
  }

  @media only screen and (min-width: 768px) {
    width: 95%;
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
      display: flex;
      justify-content: center;
      img {
        /* transform: scale(110%); */
        height: 500px;
        filter: drop-shadow(30px 5px 5px #666666);
      }
    }
    .text {
      width: 85%;
      margin-left: 7.5%;
      margin-top: 5%;
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
    .pic {
      width: 25%;
      img {
        height: 150px;
        margin-left: -9%;
        margin-top: 10%;
      }
    }

    .otherside {
      width: 25%;
      margin-left: 5%;
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
      .action {
        margin-bottom: 10%;
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
      top: 0;
      left: -10%;
      height: 0;
      width: 0;
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
      width: 25%;
      margin-left: 5%;
      img {
        height: 300px;
        margin-left: -9%;
        margin-top: 10%;
      }
    }

    .otherside {
      width: 25%;
      margin-left: -4%;
      margin-left: 5%;
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
        h1 {
          margin-top: 12%;
        }
        div {
          h4,
          div {
            margin-top: 8%;
          }
        }
      }
      .action {
        margin-bottom: 10%;
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
      top: 48%;
      left: 76%;
    }
  }
`;
export const RightDiv = styled.div`
  @media only screen and (max-width: 600px) {
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
    .reviews {
      div {
        .reviewCard {
          width: 50%;
          margin-left: 3%;
        }
      }
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

const SingleProduct = () => {
  const [item, setSetItme] = useState([]);
  const [loading, setLoading] = useState(false);

  const showToastMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const succToastMessage = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BaseUrl}/get/item/${id}`)
      .then((res) => {
        setSetItme(res.data);
        succToastMessage("data fetching successfully");
        setLoading(false);
      })
      .catch((err) => {
        showToastMessage("Could not load item");
        showToastMessage(err.message);
        console.log(err);
        setLoading(false);
      });
  }, []);
  const { id } = useParams();

  return (
    <SingleProdStyled className=" d-flex justify-content-around ">
      <Contatiner className=" d-flex justify-content-around ">
        <MainDiv>
          <Header />
          <ToastContainer />
          {loading ? (
            <div
              style={{ height: "80vh", width: "100%" }}
              className=" d-flex justify-content-center align-items-center  "
            >
              <Spinner />
            </div>
          ) : (
            <HeroDiv className=" d-flex flex-column">
              <LeftDiv className=" d-flex flex-column flex-lg-row">
                <div className="pic">
                  <img src={item[0]?.image} alt="donut" />
                </div>

                <div className="otherside">
                  <div className="text text-center">
                    <h1>{item[0]?.name}</h1>
                    <div className=" d-flex align-items-center justify-content-between">
                      <h4>R {item[0]?.price}</h4>

                      <div className=" d-flex align-items-center">
                        <label style={{ fontWeight: "600" }}>5.0</label>
                        <StarFill style={{ marginLeft: "5px" }} />
                      </div>
                    </div>
                    <p>{item[0]?.description}</p>
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
                      <p>Flavour</p>
                      <h2>{item[0]?.category}</h2>
                    </div>

                    <div>
                      <p>TOTAL CAKES</p>
                      <h2>5 cakes</h2>
                    </div>

                    <div>
                      <p>STOCK LEFT</p>
                      <h2>{item[0]?.quantity} cakes</h2>
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
                  <div className=" d-flex flex-wrap flex-lg-column">
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                  </div>
                </div>
              </RightDiv>
            </HeroDiv>
          )}
        </MainDiv>
      </Contatiner>
    </SingleProdStyled>
  );
};

export default SingleProduct;
