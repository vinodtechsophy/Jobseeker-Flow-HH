import React, { ReactElement, FC, useEffect } from "react";
import {
  Box,
  Grid,
  Button,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik, getIn } from "formik";
import * as Yup from "yup";
import { StyledContainer, useStyles } from "../JobSeekerProfileFlowStyles";
import {
  ERROR_KEY,
  URL_REGEX,
  URL_ERROR_MSG,
  ALPHA_ERR_MSG,
  HALF_SIZE_GRID,
  FULL_SIZE_GRID,
  LETTERS_ONLY_REGEX,
  ALPHA_NUMERIC_REGEX,
  SPECIAL_CHAR_ERR_MSG,
} from "../../../constants";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  OFFERED_ROLE,
  JOIN_LOCATION,
  PROPOSED_DATE,
  EMPLOYER_NAME,
  FormAttributes,
  OFFER_ADD_TEXT,
  SAVE_BTN_TEXT,
  DELETE_BTN_TEXT,
  CERTIFICATION_ADD_TEXT,
  CERTIFICATION_NAME_TEXT,
  CERTIFICATION_ORIGIN_TEXT,
  CREDENTIAL_ID_TEXT,
  CREDENTIAL_URL_TEXT,
  CERTIFICATION_EXPIRY_DATE,
  CERTIFICATION_ISSUE_DATE,
  CREDENTIAL_EXPIRY_TEXT,
} from "./CertificationDetailsConstants";
import AddIcon from "@mui/icons-material/Add";
import "./CertificationDetails.css";
import Calendar from "../../../components/Calendar/Calendar";

