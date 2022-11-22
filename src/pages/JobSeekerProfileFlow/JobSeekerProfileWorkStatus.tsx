import React, { ReactElement, FC, useEffect } from "react";
import {
  Grid,
  Stack,
  Radio,
  Select,
  Stepper,
  MenuItem,
  Checkbox,
  StepLabel,
  TextField,
  InputLabel,
  RadioGroup,
  FormControl,
  FormControlLabel,
  CircularProgress,
} from "@mui/material";
import {
  YesNoOptions,
  WorkStatusArray,
  OTHER_LIMIT_TEXT,
  EXPERIENCE_TITLE,
  ProfileFetchLocations,
  PROFILE_SOURCE_HOLDER,
  PROFILE_LOCATION_TEXT,
  CURRENT_LOCATION_TEXT,
  CERTIFICATION_ADD_TEXT,
  PREFERRED_LOCATION_TEXT,
  ADDITIONAL_CERTIFICATES_TEXT,
  WORK_STATUS_TEXT,
} from "./JobSeekerProfileFlowConstants";
import "./JobSeekerProfileFlow.css";
import PreviousNextButtons from "../../components/PreviousNextButtons/PreviousNextButtons";
import CertificationDetails from "./CertificationDetails/CertificationDetails";
import { WARNING_KEY, WorkStatusType } from "../../constants";
import FreshGraduateDetails from "./FreshGraduateDetails/FreshGraduateDetails";
import ExperiencedSeeker from "./ExperiencedSeeker/ExperiencedSeeker";
import { useStyles } from "./JobSeekerProfileFlowStyles";
import {
  getCityList,
  getJobSeekerProfile,
  updateJobSeekerProfile,
} from "../../services/FormDataService";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import {
  ERROR_KEY,
  SUCCESS_KEY,
  FORM_SUBMISSION_SUCCESS,
  JOB_TYPE_OPTIONS,
} from "../../constants";

