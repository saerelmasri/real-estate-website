import ListingComponent from "@/components/ListingComponent";
import { Grid, Typography } from "@mui/material";

function FutureProjects() {
  return (
    <div className="bg-[#f7f5f4] bg-cover">
      <div className="w-full flex flex-col">
        <div className="w-full mt-[100px] flex flex-col justify-center items-start pl-[10%] pt-[5%] pb-[5%]">
          <Typography
            sx={{ fontWeight: "500", textAlign: "center" }}
            className="text-7xl lg:text-9xl font-satoshi-regular text-black"
          >
            Future - Projects
          </Typography>
          <Typography className="text-2xl font-medium leading-snug text-black pr-[30%] mt-10">
            Explore our upcoming developments, where innovation meets luxury.
            Stay tuned for modern, cutting-edge properties designed to elevate
            your living experience.
          </Typography>
        </div>
        <Grid
          container
          spacing={2}
          gap={3}
          className="w-full pl-[10%] pt-[5%] pb-[5%]"
        >
          <Grid item md={3.5}>
            <ListingComponent />
          </Grid>
          <Grid item md={3.5}>
            <ListingComponent />
          </Grid>
          <Grid item md={3.5}>
            <ListingComponent />
          </Grid>
          <Grid item md={3.5}>
            <ListingComponent />
          </Grid>
          <Grid item md={3.5}>
            <ListingComponent />
          </Grid>
          <Grid item md={3.5}>
            <ListingComponent />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default FutureProjects;
