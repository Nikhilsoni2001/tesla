import React from "react";
import styled from "styled-components";
import Section from "./Section";
import cars from "../cars";

const Home = () => {
  const getCars = (car) => {
    return (
      <Section
        key={car.key}
        title={car.title}
        description={car.description}
        lBtn={car.lBtn}
        rBtn={car.rBtn}
        backgroundImg={car.backgroundImg}
      />
    );
  };

  return <Container>{cars.car.map(getCars)}</Container>;
};

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index: -1;
`;
