import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  // children is content in AddUser component
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
export default Card;
