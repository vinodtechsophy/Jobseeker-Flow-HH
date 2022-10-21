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
  Drawer,
  List,
  ListItem,
  ListItemText,
  ButtonProps,
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
import MessageBox from "../Broadcast/MessageBox";
import { jobseekerConsentStatusChangeWorkflow } from "../../services/JobSeekerService";
import { useAppDispatch } from "../../services/StoreHooks";

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
  dropdown: {
    border: "1px solid #DFE5FF",
  },
  dropdownAlignment: {
    display: "inline-flex",
    alignItems: "center",
  },
  commonAlignment: {
    textAlign: "center",
  },
  dropdownIconAlignment: {
    left: "18px",
  },
  chatBox: {
    width: "390px",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
  },
}));

export const ResumeUploaded = (params) => {
  const classes = useStyles();

  const handleViewResume = async () => {
    const resumeId = params.getValue();
    await openFile(resumeId);
  };

  return (
    <div className={classes.commonAlignment}>
      <Typography onClick={handleViewResume} className={classes.uploadText}>
        View Resume Uploaded
      </Typography>
    </div>
  );
};

export const Icons = (params) => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const classes = useStyles();
  const handleClick = () => {};
  const handleChat = () => {
    setToggleDrawer(true);
  };

  return (
    <div className={classes.commonAlignment}>
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
      <Drawer
        anchor="left"
        open={toggleDrawer}
        onClose={() => setToggleDrawer(false)}
      >
        <Box className={classes.chatBox}>
          <MessageBox closeIt={() => setToggleDrawer(false)} params={params} />
        </Box>
      </Drawer>
    </div>
  );
};

