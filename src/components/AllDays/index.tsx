import React from "react";
import { useParams } from "react-router-dom";
import useWeatherForecast from "../../utils/useWeatherForecast";
import { AllDaysWrapper } from "./style";
import Day from "./Day";

const AllDays = () => {
  const { id } = useParams();
  const { days, isLoading } = useWeatherForecast(id ? id : "seoul");
  console.log(days, isLoading);
  return (
    <AllDaysWrapper>
      {days.map((day) => (
        <Day key={day.date} day={day} />
      ))}
    </AllDaysWrapper>
  );
};

export default AllDays;
