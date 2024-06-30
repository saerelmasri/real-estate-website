"use client";

import { Button } from "@mui/material";
import React from "react";

type SocialBtnProp = {
  title: string;
  url?: string;
};

function SocialBtn({ title, url }: SocialBtnProp) {
  return (
    <Button
      variant="text"
      className="capitalize font-satoshi-medium text-base text-[#747474]"
      sx={{
        "&:hover": {
          background: "none",
        },
      }}
    >
      {title}
    </Button>
  );
}

export default SocialBtn;