export const CustomDropDown = (params: any) => {
  const [disable, setDisable] = useState<any>(false);
  const dispatch = useAppDispatch();

  const Passed = {
    option: "JOB_SEEKER_CONSENT_PASS",
    color: "#22C55E",
    title: "Success",
    body: "Passed",
  };

  const Pending = {
    option: "JOB_SEEKER_CONSENT_PENDING",
    color: "#ff781f",
    title: "",
    body: "Pending",
  };
  const Failed = {
    option: "JOB_SEEKER_CONSENT_FAIL",
    color: "#EF4444",
    title: "",
    body: "Job Seeker Rejected Consent!",
  };
  const [option, setOption] = useState({
    option: "",
    color: "",
    title: "",
    body: "",
  });
  useEffect(() => {
    if (
      params.getValue() === "JOB_SEEKER_CONSENT_PENDING" ||
      params.getValue() === null ||
      params.getValue() === ""
    ) {
      // setOption({
      //   option: "",
      //   color: "",
      //   title: "",
      //   body: "",
      // });
      // setDisable(true);
      setOption(Pending);
    } else if (params.getValue() === "JOB_SEEKER_CONSENT_PASS") {
      setOption(Passed);
      setDisable(true);
    }
    // else if (params.getValue() === "JOB_SEEKER_CONSENT_PENDING") {
    //   setOption(Pending);
    // }
    else if (params.getValue() === "JOB_SEEKER_CONSENT_FAIL") {
      setOption(Failed);
      setDisable(true);
    }
  }, []);

  const id = `cellNo${params.rowIndex}${params.column.instanceId}`;
  const iconId = `iconNo${params.rowIndex}${params.column.instanceId}`;

  const [message, setMessage] = useState("");

  const dispatchNotificationData = (notifyData) => {
    dispatch({
      type: "SEND_ALERT",
      data: {
        enable: notifyData.enable,
        type: notifyData.type,
        message: notifyData.message,
        duration: notifyData.duration,
      },
    });
  };

  const handleChange = async (event: any) => {
    let payLoad = {
      messageName: "consentArrived",
      businessKey: params.data._id,
      correlationKeys: {},
      processVariables: {
        consentGivenByJobSeeker: {
          value: event.target.value,
          type: "string",
        },
      },
    };
    // params.setValue(event.target.value);
    if (event.target.value == "JOB_SEEKER_CONSENT_PASS") {
      const response = await jobseekerConsentStatusChangeWorkflow(payLoad);
      if (response) {
        setOption(Passed);
        dispatchNotificationData({
          enable: true,
          type: "success",
          message: "Job Seeker Consent Changed to Pass",
          duration: 2000,
        });
      } else {
        setOption(Pending);
        dispatchNotificationData({
          enable: true,
          type: "error",
          message: "Something Went Wrong Please Try gain",
        });
      }
    } else if (event.target.value == "JOB_SEEKER_CONSENT_PENDING") {
      setOption(Pending);
    } else if (event.target.value == "JOB_SEEKER_CONSENT_FAIL") {
      const response = await jobseekerConsentStatusChangeWorkflow(payLoad);
      if (response) {
        setOption(Failed);
        dispatchNotificationData({
          enable: true,
          type: "success",
          message: "Job Seeker Consent Changed to Fail",
          duration: 2000,
        });
      } else {
        setOption(Pending);
        dispatchNotificationData({
          enable: true,
          type: "error",
          message: "Something Went Wrong Please Try gain",
          duration: 2000,
        });
      }
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

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText("#4d6cd9"),
    backgroundColor: "#4d6cd9",
    "&:hover": {
      backgroundColor: "#4d6cd9",
    },
    borderRadius: 20,
    width: "8px",
    fontSize: "12px",
    height: "20px",
  }));

  const handleResend = async (params) => {
    //API call
    let payLoad = {
      messageName: "consentArrived",
      businessKey: params.data._id,
      correlationKeys: {},
      processVariables: {
        consentGivenByJobSeeker: {
          value: "JOB_SEEKER_CONSENT_PENDING",
          type: "string",
        },
      },
    };
    const response = await jobseekerConsentStatusChangeWorkflow(payLoad);
    if (response) {
      dispatchNotificationData({
        enable: true,
        type: "success",
        message: "Job Seeker Consent Resent!",
        duration: 2000,
      });
    } else {
      dispatchNotificationData({
        enable: true,
        type: "error",
        message: "Job Seeker Consent Resent Failed",
        duration: 2000,
      });
    }
  };

  return (
    <>
      <div>
        <select
          id={id}
          className={classes.dropdown}
          value={option.option || "JOB_SEEKER_CONSENT_PENDING"}
          onChange={handleChange}
          disabled={
            true
              ? option.option === "JOB_SEEKER_CONSENT_FAIL" ||
                option.option === "JOB_SEEKER_CONSENT_PASS"
              : false
          }
        >
          <option value="JOB_SEEKER_CONSENT_PASS">Passed</option>
          <option value="JOB_SEEKER_CONSENT_PENDING">Pending</option>
          <option value="JOB_SEEKER_CONSENT_FAIL">Failed</option>
        </select>
      </div>
      <div className={classes.dropdownAlignment}>
        {(() => {
          if (option.option == "JOB_SEEKER_CONSENT_PASS") {
            return (
              <Tooltip title={option.body} placement="right-start">
                <IconButton className={classes.dropdownIconAlignment}>
                  <CheckCircleIcon
                    id={iconId}
                    sx={{ color: option.color, fontSize: "25px" }}
                  />
                </IconButton>
              </Tooltip>
            );
          } else if (option.option == "JOB_SEEKER_CONSENT_FAIL") {
            return (
              <Tooltip title={option.body} placement="right-start">
                <IconButton className={classes.dropdownIconAlignment}>
                  <ErrorIcon
                    id={iconId}
                    sx={{ color: option.color, fontSize: "25px" }}
                  />
                </IconButton>
              </Tooltip>
            );
          } else {
            return (
              <>
                <ColorButton
                  variant="contained"
                  onClick={() => handleResend(params)}
                >
                  Resend
                </ColorButton>
                <Tooltip
                  title={option.body || "Pending"}
                  placement="right-start"
                >
                  <IconButton>
                    <PauseCircleFilledIcon
                      id={iconId}
                      sx={{
                        color: option.color || "#ff781f",
                        fontSize: "25px",
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </>
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
