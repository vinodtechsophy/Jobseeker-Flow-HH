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
  Grid,
  Card,
  Popover,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormGroup,
  FormControlLabel,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import CloseIcon from "@mui/icons-material/Close";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { openFile } from "../../services/DocumentService";
import MessageBox from "../Broadcast/MessageBox";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Calendar from "../../components/Calendar/Calendar";
import clsx from "clsx";
import { mainStages, subStages } from "./ManageConstants";
import {
  manageJobseekerPatch,
  GenericProcess,
} from "../../services/JobSeekerService";
import { useAppDispatch } from "../../services/StoreHooks";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import moment from "moment";
import SendIcon from "@mui/icons-material/Send";

const useStyles = makeStyles(() => ({
  iconColor: {
    color: "#4d6cd9",
    margin: "8px",
  },
  uploadText: {
    color: "#4d6cd9",
  },
  viewAssessmentCard: {
    border: "1px solid grey",
    height: "200px ",
    marginTop: "10px",
    marginRight: "5px",
    marginLeft: "5px",
    fontSize: "15px",
  },
  assessmentActionButton: {
    height: "2px",
    width: "1px",
    float: "right",
    margin: "3px 3px 0px 0px",
    cursor: "pointer",
  },
  assessmentButton: {
    textAlign: "center",
    marginTop: 3,
  },
  assessmentDeleteAction: {
    border: "1px solid gray",
    borderRadius: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    paddingLeft: "40px",
    width: "250px",
    color: "gray",
    height: "55px",
    fontSize: "16px",
  },
  deleteActionButton: {
    width: "250px",
    justifyContent: "left",
    paddingLeft: "25px",
    color: "gray",
    height: "55px",
    fontSize: "16px",
  },
  deleteIcon: {
    marginRight: "15px",
    cursor: "pointer",
  },
  assessmentUpdateAction: {
    borderLeft: "1px solid gray",
    borderRight: "1px solid gray",
    borderBottom: "1px solid gray",
    borderRadius: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    paddingLeft: "43px",
    width: "250px",
    color: "gray",
    height: "55px",
    fontSize: "16px",
  },
  updateActionButton: {
    width: "250px",
    justifyContent: "left",
    color: "gray",
    height: "55px",
    fontSize: "16px",
  },
  updateIcon: {
    marginRight: "17px",
    backgroundColor: "gray",
    color: "white",
    borderRadius: 3,
    cursor: "pointer",
    padding: "2px",
  },
  uploadIcon: {
    size: "small",
    marginRight: "18px",
    marginLeft: "25px",
    backgroundColor: "gray",
    color: "white",
    borderRadius: "2px",
    fontSize: "14px",
  },
  assessmentDialogueBox: {
    backgroundColor: "#4D6CD9",
    width: "600px",
    textAlign: "center",
  },
  assessmentDialogueContent: {
    textAlign: "center",
  },
  assessmentDialogueText: {
    paddingTop: "50px",
    paddingBottom: "40px",
    justifyContent: "center",
    textAlign: "center",
  },
  assessmentDialogueAction: {
    paddingTop: "10px",
    paddingBottom: "40px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
  },
  delete: {
    backgroundColor: "#4D6CD9",
    borderRadius: 20,
    color: "black",
    paddingLeft: "30px",
    paddingRight: "30px",
    height: "30px",
    paddingTop: "3px",
    cursor: "pointer",
    marginRight: "20px",
  },
  cancel: {
    backgroundColor: "#4D6CD9",
    borderRadius: 20,
    color: "black",
    paddingLeft: "20px",
    paddingRight: "20px",
    height: "30px",
    paddingTop: "3px",
    cursor: "pointer",
    marginLeft: "20px",
  },
  leftDrawerBox: {
    width: "390px",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    overflowY: "auto",
  },
  viewAssessmentTitle: {
    textAlign: "center",
    backgroundColor: "#4D6CD9",
    height: "50px",
    // width: "390px",
    color: "#FFFFFF",
    padding: "10px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  assessmentDetailsCard: {
    border: "1px solid grey",
    height: "180px ",
    marginTop: "20px",
    marginRight: "5px",
    marginLeft: "5px",
    fontSize: "13px",
    marginBottom: "10px",
  },
  assessmentDetails: {
    width: "190px",
    "& legend": { display: "none" },
    "& fieldset": { top: 0 },
  },
  partnerAssessment: {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    height: 687,
    width: 390,
    margin: 1,
    border: "1px solid #E5E5E5",
  },
  section1: {
    textAlign: "center",
    backgroundColor: "#4D6CD9",
    height: "50px",
    width: "390px",
    color: "#FFFFFF",
    padding: "10px",
  },
  section2: {
    marginTop: "15px",
    width: "390px",
    textAlign: "center",
  },
  section3: {
    marginTop: "15px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    marginLeft: "18px",
    backgroundColor: "white",
    width: "350px",
    height: "auto",
    borderRadius: "10px",
  },
  timeSlotTitleContainer: {
    marginTop: "40px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  commonColor: {
    color: "#4d6cd9",
  },
  commonMargin: {
    margin: "10px",
  },
  dropdown: {
    border: "1px solid #DFE5FF",
  },
  dropdownContent: {
    display: "inline-flex",
    alignItems: "center",
  },
  closeIcon: {
    float: "right",
  },
  formControl: {
    top: 5,
    minWidth: 120,
  },
}));

