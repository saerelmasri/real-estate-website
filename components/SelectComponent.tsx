import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    borderBottom: "2px solid", // Only bottom border
    borderColor: theme.palette.primary.main,
    borderRadius: 0,
  },
  "& .MuiSelect-icon": {
    transition: "transform 0.3s",
    transform: (props: { open: boolean }) =>
      props.open ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

function SelectComponent() {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState<number | string>(0);

  const handleChange = (event: SelectChangeEvent<number | string>) => {
    setAge(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <FormControl fullWidth variant="standard" className={"bg-transparent"}>
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
        Type
      </FormHelperText>
    </FormControl>
  );
}

export default SelectComponent;
