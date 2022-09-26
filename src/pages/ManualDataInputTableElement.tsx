import React, { useState, useRef, useEffect } from "react";
import {
  Typography,
  Divider,
  Button,
  TextField,
  Box,
  TooltipProps,
  tooltipClasses,
  Tooltip,
  ClickAwayListener,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {
  preDuplicationCheck,
  fullDuplicationCheck,
} from "../services/JobSeekerService";
import moment from "moment";

const useStyles = makeStyles(() => ({
  buttonContainer: {
    "&.MuiButton-root": {
      minWidth: "2vw",
    },
  },

  arrow: {
    "&:before": {
      border: "1px solid #36454F",
      color: "#ffffff",
    },
  },
}));

export const FirstNameInputBox = (params: any) => {
  const id = `cellNo${params.rowIndex}${params.column.instanceId}`;
  const [firstName, setFirstName] = useState(params.getValue());
  const handleChange = (event: any) => {
    if (/^[A-Za-z\s]+$/.test(event.target.value) || event.target.value == "") {
      setFirstName(event.target.value);
      params.setValue(event.target.value);
    }
  };
  return (
    <div>
      <input
        id={id}
        disabled={params.pdcDisabled}
        type="text"
        onChange={handleChange}
        value={firstName}
        style={{ width: "100%", border: "1px solid #DFE5FF" }}
      />
    </div>
  );
};

export const LastNameInputBox = (params: any) => {
  const id = `cellNo${params.rowIndex}${params.column.instanceId}`;
  const [lastName, setLastName] = useState(params.getValue());
  const handleChange = (event: any) => {
    if (/^[A-Za-z\s]+$/.test(event.target.value) || event.target.value == "") {
      setLastName(event.target.value);
      params.setValue(event.target.value);
    }
  };
  return (
    <div>
      <input
        id={id}
        disabled={params.pdcDisabled}
        type="text"
        onChange={handleChange}
        value={lastName}
        style={{ width: "100%", border: "1px solid #DFE5FF" }}
      />
    </div>
  );
};
export const MobileNumberInputBox = (params: any) => {
  const id = `cellNo${params.rowIndex}${params.column.instanceId}`;
  const [mobileNumber, setMobileNumber] = useState(params.getValue());
  const handleChange = (event: any) => {
    if (/^\d{0,10}$/.test(event.target.value.trim())) {
      setMobileNumber(event.target.value);
      params.setValue(event.target.value);
    }
  };
  return (
    <div>
      <input
        id={id}
        disabled={params.pdcDisabled}
        type="text"
        onChange={handleChange}
        value={mobileNumber}
        style={{ width: "100%", border: "1px solid #DFE5FF" }}
      />
    </div>
  );
};

export const EmailTextInput = (params: any) => {
  const id = `cellNo${params.rowIndex}${params.column.instanceId}`;
  const [message, setMessage] = useState(params.getValue());
  const handleChange = (event: any) => {
    setMessage(event.target.value);
    params.setValue(event.target.value);
  };
  return (
    <div>
      <input
        id={id}
        disabled={params.pdcDisabled}
        type="email"
        onChange={handleChange}
        value={message}
        style={{ width: "100%", border: "1px solid #DFE5FF" }}
      />
    </div>
  );
};

export const CustomDropDown = (params: any) => {
  const yes = {
    option: "yes",
    color: "#EF4444",
    title: "Error!",
    body: "The job seeker needs 6 month cooldown before it can be entered again.",
  };

  const no = {
    option: "no",
    color: "#22C55E",
    title: "",
    body: "",
  };
  const [option, setOption] = useState({
    option: "",
    color: "",
    title: "",
    body: "",
  });
  useEffect(() => {
    setOption(params.getValue() == "yes" ? yes : no);
  }, []);

  const id = `cellNo${params.rowIndex}${params.column.instanceId}`;
  const iconId = `iconNo${params.rowIndex}${params.column.instanceId}`;

  const [message, setMessage] = useState(params.getValue());
  const handleChange = (event: any) => {
    setMessage(event.target.value);
    params.setValue(event.target.value);
    if (event.target.value == "yes") {
      setOption(yes);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 4000);
    } else {
      setOption(no);
      setOpen(false);
      setTimeout(() => {
        setOpen(false);
      }, 4000);
    }
  };
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
      {...props}
      placement="right"
      arrow
      classes={{ popper: className, arrow: classes.arrow }}
      // className={classes.arrowStyle}
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#ffffff",
      border: `1px solid ${option.color}`,
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      borderRadius: "1vw",
    },
  }));
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };
  return (
    <>
      <div>
        <select
          id={id}
          style={{ border: "1px solid #DFE5FF" }}
          value={message}
          onChange={handleChange}
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <HtmlTooltip
            // PopperProps={{
            //   disablePortal: true,
            // }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={
              <React.Fragment>
                <Typography variant="subtitle2">
                  <b style={{ color: option.color }}>{option.title}</b>
                </Typography>

                <Typography variant="caption" color="#626880">
                  {option.body}
                </Typography>
              </React.Fragment>
            }
          >
            {(() => {
              if (option.option == "yes") {
                return (
                  <ReportGmailerrorredIcon
                    id={iconId}
                    sx={{ color: option.color, fontSize: "20px" }}
                  />
                );
              } else {
                return <div></div>;
              }
            })()}
          </HtmlTooltip>
        </ClickAwayListener>
      </div>
    </>
  );
};