export const ResumeUploaded = (params) => {
  const classes = useStyles();
  const id = `cell-no-${params.rowIndex}-${params.column.instanceId}`;
  const containerId = `container-no-${params.rowIndex}-${params.column.instanceId}`;
  const handleViewResume = async () => {
    const resumeId = params.getValue();
    await openFile(resumeId);
  };

  return (
    <div id={containerId} className={classes.assessmentDialogueContent}>
      <Typography
        id={id}
        onClick={handleViewResume}
        className={classes.uploadText}
      >
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
    console.log("Chat Icon clicked");
    setToggleDrawer(true);
  };

  return (
    <div className={classes.assessmentDialogueContent}>
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
        <Box className={classes.leftDrawerBox}>
          <MessageBox closeIt={() => setToggleDrawer(false)} params={params} />
        </Box>
      </Drawer>
    </div>
  );
};

export const MainStageDropDown = (params: any) => {
  const dispatch = useAppDispatch();
  const id = `cell-no-${params.rowIndex}-${params.column.instanceId}`;
  const containerId = `container-no-${params.rowIndex}-${params.column.instanceId}`;
  const elementName = `element-name-${params.rowIndex}-${params.column.instanceId}`;

  const [mainStageSelected, setMainStageSelected] = useState<any>(
    params.data.jobSeekerMainStage
  );

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
    let jobSeekerId = params.data._id;
    let payload = {
      processDefinitionKey: "Process_wnxmrag",
      businessKey: jobSeekerId,
      variables: {
        action: "jobSeekerMainStage",
        jobSeekerMainStage: event.target.value,
        jobSeekerId: jobSeekerId,
      },
    };

    const response: any = await GenericProcess(payload);

    if (response.data.success) {
      params.setValue(event.target.value);
      params.refreshCell();
      setMainStageSelected(event.target.value);
      dispatchNotificationData({
        enable: true,
        type: "success",
        message: "MainStage Updated Successfully ",
        duration: 4000,
      });
    } else {
      params.setValue(params.data.jobSeekerMainStage);
      params.refreshCell();
      setMainStageSelected(mainStageSelected);
      dispatchNotificationData({
        enable: true,
        type: "error",
        message: "MainStage Not Updated Please Try Again ",
        duration: 4000,
      });
    }
  };

  const classes = useStyles();

  return (
    <>
      <div id={containerId}>
        <select
          id={id}
          name={elementName}
          className={classes.dropdown}
          onChange={handleChange}
          defaultValue={mainStageSelected}
        >
          {mainStages.map((item) => (
            <option value={item.value}>{item.title}</option>
          ))}
        </select>
        {/* {dummyState ? <SubStageDropDown mainStage={mainStage} /> : null} */}
      </div>
    </>
  );
};

export const SubStageDropDown = (params: any) => {
  const id = `cell-no-${params.rowIndex}-${params.column.instanceId}`;
  const containerId = `container-no-${params.rowIndex}-${params.column.instanceId}`;
  const elementName = `element-name-${params.rowIndex}-${params.column.instanceId}`;
  const iconId = `iconNo${params.rowIndex}${params.column.instanceId}`;
  let initalValue: string;
  const [subStageSelected, setSubStageSelected] = useState<any>(
    params.data.jobSeekerSubStage
  );
  const dispatch = useAppDispatch();
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

  const [mainStageVal, setMainStageVal] = useState<any>(
    params.data.jobSeekerMainStage
  );

  const handleChange = async (event: any) => {
    setMainStageVal(params.data.jobSeekerMainStage);
    let jobSeekerId = params.data._id;
    let payload = {
      processDefinitionKey: "Process_wnxmrag",
      businessKey: jobSeekerId,
      variables: {
        action: "jobSeekerSubStage",
        jobSeekerSubStage: event.target.value,
        jobSeekerId: jobSeekerId,
      },
    };
    const response: any = await GenericProcess(payload);

    if (response.data.success) {
      params.setValue(event.target.value);
      params.refreshCell();
      dispatchNotificationData({
        enable: true,
        type: "success",
        message: "SubStage Updated Successfully ",
        duration: 4000,
      });
    } else {
      params.setValue(params.data.jobSeekerSubStage);
      dispatchNotificationData({
        enable: true,
        type: "error",
        message: "SubStage not Updated Please Try Again",
        duration: 4000,
      });
    }
  };

  useEffect(() => {
    if (params.data.jobSeekerSubStage)
      setSubStageSelected(params.data.jobSeekerSubStage);
    if (params.data.jobSeekerMainStage)
      setMainStageVal(params.data.jobSeekerMainStage);
  }, [params]);

  const classes = useStyles();
  if (mainStageVal)
    return (
      <>
        <div id={containerId}>
          <select
            id={id}
            name={elementName}
            className={classes.dropdown}
            onChange={handleChange}
            defaultValue={subStageSelected}
          >
            {mainStageVal
              ? subStages[mainStageVal]["subStages"].map((item) => (
                  <option value={item.value}>{item.title}</option>
                ))
              : null}
          </select>
        </div>
      </>
    );
  else return null;
};

