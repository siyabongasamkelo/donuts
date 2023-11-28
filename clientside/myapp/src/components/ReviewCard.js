import { StarFill } from "react-bootstrap-icons";
import styled from "styled-components";

export const ReviewStyled = styled.div`
  @media only screen and (max-width: 600px) {
    background-color: #f3b664;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 30px;
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    height: auto;
    width: 48%;
    background-color: #f3b664;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 30px;
  }
  @media only screen and (min-width: 992px) {
    height: auto;
    width: 48%;
    background-color: #f3b664;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 30px;
  }
  @media only screen and (min-width: 1200px) {
    height: auto;
    width: 29%;
    background-color: #f3b664;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 5%;
  }
`;

export const Contaner = styled.div`
  @media only screen and (max-width: 600px) {
    height: 90%;
    width: 90%;
    .upper {
      padding-top: 15px;
      .user {
        .pic {
          height: 60px;
          height: 50px;
          aspect-ratio: 1 /1;
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
            p {
              font-size: 13px;
              line-height: 22px;
            }
          }
        }
      }
    }
    .text {
      padding-bottom: 20px;
    }
  }
  @media only screen and (min-width: 768px) {
    height: 90%;
    width: 90%;
    .upper {
      padding-top: 15px;
      .user {
        .pic {
          height: 60px;
          height: 50px;
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
            p {
              font-size: 13px;
              line-height: 22px;
            }
          }
        }
      }
    }
    .text {
      padding-bottom: 30px;
    }
  }
  @media only screen and (min-width: 992px) {
    height: 90%;
    width: 90%;
    .upper {
      padding-top: 15px;
      .user {
        .pic {
          height: 60px;
          height: 50px;
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
            p {
              font-size: 13px;
              line-height: 22px;
            }
          }
        }
      }
    }
    .text {
      padding-bottom: 30px;
    }
  }
  @media only screen and (min-width: 1200px) {
    height: 90%;
    width: 90%;
    .upper {
      padding-top: 15px;
      .user {
        .pic {
          height: 60px;
          height: 50px;
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
            p {
              font-size: 13px;
              line-height: 22px;
            }
          }
        }
      }
    }
    .text {
      padding-bottom: 50px;
    }
  }
`;

export const ReviewCard = ({ writer, review, image }) => {
  return (
    <ReviewStyled className="reviewCard d-flex justify-content-center align-items-center">
      <Contaner>
        <div className="upper d-flex justify-content-between">
          <div className="user d-flex">
            <div
              className="pic"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="details">
              <h5>{writer}</h5>
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
            <p>{review}</p>
          </div>
        </div>
      </Contaner>
    </ReviewStyled>
  );
};