export const PDCStatusCheckButton = (params: any) => {
  const fail = {
    result: "Fail",
    color: "#EF4444",
    title: "Dublicate Found!",
    body: "The ownwership with sai anvesh Maruboyina for 30 days.",
  };
  const pass = {
    result: "Pass",
    color: "#22C55E",
    title: "Pre Dublication Check Pass, job Seeker Id Created! ",
    body: "Please Add DOB and PAN No. For full Dublication Check.",
  };
  const [result, setResult] = useState({
    result: "",
    color: "",
    title: "",
    body: "",
  });

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
      {...props}
      placement="right"
      arrow
      classes={{ popper: className, arrow: classes.arrow }}
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#ffffff",
      border: `1px solid ${result.color}`,
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      borderRadius: "1vw",
    },
  }));

  const buttonId = `buttonNo${params.rowIndex}${params.column.instanceId}`;
  const iconId = `iconNo${params.rowIndex}${params.column.instanceId}`;

  const ref = useRef(null);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const handleClick = (event: any) => {
    if (
      params.data.firstName.trim() == "" ||
      params.data.lastName.trim() == "" ||
      params.data.phoneNumber.trim() == "" ||
      params.data.email.trim() == "" ||
      params.data.interviewed.trim() == ""
    ) {
      alert("Enter All Details.");
      params.setValue([false, ""]);
    } else if (!/^[6-9]{1}[0-9]{9}$/.test(params.data.phoneNumber)) {
      alert("Invalid Phone Number.");
      params.setValue([false, ""]);
    } else if (!emailRegex.test(params.data.email)) {
      alert("Invalid Email.");
      params.setValue([false, ""]);
    } else {
      const bodyPayload = {
        referralCompanyId: "a2",
        contestId: "CONTEST_07_1091",
        emailId: params.data.email,
        mobileNumber: params.data.phoneNumber,
        firstName: params.data.firstName,
        lastName: params.data.lastName,
        interviewAttended: params.data.interviewed,
      };
      preDuplicationCheck(bodyPayload).then((response) => {
        if (response?.data.data.status == "PDC_SUCCESS") {
          setResult(pass);
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 4000);
          params.setValue([true, response?.data.data.profileLogId]);
          localStorage.setItem(
            `row${params.rowIndex}`,
            JSON.stringify(params.data)
          );
        } else {
          setResult(fail);
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 4000);
          params.setValue([false, response?.data.data.profileLogId]);
        }
      });
    }
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };
  useEffect(() => {
    if (params.getValue() == null) {
      setResult({
        result: "",
        color: "",
        title: "",
        body: "",
      });
    } else if (params.getValue()) {
      setResult(pass);
    } else if (!params.getValue() == false) {
      setResult(fail);
    }
  }, []);

  return (
    <>
      <Button
        className={classes.buttonContainer}
        sx={{
          display: "inline",
        }}
        variant="contained"
        size="small"
        onClick={handleClick}
      >
        Check
      </Button>
      <div style={{ color: result.color, display: "inline" }}>
        {result.result}
      </div>
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <HtmlTooltip
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={
              <React.Fragment>
                <Typography variant="subtitle2">
                  <b style={{ color: result.color }}>{result.title}</b>
                </Typography>
                <Typography variant="caption" color="#626880">
                  {result.body}
                </Typography>
              </React.Fragment>
            }
          >
            {(() => {
              if (result.result == "Pass") {
                return (
                  <TaskAltIcon
                    id={iconId}
                    sx={{ color: result.color, fontSize: "18px" }}
                  />
                );
              } else if (result.result == "Fail") {
                return (
                  <ReportGmailerrorredIcon
                    id={iconId}
                    sx={{ color: result.color, fontSize: "20px" }}
                  />
                );
              } else {
                return <div></div>;
              }
            })()}
          </HtmlTooltip>
        </ClickAwayListener>
      </div>
    </>
  );
};

