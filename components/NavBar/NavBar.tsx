import { Box, Button, Typography } from "@mui/material";
import React from "react";

function NavBar() {
  return (
    <nav>
      <div className="border border-solid border-white w-full h-[70px] flex">
        <Box
          width={"15%"}
          height={"100%"}
          className={"border border-solid flex justify-center items-center "}
        >
          <div className="bg-cover bg-center bg-logo w-1" style={{
              width: "50%",
              height: "100%",
            }}/>
          <Typography variant="h3" color={"primary"}>
            Habitat
          </Typography>
        </Box>
        <Box className={"border border-solid border-white flex items-center cursor-pointer"} fontWeight={900}>
            <Typography variant="caption">+0 (323) 4209-23-85</Typography>
            <Button></Button>
        </Box>
      </div>
    </nav>
  );
}

export default NavBar;
