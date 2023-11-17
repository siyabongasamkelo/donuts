import styled from "styled-components";
export const CounterStyled = styled.div`
  height: 40px;
  /* width: 80px; */
  .left {
    width: 40%;
    height: 100%;
    border-radius: 30px 0 0 30px;
    background-color: #ff6e31;
    cursor: pointer;
  }
  .middle {
    width: 20%;
    height: 100%;
  }
  .right {
    width: 40%;
    height: 100%;
    border-radius: 0 30px 30px 0;
    background-color: #ff6e31;
    cursor: pointer;
  }
`;

const Counter = ({ id, quantity }) => {
  return (
    <CounterStyled className=" d-flex ">
      <div className="left d-flex justify-content-center align-items-center">
        -
      </div>
      <div className="middle d-flex justify-content-center align-items-center">
        0
      </div>
      <div className="right d-flex justify-content-center align-items-center">
        +
      </div>
    </CounterStyled>
  );
};

export default Counter;
