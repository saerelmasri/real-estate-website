import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

type TeamCardProps = {
  imageURL: string;
  name: string;
  position: string;
};

function TeamCard({ imageURL, name, position }: TeamCardProps) {
  return (
    <Card
      sx={{
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 2,
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <CardMedia
        className={"h-[400px] bg-top bg-no-repea"}
        image={`/images/${imageURL}`}
        title="business person"
      />
      <CardContent className={"mt-2"}>
        <Typography className={"font-satoshi-medium text-sm font-semibold"}>
          {name}
        </Typography>
        <Typography className={"font-satoshi-regular text-sm font-semibold"}>
          {position}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TeamCard;
