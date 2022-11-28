import React, { ReactElement, FC, useEffect, useState } from "react";
import { Step, Stack, Stepper, StepLabel } from "@mui/material";
import "../../App.css";
import { JobSeekerAddStepper, ColorlibConnector } from "../StepIcons";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import { FULL_WIDTH_PERCENT } from "../../InternalStyles/CommonStyleVariables";
import "./JobSeekerProfileFlow.css";
import JobSeekerProfileDetails from "./JobSeekerProfileDetails";
import JobSeekerProfileWorkStatus from "./JobSeekerProfileWorkStatus";
import JobSeekerProfileNoticePeriod from "./JobSeekerProfileNoticePeriod";
import JobSeekerProfileReview from "./JobSeekerProfileReview";
import JobSeekerProfileJD from "./JobSeekerProfileJD";
import JobSeekerProfileUpload from "./JobSeekerProfileUpload";
import JobSeekerAddProfile from "../../pages/JobSeekerAddProfile/JobSeekerAddProfile";
import { WorkStatusType } from "../../constants";

const JobSeekerProfileFlow: FC<any> = (props): ReactElement => {
  const changeStep = useAppSelector((state) => state.tabsState);
  const dispatch = useAppDispatch();

  const [activeStep, setActiveStep] = React.useState(
    changeStep.activeStep - 1 < 0 ? 0 : changeStep.activeStep - 1 || 0
  );

  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});
  const [gotData, setGotData] = React.useState(false);
  const [progressBar, setProgressBar] = useState(true);

  const userDataState = useAppSelector((state) => state.currentUser);
  const [jobStatus, setJobStatus] = React.useState(
    userDataState.userData.workStatus
  );
  console.log("Active Step " + JSON.stringify(changeStep));
  useEffect(() => {
    dispatch({
      type: "STEP_CHANGE",
      data: {
        step: 0,
        tab: 0,
      },
    });
  }, []);

  useEffect(() => {}, [gotData]);
  useEffect(() => {
    if (activeStep <= 6) setProgressBar(true);
    else setProgressBar(false);
  }, [activeStep]);
  useEffect(() => {
    handleCompletedStep(changeStep.activeStep);
  }, [changeStep.activeStep]);

  const steps = [
    "Duplication Check with hiringhood",
    "Upload Resume",
    "Job Seeker Details",
    "Work Status",
    "Notice Period",
    "JD Specific Questions",
    "Review and Submit",
  ];

  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };

  const handleNext = () => {
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const checkWorkStatus = () => {
    if (
      userDataState.userData.workStatus === WorkStatusType.FRESHER ||
      userDataState.userData.workStatus === WorkStatusType.JOBLESS
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleCompletedStep = (position?: number) => {
    const newCompleted = Object.create(completed);
    if (typeof position != "undefined") {
      for (let i = 0; i < position; i++) {
        if (i == 4 && checkWorkStatus()) continue;
        newCompleted[i] = true;
      }
    } else {
      for (let i = 1; i < activeStep; i++) {
        if (i == 4 && checkWorkStatus()) continue;
        newCompleted[i] = true;
      }
    }
    setCompleted(newCompleted);
  };
  const handleComplete = (position?: number) => {
    const newCompleted = Object.create(completed);
    if (typeof position != "undefined") {
      for (let i = 0; i <= position; i++) {
        if (i == 4 && checkWorkStatus()) continue;

        newCompleted[i] = true;
      }
    } else {
      for (let i = 0; i <= activeStep; i++) {
        if (i == 4 && checkWorkStatus()) continue;
        newCompleted[i] = true;
      }
    }
    setCompleted(newCompleted);
  };
  const handleNotComplete = (position: number) => {
    const newCompleted = completed;
    for (let i = position; i < 7; i++) {
      newCompleted[i] = false;
    }
    setCompleted(newCompleted);
  };

  return (
    <div>
      {progressBar ? (
        <>
          <div className="stepper-container">
            <Stack sx={{ width: FULL_WIDTH_PERCENT }} spacing={4}>
              <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector />}
              >
                {steps.map((label, index) => (
                  <Step key={label} completed={completed[index] === true}>
                    <StepLabel StepIconComponent={JobSeekerAddStepper}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Stack>
          </div>
        </>
      ) : (
        <></>
      )}

      {activeStep + 1 === 1 ? (
        <JobSeekerAddProfile
          hasButtons={true}
          setOpen={props.setOpen}
          setType={props.setType}
          handleNext={handleNext}
          handleBack={handleBack}
          contestId={props.contestId}
          handleComplete={handleComplete}
          setDataMessage={props.setDataMessage}
        />
      ) : activeStep + 1 === 2 ? (
        <JobSeekerProfileUpload
          hasButtons={true}
          setOpen={props.setOpen}
          setType={props.setType}
          handleNext={handleNext}
          handleBack={handleBack}
          handleComplete={handleComplete}
          setDataMessage={props.setDataMessage}
        />
      ) : activeStep + 1 === 3 ? (
        <JobSeekerProfileDetails
          hasButtons={true}
          setOpen={props.setOpen}
          setType={props.setType}
          handleNext={handleNext}
          handleBack={handleBack}
          handleComplete={handleComplete}
          setDataMessage={props.setDataMessage}
        />
      ) : activeStep + 1 === 4 ? (
        <JobSeekerProfileWorkStatus
          hasButtons={true}
          setOpen={props.setOpen}
          setType={props.setType}
          handleNext={handleNext}
          handleBack={handleBack}
          handleComplete={handleComplete}
          setDataMessage={props.setDataMessage}
          setActiveStep={setActiveStep}
        />
      ) : activeStep + 1 === 5 ? (
        <JobSeekerProfileNoticePeriod
          hasButtons={true}
          setOpen={props.setOpen}
          setType={props.setType}
          handleNext={handleNext}
          handleBack={handleBack}
          handleComplete={handleComplete}
          setDataMessage={props.setDataMessage}
        />
      ) : activeStep + 1 === 6 ? (
        <JobSeekerProfileJD
          hasButtons={true}
          setOpen={props.setOpen}
          setType={props.setType}
          handleNext={handleNext}
          handleBack={handleBack}
          contestId={props.contestId}
          handleComplete={handleComplete}
          setDataMessage={props.setDataMessage}
          setActiveStep={setActiveStep}
        />
      ) : (
        <JobSeekerProfileReview
          contestId={props.contestId}
          setOpen={props.setOpen}
          setType={props.setType}
          handleNext={handleNext}
          handleNotComplete={handleNotComplete}
          setActiveStep={setActiveStep}
          setDataMessage={props.setDataMessage}
          setProgressBar={setProgressBar}
        />
      )}
    </div>
  );
};

export default JobSeekerProfileFlow;
