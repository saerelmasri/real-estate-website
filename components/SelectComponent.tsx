/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import { fetchData } from "@/tools/api";
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { styled } from "@mui/system";
import React, {
  useEffect,
  useState,
  memo,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { kFormatter } from "./Home/GridListing";
import { FiltersTypes, SelectComponentProp } from "@/types";

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    borderColor: theme.palette.primary.main,
    borderRadius: 0,
    "&:focus": {
      backgroundColor: "transparent",
    },
  },
  "& .MuiSelect-icon": {
    transition: "transform 0.3s",
    transform: (props: { open: boolean }) =>
      props.open ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

const SelectComponent = ({
  title,
  filter,
  value,
  onChange,
}: SelectComponentProp) => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<FiltersTypes>({ dataArray: [] });
  const fetchedFilters = useRef<FiltersTypes>({ dataArray: [] });

  const handleChange = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      const newValue = event.target.value as string | number;
      onChange(filter, newValue);
    },
    [filter, onChange]
  );

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await fetchData(`/api/property/filters/${filter}`);
        const newFilters: FiltersTypes = {
          dataArray: Array.from(new Set(response.dataArray)),
        };
        if (
          JSON.stringify(newFilters) !== JSON.stringify(fetchedFilters.current)
        ) {
          fetchedFilters.current = newFilters;
          setFilters(newFilters);
        }
      } catch (error) {
        console.error("Error fetching data");
      }
    };

    fetchFilters();
  }, [filter]);

  const memorizedFilters = useMemo(() => filters.dataArray, [filters]);

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
        onClose={useCallback(() => setOpen(false), [])}
        onOpen={useCallback(() => setOpen(true), [])}
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
        {memorizedFilters.map((item, index) => (
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
};

export default memo(SelectComponent);
