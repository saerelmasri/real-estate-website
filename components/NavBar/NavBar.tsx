/* eslint-disable @next/next/no-img-element */
"use client";

import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Marquee from "react-fast-marquee";
import { styled } from "@mui/material/styles";
import clsx from "clsx";

const buttons = [
  "About",
  "Listing",
  "Contact",
  "Careers",
  "Search Page",
  "News & Press",
];

const AnimatedIconButton = styled(IconButton)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  color: "white",
  background: "black",
  "& .MuiSvgIcon-root": {
    position: "relative",
    zIndex: 1,
    transition: "color 1s",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "300%",
    height: "300%",
    backgroundColor: "#ffffff",
    transform: "translate(-50%, -50%) scale(0)",
    transition: "transform 1s",
    borderRadius: "50%",
    zIndex: 0,
  },
  "&:hover::before": {
    transform: "translate(-50%, -50%) scale(1)",
  },
  "&:hover .MuiSvgIcon-root": {
    color: "#000000",
  },
}));

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav
        className={` w-full p-3 ${
          menuOpen === true ? "bg-black" : ""
        }`}
        style={{ zIndex: 1100, position: "absolute", top: 0, left: 0, right: 0 }}
      >
        <div className="flex items-center justify-between bg-transparent pt-3">
          <Box className={"flex justify-center items-center ml-[10%]"}>
            <Typography
              variant="h2"
              color={menuOpen === true ? "primary" : "black"}
              fontWeight={900}
            >
              Habitat
            </Typography>
          </Box>
          <Box
            className={"flex justify-center items-center w-[40%]"}
            sx={{ display: "inline-flex", padding: "8px", gap: "8px" }}
          >
            <Button variant="text">
              <Typography
                fontWeight={900}
                className="text-base"
                color={menuOpen === true ? "primary" : "black"}
              >
                +0 (323) 4209-23-85
              </Typography>
            </Button>
            <Box className={"flex w-[60%] justify-center items-center gap-5"}>
              {menuOpen ? (
                <IconButton sx={{ color: "black", background: "white" }}>
                  <FavoriteBorderIcon />
                </IconButton>
              ) : (
                <AnimatedIconButton size="small">
                  <FavoriteBorderIcon />
                </AnimatedIconButton>
              )}
              <Button
                variant="contained"
                size="large"
                sx={{
                  width: "40%",
                  borderRadius: "15px",
                  paddingLeft: 0,
                  paddingRight: 0,
                  textTransform: "none",
                  backgroundColor: `${menuOpen === true ? "white" : "black"}`,
                }}
              >
                <Marquee autoFill speed={35}>
                  <Typography
                    variant="body1"
                    className="font-bold"
                    color={menuOpen === true ? "black" : "primary"}
                  >
                    Schedule a meeting &nbsp;
                  </Typography>
                </Marquee>
              </Button>
              <IconButton
                size="small"
                sx={{
                  color: `${menuOpen === true ? "black" : "white"}`,
                  marginLeft: 5,
                  backgroundColor: `${menuOpen === true ? "white" : "black"}`,
                  "&:hover": {
                    backgroundColor: `${menuOpen === true ? "white" : "black"}`,
                  },
                }}
                onClick={toggleMenu}
              >
                <DragHandleIcon />
              </IconButton>
            </Box>
          </Box>
        </div>
      </nav>
      {/* Menu Box */}
      <Box
        className={clsx("menu", { "menu-open": menuOpen })}
        sx={{
          position: "fixed",
          top: "60px", // Adjust the top position to position below the navbar
          left: 0,
          right: 0,
          height: "calc(100vh - 60px)", // Full viewport height minus navbar height
          backgroundColor: menuOpen ? "black" : "transparent",
          transition: "transform 0.5s",
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          zIndex: 1000, // Ensure it's behind the navbar
          overflowY: menuOpen ? "auto" : "hidden", // Add scroll if content exceeds height
        }}
      >
        <Box
          className="menu-content"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%", // Full height
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.5s 0.5s",
            overflow: "hidden"
          }}
        >
          <Box
            className="menu-buttons"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: "10%",
              transform: menuOpen ? "translateX(0)" : "translateX(-50px)",
              transition: "transform 0.5s 0.5s",
            }}
          >
            {buttons.map((item, key) => (
              <Button variant="text" key={key}>
                <Typography
                  className="text-6xl"
                  sx={{
                    color: `white`,
                    "&:hover": {
                      color: "#bfbebd",
                    },
                  }}
                >
                  {item}
                </Typography>
              </Button>
            ))}
          </Box>
          <Box
            className="menu-image"
            sx={{
              transform: menuOpen ? "scale(1)" : "scale(0)",
              transition: "transform 0.5s 0.5s",
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/images/menuImg.png"
              alt="Menu Image"
              style={{
                width: "70%",
                height: "70%",
                objectFit: "cover",
                display: menuOpen ? "block" : "none",
              }}
            />
          </Box>
        </Box>
        <Box
          className={"w-full flex items-center justify-between pl-[10%] pr-[10%] pb-9"}
        >
          <Typography className={"text-sm font-bold"} color={"primary"}>
            © Habitat — All rights reserved
          </Typography>
          <Typography className={"text-xs font-bold"} color={"primary"}>
            Made By Saer El Masri
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default NavBar;
