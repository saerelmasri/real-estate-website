/* eslint-disable @next/next/no-img-element */
"use client";
import SelectComponent from "@/components/SelectComponent";
import { Button, Grid, Skeleton } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import SearchPageMap from "@/components/SearchPageMap";
import { fetchData } from "@/tools/api";
import { Property } from "@/types";

type FilterObjecType = {
  price: number;
  propertyUse: string;
  location: string;
  size: number;
};

function SearchPage() {
  const [hoverProperty, setHoveredProperty] = useState<Property | null>(null);
  const [isLoading, setIsLoading] = useState(false);
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
  const [filters, setFilters] = useState<FilterObjecType>({
    price: 0,
    propertyUse: "",
    location: "",
    size: 0,
  });

  const handleFilterChange = useCallback(
    (filter: string, value: string | number) => {
      setFilters((prevFilter) => ({
        ...prevFilter,
        [filter]: value,
      }));
    },
    []
  );

  const handleFetchProperty = async (action: string) => {
    if (action === "fetch") {
      setIsLoading(true);
      const queryParams = new URLSearchParams();

      if (filters.price) queryParams.append("price", filters.price.toString());
      if (filters.location) queryParams.append("location", filters.location);
      if (filters.propertyUse)
        queryParams.append("propertyUse", filters.propertyUse);
      if (filters.size) queryParams.append("size", filters.size.toString());

      const url = `/api/property/search?${queryParams.toString()}`;

      try {
        const response = await fetchData(url);

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
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    } else if (action === "clear") {
      setIsLoading(true);

      setFilters({
        location: "",
        price: 0,
        propertyUse: "",
        size: 0,
      });

      setProperties([]);
      try {
        const response = await fetchData("/api/property/search");

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
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    }
  };

  const fetchProperties = async (queryParams: string = "") => {
    setIsLoading(true); // Start loading
    const url = `/api/property/search?${queryParams}`;
    try {
      const response = await fetchData(url);
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
    } finally {
      setIsLoading(false); // End loading
    }
  };

  useEffect(() => {
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
              xs={12}
              sm={6}
              md={9}
              lg={3}
              container
              spacing={2}
              className={"flex justify-center items-center gap-5"}
            >
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => handleFetchProperty("fetch")}
                  className={"bg-black text-white capitalize font-semibold"}
                >
                  Apply
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => handleFetchProperty("clear")}
                  className={"bg-black text-white capitalize font-semibold"}
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={"100vw"}
            height={"100vh"}
          />
        ) : (
          <div className="w-full h-[100vh] flex flex-col xl:flex-row">
            <div className="w-full h-full xl:w-3/4">
              <SearchPageMap
                properties={properties}
                hoveredProperty={hoverProperty}
              />
            </div>
            <div className="w-full xl:w-1/4 overflow-y-scroll">
              {properties.length === 0 && <p>No properties found.</p>}
              {properties.map((item, index) => (
                <PropertyCard
                  key={index}
                  index={index}
                  id={item.id}
                  imageNumber={item.imageNumber}
                  location={item.location}
                  name={item.name}
                  price={item.price}
                  propertyUse={item.propertyUse}
                  readyToMove={item.readyToMove}
                  size={item.size}
                  onHover={() => {
                    setHoveredProperty(item);
                    setHoveredPropertyId(item.id);
                  }}
                  onHoverOut={() => {
                    setHoveredProperty(null);
                    setHoveredPropertyId(null);
                  }}
                  isHovering={hoveredPropertyId === item.id}
                  loading={isLoading}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
