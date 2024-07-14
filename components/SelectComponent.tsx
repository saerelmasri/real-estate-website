import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";

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

type SelectComponentProp = {
  title: string;
};

function SelectComponent({ title }: SelectComponentProp) {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState<any>(0);

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <FormControl
      fullWidth
      variant="standard"
      className={"bg-transparent overflow-hidden"}
    >
      <StyledSelect
        value={age}
        onChange={handleChange}
        open={open}
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
          name: "age",
          id: "uncontrolled-native",
        }}
      >
        <MenuItem value={0}>Any</MenuItem>
        <MenuItem value={10}>Buy</MenuItem>
        <MenuItem value={20}>Rent</MenuItem>
      </StyledSelect>
      <FormHelperText className="text-sm font-satoshi-medium font-semibold">
        {title}
      </FormHelperText>
    </FormControl>
  );
}

export default SelectComponent;
