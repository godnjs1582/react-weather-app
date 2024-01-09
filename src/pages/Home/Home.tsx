import React from "react";
import { HomeWrapper, ThisDayBlock } from "./styles";
import Header from "../../components/Header";
import ThisDayInfo from "../../components/ThisDayInfo";
import ThisDay from "../../components/ThisDay";
import AllDays from "../../components/AllDays";

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <ThisDayBlock>
        <ThisDay />
        <ThisDayInfo />
      </ThisDayBlock>
      <AllDays />
    </HomeWrapper>
  );
};

export default Home;
