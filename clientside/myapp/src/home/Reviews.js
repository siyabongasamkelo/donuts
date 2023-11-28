import styled from "styled-components";
import { ReviewCard } from "../components/ReviewCard";
import propic5 from "../images/propic5.jpg";

export const ReviewStyled = styled.div`
  width: 100%;
  margin-bottom: 10%;

  @media only screen and (max-width: 600px) {
    height: auto;
  }
`;

export const Container = styled.div`
  @media only screen and (max-width: 600px) {
    height: 90%;
    width: 90%;
    .header {
      margin-top: 30px;
      h1 {
        font-size: 38px;
        text-align: center;
      }
      p {
        text-align: center;
      }
    }
    .reviews2 {
      margin-bottom: 30px;
    }
  }
  @media only screen and (min-width: 768px) {
    height: 90%;
    width: 90%;
    .header {
      margin-top: 30px;
      h1 {
        font-size: 38px;
        text-align: center;
      }
      p {
        text-align: center;
      }
    }
    .reviews2 {
      margin-bottom: 30px;
    }
  }
  @media only screen and (min-width: 992px) {
    height: 90%;
    width: 90%;
    .header {
      margin-top: 30px;
      h1 {
        font-size: 38px;
        text-align: center;
      }
      p {
        text-align: center;
      }
    }
    .reviews2 {
      margin-bottom: 30px;
    }
  }
`;

export const Reviews = () => {
  return (
    <ReviewStyled
      className=" d-flex justify-content-center align-items-center"
      id="review"
    >
      <Container>
        <div className="header">
          <h1>Reviews</h1>
          <p>This is what our clients say about us</p>
        </div>
        <div className="reviews mt-4 d-flex flex-column flex-md-row justify-content-md-between flex-md-wrap">
          <ReviewCard
            writer="Siya Mazibuko"
            review="Mhlathuze Donuts provides the best donuts in Mpangeni Area i like
              them a lot and their prices are highly reasonable they have been
              supplying my business for years and years now"
            image={propic5}
          />

          <ReviewCard
            writer="Siya Mazibuko"
            review="Mhlathuze Donuts provides the best donuts in Mpangeni Area i like
              them a lot and their prices are highly reasonable they have been
              supplying my business for years and years now"
            image={propic5}
          />

          <ReviewCard
            writer="Siya Mazibuko"
            review="Mhlathuze Donuts provides the best donuts in Mpangeni Area i like
              them a lot and their prices are highly reasonable they have been
              supplying my business for years and years now"
            image={propic5}
          />

          <ReviewCard
            writer="Siya Mazibuko"
            review="Mhlathuze Donuts provides the best donuts in Mpangeni Area i like
              them a lot and their prices are highly reasonable they have been
              supplying my business for years and years now"
            image={propic5}
          />

          <ReviewCard
            writer="Siya Mazibuko"
            review="Mhlathuze Donuts provides the best donuts in Mpangeni Area i like
              them a lot and their prices are highly reasonable they have been
              supplying my business for years and years now"
            image={propic5}
          />

          <ReviewCard
            writer="Siya Mazibuko"
            review="Mhlathuze Donuts provides the best donuts in Mpangeni Area i like
              them a lot and their prices are highly reasonable they have been
              supplying my business for years and years now"
            image={propic5}
          />
        </div>
      </Container>
    </ReviewStyled>
  );
};