export const SubStageCommentsDropDown = (params: any) => {
  const id = `cell-no-${params.rowIndex}-${params.column.instanceId}`;
  const containerId = `container-no-${params.rowIndex}-${params.column.instanceId}`;
  const elementName = `element-name-${params.rowIndex}-${params.column.instanceId}`;
  const iconId = `iconNo${params.rowIndex}${params.column.instanceId}`;
  const [mainStageVal, setMainStageVal] = useState<any>("");
  const [subStageVal, setSubStageVal] = useState<any>("");
  const dispatch = useAppDispatch();
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
    let jobSeekerId = params.data._id;
    let payload = {
      jobSeekerComment: event.target.value,
    };
    const response = await manageJobseekerPatch(jobSeekerId, payload);
    if (response.data.success) {
      params.setValue(event.target.value);
      params.refreshCell();
      dispatchNotificationData({
        enable: true,
        type: "success",
        message: "Comment Updated Successfully ",
        duration: 4000,
      });
    } else {
      params.setValue(params.data.jobSeekerComment);
      dispatchNotificationData({
        enable: true,
        type: "error",
        message: "Comment Not Updated Please Try Again ",
        duration: 4000,
      });
    }
  };

  useEffect(() => {
    if (params.data.jobSeekerMainStage && params.data.jobSeekerSubStage) {
      setMainStageVal(params.data.jobSeekerMainStage);
      setSubStageVal(params.data.jobSeekerSubStage);
    }
  }, [params]);

  const classes = useStyles();
  if (mainStageVal && subStageVal)
    return (
      <>
        <div id={containerId}>
          <select
            id={id}
            name={elementName}
            className={classes.dropdown}
            onChange={handleChange}
            defaultValue={params.data.jobSeekerComment}
          >
            {mainStageVal && subStageVal
              ? subStages[mainStageVal][subStageVal].map((item) => (
                  <option value={item.value}>{item.title}</option>
                ))
              : null}
          </select>
        </div>
      </>
    );
  else return null;
};

