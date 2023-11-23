import styled from "styled-components";
import Header from "../components/Header";

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
    height: 30vh;
    background-color: blue;
  }
  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }
`;

export const Middle = styled.div`
  @media only screen and (max-width: 600px) {
    height: 40vh;
    background-color: red;
  }

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`;

export const RightDiv = styled.div`
  @media only screen and (max-width: 600px) {
    height: 30vh;
    background-color: green;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const SingleProduct = () => {
  return (
    <SingleProdStyled className=" d-flex justify-content-around ">
      <Contatiner className=" d-flex justify-content-around ">
        <MainDiv>
          <Header />
          <HeroDiv className=" d-flex flex-column">
            <LeftDiv></LeftDiv>
            <Middle></Middle>
            <RightDiv></RightDiv>
          </HeroDiv>
        </MainDiv>
      </Contatiner>
    </SingleProdStyled>
  );
};

export default SingleProduct;
