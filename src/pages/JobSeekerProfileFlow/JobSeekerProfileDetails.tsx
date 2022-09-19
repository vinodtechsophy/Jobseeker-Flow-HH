import React, { ReactElement, FC, useEffect } from "react";
import {
  Select,
  MenuItem,
  Checkbox,
  TextField,
  InputLabel,
  FormControl,
} from "@mui/material";
import InlineInputs from "../../components/InlineInputs/InlineInputs";
import {
  CTCDetails,
  FRESHER_TEXT,
  TCTC_SUB_TEXT,
  TOTAL_CTC_TEXT,
  FIXED_CTC_TEXT,
  TOTAL_EXP_TEXT,
  CTC_DETAIL_TEXT,
  TOTAL_CTC_LABEL,
  WorkStatusArray,
  YearMonthDetails,
  TCTC_PLACEHOLDER,
  EXPERIENCE_TITLE,
  WORK_STATUS_TEXT,
  RELEVANT_EXP_TEXT,
  VARIABLE_CTC_TEXT,
  EXPECTED_CTC_TEXT,
} from "./JobSeekerProfileFlowConstants";
import "./JobSeekerProfileFlow.css";
import PreviousNextButtons from "../../components/PreviousNextButtons/PreviousNextButtons";
import { updateJobSeekerProfile } from "../../services/FormDataService";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import {
  ERROR_KEY,
  SUCCESS_KEY,
  FORM_SUBMISSION_SUCCESS,
} from "../../constants";

