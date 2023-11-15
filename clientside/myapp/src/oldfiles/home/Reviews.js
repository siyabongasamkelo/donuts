import styled from "styled-components";
import { ReviewCard } from "../components/ReviewCard";

export const ReviewStyled = styled.div`
  height: 100vh;
  width: 100%;
  /* background-color: #ec8f5e; */
  @media (max-width: 480px) {
    height: auto;
  }
`;

export const Container = styled.div`
  height: 90%;
  width: 90%;
  .header {
    h1 {
      font-size: 38px;
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
  @media (max-width: 480px) {
    .header {
      margin-top: 30px;
    }
    .reviews2 {
      margin-bottom: 30px;
    }
  }
`;

export const Reviews = () => {
  return (
    <ReviewStyled className=" d-flex justify-content-center align-items-center">
      <Container>
        <div className="header">
          <h1>Reviews</h1>
          <p>This is what our clients say about us</p>
        </div>
        <div className="reviews mt-4 d-flex flex-column flex-md-row justify-content-md-between">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <div className="reviews2 mt-2 mt-md-5  d-flex flex-column flex-md-row justify-content-md-between">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </Container>
    </ReviewStyled>
  );
};
