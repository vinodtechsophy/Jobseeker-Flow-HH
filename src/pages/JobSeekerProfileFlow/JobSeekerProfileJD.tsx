import React, { ReactElement, FC, useEffect, useRef } from "react";
import {
  Step,
  Button,
  MenuItem,
  Checkbox,
  FormControl,
  CircularProgress,
  Stack,
} from "@mui/material";
import "./JobSeekerProfileFlow.css";
import {
  getFormData,
  getFormModeler,
  getJobSeekerProfile,
  postFormData,
  updateJobSeekerProfile,
} from "../../services/FormDataService";
import PreviousNextButtons from "../../components/PreviousNextButtons/PreviousNextButtons";
import {
  WARNING_KEY,
  JD_PATCH_FORM,
  FORM_INVALID_STATUS,
  SUCCESS_KEY,
  FORM_SUBMISSION_SUCCESS,
  ERROR_KEY,
} from "../../constants";
import { Form } from "react-formio";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import { myOptions } from "../../utils/FileService";

const JobSeekerProfileJD: FC<any> = (props): ReactElement => {
  const userDataState = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();
  const myRefTag: any = useRef(Form);

  const [loader, setLoader] = React.useState(false);
  const [menuForm, setMenuForm] = React.useState<any>(null);
  const [formValidated, setFormValidated] = React.useState(false);
  const [prefillDetails, setPrefillDetails] = React.useState<any>({});
  const [postFormDetails, setPostFormDetails] = React.useState<any>({});
  const [gotData, setGotData] = React.useState(false);

  const jdQueMap = {
    textField: "Hy",
    issuingCountry: "",
    yes: "yes",
    dateOfExpiry: "09/23/2020",
    dateOfIssue: "09/23/2016",
  };

  useEffect(() => {
    if (props.profileDataId || userDataState.userData.profileId) {
      getDataFill();
    }
    fetchForm();
  }, []);

  const getDataFill = async () => {
    try {
      setLoader(true);
      const profileDataFetched = await getJobSeekerProfile(
        props.profileDataId || userDataState.userData.profileId
      );
      if (profileDataFetched?.data?.data?.profileJDQuestionsMap) {
        setPrefillDetails({
          data: {
            ...profileDataFetched?.data?.data?.profileJDQuestionsMap,
          },
        });
      }
    } catch (error: any) {
      console.log(error);
      props.setType(ERROR_KEY);
      props.setDataMessage("Something went wrong");
      props.setOpen(true);
    }
    setLoader(false);
  };

  const fetchForm = async () => {
    const formMarkup = await getFormData(JD_PATCH_FORM, "", props.contestId);
    if (formMarkup?.data?.data[0]?.formData?.jdQuestionForm) {
      const jdMarkup = await getFormModeler(
        formMarkup?.data?.data[0]?.formData?.jdQuestionForm
      );
      if (jdMarkup?.data?.data?.components?.components) {
        setMenuForm(jdMarkup?.data?.data?.components);
        setLoader(false);
      }
    } else {
      setLoader(false);
      setGotData(true);
    }
  };

  const handleChange = (data: any) => {
    setPostFormDetails(data.data);
    setFormValidated(data.isValid);
  };

  const submitFormData = async () => {
    if (!myRefTag?.current) {
      props.setType(WARNING_KEY);
      props.setDataMessage(FORM_INVALID_STATUS);
      props.setOpen(true);
      return;
    }
    const jdQuestionsMap = Object.assign(postFormDetails);
    setLoader(true);
    try {
      const bodyPayload = {
        profileId: props.profileDataId || userDataState.userData.profileId,
        profileData: {
          jdQuestionsMap,
          profileLastCompletedStep: "6",
        },
      };
      const profileJDDetailsResponse = await updateJobSeekerProfile(
        bodyPayload
      );
      if (profileJDDetailsResponse?.data?.success) {
        props.setType(SUCCESS_KEY);
        props.setDataMessage(FORM_SUBMISSION_SUCCESS);
        props.setOpen(true);
        props.handleComplete(5);
        props.handleNext();
      }
    } catch (error: any) {
      console.log(error?.response);
      props.setType(ERROR_KEY);
      props.setDataMessage(error?.response?.data?.message);
      props.setOpen(true);
    }
    setLoader(false);
  };

  const handleBack = () => {
    if (
      userDataState.userData.workStatus === "Fresh Graduate" ||
      userDataState.userData.workStatus === "Not-Working"
    ) {
      props.setActiveStep(3);
    } else {
      props.setActiveStep(4);
    }
  };

  return (
    <div className="job-seeker-profile-content">
      <Form
        ref={myRefTag}
        form={menuForm}
        submission={prefillDetails}
        onChange={(schema: any) => handleChange(schema)}
        options={myOptions}
      />
      {gotData && (
        <div className="head-title-text">
          JD Specific Questions has not been configured for this contest
        </div>
      )}

      {props.hasButtons ? (
        <PreviousNextButtons
          handleNext={submitFormData}
          handleBack={handleBack}
        />
      ) : null}
      {loader && (
        <Stack alignItems="center">
          <CircularProgress />
        </Stack>
      )}
    </div>
  );
};

export default JobSeekerProfileJD;