const CertificationDetails: FC<any> = (props): ReactElement => {
  const classes: any = useStyles();

  const [serviceList, setServiceList] = React.useState<any>([]);

  const handleServiceRemove = (index: any) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const initialValuesForForm = {
    name: "",
    issuingOrganization: "",
    credentialStatus: false,
    credentialId: "",
    credentialURL: "",
    issueDate: "",
    expirationDate: "",
    saveStatus: false,
  };

  const teamArray: any[] = [];

  const certificationDetailsForm = useFormik({
    initialValues: { members: teamArray },
    validationSchema: Yup.object().shape({
      members: Yup.array()
        .of(
          Yup.object({
            name: Yup.string()
              .required(FormAttributes.name.required)
              .min(3)
              .max(FormAttributes.name.maxLength)
              .matches(LETTERS_ONLY_REGEX, SPECIAL_CHAR_ERR_MSG),
            issuingOrganization: Yup.string()
              .required(FormAttributes.issuingOrganization.required)
              .min(3)
              .max(FormAttributes.issuingOrganization.maxLength)
              .matches(LETTERS_ONLY_REGEX, SPECIAL_CHAR_ERR_MSG),
            credentialId: Yup.string()
              .required(FormAttributes.credentialId.required)
              .min(3)
              .max(FormAttributes.credentialId.maxLength)
              .matches(ALPHA_NUMERIC_REGEX, ALPHA_ERR_MSG),
            credentialURL: Yup.string()
              .required(FormAttributes.credentialURL.required)
              .min(6)
              .max(FormAttributes.credentialURL.maxLength)
              .matches(URL_REGEX, URL_ERROR_MSG),
            issueDate: Yup.string().required(FormAttributes.issueDate.required),
            expirationDate: Yup.string(),
          })
        )
        .required("offr details required")
        .min(1, "add at least one offer"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      handleSubmit(values, setSubmitting);
    },
    enableReinitialize: true,
  });

  const handleSubmit = async (values: any, setSubmitting: any) => {
    const { members } = values;

    const userPayload = members.map((item: any) => ({
      joiningDate: item.joiningDate,
      joiningLocation: item.joiningLocation,
      userName: item.countryCode + item.designation,
      mobileNumber: item.countryCode + item.designation,
      employerName: item.employerName,
      department: "dummy",
      channel: "Company Onboard",
      otherChannel: "",
    }));
    props.handleComplete();
    props.handleNext();
    if (serviceList.length > 0) {
      //   setShowNofitication(true);
      //   setNotificationType(ERROR_KEY);
      //   setNoticationMessage(USER_ADD_ERR_MSG);
    }
    setSubmitting(false);
  };

  const handleServiceAdd = () => {
    certificationDetailsForm.setValues((prevValues) => ({
      members: [...prevValues.members, { ...initialValuesForForm }],
    }));
    setServiceList((prevState: any) => [...prevState, { service: "" }]);
  };

  const getError = (name: string) => {
    const error = getIn(certificationDetailsForm.errors, name);
    const touch = getIn(certificationDetailsForm.touched, name);
    return touch && error ? error : null;
  };

  useEffect(() => {
    if (serviceList.length === 0) handleServiceAdd();
  }, []);

  const handleIssueDate = (date, index) => {
    certificationDetailsForm.setFieldValue(`members[${index}].issueDate`, date);
  };

  const handleExpirationDate = (date, index) => {
    certificationDetailsForm.setFieldValue(
      `members[${index}].expirationDate`,
      date
    );
  };

  const handleSaveData = (index) => {
    certificationDetailsForm.setFieldValue(
      `members[${index}].saveStatus`,
      true
    );
    props.setCertificationData(certificationDetailsForm.values.members[index]);
  };

  const handleDeleteData = (index) => {
    props.removeCertification(index);
    handleServiceRemove(index);
    certificationDetailsForm.resetForm();
  };

  return (
    <React.Fragment>
      <div className="certification-div">
        <div className="add-btn-div">
          <Button
            className="next-button"
            variant="contained"
            onClick={handleServiceAdd}
          >
            <AddIcon className="add-icon" /> {CERTIFICATION_ADD_TEXT}
          </Button>
        </div>
        {serviceList.length > 0 &&
          serviceList.map((singleService: any, index: any) => (
            <div key={index} className="services">
              <div className="first-division">
                <StyledContainer>
                  <Grid container className={classes.muiContainer}>
                    <Grid
                      item
                      xs={FULL_SIZE_GRID}
                      sm={FULL_SIZE_GRID}
                      md={FULL_SIZE_GRID}
                      lg={FULL_SIZE_GRID}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 1,
                      }}
                    >
                      <Typography className={classes.Heading2}>
                        Certification {index + 1} Details
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={FULL_SIZE_GRID}
                      sm={FULL_SIZE_GRID}
                      md={HALF_SIZE_GRID}
                      lg={HALF_SIZE_GRID}
                    >
                      <p>
                        {CERTIFICATION_NAME_TEXT}
                        <span className="asterisk-span"> *</span>
                      </p>
                      <TextField
                        required
                        disabled={props.disabled}
                        id={FormAttributes.name.id}
                        placeholder={FormAttributes.name.placeholder}
                        className={classes.boxInputField}
                        size="small"
                        name={`members[${index}].name`}
                        onBlur={certificationDetailsForm.handleBlur}
                        onChange={certificationDetailsForm.handleChange}
                        value={
                          certificationDetailsForm.values.members[index].name
                        }
                        error={getError(`members[${index}].name`)}
                        helperText={getError(`members[${index}].name`)}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={FULL_SIZE_GRID}
                      sm={FULL_SIZE_GRID}
                      md={HALF_SIZE_GRID}
                      lg={HALF_SIZE_GRID}
                      className="right-grid"
                    >
                      <p>
                        {CERTIFICATION_ORIGIN_TEXT}
                        <span className="asterisk-span"> *</span>
                      </p>
                      <TextField
                        required
                        disabled={props.disabled}
                        id={FormAttributes.issuingOrganization.id}
                        placeholder={
                          FormAttributes.issuingOrganization.placeholder
                        }
                        className={classes.boxInputField}
                        size="small"
                        name={`members[${index}].issuingOrganization`}
                        onBlur={certificationDetailsForm.handleBlur}
                        onChange={certificationDetailsForm.handleChange}
                        value={
                          certificationDetailsForm.values.members[index]
                            .issuingOrganization
                        }
                        error={getError(
                          `members[${index}].issuingOrganization`
                        )}
                        helperText={getError(
                          `members[${index}].issuingOrganization`
                        )}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={FULL_SIZE_GRID}
                      sm={FULL_SIZE_GRID}
                      md={FULL_SIZE_GRID}
                      lg={FULL_SIZE_GRID}
                      mt={2}
                    >
                      <span>{CREDENTIAL_EXPIRY_TEXT}</span>
                      <Checkbox
                        checked={
                          certificationDetailsForm.values.members[index]
                            .credentialStatus
                        }
                        value={
                          certificationDetailsForm.values.members[index]
                            .credentialStatus
                        }
                        onChange={(event) =>
                          certificationDetailsForm.setFieldValue(
                            `members[${index}].credentialStatus`,
                            event.target.checked
                          )
                        }
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={FULL_SIZE_GRID}
                      sm={FULL_SIZE_GRID}
                      md={HALF_SIZE_GRID}
                      lg={HALF_SIZE_GRID}
                      mt={2}
                    >
                      <p>
                        {CERTIFICATION_ISSUE_DATE}
                        <span className="asterisk-span"> *</span>
                      </p>
                      <Calendar
                        setDate={(date) => handleIssueDate(date, index)}
                        status={true}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={FULL_SIZE_GRID}
                      sm={FULL_SIZE_GRID}
                      md={HALF_SIZE_GRID}
                      lg={HALF_SIZE_GRID}
                      className="right-grid"
                      mt={2}
                    >
                      <p>
                        {CERTIFICATION_EXPIRY_DATE}
                        <span className="asterisk-span"> *</span>
                      </p>
                      <Calendar
                        setDate={(date) => handleExpirationDate(date, index)}
                        status={true}
                        disabled={
                          certificationDetailsForm.values.members[index]
                            .credentialStatus
                        }
                      />
                    </Grid>
                    <Grid
                      item
                      xs={FULL_SIZE_GRID}
                      sm={FULL_SIZE_GRID}
                      md={HALF_SIZE_GRID}
                      lg={HALF_SIZE_GRID}
                      className="credential-grid"
                    >
                      <p>
                        {CREDENTIAL_ID_TEXT}
                        <span className="asterisk-span"> *</span>
                      </p>
                      <TextField
                        required
                        disabled={props.disabled}
                        id={FormAttributes.credentialId.id}
                        placeholder={FormAttributes.credentialId.placeholder}
                        className={classes.boxInputField}
                        size="small"
                        name={`members[${index}].credentialId`}
                        onBlur={certificationDetailsForm.handleBlur}
                        onChange={certificationDetailsForm.handleChange}
                        value={
                          certificationDetailsForm.values.members[index]
                            .credentialId
                        }
                        error={getError(`members[${index}].credentialId`)}
                        helperText={getError(`members[${index}].credentialId`)}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={FULL_SIZE_GRID}
                      sm={FULL_SIZE_GRID}
                      md={HALF_SIZE_GRID}
                      lg={HALF_SIZE_GRID}
                      className="credential-grid right-grid"
                    >
                      <p>
                        {CREDENTIAL_URL_TEXT}
                        <span className="asterisk-span"> *</span>
                      </p>
                      <TextField
                        id={FormAttributes.credentialURL.id}
                        placeholder={FormAttributes.credentialURL.placeholder}
                        required
                        disabled={props.disabled}
                        size="small"
                        className={classes.boxInputField}
                        name={`members[${index}].credentialURL`}
                        onBlur={certificationDetailsForm.handleBlur}
                        onChange={certificationDetailsForm.handleChange}
                        value={
                          certificationDetailsForm.values.members[index]
                            .credentialURL
                        }
                        error={getError(`members[${index}].credentialURL`)}
                        helperText={getError(`members[${index}].credentialURL`)}
                      />
                    </Grid>
                  </Grid>
                  {!props.disabled ? (
                    <div className="final-button-div">
                      {!certificationDetailsForm.values.members[index]
                        .saveStatus ? (
                        <Button
                          className="save-button"
                          variant="outlined"
                          onClick={() => handleSaveData(index)}
                        >
                          {SAVE_BTN_TEXT}
                        </Button>
                      ) : (
                        <Button
                          className="save-button"
                          variant="outlined"
                          onClick={() => handleDeleteData(index)}
                        >
                          {DELETE_BTN_TEXT}
                        </Button>
                      )}
                    </div>
                  ) : null}
                </StyledContainer>
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

export default CertificationDetails;
