"use client";

/* eslint-disable react/no-unescaped-entities */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function QASection() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  // Function to update the state of each accordion
  const updateAccordionState = (accordionNumber: number, state: boolean) => {
    if (accordionNumber === 1) {
      setIsOpen1(state);
    } else if (accordionNumber === 2) {
      setIsOpen2(state);
    } else if (accordionNumber === 3) {
      setIsOpen3(state);
    }
  };
  return (
    <Box className="w-full mt-5 pl-[12%] pr-[12%]">
      <Accordion
        sx={{
          border: "none",
          boxShadow: "none",
          background: "transparent",
          paddingTop: "2%",
          paddingBottom: "2%",
        }}
        expanded={isOpen1}
        onChange={(e, expanded) => {
          updateAccordionState(1, expanded);
        }}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: isOpen1 ? "black" : "#ADACAC",
            }}
            className="text-4xl md:text-6xl"
          >
            01 &nbsp;How can I start the home buying process?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Box className={"hidden md:w-[80%] "} />
          <Box className={"w-full md:w-[70%] flex flex-col items-start"}>
            <Typography
              sx={{
                fontWeight: "500",
                color: "black",
                textAlign: "left",
              }}
              className="text-2xl"
            >
              Starting the home buying process with <strong>Habitat</strong> is
              simple.
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                color: "black",
                textAlign: "left",
              }}
              className="text-lg"
            >
              Contact us to schedule a consultation where we'll discuss your
              preferences, budget, and desired location. Our team will guide you
              through finding and purchasing your ideal property.
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          border: "none",
          boxShadow: "none",
          background: "transparent",
          paddingTop: "2%",
          paddingBottom: "2%",
        }}
        expanded={isOpen2}
        onChange={(e, expanded) => {
          updateAccordionState(2, expanded);
        }}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: isOpen2 ? "black" : "#ADACAC",
            }}
            className="text-4xl md:text-6xl"
          >
            02 &nbsp;What should I consider when selling my home?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Box className={"hidden md:w-[80%] "} />
          <Box className={"w-full md:w-[70%] flex flex-col items-start"}>
            <Typography
              sx={{
                fontWeight: "500",
                color: "black",
                textAlign: "left",
              }}
              className="text-2xl"
            >
              Selling your home involves several key considerations.
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                color: "black",
                textAlign: "left",
              }}
              className="text-lg"
            >
              Our experts at <strong>Habitat</strong> will assist you in
              determining the optimal listing price based on market conditions
              and property valuation. We'll also provide guidance on preparing
              your home to attract potential buyers and negotiating offers
              effectively.
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          border: "none",
          boxShadow: "none",
          background: "transparent",
          paddingTop: "2%",
          paddingBottom: "2%",
        }}
        expanded={isOpen3}
        onChange={(e, expanded) => {
          updateAccordionState(3, expanded);
        }}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: isOpen3 ? "black" : "#ADACAC",
            }}
            className="text-4xl md:text-6xl"
          >
            03 &nbsp;What properties does <strong>Habitat</strong> specialize
            in?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Box className={"hidden md:w-[80%] "} />
          <Box className={"w-full md:w-[70%] flex flex-col items-start"}>
            <Typography
              sx={{
                fontWeight: "500",
                color: "black",
                textAlign: "left",
              }}
              className="text-lg"
            >
              <strong>Habitat</strong> specializes in a diverse range of
              properties, including urban apartments, suburban homes, waterfront
              estates, and investment opportunities. Whether you're looking for
              a starter home or a luxury property, we have options to suit every
              lifestyle and budget.
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default QASection;
