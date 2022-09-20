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
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import VisibilityIcon from "@mui/icons-material/Visibility";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";

import DehazeIcon from "@mui/icons-material/Dehaze";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { openFile } from "../../services/DocumentService";
import KeycloakService from "../../services/KeycloakService";

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
  iconColor: {
    color: "#4d6cd9",
    margin: "8px",
  },
  uploadText: {
    color: "#4d6cd9",
  },
}));

export const ResumeUploaded = (params) => {
  useEffect(() => {
    fetchToken();
  }, []);
  const fetchToken = async () => {
    const token = await KeycloakService.fetchTokenOtherUser();
    sessionStorage.setItem("react-token", token);
  };
  const classes = useStyles();
  const handleViewResume = async () => {
    const resumeId = params.getValue();
    console.log(resumeId);
    await openFile(resumeId);
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Typography onClick={handleViewResume} className={classes.uploadText}>
        View Resume Uploaded
      </Typography>
    </div>
  );
};

export const Icons = (params) => {
  const classes = useStyles();
  const handleClick = () => {
    console.log(params);
  };
  const handleChat = () => {
    console.log("Chat Icon clicked");
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <VisibilityIcon className={classes.iconColor} onClick={handleClick} />

      <LocalPhoneRoundedIcon
        className={classes.iconColor}
        onClick={handleClick}
      />
      <ChatBubbleOutlineIcon
        className={classes.iconColor}
        onClick={handleChat}
      />
      <DehazeIcon className={classes.iconColor} onClick={handleClick} />
    </div>
  );
};

export const CustomDropDown = (params: any) => {
  // console.log("Vetting custom feild", params);
  const Passed = {
    option: "passed",
    color: "#22C55E",
    title: "Success",
    body: "Passed",
  };

  const Pending = {
    option: "pending",
    color: "#ff781f",
    title: "",
    body: "Pending",
  };
  const Failed = {
    option: "failed",
    color: "#EF4444",
    title: "",
    body: "Failed",
  };
  const [option, setOption] = useState({
    option: "",
    color: "",
    title: "",
    body: "",
  });
  useEffect(() => {
    console.log(params.getValue());
    if (params.getValue() === null || "") {
      setOption({
        option: "",
        color: "",
        title: "",
        body: "",
      });
    } else if (params.getValue() === "passed") {
      setOption(Passed);
    } else if (params.getValue() === "pending") {
      setOption(Pending);
    } else if (params.getValue() === "failed") {
      setOption(Failed);
    }
  }, []);

  const id = `cellNo${params.rowIndex}${params.column.instanceId}`;
  const iconId = `iconNo${params.rowIndex}${params.column.instanceId}`;

  const [message, setMessage] = useState("");
  const handleChange = (event: any) => {
    params.setValue(event.target.value);
    if (event.target.value == "passed") {
      console.log("Can call Api to change status to Passed");
      setOption(Passed);
    } else if (event.target.value == "pending") {
      setOption(Pending);
    } else if (event.target.value == "failed") {
      setOption(Failed);
    } else if (event.target.value == "") {
      setOption({
        option: "",
        color: "",
        title: "",
        body: "",
      });
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
          value={option.option}
          onChange={handleChange}
          disabled
        >
          <option value="">Null</option>
          <option value="passed">Passed</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>
      </div>
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        {(() => {
          if (option.option == "passed") {
            return (
              <Tooltip title={option.body} placement="right-start">
                <IconButton>
                  <CheckCircleIcon
                    id={iconId}
                    sx={{ color: option.color, fontSize: "25px" }}
                  />
                </IconButton>
              </Tooltip>
            );
          } else if (option.option == "pending") {
            return (
              <Tooltip title={option.body} placement="right-start">
                <IconButton>
                  <PauseCircleFilledIcon
                    id={iconId}
                    sx={{ color: option.color, fontSize: "25px" }}
                  />
                </IconButton>
              </Tooltip>
            );
          } else if (option.option == "failed") {
            return (
              <Tooltip title={option.body} placement="right-start">
                <IconButton>
                  <ErrorIcon
                    id={iconId}
                    sx={{ color: option.color, fontSize: "25px" }}
                  />
                </IconButton>
              </Tooltip>
            );
          }
        })()}
      </div>
    </>
  );
};

const CustomFields = () => {
  return <div>CustomFields</div>;
};
export default CustomFields;
