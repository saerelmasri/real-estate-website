/* eslint-disable react/jsx-key */
import { fetchData } from "@/tools/api";
import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { kFormatter } from "./Home/GridListing";
import { FiltersTypes, SelectComponentProp } from "@/types";

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    borderColor: theme.palette.primary.main,
    borderRadius: 0,
    "&:focus": {
      backgroundColor: "transparent", // Make background transparent when focused
    },
  },
  "& .MuiSelect-icon": {
    transition: "transform 0.3s",
    transform: (props: { open: boolean }) =>
      props.open ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

function SelectComponent({
  title,
  filter,
  value,
  onChange,
}: SelectComponentProp) {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<FiltersTypes>({ dataArray: [] });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newValue = event.target.value as string | number;
    onChange(filter, newValue);
  };
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await fetchData(`/api/property/filters/${filter}`);
        setFilters({ dataArray: Array.from(new Set(response.dataArray)) }); // Ensure unique values
      } catch (error) {
        console.error("Error fetching data");
      }
    };

    fetchFilters();
  }, [filter]);

  return (
    <FormControl
      fullWidth
      variant="standard"
      className={"bg-transparent overflow-hidden"}
    >
      <StyledSelect
        onChange={handleChange}
        open={open}
        value={value}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: 0,
            },
          },
        }}
        inputProps={{
          name: "",
          id: "uncontrolled-native",
        }}
      >
        {filters.dataArray.map((item, index) => (
          <MenuItem key={`${item}-${index}`} value={item}>
            {filter === "price" && typeof item === "number"
              ? kFormatter(item)
              : filter === "size" && typeof item === "number"
              ? `${item}m2`
              : item}
          </MenuItem>
        ))}
      </StyledSelect>

      <FormHelperText className="text-sm font-satoshi-medium font-semibold">
        {title}
      </FormHelperText>
    </FormControl>
  );
}

export default SelectComponent;
