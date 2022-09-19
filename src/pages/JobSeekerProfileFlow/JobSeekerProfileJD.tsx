import React, { ReactElement, FC, useEffect } from "react";
import { 
  Step, 
  Button, 
  MenuItem, 
  Checkbox, 
  FormControl 
} from "@mui/material";
import "./JobSeekerProfileFlow.css";
import {
  getFormData,
  getFormModeler,
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

const JobSeekerProfileJD: FC<any> = (props): ReactElement => {

  const userDataState = useAppSelector((state) => state.currentUser);

  const [loader, setLoader] = React.useState(false);
  const [menuForm, setMenuForm] = React.useState<any>(null);
  const [formValidated, setFormValidated] = React.useState(false);
  const [prefillDetails, setPrefillDetails] = React.useState<any>({});
  const [postFormDetails, setPostFormDetails] = React.useState<any>({});

  useEffect(() => {
    fetchForm();
  }, []);

  const fetchForm = async () => {
    const formMarkup = await getFormData(
      JD_PATCH_FORM, "", props.contestId
    );
    if (formMarkup?.data?.data[0]?.formData?.jdQuestionForm) {
      const jdMarkup = await getFormModeler(
        formMarkup?.data?.data[0]?.formData?.jdQuestionForm
      );
      if (jdMarkup?.data?.data?.components?.components) {
        setMenuForm(jdMarkup?.data?.data?.components);
      }
    }
  };

  const handleChange = (data: any) => {
    setPostFormDetails(data.data);
    setFormValidated(data.isValid);
  };

  const submitFormData = async () => {
    const jdQuestionsMap = Object.assign(postFormDetails);
    setLoader(true);
    try {
      const bodyPayload = {
        profileId: userDataState.userData.profileId,
        profileData: {
          jdQuestionsMap
        },
      };
      const profileJDDetailsResponse = await updateJobSeekerProfile(bodyPayload);
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

  return (
    <div className="job-seeker-profile-content">
      <Form
        form={menuForm}
        submission={{
          data: prefillDetails,
        }}
        onChange={(schema: any) => handleChange(schema)}
      />
      <PreviousNextButtons
        handleNext={submitFormData}
        handleBack={props.handleBack}
      />
    </div>
  );
};

export default JobSeekerProfileJD;