import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

export const HomePagestyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
`;
export const Contatiner = styled.div`
  width: 90%;
  height: 100%;
`;

export const Home = () => {
  return (
    <HomePagestyled>
      <Contatiner>
        <Header />
      </Contatiner>
    </HomePagestyled>
  );
};
