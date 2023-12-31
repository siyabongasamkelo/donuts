import styled from "styled-components";
import { StarFill, BagFill } from "react-bootstrap-icons";

export const ItemCardStyled = styled.div`
  @media only screen and (max-width: 600px) {
    background-color: #9fbb73;
    border-radius: 10px;
    width: 45%;
    height: 200px;
    margin-top: 5%;
    margin-left: 5%;
    cursor: pointer;
    .container {
      width: 95%;
      height: 95%;
      color: white;
      .pic {
        height: 80%;
        img {
          height: 100px;
          transform: scale(150%);
          filter: drop-shadow(8px 5px 5px #666666);
        }
      }
      .text {
        height: 15%;
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
          font-weight: 700;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    background-color: #9fbb73;
    border-radius: 10px;
    width: 45%;
    height: 200px;
    margin-top: 10%;
    margin-left: 5%;
    .container {
      width: 95%;
      height: 95%;
      color: white;
      .pic {
        height: 80%;
        margin-top: -10%;
        img {
          height: 100px;
          transform: scale(180%);
          filter: drop-shadow(8px 5px 5px #666666);
        }
      }
      .text {
        height: 15%;
        margin-top: -20px;
        p {
          font-size: 13px;
        }
        div {
          svg {
            transform: scale(90%);
          }
          p {
            font-size: 13px;
            margin-left: 5px;
          }
        }
      }
      .text2 {
        h2 {
          font-size: 15px;
          font-weight: 700;
        }
      }
    }
  }
  @media only screen and (min-width: 992px) {
    background-color: #9fbb73;
    border-radius: 10px;
    width: 27%;
    height: 200px;
    margin-top: 10%;
    margin-left: 5%;
    .container {
      width: 95%;
      height: 95%;
      color: white;
      .pic {
        height: 80%;
        margin-top: -10%;
        img {
          height: 100px;
          transform: scale(180%);
          filter: drop-shadow(8px 5px 5px #666666);
        }
      }
      .text {
        height: 15%;
        margin-top: -6%;
        p {
          font-size: 15px;
        }
        div {
          svg {
            transform: scale(100%);
          }
          p {
            font-size: 15px;
            margin-left: 5px;
          }
        }
      }
      .text2 {
        h2 {
          font-size: 17px;
          font-weight: 700;
        }
      }
    }
  }
  @media only screen and (min-width: 1200px) {
    height: 290px;
    width: 14%;
    margin-left: 5.3%;
    margin-top: 3%;
    background-color: rgba(233, 87, 147, 0.4);
    background-color: #9fbb73;
    border-radius: 10px;
    .container {
      height: 90%;
      width: 90%;
      margin-left: 5%;
      color: white;
      .pic {
        height: 80%;
        img {
          height: 140px;
          transform: scale(150%);
          margin-top: 10%;
        }
      }
      .text {
        margin-top: 0;
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
        h2 {
          font-weight: 700;
          font-size: 20px;
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
  background-color: #f3b664;
  @media (max-width: 480px) {
    height: 25px;
    width: 30px;
  }
`;

export const ItemCard = ({ name, image, price, clicked, addto }) => {
  return (
    <ItemCardStyled className="itemCard">
      <div className="container">
        <div className="pic d-flex " onClick={clicked}>
          <img src={image} alt="donut" />
        </div>
        <div className="text d-flex justify-content-between" onClick={clicked}>
          <p>{name}</p>
          <div className=" d-flex ">
            <StarFill />
            <p>5.5</p>
          </div>
        </div>
        <div className="text2 d-flex justify-content-between align-items-center">
          <h2>R {price}</h2>
          <Button onClick={addto}>
            <BagFill />
          </Button>
        </div>
      </div>
    </ItemCardStyled>
  );
};
