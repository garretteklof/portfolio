import React from "react";
import Tool from "./Tool";
import Rating from "./Rating";
import { DataNug } from "./styles";

const mapRatingToEmoji = rating => {
  switch (rating) {
    case "crackerjack":
      return "emoji-cheer";
    case "well-versed":
      return "emoji-star";
    case "versed":
      return "emoji-happy";
    case "moved on":
      return "emoji-grad";
    case "currently learning":
      return "emoji-3d";
  }
};

const GridCell = ({ name, rating }) => {
  return (
    <DataNug>
      <Tool name={name} />
      <Rating icon={mapRatingToEmoji(rating)} />
    </DataNug>
  );
};

export default GridCell;
