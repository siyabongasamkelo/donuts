import styled from "styled-components";
import potato from "../images/potato.png";
import { StarFill, BagFill } from "react-bootstrap-icons";

export const ItemCardStyled = styled.div`
  height: 320px;
  width: 220px;
  margin-left: 5.3%;
  margin-top: 2%;
  background-color: rgba(233, 87, 147, 0.4);
  border-radius: 10px;
  .container {
    height: 90%;
    width: 90%;
    margin-left: 5%;
    color: white;
    .pic {
      height: 80%;
      img {
        height: 60%;
        margin-top: 10%;
      }
    }
    .text {
      height: 20%;
      div {
        p {
          margin-left: 5px;
        }
        svg {
          fill: yellow;
          margin-top: 3%;
        }
      }
    }
    .text2 {
      margin-top: -10%;
      h2 {
        font-weight: 700;
        font-size: 20px;
      }
    }
  }
  @media (max-width: 480px) {
    width: 40%;
    height: 220px;
    .container {
      width: 95%;
      height: 95%;
      .text {
        margin-top: -20px;
        p {
          font-size: 11px;
        }
        div {
          svg {
            transform: scale(70%);
          }
          p {
            font-size: 11px;
          }
        }
      }
      .text2 {
        h2 {
          font-size: 13px;
        }
      }
    }
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 45px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #610c9f;
  @media (max-width: 480px) {
    height: 25px;
    width: 30px;
  }
`;

export const ItemCard = () => {
  return (
    <ItemCardStyled>
      <div className="container">
        <div className="pic d-flex justify-content-center">
          <img src={potato} alt="donut" />
        </div>
        <div className="text d-flex justify-content-between">
          <p>Potato donut</p>
          <div className=" d-flex ">
            <StarFill />
            <p>5.5</p>
          </div>
        </div>
        <div className="text2 d-flex justify-content-between align-items-center">
          <h2>R 48.00</h2>
          <Button>
            <BagFill />
          </Button>
        </div>
      </div>
    </ItemCardStyled>
  );
};
