"use client";
import SelectComponent from "@/components/SelectComponent";
import { FormControl, FormHelperText, Grid, NativeSelect } from "@mui/material";

function SearchPage() {
  return (
    <div className="bg-[#f7f5f4] bg-cover">
      <div className="w-full flex flex-col">
        <div className="w-full mt-[100px] flex flex-col justify-center items-start pl-[10%] pr-[10%] pt-[5%] pb-[5%]">
          <Grid container spacing={2} className="border border-black w-full flex justify-center">
            <Grid item lg={2}>
              <SelectComponent/>
            </Grid>
            <Grid item lg={2}>
                <SelectComponent/>
            </Grid>
            <Grid item lg={2}>
                <SelectComponent/>
            </Grid>
            <Grid item lg={2}>
                <SelectComponent/>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
