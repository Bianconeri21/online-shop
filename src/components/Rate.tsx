import { Rating } from "@mui/material";
import React from "react";


type RateProps = {
  rating: number;
};

const Rate: React.FC<RateProps> = ({ rating }) => {
  return (
    <Rating
      readOnly
      name="simple-controlled"
      value={rating}
    />
  );
};

export default Rate;
