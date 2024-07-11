import { Button, styled } from "@mui/material";
import React from "react";

const AnimatedButton = styled(Button)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  color: "white",
  backgroundColor: "black",
  transition: "color 1s, background-color 1s",
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: "0%",
    left: "50%",
    width: "300%",
    height: "300%",
    backgroundColor: "#ffffff",
    transform: "translate(-50%, 50%) scale(0)",
    transition: "transform 1s",
    borderRadius: "50%",
    zIndex: 0,
  },
  "&:hover::before": {
    transform: "translate(-50%, 50%) scale(1)",
  },
  "&:hover": {
    "& span": {
      color: "#000000",
      position: "relative",
      zIndex: 1,
      fontSize: "inherit",
      fontWeight: "inherit",
      fontFamily: "inherit",
      fontStyle: "inherit",
      fontStretch: "inherit",
      fontVariant: "inherit",
    },
  },
}));

function AnimatedButtonBlack({ text, sx } : { text: string, sx: string}) {
  return (
    <AnimatedButton
      variant="contained"
      size="large"
      className={
        `${sx}`
      }
    >
      <span>{text}</span>
    </AnimatedButton>
  );
}

export default AnimatedButtonBlack;
