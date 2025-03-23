import React from "react";
import Button from "@mui/material/Button";

const Ctabutton = ({ variant, color, message }) => {
  return (
    <Button variant={variant} color={color}>
      {message}
    </Button>
  );
};

export default Ctabutton;
