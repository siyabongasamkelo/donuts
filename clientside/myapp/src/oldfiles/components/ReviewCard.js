import { StarFill } from "react-bootstrap-icons";
import styled from "styled-components";

export const ReviewStyled = styled.div`
  height: 300px;
  width: 500px;
  /* background-color: red; */
  background-color: #f3b664;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 480px) {
    margin-top: 30px;
    width: 100%;
    height: 200px;
  }
`;

export const Contaner = styled.div`
  height: 90%;
  width: 90%;
  /* background-color: blue; */
  .upper {
    .user {
      .pic {
        height: 60px;
        aspect-ratio: 1 /1;
        background-color: black;
        border-radius: 50%;
      }
      .details {
        margin-left: 10px;
        h5 {
          font-weight: 700;
        }
        p {
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }
    .stars {
      /* margin-left: 50px; */
    }
  }
  @media (max-width: 480px) {
    .upper {
      .user {
        .pic {
          height: 50px;
        }
      }
    }
    .text {
      div {
        p {
          font-size: 13px;
          line-height: 22px;
        }
      }
    }
  }
`;

export const ReviewCard = () => {
  return (
    <ReviewStyled className=" d-flex justify-content-center align-items-center">
      <Contaner>
        <div className="upper d-flex justify-content-between">
          <div className="user d-flex">
            <div className="pic"></div>
            <div className="details">
              <h5>Siya</h5>
              <p>Customer</p>
            </div>
          </div>
          <div className="stars d-flex">
            <StarFill />
            <StarFill />
            <StarFill />
            <StarFill />
            <StarFill />
          </div>
        </div>
        <div className="text mt-3 ">
          <div>
            <p>
              Mhlathuze Donuts provides the best donuts in Mpangeni Area i like
              them a lot and their prices are highly reasonable they have been
              supplying my business for years and years now
            </p>
          </div>
        </div>
      </Contaner>
    </ReviewStyled>
  );
};