export const CustomDOBInputBox = (params: any) => {
  const [date, setDate] = React.useState(
    params.getValue() == "" ? new Date(new Date().setFullYear(new Date().getFullYear() - 18)) : params.getValue()
  );

  const handleChange = (newValue: any) => {
    const dd = ("0" + newValue.$D).slice(-2);
    const mm = ("0" + (newValue.$M + 1)).slice(-2);
    const yy = newValue.$y;
    setDate(`${dd}/${mm}/${yy}`);
    params.setValue(`${dd}/${mm}/${yy}`);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Custom input"
        views={["year", "month", "day"]}
        value={date}
        onChange={(newValue) => {
          handleChange(newValue);
        }}
        maxDate={moment().subtract(18, "year")}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <input
              ref={inputRef}
              {...inputProps}
              style={{
                // height: "2vw",
                width: "90%",
                border: "1px solid #DFE5FF",
              }}
            />
            {InputProps?.endAdornment}
          </Box>
        )}
      />
    </LocalizationProvider>
  );
};

export const PanInputBox = (params: any) => {
  const id = `cellNo${params.rowIndex}${params.column.instanceId}`;
  const [panNumber, setPanNumber] = useState(params.getValue());
  const handleChange = (event: any) => {
    if (event.target.value.trim().length <= 5) {
      setPanNumber(event.target.value);
      params.setValue(event.target.value);
    }
  };
  return (
    <div>
      <input
        id={id}
        disabled={params.pdcDisabled}
        type="text"
        onChange={handleChange}
        value={panNumber}
        style={{ width: "100%", border: "1px solid #DFE5FF" }}
      />
    </div>
  );
};
export const FDCStatusCheckButton = (params: any) => {
  const fail = {
    result: "Fail",
    color: "#EF4444",
    title: "Dublicate Found!",
    body: "The ownwership with sai Anvesh Maruboyina for 30 days.",
  };
  const pass = {
    result: "Pass",
    color: "#22C55E",
    title: "Final Dublication Check Passed, ",
    body: "Press upload to start uploading the profile.",
  };
  const [result, setResult] = useState({
    result: "",
    color: "",
    title: "",
    body: "",
  });

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
      {...props}
      placement="right"
      arrow
      classes={{ popper: className, arrow: classes.arrow }}
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#ffffff",
      border: `1px solid ${result.color}`,
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      borderRadius: "1vw",
    },
  }));

  const buttonId = `buttonNo${params.rowIndex}${params.column.instanceId}`;
  const iconId = `iconNo${params.rowIndex}${params.column.instanceId}`;

  const ref = useRef(null);
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleClick = (event: any) => {
    if (
      params.data.firstName.trim() == "" ||
      params.data.lastName.trim() == "" ||
      params.data.phoneNumber.trim() == "" ||
      params.data.email.trim() == "" ||
      params.data.interviewed.trim() == ""
    ) {
      alert("Enter All Details.");
      params.setValue(false);
    }
    // else if (params.data.dob.trim() == "") {
    //   alert("Please enter date of birth.");
    // }
    else if (!/^[A-Za-z\s]+$/.test(params.data.firstName)) {
      alert("Only alphabet can be entered in first name.");
      params.setValue(false);
    } else if (!/^[A-Za-z\s]+$/.test(params.data.lastName)) {
      alert("Only alphabet can be entered in last name.");
      params.setValue(false);
    } else if (!/^[6-9]{1}[0-9]{9}$/.test(params.data.phoneNumber)) {
      alert("Invalid Phone Number.");
      params.setValue(false);
    } else if (!emailRegex.test(params.data.email)) {
      alert("Invalid Email.");
      params.setValue(false);
    } else if (params.data.lastFiveDigitOfPan.trim().length != 5) {
      alert("Please enter last five digits of PAN.");
      params.setValue(false);
    } else {
      fullDuplicationCheck(
        params.data.profileLogId,
        params.data.lastFiveDigitOfPan,
        params.data.dob
      ).then((response) => {
        if (response?.data.data.status == "FDC_SUCCESS") {
          setResult(pass);
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 4000);
          params.setValue(true);
          localStorage.setItem(
            `row${params.rowIndex}`,
            JSON.stringify(params.data)
          );
        } else {
          setResult(fail);
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 4000);
          params.setValue(false);
        }
      });
    }
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };

  useEffect(() => {
    if (params.getValue() == null) {
      setResult({
        result: "",
        color: "",
        title: "",
        body: "",
      });
    } else if (params.getValue()) {
      setResult(pass);
    } else if (!params.getValue() == false) {
      setResult(fail);
    }
  }, []);

  return (
    <>
      <Button
        className={classes.buttonContainer}
        sx={{
          display: "inline",
        }}
        variant="contained"
        size="small"
        onClick={handleClick}
      >
        Check
      </Button>
      <div style={{ color: result.color, display: "inline" }}>
        {result.result}
      </div>
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <HtmlTooltip
            // PopperProps={{
            //   disablePortal: true,
            // }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={
              <React.Fragment>
                <Typography variant="subtitle2">
                  <b style={{ color: result.color }}>{result.title}</b>
                </Typography>
                <Typography variant="caption" color="#626880">
                  {result.body}
                </Typography>
              </React.Fragment>
            }
          >
            {(() => {
              if (result.result == "Pass") {
                return (
                  <TaskAltIcon
                    id={iconId}
                    sx={{ color: result.color, fontSize: "18px" }}
                  />
                );
              } else if (result.result == "Fail") {
                return (
                  <ReportGmailerrorredIcon
                    id={iconId}
                    sx={{ color: result.color, fontSize: "18px" }}
                  />
                );
              } else {
                return <div></div>;
              }
            })()}
          </HtmlTooltip>
        </ClickAwayListener>
      </div>
    </>
  );
};

export const CustomUploadButton = (params: any) => {
  const classes = useStyles();

  const navigateUpload = () => {};

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Button
        className={classes.buttonContainer}
        variant="contained"
        size="small"
        onClick={navigateUpload}
      >
        Upload
      </Button>
    </div>
  );
};

const ManualDataInputTableElement = () => {
  return <div>ManualDataInputTableElement</div>;
};

export default ManualDataInputTableElement;