const JobSeekerProfileDetails: FC<any> = (props): ReactElement => {
  const dispatch = useAppDispatch();
  const userDataState = useAppSelector((state) => state.currentUser);

  const [freshGraduate, setFreshGraduate] = React.useState(false);
  const [workStatus, setWorkStatus] = React.useState("");
  const [totalCtc, setTotalCtc] = React.useState("");
  const [totalExperience, setTotalExperience] = React.useState<{
    totalExperienceYears: string;
    totalExperienceMonths: string;
  }>({ totalExperienceYears: "", totalExperienceMonths: "" });
  const [relevantExperience, setRelevantExperience] = React.useState<{
    relevantExperienceYears: string;
    relevantExperienceMonths: string;
  }>({ relevantExperienceYears: "", relevantExperienceMonths: "" });
  const [fixedCtc, setFixedCtc] = React.useState<{
    fixedCtcLakh: string;
    fixedCtcThousand: string;
  }>({ fixedCtcLakh: "", fixedCtcThousand: "" });
  const [variableCtc, setVariableCtc] = React.useState<{
    variableCtcLakh: string;
    variableCtcThousand: string;
  }>({ variableCtcLakh: "", variableCtcThousand: "" });
  const [expectedCtc, setExpectedCtc] = React.useState<{
    expectedCtcLakh: string;
    expectedCtcThousand: string;
  }>({ expectedCtcLakh: "", expectedCtcThousand: "" });

  const handleTotalExperience = (value: string, index: number) => {
    if (index === 0 && value)
      setTotalExperience({
        totalExperienceYears: value,
        totalExperienceMonths: totalExperience.totalExperienceMonths,
      });
    else if (index === 1 && value)
      setTotalExperience({
        totalExperienceYears: totalExperience.totalExperienceYears,
        totalExperienceMonths: value,
      });
  };

  const handleRelevantExperience = (value: string, index: number) => {
    if (index === 0 && value)
      setRelevantExperience({
        relevantExperienceYears: value,
        relevantExperienceMonths: relevantExperience.relevantExperienceMonths,
      });
    else if (index === 1 && value)
      setRelevantExperience({
        relevantExperienceYears: relevantExperience.relevantExperienceYears,
        relevantExperienceMonths: value,
      });
  };

  const handleFixedCtc = (value: string, index: number) => {
    if (index === 0 && value)
      setFixedCtc({
        fixedCtcLakh: value,
        fixedCtcThousand: fixedCtc.fixedCtcThousand,
      });
    else if (index === 1 && value)
      setFixedCtc({
        fixedCtcLakh: fixedCtc.fixedCtcLakh,
        fixedCtcThousand: value,
      });
  };

  const handleVariableCtc = (value: string, index: number) => {
    if (index === 0 && value)
      setVariableCtc({
        variableCtcLakh: value,
        variableCtcThousand: variableCtc.variableCtcThousand,
      });
    else if (index === 1 && value)
      setVariableCtc({
        variableCtcLakh: variableCtc.variableCtcLakh,
        variableCtcThousand: value,
      });
  };

  const handleExpectedCtc = (value: string, index: number) => {
    if (index === 0 && value)
      setExpectedCtc({
        expectedCtcLakh: value,
        expectedCtcThousand: expectedCtc.expectedCtcThousand,
      });
    else if (index === 1 && value)
      setExpectedCtc({
        expectedCtcLakh: expectedCtc.expectedCtcLakh,
        expectedCtcThousand: value,
      });
  };

  const submitDetails = async () => {
    const profileDetailsMap = buildDetailsPayload();
    try {
      const profileDetailsResponse = await updateJobSeekerProfile({
        profileId: userDataState.userData.profileId,
        profileData: { profileDetailsMap },
      });
      console.log(profileDetailsResponse?.data);
      if (profileDetailsResponse?.data?.success) {
        dispatchWorkStatus(workStatus);
        props.setType(SUCCESS_KEY);
        props.setDataMessage(FORM_SUBMISSION_SUCCESS);
        props.setOpen(true);
        props.handleComplete(2);
        props.handleNext();
      }
    } catch (error: any) {
      console.log(error);
      props.setType(ERROR_KEY);
      props.setDataMessage(error?.message);
      props.setOpen(true);
    }
  };

  const buildDetailsPayload = () => {
    return {
      totalCtc,
      expectedCtc,
      fixedCtc,
      variableCtc,
      totalExperience,
      relevantExperience,
      freshGraduate: freshGraduate.toString(),
      workStatus,
    };
  };

  const dispatchWorkStatus = (workStatus) => {
    dispatch({
      type: "USER_ADD",
      data: {
        userData: {
          ...userDataState.userData,
          workStatus,
        },
        userId: userDataState.userId,
      },
    });
  };

  return (
    <div className="job-seeker-profile-content">
      <p className="step-content-title-text">{EXPERIENCE_TITLE}</p>
      <div className="experience-details-card">
        <div className="experience-card-title">
          <div>
            <span>
              {TOTAL_EXP_TEXT}
              <span className="asterisk-span"> *</span>
            </span>
          </div>
          <div>
            <span>{FRESHER_TEXT}</span>
            <Checkbox
              disabled={!props.hasButtons}
              checked={freshGraduate}
              onChange={(e) => setFreshGraduate(e?.target?.checked)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>
        <InlineInputs
          InlineInputsArray={YearMonthDetails}
          disabled={!props.hasButtons}
          setValues={handleTotalExperience}
        />
        <InlineInputs
          InlineInputsArray={YearMonthDetails}
          InlineInputTitle={RELEVANT_EXP_TEXT}
          disabled={!props.hasButtons}
          setValues={handleRelevantExperience}
        />
      </div>
      <div className="generic-container">
        <div className="inline-div">
          <div>
            <p className="step-content-title-text">
              {" "}
              {WORK_STATUS_TEXT} <span className="asterisk-span"> *</span>
            </p>
          </div>
          <div className="work-status-select">
            <FormControl sx={{ minWidth: 250 }}>
              <InputLabel id="demo-simple-select-helper-label">
                {WORK_STATUS_TEXT}
              </InputLabel>
              <Select
                disabled={!props.hasButtons}
                value={workStatus}
                label={WORK_STATUS_TEXT}
                onChange={(e) => setWorkStatus(e.target.value)}
              >
                {WorkStatusArray.map((item: string) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="conditional-container">
        <div>
          <p className="ctc-details-text"> {CTC_DETAIL_TEXT}</p>
        </div>
        <InlineInputs
          InlineInputsArray={CTCDetails}
          InlineInputTitle={FIXED_CTC_TEXT}
          disabled={!props.hasButtons}
          setValues={handleFixedCtc}
        />
        <InlineInputs
          InlineInputsArray={CTCDetails}
          InlineInputTitle={VARIABLE_CTC_TEXT}
          disabled={!props.hasButtons}
          setValues={handleVariableCtc}
        />
        <div>
          <div className="experience-card-title">
            <div>
              <p>{TOTAL_CTC_TEXT}</p>
            </div>
          </div>
          <div className="inline-div">
            <TextField
              disabled={!props.hasButtons}
              type="text"
              onChange={(e) => setTotalCtc(e.target.value)}
              label={TOTAL_CTC_LABEL}
              placeholder={TCTC_PLACEHOLDER}
              InputProps={{
                inputProps: {
                  maxLength: 12,
                },
              }}
              size="small"
            />
            <div className="tctc-text">
              <span>{TCTC_SUB_TEXT}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="generic-container">
        <div className="expected-ctc">
          <p className="step-content-title-text">
            {" "}
            {EXPECTED_CTC_TEXT} <span className="asterisk-span"> *</span>
          </p>
        </div>
        <div className="experience-details-card">
          <InlineInputs
            InlineInputsArray={CTCDetails}
            disabled={!props.hasButtons}
            setValues={handleExpectedCtc}
          />
        </div>
      </div>
      {props.hasButtons ? (
        <PreviousNextButtons
          handleNext={submitDetails}
          handleBack={props.handleBack}
        />
      ) : null}
    </div>
  );
};

export default JobSeekerProfileDetails;
