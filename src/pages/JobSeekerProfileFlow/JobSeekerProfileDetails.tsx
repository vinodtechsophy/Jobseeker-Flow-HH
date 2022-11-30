import React, { ReactElement, FC, useEffect, useState } from "react";
import {
  Select,
  MenuItem,
  Checkbox,
  TextField,
  InputLabel,
  FormControl,
  CircularProgress,
  Stack,
  ListItemText,
  OutlinedInput,
  Autocomplete,
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
  fetchFormData,
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
  HH_Skills,
} from "../../constants";
import { HH_Roles } from "../../constants";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { filterSkillValuesWithSkillName } from "../../services/SkillService";

const useStyles = makeStyles(() => ({
  primarySkillsTitle: {
    fontSize: "20px",
    marginTop: "12px",
    marginBottom: "12px",
  },
  secondarySkillsTitle: {
    fontSize: "20px",
    marginTop: "12px",
    marginBottom: "12px",
  },
  primarySkillsSelect: {
    marginLeft: "65px",
    width: "250px",
  },
  secondarySkillsSelect: {
    marginLeft: "32px",
    width: "250px",
  },
}));

const JobSeekerProfileDetails: FC<any> = (props): ReactElement => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const userDataState = useAppSelector((state) => state.currentUser);
  // const activeTabState = useAppSelector((state) => state.tabsState);
  const [freshGraduate, setFreshGraduate] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [workStatus, setWorkStatus] = React.useState("");
  const [role, setRole] = useState({ label: "" });
  const [roles, setRoles] = useState<any>([]);
  const [primarySkill, setPrimarySkill] = useState<any>([]);
  const [secondarySkill, setSecondarySkill] = useState<any>([]);
  const [primarySkillValues, setPrimarySkillValues] = useState<any>([]);
  const [secondarySkillValues, setSecondarySkillValues] = useState<any>([]);

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

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

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
        } else if (!profileDetailsMap.role) {
          props.setType(WARNING_KEY);
          props.setDataMessage("Please fill Role");
          props.setOpen(true);
        } else if (profileDetailsMap.primarySkill.length === 0) {
          props.setType(WARNING_KEY);
          props.setDataMessage("Please fill PrimarySkills");
          props.setOpen(true);
        } else if (profileDetailsMap.secondarySkill.length === 0) {
          props.setType(WARNING_KEY);
          props.setDataMessage("Please fill SecondarySkills");
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
            !profileDetailsMap.variableCtc.variableCtcLakh)
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
          finalBuildDetailsPayload(profileDetailsMap);

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
      role,
      primarySkill,
      secondarySkill,
    };
  };

  const checkZero = (value: number) => {
    return value ? value : 0;
  };

  const finalBuildDetailsPayload = (data) => {
    data.expectedCtc.expectedCtcLakh = checkZero(
      parseInt(data.expectedCtc.expectedCtcLakh)
    );
    data.expectedCtc.expectedCtcThousand = checkZero(
      parseInt(data.expectedCtc.expectedCtcThousand)
    );
    data.fixedCtc.fixedCtcLakh = checkZero(
      parseInt(data.fixedCtc.fixedCtcLakh)
    );
    data.fixedCtc.fixedCtcThousand = checkZero(
      parseInt(data.fixedCtc.fixedCtcThousand)
    );
    data.relevantExperience.relevantExperienceYears = checkZero(
      parseInt(data.relevantExperience.relevantExperienceYears)
    );
    data.relevantExperience.relevantExperienceMonths = checkZero(
      parseInt(data.relevantExperience.relevantExperienceMonths)
    );
    data.totalExperience.totalExperienceYears = checkZero(
      parseInt(data.totalExperience.totalExperienceYears)
    );
    data.totalExperience.totalExperienceMonths = checkZero(
      parseInt(data.totalExperience.totalExperienceMonths)
    );
    data.variableCtc.variableCtcLakh = checkZero(
      parseInt(data.variableCtc.variableCtcakh)
    );
    data.variableCtc.variableCtcThousand = checkZero(
      parseInt(data.variableCtc.variableCtcThousand)
    );
    data.totalCtc = checkZero(parseInt(data.totalCtc));
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
    getRolesData();
    if (props.profileDataId || userDataState.userData.profileId)
      callPrefillData();
  }, []);

  const getRolesData = async () => {
    const response: any = await fetchFormData(HH_Roles, 0, 10000);
    console.log(response);

    let mapData = response.data.content;
    let result = mapData.map((item, index) => {
      item.formData.label = item.formData.role;

      let Data = {
        ...item.formData,
      };

      return Data;
    });
    console.log(result);
    setRoles(result);
  };

  const handleRolesField = (e, value) => {
    console.log(value);
    e.preventDefault();
    setPrimarySkillValues([]);
    setSecondarySkillValues([]);
    setPrimarySkill([]);
    setSecondarySkill([]);
    const data = roles.find((obj) => obj.label === value);
    setRole(value);
    handlePrimarySkillsData(value.primarySkills);
    handleSecondarySkillsData(value.secondarySkills);
  };

  const handlePrimarySkillsData = (skillNames) => {
    console.log(skillNames);
    skillNames.map(async (item) => {
      const response: any = await filterSkillValuesWithSkillName(item);
      console.log(response);
      setPrimarySkillValues((prevState) => [
        ...prevState,
        ...response.data.data[0].formData.skillValues,
      ]);
    });
  };

  const handleSecondarySkillsData = (skillNames) => {
    console.log(skillNames);
    skillNames.map(async (item) => {
      const response: any = await filterSkillValuesWithSkillName(item);
      console.log(response);
      setSecondarySkillValues((prevState) => [
        ...prevState,
        ...response.data.data[0].formData.skillValues,
      ]);
    });
  };

  const callPrefillData = async () => {
    try {
      setLoader(true);
      const profileDataFetched = await getJobSeekerProfile(
        props.profileDataId || userDataState.userData.profileId
      );
      if (profileDataFetched?.data?.data?.profileDetailsMap) {
        patchProfileDetails(profileDataFetched?.data?.data?.profileDetailsMap);
        handlePrimarySkillsData(
          profileDataFetched?.data?.data?.profileDetailsMap?.role?.primarySkills
        );
        handleSecondarySkillsData(
          profileDataFetched?.data?.data?.profileDetailsMap?.role
            ?.secondarySkills
        );
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
    setRole(patchData?.role);
    setPrimarySkill(patchData?.primarySkill);
    setSecondarySkill(patchData?.secondarySkill);
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
            <div
              id="work-status-parent-parent-container"
              className="generic-container"
            >
              <div id="work-status-parent-container" className="inline-div">
                <div>
                  <p className="step-content-title-text">
                    Role <span className="asterisk-span"> *</span>
                  </p>
                </div>
                <div id="work-status-container" className="work-status-select">
                  <Autocomplete
                    disablePortal
                    id="add-Role"
                    options={roles}
                    getOptionLabel={(obj) => obj.label}
                    onChange={(e, value) => handleRolesField(e, value)}
                    value={role}
                    sx={{ width: 250 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Role" />
                    )}
                  />
                </div>
              </div>
              <Box mt={3}>
                <div id="work-status-parent-container" className="inline-div">
                  <div>
                    <p className={classes.primarySkillsTitle}>
                      Primary Skill <span className="asterisk-span"> *</span>
                    </p>
                  </div>
                  <FormControl sx={{ m: 0, width: 300 }}>
                    <InputLabel
                      id="Role-simple-select-helper-label"
                      className={classes.primarySkillsSelect}
                    >
                      Primary Skills
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      className={classes.primarySkillsSelect}
                      // disabled={!props.hasButtons || freshGraduate}
                      MenuProps={MenuProps}
                      multiple
                      value={primarySkill}
                      required
                      input={<OutlinedInput label="Primary Skills" />}
                      renderValue={(selected) => selected.join(", ")}
                      onChange={(e) => {
                        const {
                          target: { value },
                        } = e;
                        setPrimarySkill(
                          // On autofill we get a stringified value.
                          typeof value === "string" ? value.split(",") : value
                        );
                      }}
                    >
                      {primarySkillValues.map((item: string) => (
                        <MenuItem key={item} value={item}>
                          <Checkbox checked={primarySkill.indexOf(item) > -1} />
                          <ListItemText primary={item} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </Box>
              <Box mt={3}>
                <div id="work-status-parent-container" className="inline-div">
                  <div>
                    <p className={classes.secondarySkillsTitle}>
                      Secondary Skills <span className="asterisk-span"> *</span>
                    </p>
                  </div>
                  <FormControl sx={{ m: 0, width: 300 }}>
                    <InputLabel
                      id="Role-simple-select-helper-label"
                      className={classes.secondarySkillsSelect}
                    >
                      Secondary Skill
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      className={classes.secondarySkillsSelect}
                      // disabled={!props.hasButtons || freshGraduate}
                      MenuProps={MenuProps}
                      required
                      multiple
                      value={secondarySkill}
                      input={<OutlinedInput label="Secondary Skills" />}
                      renderValue={(selected) => selected.join(", ")}
                      onChange={(e) => {
                        const {
                          target: { value },
                        } = e;
                        setSecondarySkill(
                          // On autofill we get a stringified value.
                          typeof value === "string" ? value.split(",") : value
                        );
                      }}
                    >
                      {secondarySkillValues.map((item: string) => (
                        <MenuItem key={item} value={item}>
                          <Checkbox
                            checked={secondarySkill.indexOf(item) > -1}
                          />
                          <ListItemText primary={item} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </Box>
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
