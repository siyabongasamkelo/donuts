import styled from "styled-components";
import Header from "../components/Header";
import { ItemCard } from "../components/ItemCard";
import sprinkles4 from "../images/sprinkles4.png";
import sprinkles5 from "../images/sprinkles5.png";
import { ReviewCard } from "../components/ReviewCard";
import { StarFill } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "flowbite-react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Features/Cart";
import { LoginMordal } from "../components/LoginMordal";

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
        button {
          margin-top: 5%;
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

// this is the css for the form
export const FormStyled = styled.div`
  width: 500px;
  background-color: #9fbb73;
  border-radius: 10px;
  margin-top: 2%;
  margin-left: 4.5%;
  div {
    label {
      margin-top: 5%;
      margin-bottom: 2%;
      margin-left: 5%;
    }
  }

  .action {
    margin-bottom: 20px;
    width: 90%;
    margin-left: 5%;
  }

  textarea {
    width: 90%;
    margin-left: 5%;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-left: -10px;
  margin-top: -5%;
`;
export const Radio = styled.input`
  display: none;
`;
export const Rating = styled.div`
  cursor: pointer;
`;

const ReviewForm = ({ closeIts, productId }) => {
  const theUser = useSelector((state) => state?.user?.value?.user[0]?._id);
  const isLogged = useSelector((state) => state?.user?.value.isLogged);

  const [closeIt, setCloseIt] = useState(true);

  const [openModal, setOpenModal] = useState(false);

  const [rate, setRate] = useState(0);
  const [review, setReview] = useState("");

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

  let Url = "";
  if (process.env.REACT_APP_ENVIRONMENT === "DEVELOPMENT") {
    Url = "http://localhost:3001";
  } else {
    Url = "https://donuts-4c1f.onrender.com";
  }
  const BaseUrl = Url;

  const addReview = (e) => {
    e.preventDefault();
    if (isLogged) {
      const formData = new FormData();
      formData.append("rating", rate);
      formData.append("review", review);
      formData.append("productId", productId);
      formData.append("writerId", theUser);

      axios
        .post(`${BaseUrl}/add/review`, formData)
        .then((res) => {
          succToastMessage(res.data);
          setCloseIt(false);
        })
        .catch((err) => {
          showToastMessage(err.message);
          console.log(err);
        });
    } else {
      setOpenModal(!openModal);
    }
  };

  return (
    <FormStyled>
      <form>
        <LoginMordal
          openModal={openModal}
          onCloseModal={() => {
            setOpenModal(false);
          }}
        />
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Review
          </label>
          <textarea
            className="form-control"
            onChange={(e) => {
              setReview(e.target.value);
            }}
          ></textarea>
          <div id="emailHelp" className="form-text text-danger"></div>
        </div>
        <div className="mb-1">
          <label for="exampleInputEmail1" className="form-label">
            Review
          </label>
          <div className="">
            <Container>
              {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                  <label>
                    <Radio
                      type="radio"
                      value={givenRating}
                      onClick={() => {
                        setRate(givenRating);
                      }}
                    />
                    <Rating>
                      <StarFill
                        color={
                          givenRating < rate || givenRating === rate
                            ? "white"
                            : "rgb(192,192,192)"
                        }
                      />
                    </Rating>
                  </label>
                );
              })}
            </Container>
          </div>
          <div id="emailHelp" className="form-text text-danger"></div>
        </div>
        <div className="action d-flex justify-content-between">
          <MyButton onClick={addReview}>Add review</MyButton>
          <MyButton onClick={closeIt}>Cancel</MyButton>
        </div>
      </form>
    </FormStyled>
  );
};

const SingleProduct = () => {
  const theCart = useSelector((state) => state?.cart?.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [item, setSetItme] = useState([]);
  const [recommended, setRecommended] = useState(theCart);
  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [reviews, setReviews] = useState(false);
  const { id } = useParams();

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

  let Url = "";
  if (process.env.REACT_APP_ENVIRONMENT === "DEVELOPMENT") {
    Url = "http://localhost:3001";
  } else {
    Url = "https://donuts-4c1f.onrender.com";
  }
  const BaseUrl = Url;

  const getItem = (id) => {
    navigate(`/item/${id}`);
  };

  const addingToCart = (item) => {
    let exist = false;
    for (let i = 0; i < theCart.length; i++) {
      if (item._id === theCart[i].id) {
        exist = true;
      }
    }
    if (exist) {
      showToastMessage("item already in cart");
    } else {
      dispatch(
        addToCart({
          item: {
            id: item._id,
            name: item.name,
            brand: item.brand,
            image: item.image,
            price: item.price,
            store: item.store,
            quantity: 1,
          },
        })
      );
      showToastMessage("item added to cart");
    }
  };

  useEffect(() => {
    axios
      .get(`${BaseUrl}/get/items`)
      .then((res) => {
        setRecommended(res.data);
      })
      .catch((err) => {
        showToastMessage(err.message);
      });
  }, [BaseUrl]);

  useEffect(() => {
    axios
      .get(`${BaseUrl}/get/review/${id}`)
      .then((res) => {
        setReviews(res.data);
        succToastMessage("reviews fetcing successful");
      })
      .catch((err) => {
        showToastMessage(err.message);
      });
  }, [id, BaseUrl]);

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
  }, [id, BaseUrl]);

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
                    {recommended.slice(0, 5).map((item, count) => {
                      return (
                        <ItemCard
                          name={item.name}
                          price={item.price}
                          key={count}
                          image={item.image}
                          clicked={() => {
                            getItem(item._id);
                          }}
                          addto={() => {
                            addingToCart(item);
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="reviews d-flex flex-wrap">
                  <div>
                    <h3>reviews</h3>
                  </div>
                  <div className=" d-flex flex-wrap flex-lg-column">
                    <MyButton
                      onClick={() => {
                        setOpenForm(true);
                      }}
                    >
                      Write a review
                    </MyButton>
                    {openForm ? (
                      <ReviewForm
                        closeIts={() => {
                          setOpenForm(false);
                        }}
                        productId={item[0]?._id}
                      />
                    ) : (
                      ""
                    )}

                    {reviews?.map((review) => {
                      return (
                        <ReviewCard
                          writer={review.writerId.username}
                          review={review.review}
                          image={review.writerId.image}
                        />
                      );
                    })}
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
