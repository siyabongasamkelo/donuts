import styled from "styled-components";
import Header from "../components/Header";
import { ItemCard } from "../components/ItemCard";
import s1 from "../images/s1.png";
import { ReviewCard } from "../components/ReviewCard";

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
    /* height: 34vh; */
    margin-top: 12%;
    .pic {
      img {
        transform: scale(120%);
      }
    }
  }
  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }
`;

export const RightDiv = styled.div`
  @media only screen and (max-width: 600px) {
    /* height: 54vh; */
    .text {
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
    .action {
      button {
        width: 100%;
        margin-top: 8%;
      }
    }
    .recommended {
      margin-top: 5%;
    }
    .reviews {
      margin-top: 5%;
      margin-bottom: 30px;
    }
  }
  @media only screen and (min-width: 768px) {
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
            <LeftDiv className=" d-flex align-items-center accordion justify-content-center">
              <div className="pic">
                <img src={s1} alt="donut" />
              </div>
            </LeftDiv>
            <RightDiv>
              <div className="text text-center">
                <h1>Chocolate Donut</h1>
                <h4>R 35.00</h4>
                <p>
                  This donut is made of the italian chocolate what what i just
                  need some text to fill this space so that my disigns can at
                  least look decent enough
                </p>
              </div>
              <div className="action">
                <MyButton>Add to cart</MyButton>
              </div>
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
