import React from "react";
import "./Card.scss";

function Card(props) {
  return (
    <div className="Card">
      {props.header ? <div className="header">{props.header}</div> : null}
      <div className="body">{props.body}</div>
      {props.footer ? <div className="footer">{props.footer}</div> : null}
    </div>
  );
}

export default Card;
