/* eslint-disable @next/next/no-img-element */
"use client";
import SelectComponent from "@/components/SelectComponent";
import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import SearchPageMap from "@/components/SearchPageMap";
import { fetchData } from "@/tools/api";
import { Property } from "@/types";

function SearchPage() {
  const [hoverProperty, setHoveredProperty] = useState<Property | null>(null);
  const [hoveredPropertyId, setHoveredPropertyId] = useState<number | null>(
    null
  );
  const [properties, setProperties] = useState<Property[]>([
    {
      id: 0,
      name: "",
      propertyUse: "",
      price: 0,
      size: 0,
      location: "",
      imageNumber: 0,
      readyToMove: false,
      latitude: 0,
      longitude: 0,
    },
  ]);
  const [filters, setFilters] = useState({
    price: "",
    propertyUse: "",
    location: "",
    size: "",
  });

  const handleFilterChange = (filter: string, value: string | number) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      [filter]: value,
    }));
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetchData("/api/property");
        if (response && response.data) {
          const filteredProperties = response.data.map((property: any) => ({
            id: property.id,
            name: property.name,
            propertyUse: property.propertyUse,
            price: property.price,
            size: property.size,
            location: property.location,
            imageNumber: property.imageNumber,
            readyToMove: property.readyToMove,
            latitude: property.latitude,
            longitude: property.longitude,
          }));
          setProperties(filteredProperties);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="bg-[#f7f5f4] bg-cover">
      <div className="w-full flex flex-col">
        <div className="w-full mt-[100px] flex flex-col justify-center items-start pl-[10%] pr-[10%] pt-[5%] pb-[5%] overflow-hidden">
          <Grid
            container
            spacing={2}
            gap={7}
            className="w-full flex justify-center p-[2%]"
          >
            <Grid item xs={6} sm={6} md={4} lg={1.5}>
              <SelectComponent
                title="Pricing"
                filter="price"
                value={filters.price}
                onChange={handleFilterChange}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={1.5}>
              <SelectComponent
                title="Type"
                filter="propertyUse"
                value={filters.propertyUse}
                onChange={handleFilterChange}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={1.5}>
              <SelectComponent
                title="City"
                filter="location"
                value={filters.location}
                onChange={handleFilterChange}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={1.5}>
              <SelectComponent
                title="Size"
                filter="size"
                value={filters.size}
                onChange={handleFilterChange}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={1.5}
              className={"border flex justify-center items-center"}
            >
              <Button variant="contained">Apply</Button>
            </Grid>
          </Grid>
        </div>
        <div className="w-full h-[100vh] flex flex-col lg:flex-row">
          <div className="w-full h-full lg:w-3/4 ">
            <SearchPageMap
              properties={properties}
              hoveredProperty={hoverProperty}
            />
          </div>
          <div className="w-full lg:w-1/4 overflow-y-scroll">
            {properties.map((item, index) => (
              <PropertyCard
                index={index}
                id={item.id}
                imageNumber={item.imageNumber}
                location={item.location}
                name={item.name}
                price={item.price}
                propertyUse={item.propertyUse}
                readyToMove={item.readyToMove}
                size={item.size}
                key={index}
                onHover={() => {
                  setHoveredProperty(item);
                  setHoveredPropertyId(item.id);
                }}
                onHoverOut={() => {
                  setHoveredProperty(null);
                  setHoveredPropertyId(null);
                }}
                isHovering={hoveredPropertyId === item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
