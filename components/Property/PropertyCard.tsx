import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/navigation";
import React from "react";

type PropertyCard = {
  propertyId: number;
  imageProperty: string;
  propertyName: string;
  propertyLocation: string;
  propertySize: number;
  propertyPrice: string;
};

function PropertyCard({
  propertyId,
  imageProperty,
  propertyName,
  propertyLocation,
  propertySize,
  propertyPrice,
}: PropertyCard) {
  const router = useRouter();
  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 0,
        border: "none",
        boxShadow: "none",
        backgroundColor: "transparent",
      }}
      variant="outlined"
    >
      <CardContent sx={{ padding: 0, backgroundColor: "transparent" }}>
        <CardActionArea onClick={() => router.push(`/property/${propertyId}`)}>
          <CardMedia
            component="img"
            alt="Property Image"
            src={imageProperty}
            sx={{
              width: "100%",
              height: "300px",
              backgroundPosition: "center",
              cursor: "pointer",
            }}
          />
        </CardActionArea>
        <Box
          sx={{
            display: "flex",
            marginTop: 2,
            gap: 4,
            background: "none",
          }}
        >
          <Box>
            <Typography
              className={"font-satoshi-medium font-semibold text-base"}
            >
              {propertyName}
            </Typography>
            <Typography
              color="#999999"
              className={"font-satoshi-regular text-sm"}
            >
              {propertyLocation}
            </Typography>
          </Box>
          <Box>
            <Typography
              className={"font-satoshi-medium font-semibold text-base"}
            >
              Now Buying
            </Typography>
            <Typography
              color="#999999"
              className={"font-satoshi-regular text-sm"}
            >
              {propertySize}m<sup>2</sup> / From - ${propertyPrice}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
