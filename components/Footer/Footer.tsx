import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer className="w-full p-3 bg-backgroundDark">
      <div className="flex items-center justify-between bg-transparent">
        <Box className={"flex justify-center items-center ml-[2%]"}>
          <Typography variant="h2" color="primary" fontWeight={900}>
            Habitat
          </Typography>
        </Box>
        <Box className={"flex justify-center items-center mr-[2%]"}>
          <Typography color="primary" className="font-semibold">
            @Habitat 2024 - Powered by Saer El Masri
          </Typography>
        </Box>
      </div>
    </footer>
  );
}

export default Footer;
