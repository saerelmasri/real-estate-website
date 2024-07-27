/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Divider, keyframes, Typography } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import GetInTouch from "@/components/GetInTouch";
import AnimatedButtonBlack from "@/components/AnimatedButtonBlack";
import { useEffect, useRef, useState } from "react";
import MapComponent from "@/components/Map";
import { fetchData } from "@/tools/api";
import { kFormatter } from "@/components/Home/GridListing";

const slideUpFromBehind = keyframes`
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

type Details = {
  detail: string;
  quantity: number | null;
};

type Property = {
  name: string;
  propertyUse: string;
  price: number;
  size: number;
  location: string;
  readyToMove: boolean;
  project: string;
  latitude: number;
  longitude: number;
  imageNumber: number;
  detail: Details[];
};

function Project({ params }: { params: { projectId: number } }) {
  const [isVisible, setIsVisible] = useState(false);
  const [property, setProperty] = useState<Property>({
    name: "",
    propertyUse: "",
    price: 0,
    size: 0,
    location: "",
    readyToMove: false,
    project: "",
    latitude: 0,
    longitude: 0,
    imageNumber: 0,
    detail: [
      {
        detail: "",
        quantity: 0,
      },
    ],
  });
  const [count, setCount] = useState<number>(0);

  const sectionRef = useRef(null);
  const section2Ref = useRef(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetchData(`/api/property/${params.projectId}`);
        if (response && response.data) {
          setProperty(response.data);
          setCount((prevCount) => prevCount + 1);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection Observer Entry:", entry.isIntersecting); // Add this log
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (section2Ref.current) {
      observer.observe(section2Ref.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (section2Ref.current) {
        observer.unobserve(section2Ref.current);
      }
    };
  }, []);

  return (
    <div className="bg-[#f7f5f4] bg-cover">
      <div className="w-full flex flex-col">
        <div className="w-full mt-[100px] flex flex-col justify-center items-start pl-[10%] pt-[5%] pb-[5%]">
          <Typography
            sx={{
              fontWeight: "500",
              textAlign: "center",
              animation: `${slideUpFromBehind} 1s ease-out`,
              animationDelay: "0.3s",
            }}
            className="text-7xl lg:text-9xl font-satoshi-regular text-black"
          >
            {property.name}
          </Typography>
        </div>
        <div className="w-full flex flex-col justify-center items-start pl-[10%] pb-[5%] pr-[10%]">
          <div className="w-full p-5">
            <Typography
              className="text-sm font-satoshi-medium text-gray-500"
              sx={{
                animation: `${slideUpFromBehind} 1s ease-out`,
                animationDelay: "0.3s",
              }}
            >
              {property.propertyUse} / {property.name} /
            </Typography>
          </div>
          <Divider sx={{ width: "100%", color: "#6b7280", marginTop: 2 }} />
          <div className="w-full flex ">
            <div className="w-1/3  flex justify-between items-center">
              <Typography
                className="text-6xl font-satoshi-regular text-black p-5"
                sx={{
                  animation: `${slideUpFromBehind} 1s ease-out`,
                  animationDelay: "0.3s",
                }}
              >
                ${kFormatter(property.price)}
              </Typography>
              <Divider orientation="vertical" sx={{ color: "#6b7280" }} />
            </div>
            <div className="w-1/3 flex justify-between">
              <div className="w-[60%] flex">
                <div className="w-[60%] h-full flex flex-col">
                  <div className="h-1/2 flex justify-center items-center">
                    <Typography
                      className="font-satoshi-medium text-xl text-black text-left"
                      sx={{
                        animation: `${slideUpFromBehind} 1s ease-out`,
                        animationDelay: "0.3s",
                      }}
                    >
                      {property.size} SQ. FT.
                    </Typography>
                  </div>
                  <div className="h-1/2 flex justify-center items-center">
                    <Typography
                      className="font-satoshi-medium text-sm text-black text-left pl-6"
                      sx={{
                        animation: `${slideUpFromBehind} 1s ease-out`,
                        animationDelay: "0.3s",
                      }}
                    >
                      {property.location}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="w-[40%] h-full flex flex-col">
                <div className="h-1/2 flex justify-end items-center pr-5">
                  <Typography
                    className="font-satoshi-medium text-xl text-black uppercase font-medium"
                    sx={{
                      animation: `${slideUpFromBehind} 1s ease-out`,
                      animationDelay: "0.3s",
                    }}
                  >
                    Status
                  </Typography>
                </div>
                <div className="h-1/3 flex flex-col justify-center items-end pr-5">
                  <Typography
                    className="font-satoshi-regular text-xs text-gray-500"
                    sx={{
                      animation: `${slideUpFromBehind} 1s ease-out`,
                      animationDelay: "0.3s",
                    }}
                  >
                    Ready to move: {property.readyToMove == true ? "Yes" : "No"}
                  </Typography>
                  <KeyIcon
                    sx={{
                      color: "black",
                      animation: `${slideUpFromBehind} 1s ease-out`,
                      animationDelay: "0.3s",
                    }}
                    fontSize="medium"
                  />
                </div>
              </div>
              <Divider orientation="vertical" sx={{ color: "#6b7280" }} />
            </div>
            <div className="w-1/3  flex justify-end items-center">
              <AnimatedButtonBlack
                text="Contact an Agent"
                sx="rounded-3xl h-2/5 w-2/5 bg-black text-white font-semibold font-satoshi-medium text-xs"
              />
            </div>
          </div>
          <div className=" w-full mt-[5%]">
            <img
              src="/images/listingCover.jpeg"
              alt="Menu Image"
              style={{
                width: "100%",
                height: "100%",
                animation: `${slideUpFromBehind} 1s ease-out`,
                animationDelay: "0.3s",
              }}
            />
          </div>
          <div className="w-full mt-[5%] flex" ref={sectionRef}>
            {isVisible && (
              <>
                <div className=" w-1/2 flex flex-col pt-10 pb-10">
                  <div className="flex pr-10">
                    <div className="flex flex-col items-start justify-center w-1/2">
                      <Typography
                        className="font-satoshi-medium text-sm text-black font-medium"
                        sx={{
                          animation: `${slideUpFromBehind} 1s ease-out`,
                          animationDelay: "0.3s",
                        }}
                      >
                        Project
                      </Typography>
                      <Typography
                        className="font-satoshi-medium text-base text-black font-semibold mt-1"
                        sx={{
                          animation: `${slideUpFromBehind} 1s ease-out`,
                          animationDelay: "0.3s",
                        }}
                      >
                        {property.project}
                      </Typography>
                    </div>
                    <div className="flex flex-col items-end justify-center w-1/2">
                      <Typography
                        sx={{
                          animation: `${slideUpFromBehind} 1s ease-out`,
                          animationDelay: "0.3s",
                        }}
                        className="font-satoshi-medium text-sm text-black font-medium"
                      >
                        Neighborhood
                      </Typography>
                      <Typography
                        sx={{
                          animation: `${slideUpFromBehind} 1s ease-out`,
                          animationDelay: "0.3s",
                        }}
                        className="font-satoshi-medium text-base text-black font-semibold mt-1"
                      >
                        {property.location}
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <Typography
                      sx={{
                        animation: `${slideUpFromBehind} 1s ease-out`,
                        animationDelay: "0.3s",
                      }}
                      className="font-satoshi-medium text-gray-500 text-3xl pt-5 mt-10 leading-snug"
                    >
                      Lorem ipsum dolor sit amet consectetur. Tempor sed ornare
                      non dolor dolor sapien scelerisque. Lobortis hendrerit
                      ipsum turpis malesuada mauris. Fames mattis enim id id
                      euismod. Amet arcu orci ullamcorper lacinia phasellus
                      massa. Sed sed quisque fermentum enim lacus ornare.
                    </Typography>
                  </div>
                </div>
                <div className="w-1/2 p-10">
                  <Typography
                    className="font-satoshi-medium text-base text-black"
                    sx={{
                      animation: `${slideUpFromBehind} 1s ease-out`,
                      animationDelay: "0.3s",
                    }}
                  >
                    Starting From
                  </Typography>
                  <Typography
                    className="font-satoshi-medium text-3xl text-black mt-2"
                    sx={{
                      animation: `${slideUpFromBehind} 1s ease-out`,
                      animationDelay: "0s",
                    }}
                  >
                    ${kFormatter(property.price)}
                  </Typography>
                  <Divider
                    className="w-[30%] mt-10"
                    sx={{
                      animation: isVisible
                        ? `${slideUpFromBehind} 1s ease-out`
                        : "none",
                      animationDelay: "0s",
                    }}
                  />
                  {property.detail.map((items, index) => (
                    <>
                      <Typography
                        key={index}
                        className="font-satoshi-medium text-sm text-black mt-5"
                        sx={{
                          animation: isVisible
                            ? `${slideUpFromBehind} 1s ease-out`
                            : "none",
                          animationDelay: "0s",
                        }}
                      >
                        {items.quantity} {items.detail}
                      </Typography>
                      <Divider
                        className="w-[30%] mt-5"
                        sx={{
                          animation: isVisible
                            ? `${slideUpFromBehind} 1s ease-out`
                            : "none",
                          animationDelay: "0s",
                        }}
                      />
                    </>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <MapComponent
          longitude={property.longitude}
          latitude={property.latitude}
        />
        <div
          className="w-full mt-[5%] pl-[10%] pt-[5%] pb-[5%]"
          ref={section2Ref}
        >
          {isVisible && (
            <Typography
              className="text-7xl font-satoshi-regular text-black"
              sx={{
                animation: `${slideUpFromBehind} 1s ease-out`,
                animationDelay: "0.3s",
              }}
            >
              Finishes
            </Typography>
          )}
        </div>
        <div className="relative overflow-hidden h-[900px] ">
          <img
            src="/images/finish1.jpeg"
            alt="Finishes #1"
            className={`h-[200px] w-[200px] absolute top-[10%] left-[15%] z-10 ${
              isVisible ? "animate-slideUp" : ""
            }`}
            style={{
              animation: isVisible
                ? `${slideUpFromBehind} 1s ease-out`
                : "none",
              animationDelay: "0.3s",
            }}
          />
          <img
            src="/images/finish2.jpeg"
            alt="Finishes #2"
            className={`h-[350px] w-[350px] absolute top-[5%] left-[35%] z-30 ${
              isVisible ? "animate-slideUp" : ""
            }`}
            style={{
              animation: isVisible
                ? `${slideUpFromBehind} 1s ease-out`
                : "none",
              animationDelay: "0.3s",
            }}
          />
          <img
            src="/images/finish3.jpeg"
            alt="Finishes #3"
            className={`h-[450px] w-[450px] absolute top-[20%] left-[20%] z-10 ${
              isVisible ? "animate-slideUp" : ""
            }`}
            style={{
              animation: isVisible
                ? `${slideUpFromBehind} 1s ease-out`
                : "none",
              animationDelay: "0.3s",
            }}
          />
          <img
            src="/images/finish4.jpeg"
            alt="Finishes #4"
            className={`h-[600px] w-[350px] absolute top-[5%] left-[60%] z-30 ${
              isVisible ? "animate-slideUp" : ""
            }`}
            style={{
              animation: isVisible
                ? `${slideUpFromBehind} 1s ease-out`
                : "none",
              animationDelay: "0.3s",
            }}
          />
          <img
            src="/images/finish5.jpeg"
            alt="Finishes #5"
            className={`h-[300px] w-[200px] absolute top-[55%] left-[55%] z-10 ${
              isVisible ? "animate-slideUp" : ""
            }`}
            style={{
              animation: isVisible
                ? `${slideUpFromBehind} 1s ease-out`
                : "none",
              animationDelay: "0.3s",
            }}
          />
          <img
            src="/images/finish6.jpeg"
            alt="Finishes #6"
            className={`h-[200px] w-[150px] absolute top-[25%] left-[75%] z-40 ${
              isVisible ? "animate-slideUp" : ""
            }`}
            style={{
              animation: isVisible
                ? `${slideUpFromBehind} 1s ease-out`
                : "none",
              animationDelay: "0.3s",
            }}
          />
        </div>
        <div className="w-full mt-[5%] p-[5%] flex justify-center">
          <div className="w-1/3 pl-[4%] pr-[4%] flex justify-center">
            <Typography className="font-satoshi-medium text-lg text-black">
              Detailed Option
            </Typography>
          </div>
          <div className="w-1/3 pl-[4%] pr-[4%]">
            <Typography className="font-satoshi-medium text-lg text-black">
              Our homes feature polished marble countertops, custom cabinetry,
              and premium hardwood flooring, designed for a modern living
              experience.
            </Typography>
          </div>
          <div className="w-1/3 pl-[4%] pr-[4%]">
            <Typography className="font-satoshi-medium text-lg text-black">
              Experience unparalleled elegance with our top-quality finishes.
              From the sleek stainless steel appliances to the elegant bathroom
              fixtures, every element has been carefully selected to ensure a
              perfect blend of style and functionality.
            </Typography>
          </div>
        </div>
        <GetInTouch />
      </div>
    </div>
  );
}

export default Project;