const JobSeekerProfileWorkStatus: FC<any> = (props): ReactElement => {
  const classes: any = useStyles();
  const experiencedRef = React.useRef<any>();
  const freshGraduateRef = React.useRef<any>();
  const userDataState = useAppSelector((state) => state.currentUser);

  const [gotPatchData, setGotPatchData] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [citiesArray, setCitiesArray] = React.useState([]);
  const [jobStatus, setJobStatus] = React.useState(
    userDataState.userData.workStatus
  );
  const [currentLocation, setCurrentLocation] = React.useState("");
  const [preferredLocation, setPreferredLocation] = React.useState("");
  const [profileFetchLocation, setProfileFetchLocation] = React.useState("");
  const [certificationDetails, setCertificationDetails] = React.useState<any[]>(
    []
  );
  const [additonalCertificationStatus, setAdditionalCertificationStatus] =
    React.useState("");
  const [experiencedDetails, setExperiencedDetails] = React.useState<
    | {
        currentEmployer: string;
        country: string;
        city: string;
      }
    | any
  >({
    currentEmployer: "",
    country: "",
    city: "",
  });
  const [freshGraduateDetails, setFreshGraduateDetails] = React.useState<
    | {
        instituteName: string;
        instituteCity: string;
        instituteCountry: string;
        collegeEndDate: string;
        collegeStartDate: string;
      }
    | any
  >({
    instituteName: "",
    instituteCity: "",
    instituteCountry: "",
    collegeEndDate: "",
    collegeStartDate: "",
  });

  const handleProfileFetch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfileFetchLocation((event.target as HTMLInputElement).value);
  };

  const handleCertificationStatus = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAdditionalCertificationStatus((event.target as HTMLInputElement).value);
  };
  let validExp = {};

  const submitWorkStatus = async () => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    setLoader(true);

    if (experiencedRef?.current)
      validExp = experiencedRef?.current.childMethod();

    if (freshGraduateRef?.current)
      validExp = freshGraduateRef?.current.childMethod();
    console.log(validExp);
    const profileWorkStatusMap = buildDetailsPayload(validExp);
    console.log(profileWorkStatusMap);
    if (!validateWorkStatusMap(profileWorkStatusMap)) {
      props.setOpen(true);
      props.setType(WARNING_KEY);
      props.setDataMessage("Please enter all work status details");
      setLoader(false);
      return;
    }
    if (
      new Date(profileWorkStatusMap.joiningDate).getTime() >= date.getTime()
    ) {
      props.setOpen(true);
      props.setType(WARNING_KEY);
      props.setDataMessage("Joining date cannot be future date");
      setLoader(false);
      return;
    }
    if (
      new Date(profileWorkStatusMap.collegeStartDate).getTime() >= new Date(profileWorkStatusMap.collegeEndDate).getTime()
    ) {
      props.setOpen(true);
      props.setType(WARNING_KEY);
      props.setDataMessage("College start date should not be greater than college end date");
      setLoader(false);
      return;
    } 
     else {
      if (profileWorkStatusMap.jobDurationType === JOB_TYPE_OPTIONS[0]) {
        delete profileWorkStatusMap.payrollEmployer;
        delete profileWorkStatusMap.endClient;
      }
      try {
        const profileDetailsResponse = await updateJobSeekerProfile({
          profileId: userDataState.userData.profileId,
          profileData: { profileWorkStatusMap, profileLastCompletedStep: "4" },
        });
        if (profileDetailsResponse?.data?.success) {
          props.setType(SUCCESS_KEY);
          props.setDataMessage(FORM_SUBMISSION_SUCCESS);
          props.setOpen(true);
          props.handleComplete(3);
          // props.handleNext();
          if (
            jobStatus === WorkStatusType.FRESHER ||
            jobStatus === WorkStatusType.JOBLESS
          ) {
            props.setActiveStep(5);
          } else {
            props.setActiveStep(4);
          }
        }
      } catch (error: any) {
        console.log(error);
        props.setType(ERROR_KEY);
        props.setDataMessage(error?.message);
        props.setOpen(true);
      }
      setLoader(false);
    }
  };

  const buildDetailsPayload = (validExp) => {
    return {
      jobStatus,
      currentLocation,
      preferredLocation,
      profileFetchLocation,
      additonalCertificationStatus,
      certificationDetails,
      ...validExp,
    };
  };

  const validateExperienceDetails = (experiencedData) => {
    if (!experiencedData.city || !experiencedData.country) return false;
    switch (props.workStatus) {
      case WorkStatusType.JOBLESS:
        if (experiencedData.jobDurationType === JOB_TYPE_OPTIONS[0]) {
          if (
            !experiencedData.lastEmployer ||
            !experiencedData.relievingDate ||
            !experiencedData.notWorkingReason
          )
            return false;
        } else {
          if (
            !experiencedData.lastEmployer ||
            !experiencedData.relievingDate ||
            !experiencedData.notWorkingReason ||
            !experiencedData.payrollEmployer ||
            !experiencedData.endClient
          )
            return false;
        }
        break;
      case WorkStatusType.FULL_TIME:
        if (experiencedData.jobDurationType === JOB_TYPE_OPTIONS[0]) {
          if (!experiencedData.currentEmployer || !experiencedData.joiningDate)
            return false;
        } else {
          if (
            !experiencedData.currentEmployer ||
            !experiencedData.joiningDate ||
            !experiencedData.payrollEmployer ||
            !experiencedData.endClient
          )
            return false;
        }
        break;
    }
    return true;
  };

  const validateFresherDetails = (freshrData) => {
    if (
      !freshrData.instituteName ||
      !freshrData.instituteCity ||
      !freshrData.instituteCountry ||
      !freshrData.collegeEndDate ||
      !freshrData.collegeStartDate
    )
      return false;
    return true;
  };
  const checkExpData = (experiencedData: any) => {
    if (!validateExperienceDetails(experiencedData)) {
      setExperiencedDetails({});
      props.setType(WARNING_KEY);
      props.setDataMessage("Please enter all experience details");
      props.setOpen(true);
      setLoader(false);
      return false;
    } else {
      setExperiencedDetails(experiencedData);
      console.log(experiencedDetails);
      return true;
    }
  };

  const checkFrshrData = (fresherData) => {
    if (!validateFresherDetails(fresherData)) {
      setFreshGraduateDetails({});
      props.setType(WARNING_KEY);
      props.setDataMessage("Please enter the college details");
      props.setOpen(true);
      setLoader(false);
      return false;
    } else {
      setFreshGraduateDetails(fresherData);
      console.log(freshGraduateDetails);
      return true;
    }
  };
  const validateWorkStatusMap = (data) => {
    if (!data.currentLocation || !data.preferredLocation) return false;
    if (data.additonalCertificationStatus === "Yes") {
      if (data.certificationDetails?.length === 0) return false;
      else {
        certificationDetails.forEach((row) => {
          if (
            !row.name ||
            !row.issuingOrganization ||
            !row.credentialId ||
            !row.credentialURL ||
            !row.issueDate ||
            !row.expirationDate ||
            !row.credentialStatus
          )
            return false;
        });
      }
    } else {
      setCertificationDetails([]);
    }
    if (jobStatus === WorkStatusType.FRESHER) {
      if (!checkFrshrData(validExp)) {
        return false;
      }
    } else {
      if (!checkExpData(validExp)) {
        return false;
      }
    }
    return true;
  };

  const removeCertification = (index) => {
    const list = [...certificationDetails];
    list.splice(index, 1);
    setCertificationDetails(list);
  };

  useEffect(() => {
    if (props.profileDataId || userDataState.userData.profileId) {
      callPrefillData();
      fetchCityDetails();
    }
  }, [userDataState.userData.profileId, props.profileDataId]);

  const fetchCityDetails = async () => {
    const cityRawData = await getCityList();
    setCitiesArray(cityRawData?.data.split("\n"));
  };

  const callPrefillData = async () => {
    try {
      setLoader(true);
      const profileDataFetched = await getJobSeekerProfile(
        props.profileDataId || userDataState.userData.profileId
      );
      if (profileDataFetched?.data?.data?.profileDetailsMap?.workStatus) {
        setJobStatus(
          profileDataFetched?.data?.data?.profileDetailsMap.workStatus
        );
      }
      if (profileDataFetched?.data?.data?.profileWorkStatusMap) {
        patchWorkStatusDetails(
          profileDataFetched?.data?.data?.profileWorkStatusMap
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

  const patchWorkStatusDetails = (patchData: any) => {
    setCurrentLocation(patchData.currentLocation);
    setPreferredLocation(patchData.preferredLocation);
    setProfileFetchLocation(patchData.profileFetchLocation);
    setCertificationDetails(() => [...patchData.certificationDetails]);
    setAdditionalCertificationStatus(patchData.additonalCertificationStatus);
    setStatusSubDetails(patchData);
    setGotPatchData(true);
  };

  const setStatusSubDetails = (patchObject: any) => {
    if (patchObject.instituteName) {
      setFreshGraduateDetails({
        instituteName: patchObject.instituteName,
        instituteCity: patchObject.instituteCity,
        instituteCountry: patchObject.instituteCountry,
        collegeEndDate: patchObject.collegeEndDate,
        collegeStartDate: patchObject.collegeStartDate,
      });
    } else {
      setExperiencedDetails({
        jobDurationType: patchObject.jobDurationType,
        city: patchObject.city,
        country: patchObject.country,
        endClient: patchObject?.endClient,
        joiningDate: patchObject?.joiningDate,
        lastEmployer: patchObject?.lastEmployer,
        relievingDate: patchObject?.relievingDate,
        currentEmployer: patchObject?.currentEmployer,
        payrollEmployer: patchObject?.payrollEmployer,
        notWorkingReason: patchObject?.notWorkingReason,
      });
    }
  };

  return (
    <>
      {!loader ? (
        <div className="job-seeker-profile-content">
          <p className="step-content-title-text">{EXPERIENCE_TITLE}</p>
          <div className="conditional-container">
            <div className="experience-card-title">
              <p>{PROFILE_LOCATION_TEXT}</p>
            </div>
            <div id="job-profile-ad-container">
              <FormControl>
                <RadioGroup
                  id="job-profile-ad"
                  value={profileFetchLocation}
                  onChange={handleProfileFetch}
                >
                  {ProfileFetchLocations.map((location) => (
                    <FormControlLabel
                      disabled={!props.hasButtons}
                      value={location}
                      control={<Radio />}
                      label={location}
                      key={location}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            {profileFetchLocation ===
            ProfileFetchLocations[ProfileFetchLocations.length - 1] ? (
              <div
                id="profile-location-textbox-container"
                className="profile-location-field"
              >
                <TextField
                  id="profile-location-textbox"
                  disabled={!props.hasButtons}
                  type="text"
                  multiline
                  fullWidth
                  placeholder={PROFILE_SOURCE_HOLDER}
                  rows={2}
                  helperText={OTHER_LIMIT_TEXT}
                  onChange={(e) => console.log("val ", e.target.value)}
                  InputProps={{
                    inputProps: { maxLength: 20 },
                  }}
                  size="small"
                />
              </div>
            ) : null}
          </div>
          <div
            id="current-location-parent-container"
            className="conditional-container"
          >
            <div className="experience-card-title">
              <p>
                {CURRENT_LOCATION_TEXT}
                <span className="asterisk-span"> *</span>
              </p>
            </div>
            <div id="current-location-dropdown-container">
              <FormControl sx={{ minWidth: 250 }}>
                <InputLabel sx={{ lineHeight: "15px" }}>
                  {CURRENT_LOCATION_TEXT}
                </InputLabel>
                <Select
                  id="current-location-dropdown"
                  disabled={!props.hasButtons}
                  size="small"
                  value={currentLocation}
                  label={CURRENT_LOCATION_TEXT}
                  className={classes.inputField}
                  onChange={(e) => setCurrentLocation(e.target.value)}
                >
                  {citiesArray.map((item: string, index) => (
                    <MenuItem key={item + index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div
            id="prefered-location-parent-container"
            className="conditional-container"
          >
            <div className="experience-card-title">
              <p>
                {PREFERRED_LOCATION_TEXT}
                <span className="asterisk-span"> *</span>
              </p>
            </div>
            <div id="prefered-location-dropdown-container">
              <FormControl sx={{ minWidth: 250 }}>
                <InputLabel sx={{ lineHeight: "15px" }}>
                  {PREFERRED_LOCATION_TEXT}
                </InputLabel>
                <Select
                  id="prefered-location-dropdown"
                  disabled={!props.hasButtons}
                  size="small"
                  value={preferredLocation}
                  label={PREFERRED_LOCATION_TEXT}
                  className={classes.inputField}
                  onChange={(e) => setPreferredLocation(e.target.value)}
                >
                  {citiesArray.map((item: string, index) => (
                    <MenuItem key={item + index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div
            id="additonal-certification-Status-parent-container"
            className="conditional-container"
          >
            <div className="experience-card-title">
              <p>{ADDITIONAL_CERTIFICATES_TEXT}</p>
            </div>
            <div id="additonal-certification-Status-radio-container">
              <FormControl>
                <RadioGroup
                  id="additonal-certification-Status-radio"
                  value={additonalCertificationStatus}
                  onChange={handleCertificationStatus}
                >
                  {YesNoOptions.map((location) => (
                    <FormControlLabel
                      disabled={!props.hasButtons}
                      value={location}
                      control={<Radio />}
                      label={location}
                      key={location}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          {additonalCertificationStatus === YesNoOptions[0] ? (
            <div id="certification-details-container">
              <div className="experience-card-title">
                <p>{CERTIFICATION_ADD_TEXT}</p>
              </div>
              <CertificationDetails
                disabled={!props.hasButtons}
                setCertificationData={setCertificationDetails}
                removeCertification={removeCertification}
                setType={props.setType}
                setOpen={props.setOpen}
                setDataMessage={props.setDataMessage}
                prefillDetails={
                  props.profileDataId || userDataState.userData.profileId
                    ? certificationDetails
                    : null
                }
              />
            </div>
          ) : null}

          <div>
            <div className="experience-card-title">
              <p>
                {WORK_STATUS_TEXT}: {jobStatus}
              </p>
            </div>
          </div>
          <div id="freshGraduate-details-container">
            {jobStatus === WorkStatusType.FRESHER ? (
              <FreshGraduateDetails
                disabled={!props.hasButtons}
                ref={freshGraduateRef}
                setParentData={setFreshGraduateDetails}
                setType={props.setType}
                setOpen={props.setOpen}
                setDataMessage={props.setDataMessage}
                fresherPrefillData={
                  props.profileDataId || userDataState.userData.profileId
                    ? freshGraduateDetails
                    : null
                }
              />
            ) : null}
          </div>
          <div id="experienced-seeker-container">
            {jobStatus !== WorkStatusType.FRESHER ? (
              <>
                {gotPatchData ? (
                  <ExperiencedSeeker
                    disabled={!props.hasButtons}
                    workStatus={jobStatus}
                    ref={experiencedRef}
                    setParentData={setExperiencedDetails}
                    setType={props.setType}
                    setOpen={props.setOpen}
                    setDataMessage={props.setDataMessage}
                    experiencedPrefillData={
                      props.profileDataId || userDataState.userData.profileId
                        ? experiencedDetails
                        : null
                    }
                  />
                ) : (
                  <ExperiencedSeeker
                    disabled={!props.hasButtons}
                    workStatus={jobStatus}
                    ref={experiencedRef}
                    setParentData={setExperiencedDetails}
                    setType={props.setType}
                    setOpen={props.setOpen}
                    setDataMessage={props.setDataMessage}
                    experiencedPrefillData={
                      props.profileDataId || userDataState.userData.profileId
                        ? experiencedDetails
                        : null
                    }
                  />
                )}
              </>
            ) : null}
          </div>
          {props.hasButtons ? (
            <PreviousNextButtons
              handleNext={submitWorkStatus}
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

export default JobSeekerProfileWorkStatus;
