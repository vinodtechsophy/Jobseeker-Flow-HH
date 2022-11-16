import React, { ReactElement, FC, useEffect, useState } from "react";
import {
  Stack,
  Button,
  Divider,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { JobSeekerReviewArray } from "./JobSeekerProfileFlowConstants";
import "./JobSeekerProfileFlow.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  ERROR_KEY,
  FORM_SUBMISSION_SUCCESS,
  SUCCESS_KEY,
  ADD_PROFILE_CONFIRMATION_BOX_TEXT,
} from "../../constants";
import JobSeekerProfileJD from "./JobSeekerProfileJD";
import JobSeekerProfileUpload from "./JobSeekerProfileUpload";
import JobSeekerProfileDetails from "./JobSeekerProfileDetails";
import JobSeekerProfileWorkStatus from "./JobSeekerProfileWorkStatus";
import JobSeekerProfileNoticePeriod from "./JobSeekerProfileNoticePeriod";
import ConfirmationModel from "../../components/ConfirmationModal/ConfirmationModel";
import { startJobSeekerWorkflow } from "../../services/JobSeekerService";
import JobSeekerCompleteProfile from "../JobSeekerCompleteProfile/JobSeekerCompleteProfile";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import { updateJobSeekerProfile } from "../../services/FormDataService";
import JobSeekerAddProfile from "../JobSeekerAddProfile/JobSeekerAddProfile";

