import React, { ReactElement, FC, useEffect } from "react";
import {
  Select,
  MenuItem,
  Checkbox,
  TextField,
  InputLabel,
  FormControl,
  CircularProgress,
  Stack,
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
import {
  getJobSeekerProfile,
  updateJobSeekerProfile,
} from "../../services/FormDataService";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import {
  ERROR_KEY,
  SUCCESS_KEY,
  FORM_SUBMISSION_SUCCESS,
  EXPEXTED_CTC_DET,
  WARNING_KEY,
} from "../../constants";

const JobSeekerProfileDetails: FC<any> = (props): ReactElement => {
  const dispatch = useAppDispatch();
  const userDataState = useAppSelector((state) => state.currentUser);
  // const activeTabState = useAppSelector((state) => state.tabsState);
  const [freshGraduate, setFreshGraduate] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
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

  // useEffect(() => {
  //   props.handleComplete(0);
  //   props.handleComplete(1);
  // }, [activeTabState.activeStep]);

  const handleTotalExperience = (value: string, index: number) => {
    if (index === 0)
      setTotalExperience({
        totalExperienceYears: value ? value : "0",
        totalExperienceMonths: totalExperience.totalExperienceMonths,
      });
    else if (index === 1)
      setTotalExperience({
        totalExperienceYears: totalExperience.totalExperienceYears,
        totalExperienceMonths: value ? value : "0",
      });
  };

  const handleRelevantExperience = (value: string, index: number) => {
    if (index === 0)
      setRelevantExperience({
        relevantExperienceYears: value ? value : "0",
        relevantExperienceMonths: relevantExperience.relevantExperienceMonths,
      });
    else if (index === 1)
      setRelevantExperience({
        relevantExperienceYears: relevantExperience.relevantExperienceYears,
        relevantExperienceMonths: value ? value : "0",
      });
  };

  const handleFixedCtc = (value: string, index: number) => {
    if (index === 0) {
      setFixedCtc({
        fixedCtcLakh: value,
        fixedCtcThousand: fixedCtc.fixedCtcThousand,
      });
      handleTotalCtc(value ? value : "0", "", "", "");
    } else if (index === 1) {
      setFixedCtc({
        fixedCtcLakh: fixedCtc.fixedCtcLakh,
        fixedCtcThousand: value,
      });
      handleTotalCtc("", value ? value : "0", "", "");
    }
  };

  const handleVariableCtc = (value: string, index: number) => {
    if (index === 0) {
      setVariableCtc({
        variableCtcLakh: value,
        variableCtcThousand: variableCtc.variableCtcThousand,
      });
      handleTotalCtc("", "", value ? value : "0", "");
    } else if (index === 1) {
      setVariableCtc({
        variableCtcLakh: variableCtc.variableCtcLakh,
        variableCtcThousand: value,
      });
      handleTotalCtc("", "", "", value ? value : "0");
    }
  };

  const handleTotalCtc = (fL: string, fT: string, vL: string, vT: string) => {
    setTotalCtc(
      (
        (parseInt(
          fL ? fL : fixedCtc.fixedCtcLakh ? fixedCtc.fixedCtcLakh : "0"
        ) +
          parseInt(
            vL
              ? vL
              : variableCtc.variableCtcLakh
              ? variableCtc.variableCtcLakh
              : "0"
          )) *
          100000 +
        (parseInt(
          fT ? fT : fixedCtc.fixedCtcThousand ? fixedCtc.fixedCtcThousand : "0"
        ) +
          parseInt(
            vT
              ? vT
              : variableCtc.variableCtcThousand
              ? variableCtc.variableCtcThousand
              : "0"
          )) *
          1000
      ).toString()
    );
  };

  const handleExpectedCtc = (value: string, index: number) => {
    if (index === 0)
      setExpectedCtc({
        expectedCtcLakh: value ? value : "0",
        expectedCtcThousand: expectedCtc.expectedCtcThousand,
      });
    else if (index === 1)
      setExpectedCtc({
        expectedCtcLakh: expectedCtc.expectedCtcLakh,
        expectedCtcThousand: value ? value : "0",
      });
  };

  const validateExperience = (profileDetails: any) => {
    return (
      parseInt(
        profileDetails.totalExperience.totalExperienceYears
          ? profileDetails.totalExperience.totalExperienceYears
          : "0"
      ) *
        12 +
        parseInt(
          profileDetails.totalExperience.totalExperienceMonths
            ? profileDetails.totalExperience.totalExperienceMonths
            : "0"
        ) <
      parseInt(
        profileDetails.relevantExperience.relevantExperienceYears
          ? profileDetails.relevantExperience.relevantExperienceYears
          : "0"
      ) *
        12 +
        parseInt(
          profileDetails.relevantExperience.relevantExperienceMonths
            ? profileDetails.relevantExperience.relevantExperienceMonths
            : "0"
        )
    );
  };

  const validateCtc = (expected: any) => {
    return (
      parseInt(totalCtc) >=
      parseInt(expected.expectedCtcLakh) * 100000 +
        parseInt(
          expected.expectedCtcThousand ? expected.expectedCtcThousand : "0"
        ) *
          1000
    );
  };

  const checkExperienceDetails = (profileDetailsMap: any) => {
    return (
      profileDetailsMap.workStatus != "Fresh Graduate" &&
      (((parseInt(profileDetailsMap.totalExperience.totalExperienceYears) ==
        0 ||
        !profileDetailsMap.totalExperience.totalExperienceYears) &&
        (parseInt(profileDetailsMap.totalExperience.totalExperienceMonths) ==
          0 ||
          !profileDetailsMap.totalExperience.totalExperienceMonths)) ||
        ((parseInt(
          profileDetailsMap.relevantExperience.relevantExperienceYears
        ) == 0 ||
          !profileDetailsMap.relevantExperience.relevantExperienceYears) &&
          (parseInt(
            profileDetailsMap.relevantExperience.relevantExperienceMonths
          ) == 0 ||
            !profileDetailsMap.relevantExperience.relevantExperienceMonths)))
    );
  };

  const submitDetails = async () => {
    setLoader(true);
    const profileDetailsMap = buildDetailsPayload();
    if (
      profileDetailsMap.expectedCtc.expectedCtcLakh &&
      parseInt(profileDetailsMap.expectedCtc.expectedCtcLakh) != 0
    ) {
      if (profileDetailsMap.workStatus) {
        if (checkExperienceDetails(profileDetailsMap)) {
          props.setType(WARNING_KEY);
          props.setDataMessage("Please fill Experience Details");
          props.setOpen(true);
        } else if (
          (profileDetailsMap.workStatus == WorkStatusArray[0] ||
            profileDetailsMap.workStatus == WorkStatusArray[1]) &&
          validateExperience(profileDetailsMap)
        ) {
          props.setType(WARNING_KEY);
          props.setDataMessage(
            "Relevant Experience must not exceed Total Experience"
          );
          props.setOpen(true);
        } else if (
          (profileDetailsMap.workStatus == WorkStatusArray[0] ||
            profileDetailsMap.workStatus == WorkStatusArray[1]) &&
          (!profileDetailsMap.fixedCtc.fixedCtcLakh ||
            parseInt(profileDetailsMap.fixedCtc.fixedCtcLakh) == 0 ||
            !profileDetailsMap.variableCtc.variableCtcLakh ||
            parseInt(profileDetailsMap.variableCtc.variableCtcLakh) == 0)
        ) {
          props.setType(WARNING_KEY);
          props.setDataMessage("Please fill Current CTC details");
          props.setOpen(true);
        } else if (
          profileDetailsMap.workStatus != "Fresh Graduate" &&
          validateCtc(profileDetailsMap.expectedCtc)
        ) {
          props.setType(WARNING_KEY);
          props.setDataMessage("Expected CTC must be greater than Total CTC");
          props.setOpen(true);
        } else {
          try {
            const profileDetailsResponse = await updateJobSeekerProfile({
              profileId:
                props.profileDataId || userDataState.userData.profileId,
              profileData: { profileDetailsMap, profileLastCompletedStep: "3" },
            });
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
        }
      } else {
        props.setType(WARNING_KEY);
        props.setDataMessage("Please select Work Status");
        props.setOpen(true);
      }
    } else {
      props.setType(WARNING_KEY);
      props.setDataMessage(EXPEXTED_CTC_DET);
      props.setOpen(true);
    }
    setLoader(false);
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
      currentlyWorking: workStatus === WorkStatusArray[0] ? "Yes" : "No",
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

  useEffect(() => {
    if (props.profileDataId || userDataState.userData.profileId)
      callPrefillData();
  }, []);

  const callPrefillData = async () => {
    try {
      setLoader(true);
      const profileDataFetched = await getJobSeekerProfile(
        props.profileDataId || userDataState.userData.profileId
      );
      if (profileDataFetched?.data?.data?.profileDetailsMap) {
        patchProfileDetails(profileDataFetched?.data?.data?.profileDetailsMap);
      }
    } catch (error: any) {
      console.log(error);
      props.setType(ERROR_KEY);
      props.setDataMessage("Something went wrong");
      props.setOpen(true);
    }
    setLoader(false);
  };

  const patchProfileDetails = (patchData: any) => {
    console.log(patchData);
    setFreshGrad(patchData.freshGraduate);
    setTotalExperience({
      totalExperienceYears: patchData.totalExperience.totalExperienceYears,
      totalExperienceMonths: patchData.totalExperience.totalExperienceMonths,
    });
    setRelevantExperience({
      relevantExperienceYears:
        patchData.relevantExperience.relevantExperienceYears,
      relevantExperienceMonths:
        patchData.relevantExperience.relevantExperienceMonths,
    });
    setFixedCtc({
      fixedCtcLakh: patchData.fixedCtc.fixedCtcLakh,
      fixedCtcThousand: patchData.fixedCtc.fixedCtcThousand,
    });
    setVariableCtc({
      variableCtcLakh: patchData.variableCtc.variableCtcLakh,
      variableCtcThousand: patchData.variableCtc.variableCtcThousand,
    });
    setExpectedCtc({
      expectedCtcLakh: patchData.expectedCtc.expectedCtcLakh,
      expectedCtcThousand: patchData.expectedCtc.expectedCtcThousand,
    });
    setWorkStatus(patchData.workStatus);
    setTotalCtc(patchData.totalCtc);
  };

  const setFreshGrad = (data: any) => {
    if (data === "true") {
      setFreshGraduate(true);
    } else {
      setFreshGraduate(false);
    }
  };

  const emptyExperienceCTCDetatils = () => {
    setRelevantExperience({
      relevantExperienceYears: "",
      relevantExperienceMonths: "",
    });
    setTotalExperience({
      totalExperienceMonths: "",
      totalExperienceYears: "",
    });
    setFixedCtc({
      fixedCtcLakh: "",
      fixedCtcThousand: "",
    });
    setVariableCtc({
      variableCtcLakh: "",
      variableCtcThousand: "",
    });
  };

  return (
    <>
      {!loader ? (
        <div className="job-seeker-profile-content">
          <p className="step-content-title-text">{EXPERIENCE_TITLE}</p>
          <div
            id="experience-details-container"
            className="experience-details-card"
          >
            <div className="experience-card-title">
              <div>
                <span>
                  {TOTAL_EXP_TEXT}
                  <span className="asterisk-span"> *</span>
                </span>
              </div>
              <div id="check-fg-container">
                <span>{FRESHER_TEXT}</span>
                <Checkbox
                  id="check-fg"
                  name="checkFreshGraduate"
                  disabled={!props.hasButtons}
                  checked={freshGraduate}
                  onChange={(e) => {
                    setFreshGraduate(e?.target?.checked);

                    if (e.target.checked === true) {
                      emptyExperienceCTCDetatils();
                      setWorkStatus("Fresh Graduate");
                    } else {
                      setWorkStatus("");
                    }
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
            <InlineInputs
              InlineInputsArray={YearMonthDetails}
              disabled={!props.hasButtons || freshGraduate}
              setValues={handleTotalExperience}
              value={totalExperience}
            />
            <InlineInputs
              InlineInputsArray={YearMonthDetails}
              InlineInputTitle={RELEVANT_EXP_TEXT}
              disabled={!props.hasButtons || freshGraduate}
              setValues={handleRelevantExperience}
              value={relevantExperience}
            />
          </div>
          <div
            id="work-status-parent-parent-container"
            className="generic-container"
          >
            <div id="work-status-parent-container" className="inline-div">
              <div>
                <p className="step-content-title-text">
                  {" "}
                  {WORK_STATUS_TEXT} <span className="asterisk-span"> *</span>
                </p>
              </div>
              <div id="work-status-container" className="work-status-select">
                <FormControl
                  id="work-status-formcontrol"
                  sx={{ minWidth: 250 }}
                >
                  <InputLabel id="demo-simple-select-helper-label">
                    {WORK_STATUS_TEXT}
                  </InputLabel>
                  <Select
                    id="work-status-dropdown"
                    name="workStatusDropDown"
                    disabled={!props.hasButtons || freshGraduate}
                    value={freshGraduate ? "Fresh Graduate" : workStatus}
                    label={WORK_STATUS_TEXT}
                    onChange={(e) => {
                      if (e.target.value !== "Fresh Graduate") {
                        setFreshGraduate(false);
                      } else {
                        emptyExperienceCTCDetatils();
                        setFreshGraduate(true);
                      }
                      setWorkStatus(e.target.value);
                    }}
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
          <div id="ctc-root-container" className="conditional-container">
            <div>
              <p className="ctc-details-text"> {CTC_DETAIL_TEXT}</p>
            </div>
            <InlineInputs
              InlineInputsArray={CTCDetails}
              InlineInputTitle={FIXED_CTC_TEXT}
              disabled={!props.hasButtons || freshGraduate}
              setValues={handleFixedCtc}
              value={fixedCtc}
            />
            <InlineInputs
              InlineInputsArray={CTCDetails}
              InlineInputTitle={VARIABLE_CTC_TEXT}
              disabled={!props.hasButtons || freshGraduate}
              setValues={handleVariableCtc}
              value={variableCtc}
            />
            <div id="total-ctc-parent-container">
              <div className="experience-card-title">
                <div>
                  <p>{TOTAL_CTC_TEXT}</p>
                </div>
              </div>
              <div id="total-ctc-textbox-container" className="inline-div">
                <TextField
                  id="total-ctc-textbox"
                  disabled
                  type="text"
                  value={totalCtc}
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
            <div
              id="expected-ctc-container"
              className="experience-details-card"
            >
              <InlineInputs
                required
                InlineInputsArray={CTCDetails}
                disabled={!props.hasButtons}
                setValues={handleExpectedCtc}
                value={expectedCtc}
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
      ) : (
        <Stack alignItems="center">
          <CircularProgress />
        </Stack>
      )}
    </>
  );
};

export default JobSeekerProfileDetails;
