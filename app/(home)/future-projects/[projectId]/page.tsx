"use client";
import { Divider, Typography } from "@mui/material";

function FutureProjects() {
  return (
    <div className="bg-[#f7f5f4] bg-cover">
      <div className="w-full flex flex-col">
        <div className="w-full mt-[100px] flex flex-col justify-center items-start pl-[10%] pt-[5%] pb-[5%]">
          <Typography
            sx={{ fontWeight: "500", textAlign: "center" }}
            className="text-7xl lg:text-9xl font-satoshi-regular text-black"
          >
            BORG 15
          </Typography>
        </div>
        <div className="w-full flex flex-col justify-center items-start pl-[10%] pb-[5%] pr-[10%]">
          <div className="w-full p-5">
            <Typography className="text-sm font-satoshi-medium text-gray-500">
              SINGLE FAMILY / BORG 15 /
            </Typography>
          </div>
          <Divider sx={{ width: "100%", color: "#6b7280", marginTop: 2 }} />
          <div className="w-full flex">
            <div className="w-1/3  flex justify-between">
              <Typography className="text-6xl font-satoshi-regular text-black p-5">
                $320.000
              </Typography>
              <Divider orientation="vertical" sx={{ color: "#6b7280" }} />
            </div>
            <div className="w-1/3 border border-black flex">
              <div className="border border-red-600 w-[60%] flex flex-col">
                <div className="border border-red-600 w-[60%] flex flex-col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureProjects;
