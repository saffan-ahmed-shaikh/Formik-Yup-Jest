import React from "react";

export default function Marquee(props) {
  return (
    <marquee
      style={{
        color: props.color,
        width: props.width,
        fontFamily: "Gotham Bold",
        fontSize: "18px",
        fontStyle: "normal",
      }}
      direction="left"
    >
      {props.text}
    </marquee>
  );
}
