import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AnimatedButtonBlack from "./AnimatedButtonBlack";

function GetInTouch() {
  return (
    <div className="w-full bg-[#f7f5f4] flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <div className="w-full flex flex-col justify-center items-start text-black p-[5%] md:p-[10%] gap-5 md:gap-10">
          <Typography className="text-sm md:text-base font-semibold">
            34 West Menlo — SF, CA
          </Typography>
          <Typography className="text-3xl md:text-4xl font-medium leading-snug">
            Lorem ipsum dolor sit amet tellus consectetur. Non ut sem tellus
            velit tempus curabitur integer duis maecenas. Massa eu tincidunt
          </Typography>
        </div>
        <div className="w-full flex flex-col justify-center items-start text-black p-[5%] md:p-[10%] gap-5 md:gap-10">
          <Typography className="text-sm md:text-base font-semibold">
            Phone Number / Email
          </Typography>
          <Typography className="text-3xl md:text-4xl font-semibold leading-snug">
            +3 2343 4323 432
          </Typography>
          <Typography className="text-3xl md:text-4xl font-semibold leading-snug">
            sales@habitat.com
          </Typography>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center p-[5%] lg:p-[5%]">
        <Grid container spacing={4}>
          <Grid item md={5} lg={6}>
            <Box>
              <TextField label="First Name" variant="standard" fullWidth />
              <Typography className={"text-black mt-2"}>
                Hello, my first name is
              </Typography>
            </Box>
          </Grid>
          <Grid item md={5} lg={6}>
            <Box>
              <TextField label="Last Name" variant="standard" fullWidth />
              <Typography className={"text-black mt-2"}>
                Hello, my last name is
              </Typography>
            </Box>
          </Grid>
          <Grid item md={5} lg={6}>
            <Box>
              <TextField label="Your email" variant="standard" fullWidth />
              <Typography className={"text-black mt-2"}>
                What is your email?
              </Typography>
            </Box>
          </Grid>
          <Grid item md={5} lg={6}>
            <Box>
              <TextField label="Company Name" variant="standard" fullWidth />
              <Typography className={"text-black mt-2"}>
                My company name is
              </Typography>
            </Box>
          </Grid>
          <Grid item md={5} lg={6}>
            <Box>
              <TextField label="Phone Number" variant="standard" fullWidth />
              <Typography className={"text-black mt-2"}>
                My phone number is
              </Typography>
            </Box>
          </Grid>
          <Grid item md={5} lg={6}>
            <Box>
              <TextField label="Rooms" variant="standard" fullWidth />
              <Typography className={"text-black mt-2"}>
                How many rooms do you want?
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box
          className={
            "border w-full h-[150px] mt-[15%] bg-white flex flex-col justify-center p-[10%]"
          }
        >
          <Typography className={"font-satoshi-medium text-base text-black"}>
            I authorize the delivery of Habitat newsletters through email
            notifications. For more details, please refer to our Privacy Policy.
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
              label="I agree"
              className={"text-black"}
              color="#0000FF"
            />
          </FormGroup>
        </Box>
        <Box className={"w-full flex items-center pt-[5%] pb-[5%]"}>
          <AnimatedButtonBlack
            text="Submit Form"
            sx="rounded-2xl h-[50px] w-1/5 bg-black text-white font-semibold font-satoshi-medium text-xs "
          />
        </Box>
      </div>
    </div>
  );
}

export default GetInTouch;