const JobSeekerProfileReview: FC<any> = (props): ReactElement => {
  const [loader, setLoader] = React.useState(false);
  const [checkout, setCheckout] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(-1);
  const [dialogAction, setDialogAction] = useState({
    isOpen: false,
    title: "",
    mainMessage: "",
    bottomMessage: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const userDataState = useAppSelector((state) => state.currentUser);
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

  const renderCurrentSelection = (currentSection) => {
    switch (currentSection) {
      case 1:
        return (
          <JobSeekerAddProfile
            profileDataId={userDataState.userData.profileId}
            hasButtons={false}
          />
        );
      case 2:
        return (
          <JobSeekerProfileUpload
            profileDataId={userDataState.userData.profileId}
            hasButtons={false}
          />
        );
      case 3:
        return (
          <JobSeekerProfileDetails
            profileDataId={userDataState.userData.profileId}
            hasButtons={false}
          />
        );
      case 4:
        return (
          <JobSeekerProfileWorkStatus
            profileDataId={userDataState.userData.profileId}
            hasButtons={false}
          />
        );
      case 5:
        return (
          <JobSeekerProfileNoticePeriod
            profileDataId={userDataState.userData.profileId}
            hasButtons={false}
          />
        );
      default:
        return (
          <JobSeekerProfileJD
            profileDataId={userDataState.userData.profileId}
            hasButtons={false}
          />
        );
    }
  };

  const submitAllDetails = async () => {
    setLoader(true);
    setDialogAction({
      isOpen: true,
      title: ADD_PROFILE_CONFIRMATION_BOX_TEXT.header,
      mainMessage: ADD_PROFILE_CONFIRMATION_BOX_TEXT.mainMessage,
      bottomMessage: ADD_PROFILE_CONFIRMATION_BOX_TEXT.bottomMessage,
    });
    try {
      // const postFormResponse = await GenericProcess(
      //     {
      //         processDefinitionKey: CONTEST_PROCESS_ID,
      //         businessKey: userDataState.userId || JSON.stringify(Math.random()),
      //         variables: {
      //             action: ACTIVATE_ACTION,
      //             formDataIds: JSON.stringify([userDataState.userData.parentDataId])
      //         }
      //     }
      // );
      // if(postFormResponse?.data?.success) {
      //     props.setType(SUCCESS_KEY);
      //     props.setDataMessage(FORM_SUBMISSION_SUCCESS);
      //     props.setOpen(true);
      //     props.setCheckout(true);
      //     setCheckout(true);
      // }
    } catch (error: any) {
      console.log(error?.response);
      props.setType(ERROR_KEY);
      props.setDataMessage(error?.response?.data?.message);
      props.setOpen(true);
    }
    setLoader(false);
  };
  const cancelFunction = () => {
    setDialogAction({
      ...dialogAction,
      isOpen: false,
    });
  };
  const apiCallStartJobSeekerWorkflow = async () => {
    const bodyPayload = {
      jobSeekerId: userDataState.userData.jobSeekerId,
      action: "startJobSeekerWorkflow",
    };
    const response = await startJobSeekerWorkflow(bodyPayload);
    if (response?.data?.success) {
      const bodyPayload = {
        profileId: userDataState.userData.profileId,
        profileData: {
          profileLastCompletedStep: "7",
        },
      };
      const stepUpdateResponse = await updateJobSeekerProfile(bodyPayload);
      if (stepUpdateResponse?.data?.success) {
        // props.setProgressBar(false);
        props.handleNext();
        setSubmitted(true);
        setDialogAction({
          ...dialogAction,
          isOpen: false,
        });
      } else {
        dispatchNotificationData({
          enable: true,
          type: "error",
          message: "Something Went Wrong Please Try gain",
        });
      }
    }
  };

  return (
    <>
      {submitted ? (
        <>
          <JobSeekerCompleteProfile
            contestId={props.contestId}
            setActiveStep={props.setActiveStep}
            handleNotComplete={props.handleNotComplete}
          />
        </>
      ) : (
        <>
          <div className="form-internal-body">
            {checkout ? (
              // <SignupSuccess
              //     setCheckout={setCheckout}
              //     setActiveStep={props.setActiveStep}
              //     setCompleted={props.setCompleted}
              //     displayMessage={`Your Contest has been Published Successfully`}
              // />
              <></>
            ) : (
              <>
                <div className="stepper-container">
                  {JobSeekerReviewArray.map((reviewData, index) => (
                    <>
                      {((userDataState.userData.workStatus ===
                        "Fresh Graduate" ||
                        userDataState.userData.workStatus === "Not-Working") &&
                        index !== 4) ||
                      userDataState.userData.workStatus === "Working" ? (
                        <div
                          className="review-card"
                          key={index}
                          style={
                            currentIndex === index
                              ? {
                                  height: "auto",
                                  flexDirection: "column",
                                }
                              : {
                                  height: "68px",
                                  flexDirection: "row",
                                }
                          }
                        >
                          <span className="review-title-text">
                            {reviewData.label}
                          </span>
                          <div>
                            {reviewData.navigate ? (
                              <Button
                                variant="text"
                                className="review-buttons-color"
                                onClick={() => props.setActiveStep(index)}
                              >
                                <img
                                  src="assets/images/Edit.png"
                                  className="review-icons"
                                />
                                Edit
                              </Button>
                            ) : null}
                            <IconButton
                              aria-label="plus"
                              className="review-buttons-color"
                              onClick={() => {
                                if (currentIndex !== index)
                                  setCurrentIndex(index);
                                else setCurrentIndex(-1);
                              }}
                            >
                              {currentIndex !== index ? (
                                <AddIcon />
                              ) : (
                                <RemoveIcon />
                              )}
                            </IconButton>
                          </div>
                          {currentIndex === index ? (
                            <div style={{ width: "100%" }}>
                              {renderCurrentSelection(index + 1)}
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </>
                  ))}
                </div>
                <div className="review-divider">
                  <Divider />
                </div>
                {loader ? (
                  <Stack alignItems="center">
                    <CircularProgress />
                  </Stack>
                ) : (
                  <div className="forms-button-container">
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                    ></Typography>
                    <Typography variant="h6" noWrap component="div">
                      <Button
                        variant="contained"
                        className="next-button"
                        onClick={submitAllDetails}
                      >
                        Submit All Details
                        <ArrowForwardIosIcon className="next-icon" />
                      </Button>
                    </Typography>
                  </div>
                )}
                <ConfirmationModel
                  dialogAction={dialogAction}
                  setDialogAction={setDialogAction}
                  buttonRightFunction={apiCallStartJobSeekerWorkflow}
                  buttonLeftFunction={cancelFunction}
                />
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default JobSeekerProfileReview;