export const ViewAssessments = (params) => {
  const containerId = `container-no-${params.rowIndex}-${params.column.instanceId}`;
  const cardId = `card-no-${params.rowIndex}-${params.column.instanceId}`;
  const cardCloseButtonId = `card-close-button-no-${params.rowIndex}-${params.column.instanceId}`;
  const assessmentTypeId = `assessment-type-drop-down-no-${params.rowIndex}-${params.column.instanceId}`;
  const assessmentTypeName = `assessment-type-drop-down-name-${params.rowIndex}-${params.column.instanceId}`;
  const assessmentPartnerId = `assessment-partner-drop-down-no-${params.rowIndex}-${params.column.instanceId}`;
  const assessmentPartnerName = `assessment-partner-drop-down-name-${params.rowIndex}-${params.column.instanceId}`;
  const assessmentButtonId = `assessment-button-no-${params.rowIndex}-${params.column.instanceId}`;
  const assessmentButtonName = `assessment-button-name-${params.rowIndex}-${params.column.instanceId}`;

  const viewAssessmentCardId = `view-assessment-card-no-${params.rowIndex}-${params.column.instanceId}`;
  const viewAssessmentButtonId = `view-assessment-button-no-${params.rowIndex}-${params.column.instanceId}`;
  const viewAssessmentButtonName = `view-assessment-button-name-${params.rowIndex}-${params.column.instanceId}`;
  const uploadAssessmentCardId = `upload-assessment-card-no-${params.rowIndex}-${params.column.instanceId}`;
  const uploadAssessmentButtonId = `upload-assessment-button-no-${params.rowIndex}-${params.column.instanceId}`;
  const uploadAssessmentButtonName = `upload-assessment-button-name-${params.rowIndex}-${params.column.instanceId}`;
  const deleteAssessmentContainerId = `delete-assessment-container-no-${params.rowIndex}-${params.column.instanceId}`;
  const deleteAssessmentCloseButtonId = `delete-assessment-close-button-no-${params.rowIndex}-${params.column.instanceId}`;
  const deleteAssessmentYesButtonId = `delete-assessment-yes-button-no-${params.rowIndex}-${params.column.instanceId}`;
  const deleteAssessmentCancelButtonId = `delete-assessment-cancel-button-no-${params.rowIndex}-${params.column.instanceId}`;

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [assessmentType, setAssessmentType] = React.useState<string[]>([]);
  const [assessmentPartner, setAssessmentPartner] = React.useState<string[]>(
    []
  );
  const [anchorElView, setAnchorElView] = useState<HTMLButtonElement | null>(
    null
  );
  const [anchorElUpload, setAnchorElUpload] =
    useState<HTMLButtonElement | null>(null);
  const [isDeleteBoxOpen, setIsDeleteBoxOpen] = useState(false);
  const [isUpdateBoxOpen, setIsUpdateBoxOpen] = useState(false);
  const [isUploadBoxOpen, setIsUploadBoxOpen] = useState(false);
  const [isDeleteSuccessBoxOpen, setIsDeleteSuccessBoxOpen] = useState(false);

  const assessmentTypes = [
    "Assessment Services",
    "Interview as a Service",
    "Resume Builder",
    "Learning Management System",
  ];
  const assessmentPartners = [
    "Assessment Services",
    "Interview as a Service",
    "Resume Builder",
    "Learning Management System",
  ];

  const handleChangeAssessmentType = (
    event: SelectChangeEvent<typeof assessmentType>
  ) => {
    const {
      target: { value },
    } = event;
    setAssessmentType(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeAssessmentPartner = (
    event: SelectChangeEvent<typeof assessmentPartner>
  ) => {
    const {
      target: { value },
    } = event;
    setAssessmentPartner(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const classes = useStyles();
  const handleClick = () => {
    setToggleDrawer(true);
  };

  const handleCloseView = () => {
    setAnchorElView(null);
  };

  const handleViewReport = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElView(event.currentTarget);
  };

  const openViewPop = Boolean(anchorElView);

  const ViewAssessmentReport = () => {
    return (
      <Card
        id={viewAssessmentCardId}
        className={classes.viewAssessmentCard}
        elevation={3}
      >
        <Box className={classes.assessmentDialogueContent}>
          <div className={classes.commonMargin}>
            Assessment Type - Interview as a Service
            <IconButton
              onClick={handleViewReport}
              className={classes.assessmentActionButton}
            >
              <DehazeIcon className={classes.commonColor} />
            </IconButton>
            <Popover
              id="view-popover"
              open={openViewPop}
              anchorEl={anchorElView}
              onClose={handleCloseView}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 345, left: 355 }}
            >
              <Box className={classes.assessmentDeleteAction}>
                <DeleteForeverIcon
                  className={classes.deleteIcon}
                  onClick={() => {
                    setIsDeleteBoxOpen(true);
                  }}
                />
                <Typography>Delete</Typography>
              </Box>
              <Box className={classes.assessmentUpdateAction}>
                <BorderColorIcon
                  className={classes.updateIcon}
                  onClick={() => {
                    setIsUpdateBoxOpen(true);
                  }}
                  fontSize="small"
                />
                <Typography>Update</Typography>
              </Box>
            </Popover>
          </div>
          <div className={classes.commonMargin}>
            Assessment Partner - Interviewplus
          </div>
          <div className={classes.commonMargin}>
            Assessment Partner - Interviewplus
          </div>
          <div className={classes.commonMargin}>
            Assessment Partner - Interviewplus
          </div>
        </Box>
        <Box className={classes.assessmentButton}>
          <Button
            id={viewAssessmentButtonId}
            name={viewAssessmentButtonName}
            variant="contained"
          >
            View Assesment Report
          </Button>
        </Box>
      </Card>
    );
  };

  const handleCloseUpload = () => {
    setAnchorElUpload(null);
  };

  const handleUploadReport = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElUpload(event.currentTarget);
  };

  const openUploadPop = Boolean(anchorElUpload);

  const UploadAssessmentReport = () => {
    return (
      <Card
        id={uploadAssessmentCardId}
        className={classes.viewAssessmentCard}
        elevation={3}
      >
        <Box textAlign={"center"}>
          <div className={classes.commonMargin}>
            Assessment Type - Interview as a Service
            <IconButton
              onClick={handleUploadReport}
              className={classes.assessmentActionButton}
            >
              <DehazeIcon className={classes.commonColor} />
            </IconButton>
            <Popover
              id="upload-popover"
              open={openUploadPop}
              anchorEl={anchorElUpload}
              onClose={handleCloseUpload}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 565, left: 355 }}
            >
              <Box className={classes.assessmentDeleteAction}>
                <DeleteForeverIcon
                  className={classes.deleteIcon}
                  onClick={() => {
                    setIsDeleteBoxOpen(true);
                  }}
                />
                <Typography>Delete</Typography>
              </Box>
              <Box className={classes.assessmentUpdateAction}>
                <BorderColorIcon
                  className={classes.updateIcon}
                  onClick={() => {
                    setIsUploadBoxOpen(true);
                  }}
                  fontSize="small"
                />
                <Typography>Upload</Typography>
              </Box>
            </Popover>
          </div>
          <div className={classes.commonMargin}>
            Assessment Partner - Interviewplus
          </div>
          <div className={classes.commonMargin}>
            Assessment Partner - Interviewplus
          </div>
          <div className={classes.commonMargin}>
            Assessment Partner - Interviewplus
          </div>
        </Box>
        <Box className={classes.assessmentButton}>
          <Button
            id={uploadAssessmentButtonId}
            name={uploadAssessmentButtonName}
            variant="contained"
          >
            Upload Assesment Report
          </Button>
        </Box>
      </Card>
    );
  };

  const handleDelete = () => {
    //Delete Method

    setIsDeleteBoxOpen(false);
    setAnchorElUpload(null);
    setAnchorElView(null);

    setIsDeleteSuccessBoxOpen(true);
  };

  const DeleteAssessment = () => {
    return (
      <Dialog
        id={deleteAssessmentContainerId}
        open={isDeleteBoxOpen}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle
          id="delete-dialog-title"
          className={classes.assessmentDialogueBox}
        >
          {"Delete Assessment"}
          <CloseIcon
            id={deleteAssessmentCloseButtonId}
            onClick={() => {
              setIsDeleteBoxOpen(false);
            }}
            className={classes.assessmentActionButton}
          />
        </DialogTitle>
        <DialogContent className={classes.assessmentDialogueContent}>
          <DialogContentText
            id="delete-dialog-description"
            className={classes.assessmentDialogueText}
          >
            Are you sure you want to Delete Assessment of the Job Seeker from
            the platfrom?
          </DialogContentText>
        </DialogContent>
        <Box className={classes.assessmentDialogueAction}>
          <Box
            id={deleteAssessmentYesButtonId}
            className={classes.delete}
            onClick={handleDelete}
          >
            <Typography>Yes</Typography>
          </Box>
          <Box
            id={deleteAssessmentCancelButtonId}
            className={classes.cancel}
            onClick={() => {
              setIsDeleteBoxOpen(false);
              setAnchorElUpload(null);
              setAnchorElView(null);
            }}
          >
            <Typography>Cancel</Typography>
          </Box>
        </Box>
      </Dialog>
    );
  };

  const DeleteAssessmentSuccess = () => {
    return (
      <Dialog
        open={isDeleteSuccessBoxOpen}
        aria-labelledby="delete-success-dialog-title"
        aria-describedby="delete-success-dialog-description"
      >
        <DialogTitle
          id="delete-success-dialog-title"
          className={classes.assessmentDialogueBox}
        >
          {"Delete Assessment"}
          <CloseIcon
            onClick={() => {
              setIsDeleteSuccessBoxOpen(false);
            }}
            className={classes.assessmentActionButton}
          />
        </DialogTitle>
        <DialogContent className={classes.assessmentDialogueContent}>
          <DialogContentText
            id="delete-success-dialog-description"
            className={classes.assessmentDialogueText}
          >
            Assessment has been deleted!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  };

  const UpdateAssessment = () => {
    return (
      <Dialog
        open={isUpdateBoxOpen}
        aria-labelledby="update-dialog-title"
        aria-describedby="update-dialog-description"
      >
        <DialogTitle
          id="update-dialog-title"
          className={classes.assessmentDialogueBox}
        >
          {"Update Assessment"}
          <CloseIcon
            onClick={() => {
              setIsUpdateBoxOpen(false);
              setAnchorElView(null);
            }}
            className={classes.assessmentActionButton}
          />
        </DialogTitle>
        <DialogContent className={classes.assessmentDialogueContent}>
          <DialogContentText
            id="update-dialog-description"
            className={classes.assessmentDialogueText}
          >
            Job Seeker Name -
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  };

  const UploadAssessment = () => {
    return (
      <Dialog
        open={isUploadBoxOpen}
        aria-labelledby="upload-dialog-title"
        aria-describedby="upload-dialog-description"
      >
        <DialogTitle
          id="upload-dialog-title"
          className={classes.assessmentDialogueBox}
        >
          {"Upload Assessment"}
          <CloseIcon
            onClick={() => {
              setIsUploadBoxOpen(false);
              setAnchorElUpload(null);
            }}
            className={classes.assessmentActionButton}
          />
        </DialogTitle>
        <DialogContent className={classes.assessmentDialogueContent}>
          <DialogContentText
            id="upload-dialog-description"
            className={classes.assessmentDialogueText}
          >
            Job Seeker Name -
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div id={containerId} className={classes.assessmentDialogueContent}>
      <Typography onClick={handleClick} className={classes.uploadText}>
        View Assessments
      </Typography>

      <Drawer
        anchor="left"
        open={toggleDrawer}
        onClose={() => setToggleDrawer(false)}
      >
        <Box className={classes.leftDrawerBox}>
          <Grid>
            <Box>
              <Typography className={classes.viewAssessmentTitle}>
                View Assessments
                <CloseIcon
                  id={cardCloseButtonId}
                  className={classes.closeIcon}
                  onClick={() => setToggleDrawer(false)}
                />
              </Typography>
            </Box>
            <Typography className={classes.assessmentDialogueContent}>
              Request New Assessment
            </Typography>
            <Typography className={classes.assessmentDialogueContent}>
              Job Seeker Name - Rajesh Sharma
            </Typography>
            <Box>
              <Card
                id={cardId}
                className={classes.assessmentDetailsCard}
                elevation={3}
              >
                <Box display={"flex"}>
                  <Typography p={2.2}>Assessment Type</Typography>
                  <FormControl className={classes.formControl} size="small">
                    {/* <InputLabel id="demo-multiple-checkbox-label">
                      Assessment Type
                    </InputLabel> */}
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id={assessmentTypeId}
                      name={assessmentTypeName}
                      multiple
                      value={assessmentType}
                      onChange={handleChangeAssessmentType}
                      input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(", ")}
                      className={classes.assessmentDetails}
                    >
                      {assessmentTypes.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox
                            checked={assessmentType.indexOf(name) > -1}
                          />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box display={"flex"}>
                  <Typography p={1}>Assessment Partner</Typography>
                  <FormControl className={classes.formControl} size="small">
                    {/* <InputLabel id="demo-multiple-checkbox-label">
                      Assessment Type
                    </InputLabel> */}
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id={assessmentPartnerId}
                      name={assessmentPartnerName}
                      multiple
                      value={assessmentPartner}
                      onChange={handleChangeAssessmentPartner}
                      input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(", ")}
                      className={classes.assessmentDetails}
                    >
                      {assessmentPartners.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox
                            checked={assessmentPartner.indexOf(name) > -1}
                          />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box
                  className={clsx(
                    classes.assessmentDialogueContent,
                    classes.section3
                  )}
                >
                  <Button
                    id={assessmentButtonId}
                    name={assessmentButtonName}
                    variant="contained"
                  >
                    Request Assessment
                  </Button>
                </Box>
              </Card>
              <Typography className={classes.partnerAssessment}>
                Partner Assessment Reports
              </Typography>
              <ViewAssessmentReport />
              <UploadAssessmentReport />

              <DeleteAssessment />
              <DeleteAssessmentSuccess />
              <UpdateAssessment />
              <UploadAssessment />
            </Box>
          </Grid>
        </Box>
      </Drawer>
    </div>
  );
};

export const Interview = (params: any) => {
  const containerId = `container-no-${params.rowIndex}-${params.column.instanceId}`;
  const scheduleButtonId = `schedule-button-no-${params.rowIndex}-${params.column.instanceId}`;
  const scheduleButtonName = `schedule-button-name-${params.rowIndex}-${params.column.instanceId}`;
  const scheduledrawerId = `schedule-drawer-no-${params.rowIndex}-${params.column.instanceId}`;
  const cardId = `card-no-${params.rowIndex}-${params.column.instanceId}`;
  const cardScheduleButtonId = `card-schedule-button-no-${params.rowIndex}-${params.column.instanceId}`;
  const cardScheduleButtonName = `card-schedule-button-name-${params.rowIndex}-${params.column.instanceId}`;
  const cardCloseButtonId = `card-close-button-no-${params.rowIndex}-${params.column.instanceId}`;
  const cardDatePickerId = `card-date-picker-no-${params.rowIndex}-${params.column.instanceId}`;

  const classes = useStyles();

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [nextInterviewDate, setNextInterviewDate] = useState<any>("");
  const times = ["11:00am to 01:00pm", "03:00pm to 06:00pm"];
  const [dateValue, setDateValue] = React.useState<any>(moment());
  const dispatch = useAppDispatch();
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

  const handleDateChange = async (newValue: any) => {
    const dd = ("0" + newValue.$D).slice(-2);
    const mm = ("0" + (newValue.$M + 1)).slice(-2);
    const yy = newValue.$y;
    // Date picker is handling the date in DD/MM/YYYY format
    console.log(`${mm}/${dd}/${yy}`);
    setDateValue(`${dd}/${mm}/${yy}`);
  };

  const handleSchedule = async () => {
    let jobSeekerId = params.data._id;
    let payload = {
      nextInterviewDate: dateValue,
    };
    const response = await manageJobseekerPatch(jobSeekerId, payload);

    if (response.data.success) {
      params.setValue(moment(dateValue, "DD-MM-YYYY").format("DD-MM-YYYY"));
      params.refreshCell();
      setToggleDrawer(false);
      dispatchNotificationData({
        enable: true,
        type: "success",
        message: "Interview Date is Successfully Scheduled",
        duration: 4000,
      });
    } else {
      params.setValue(params.data.nextInterviewDate);
      params.refreshCell();
      dispatchNotificationData({
        enable: true,
        type: "error",
        message: "Interview Date is Not Scheduled Please Try Again ",
        duration: 4000,
      });
    }
  };

  const Card = (props) => {
    const handleOnChange = (e) => {
      if (e.target.checked) {
        const time = e.target.value;
      }
    };
    return (
      <Grid>
        <Box>
          <Typography className={classes.viewAssessmentTitle}>
            Interview Scheduling
            <CloseIcon
              id={cardCloseButtonId}
              onClick={handleClose}
              className={classes.closeIcon}
            />
          </Typography>
        </Box>
        <Box className={classes.section2}>
          <h5 className={classes.commonColor}>Phase - L1</h5>
        </Box>
        <Box className={classes.section3}>
          <p>Choose Date</p>
          <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Choose Date"
                inputFormat="DD/MM/YYYY"
                value={moment(dateValue, "DD-MM-YYYY").format("MM-DD-YYYY")}
                onChange={handleDateChange}
                disablePast
                renderInput={(params) => (
                  <TextField id={cardDatePickerId} {...params} />
                )}
              />
            </LocalizationProvider>
          </Box>
        </Box>

        <Box p={1} className={classes.timeSlotTitleContainer}>
          <p>Time Slots Available</p>
          <FormGroup>
            {times.map((time, index) => (
              <FormControlLabel
                id={`${time}-${index}`}
                onChange={handleOnChange}
                value={time}
                control={<Checkbox />}
                label={time}
              />
            ))}
          </FormGroup>
        </Box>
        <Box p={1} className={classes.timeSlotTitleContainer}>
          <Button
            id={cardScheduleButtonId}
            name={cardScheduleButtonName}
            variant="contained"
            onClick={handleSchedule}
          >
            Schedule
          </Button>
        </Box>
      </Grid>
    );
  };

  const handleClose = () => {
    setToggleDrawer(false);
  };

  return (
    <div id={containerId} className={classes.assessmentDialogueContent}>
      <Button
        id={scheduleButtonId}
        name={scheduleButtonName}
        size="small"
        onClick={() => setToggleDrawer(true)}
        variant="contained"
        sx={{ background: "#4D6CD9", borderRadius: "15px", height: "25px" }}
      >
        Schedule
      </Button>
      <Drawer
        id={scheduledrawerId}
        anchor="right"
        open={toggleDrawer}
        onClose={handleClose}
      >
        <Card id={cardId} handleCloseIcon={handleClose} />
      </Drawer>
    </div>
  );
};

export const Reward = (params: any) => {
  const [disable, setDisable] = useState<any>(params.data.sendReward);
  const id = `cell-no-${params.rowIndex}-${params.column.instanceId}`;
  const containerId = `container-no-${params.rowIndex}-${params.column.instanceId}`;
  const elementName = `element-name-${params.rowIndex}-${params.column.instanceId}`;

  useEffect(() => {
    if (params.data.coolingPeriod === "Complete") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [params.data.coolingPeriod]);

  return (
    <div id={containerId}>
      <Button
        id={id}
        name={elementName}
        disabled={!disable}
        size="small"
        variant="contained"
        sx={{ background: "#4D6CD9", borderRadius: "15px", height: "25px" }}
      >
        Reward
      </Button>
    </div>
  );
};

export const JobSeekerJoined = (params: any) => {
  const id = `cell-no-${params.rowIndex}-${params.column.instanceId}`;
  const containerId = `container-no-${params.rowIndex}-${params.column.instanceId}`;
  const [disable, setDisable] = useState<any>();
  const [dateValue, setDateValue] = React.useState<any>(params.getValue());
  const dispatch = useAppDispatch();
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

  const handleDateChange = async (newValue: any) => {
    const dd = ("0" + newValue.$D).slice(-2);
    const mm = ("0" + (newValue.$M + 1)).slice(-2);
    const yy = newValue.$y;
    // Date picker is handling the date in DD/MM/YYYY format
    console.log(`${mm}/${dd}/${yy}`);
    setDateValue(`${dd}/${mm}/${yy}`);
    let jobSeekerId = params.data._id;
    let payload = {
      jobSeekerJoinedDate: `${dd}/${mm}/${yy}`,
    };
    const response = await manageJobseekerPatch(jobSeekerId, payload);
    console.log(response);
    if (response.data.success) {
      params.setValue(moment(dateValue, "DD-MM-YYYY").format("DD-MM-YYYY"));
      dispatchNotificationData({
        enable: true,
        type: "success",
        message: "JobSeekerJoined Date is Successfully Updated",
        duration: 4000,
      });
    } else {
      params.setValue(params.data.jobSeekerJoinedDate);
      dispatchNotificationData({
        enable: true,
        type: "error",
        message: "JobSeekerJoined Date is Not Updated Please Try Again ",
        duration: 4000,
      });
    }
  };

  return (
    <div id={containerId}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          // label="Choose Date"

          inputFormat="DD/MM/YYYY"
          value={moment(dateValue, "DD-MM-YYYY").format("MM-DD-YYYY")}
          onChange={handleDateChange}
          disablePast
          renderInput={(params) => <TextField id={id} {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};
export const CoolingPeriod = (params: any) => {
  const id = `cell-no-${params.rowIndex}-${params.column.instanceId}`;
  const containerId = `container-no-${params.rowIndex}-${params.column.instanceId}`;
  const elementName = `element-name-${params.rowIndex}-${params.column.instanceId}`;
  const [coolingPeriodEntered, setCoolingPeriodEntered] = useState<any>(
    params.data.coolingPeriod
  );
  const dispatch = useAppDispatch();
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

  const handleCoolingPeriod = async (event: any) => {
    setCoolingPeriodEntered(event.target.value);
  };

  const handleSend = async () => {
    if (coolingPeriodEntered === "Complete") {
      let jobSeekerId = params.data._id;
      let payload = {
        coolingPeriod: coolingPeriodEntered,
        sendReward: true,
      };
      const response = await manageJobseekerPatch(jobSeekerId, payload);

      if (response.data.success) {
        params.setValue(coolingPeriodEntered);
        params.refreshCell();
        dispatchNotificationData({
          enable: true,
          type: "success",
          message: "CoolingPeriod is Successfully Updated",
          duration: 4000,
        });
      } else {
        params.setValue(params.data.coolingPeriod);
        params.refreshCell();
        dispatchNotificationData({
          enable: true,
          type: "error",
          message: "CoolingPeriod is Not Updated Please Try Again ",
          duration: 4000,
        });
      }
    } else if (coolingPeriodEntered === "") {
      let jobSeekerId = params.data._id;
      let payload = {
        coolingPeriod: "N/A",
        sendReward: false,
      };
      const response = await manageJobseekerPatch(jobSeekerId, payload);

      if (response.data.success) {
        params.setValue("N/A");
        params.refreshCell();
        setCoolingPeriodEntered("N/A");
        dispatchNotificationData({
          enable: true,
          type: "success",
          message: "CoolingPeriod is Successfully Scheduled",
          duration: 4000,
        });
      } else {
        params.setValue(params.data.coolingPeriod);
        params.refreshCell();
        dispatchNotificationData({
          enable: true,
          type: "error",
          message: "CoolingPeriod is Not Scheduled Please Try Again ",
          duration: 4000,
        });
      }
    } else {
      let jobSeekerId = params.data._id;
      let payload = {
        coolingPeriod: coolingPeriodEntered,
        sendReward: false,
      };
      const response = await manageJobseekerPatch(jobSeekerId, payload);

      if (response.data.success) {
        params.setValue(coolingPeriodEntered);
        params.refreshCell();
        dispatchNotificationData({
          enable: true,
          type: "success",
          message: "CoolingPeriod is Successfully Scheduled",
          duration: 4000,
        });
      } else {
        params.setValue(params.data.coolingPeriod);
        params.refreshCell();
        dispatchNotificationData({
          enable: true,
          type: "error",
          message: "CoolingPeriod is Not Scheduled Please Try Again ",
          duration: 4000,
        });
      }
    }
  };

  return (
    <div id={containerId}>
      <TextField
        id={id}
        name={elementName}
        label="CoolingPeriod"
        variant="outlined"
        value={coolingPeriodEntered}
        onChange={handleCoolingPeriod}
        InputProps={{
          endAdornment: (
            <Tooltip title="Update" placement="top" arrow>
              <SendIcon
                fontSize="small"
                sx={{ color: "#4D6CD9" }}
                onClick={handleSend}
              />
            </Tooltip>
          ),
        }}
      />
    </div>
  );
};
const CustomFields = () => {
  return <div>CustomFields</div>;
};
export default CustomFields;
