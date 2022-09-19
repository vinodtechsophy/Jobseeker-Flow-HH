import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import { useStyles } from "./CalendarStyles";
import "./Calendar.css";

const Calendar = (props) => {
  const [value, setValue] = useState<Date>(new Date());
  const [dayValue, setDayValue] = useState(value.getDate());
  const [monthValue, setMonthValue] = useState(value.getMonth() + 1);
  const [yearValue, setYearValue] = useState(value.getFullYear());
  const classes = useStyles();

  const handleDatePicker = (val) => {
    setDayValue(val.getDate());
    setMonthValue(val.getMonth() + 1);
    setYearValue(val.getFullYear());
    setValue(val);
    props.setDate(val);
  };

  const handleDayChange = (event) => {
    setDayValue(event.target.value);
    if (value) {
      setValue(new Date(yearValue, monthValue - 1, event.target.value));
      props.setDate(new Date(yearValue, monthValue - 1, event.target.value));
    }
  };

  const handleMonthChange = (event) => {
    setMonthValue(event.target.value);
    setValue(new Date(yearValue, event.target.value - 1, dayValue));
    props.setDate(new Date(yearValue, event.target.value - 1, dayValue));
  };

  const handleYearChange = (event) => {
    setYearValue(event.target.value);
    setValue(new Date(event.target.value, monthValue - 1, dayValue));
    props.setDate(new Date(event.target.value, monthValue - 1, dayValue));
  };

  return (
    <div className="row datePicker">
      {props.status ? (
        <>
          <TextField
            className={classes.date}
            id="outlined-date"
            label="Date"
            size="small"
            variant="outlined"
            value={dayValue}
            onChange={handleDayChange}
            disabled={props.disabled}
          />
          <TextField
            className={classes.date}
            id="outlined-month"
            label="Month"
            size="small"
            value={monthValue}
            onChange={handleMonthChange}
            disabled={props.disabled}
          />
          <TextField
            className={classes.year}
            id="outlined-year"
            label="Year"
            size="small"
            value={yearValue}
            onChange={handleYearChange}
            disabled={props.disabled}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Custom input"
              value={value}
              onChange={handleDatePicker}
              disabled={props.disabled}
              renderInput={({ inputRef, inputProps, InputProps }) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input ref={inputRef} {...inputProps} />
                  {InputProps?.endAdornment}
                </Box>
              )}
            />
          </LocalizationProvider>
        </>
      ) : (
        <>
          <TextField
            className={classes.date}
            id="outlined-month-one"
            label="Month"
            size="small"
            value={monthValue}
            onChange={handleMonthChange}
          />
          <TextField
            className={classes.year}
            id="outlined-year-one"
            label="Year"
            size="small"
            value={yearValue}
            onChange={handleYearChange}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              views={["year", "month"]}
              label="Custom input"
              value={value}
              onChange={handleDatePicker}
              renderInput={({ inputRef, inputProps, InputProps }) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input ref={inputRef} {...inputProps} />
                  {InputProps?.endAdornment}
                </Box>
              )}
            />
          </LocalizationProvider>
        </>
      )}
    </div>
  );
};

export default Calendar;
