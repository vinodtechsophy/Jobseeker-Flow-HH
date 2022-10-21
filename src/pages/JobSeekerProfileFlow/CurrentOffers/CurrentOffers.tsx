import React, { ReactElement, FC, useEffect } from "react";
import { Box, Grid, Button, TextField, Typography } from "@mui/material";
import { useFormik, getIn } from "formik";
import * as Yup from "yup";
import { StyledContainer, useStyles } from "../JobSeekerProfileFlowStyles";
import {
  ERROR_KEY,
  HALF_SIZE_GRID,
  FULL_SIZE_GRID,
  LETTERS_ONLY_REGEX,
  SPECIAL_CHAR_ERR_MSG,
  DISABLED_KEY,
  WARNING_KEY,
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
} from "./CurrentOffersConstants";
import AddIcon from "@mui/icons-material/Add";
import "./CurrentOffers.css";
import InlineInputs from "../../../components/InlineInputs/InlineInputs";
import {
  CTCDetails,
  FIXED_CTC_TEXT,
  TOTAL_CTC_LABEL,
  TCTC_PLACEHOLDER,
  TCTC_SUB_TEXT,
  TOTAL_CTC_TEXT,
  VARIABLE_CTC_TEXT,
} from "../JobSeekerProfileFlowConstants";
import DropZoneUpload from "../../../components/FileUploadComponent/DropZoneUpload";
import Calendar from "../../../components/Calendar/Calendar";

const CurrentOffers: FC<any> = (props): ReactElement => {
  const classes: any = useStyles();

  const [serviceList, setServiceList] = React.useState<any>([]);
  const [serviceListFiles, setServiceListFiles] = React.useState<any>([]);
  const [prefillOfferLetters, setPrefillOfferLetters] = React.useState<any>(props?.prefilData?.map((files) => files.letterFiles) || []);
  const [fixedCtc, setFixedCtc] = React.useState<{
    fixedCtcLakh: string;
    fixedCtcThousand: string;
  }>({ fixedCtcLakh: "", fixedCtcThousand: "" });
  const [variableCtc, setVariableCtc] = React.useState<{
    variableCtcLakh: string;
    variableCtcThousand: string;
  }>({ variableCtcLakh: "", variableCtcThousand: "" });

  const handleServiceRemove = (index: any) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
    const memberList = [...offerAddForm.values.members];
    memberList.splice(index, 1);
    offerAddForm.setValues((prevValues) => ({
      members: memberList,
    }));
    serviceListFiles[index] = null;
    fixedCtc.fixedCtcLakh = "";
    fixedCtc.fixedCtcThousand = "";
    variableCtc.variableCtcLakh = "";
    variableCtc.variableCtcThousand = "";
  };

  const handleDeleteData = (index) => {
    props.removeOfferData(index);
    handleServiceRemove(index);
    // if (serviceList.length === 1) offerAddForm.resetForm();
  };

  const initialValuesForForm = {
    joiningDate: "",
    joiningLocation: "",
    employerName: "",
    countryCode: "",
    designation: "",
    letterFiles: [],
    saveStatus: false,
    fieldDisabled: false,
    fixedCtc: {},
    variableCtc: {},
    totalCtc: "",
  };

  const currentOfferSubmit = (index: any) => {
    if (
      !offerAddForm.values.members[index].joiningDate ||
      !offerAddForm.values.members[index].joiningLocation ||
      !offerAddForm.values.members[index].employerName ||
      !offerAddForm.values.members[index].designation
    ) {
      props.setType(WARNING_KEY);
      props.setDataMessage("Please fill the required fields");
      props.setOpen(true);
    } else if (offerAddForm.values.members[index].letterFiles.length < 1) {
      props.setType(WARNING_KEY);
      props.setDataMessage("Please upload offer letter");
      props.setOpen(true);
    } else if (
      offerAddForm.values.members[index].fixedCtc.fixedCtcLakh === "" ||
      offerAddForm.values.members[index].fixedCtc.fixedCtcThousand === "" ||
      offerAddForm.values.members[index].variableCtc.variableCtcLakh === "" ||
      offerAddForm.values.members[index].variableCtc.variableCtcThousand === ""
    ) {
      props.setType(WARNING_KEY);
      props.setDataMessage("Please provide CTC details");
      props.setOpen(true);
    } else {
      offerAddForm.setFieldValue(`members[${index}].saveStatus`, true);
      offerAddForm.setFieldValue(`members[${index}].fieldDisabled`, true);
      props.setOfferData(offerAddForm.values.members);
    }
  };
  const teamArray: any[] = [];

  const offerAddForm = useFormik({
    initialValues: { members: teamArray },
    validationSchema: Yup.object().shape({
      members: Yup.array()
        .of(
          Yup.object({
            joiningDate: Yup.string()
              .required(FormAttributes.joiningDate.required)
              .min(3)
              .max(FormAttributes.joiningDate.maxLength)
              .matches(LETTERS_ONLY_REGEX, SPECIAL_CHAR_ERR_MSG),
            joiningLocation: Yup.string()
              .required(FormAttributes.joiningLocation.required)
              //.min(1)
              .max(FormAttributes.joiningLocation.maxLength)
              .matches(LETTERS_ONLY_REGEX, SPECIAL_CHAR_ERR_MSG),
            employerName: Yup.string()
              //.min(6)
              .max(FormAttributes.employerName.maxLength)
              .required(FormAttributes.employerName.required),
            // countryCode: Yup.string()
            //   .required(COUNTRY_CODE_MSG)
            //   .min(1)
            //   .max(FormAttributes.countryCode.maxLength)
            //   .matches(NUMBER_ONLY_REGEX),
            designation: Yup.string()
              //.min(6)
              .max(FormAttributes.designation.maxLength)
              //.matches(SPECIAL_CHAR_ERR_MSG)
              .required(FormAttributes.designation.required),
          })
        )
        .required("offr details required")
        .min(1, "add at least one offer"),
    }),
    onSubmit: (values, { setSubmitting }) => { },
    enableReinitialize: true,
  });

  const handleFixedCtc = (value: string, pos: number, index: any) => {
    if (pos === 0)
      offerAddForm.values.members[index].fixedCtc.fixedCtcLakh = value ? value : '0';
    else if (pos === 1)
      offerAddForm.values.members[index].fixedCtc.fixedCtcThousand = value ? value : '0';

   // offerAddForm.setFieldValue(`members[${index}].saveStatus`, true);
    handleTotalCtc(index);
  };

  const handleVariableCtc = (value: string, pos: number, index: any) => {
    if (pos === 0)
      offerAddForm.values.members[index].variableCtc.variableCtcLakh = value ? value : '0';
    else if (pos === 1)
      offerAddForm.values.members[index].variableCtc.variableCtcThousand = value ? value : '0';

   // offerAddForm.setFieldValue(`members[${index}].saveStatus`, true);
    handleTotalCtc(index);
  };

  const handleTotalCtc = (index: any) => {
    offerAddForm.values.members[index].totalCtc = (
      (parseInt(offerAddForm.values.members[index].fixedCtc.fixedCtcLakh)
        + parseInt(offerAddForm.values.members[index].variableCtc.variableCtcLakh))
      * 100000
      + (parseInt(offerAddForm.values.members[index].fixedCtc.fixedCtcThousand)
        + parseInt(offerAddForm.values.members[index].variableCtc.variableCtcThousand))
      * 1000).toString();

   // offerAddForm.setFieldValue(`members[${index}].saveStatus`, true);
  }

  const handleServiceAdd = (prefillValue?: any) => {
    offerAddForm.setValues((prevValues) => ({
      members: [...prevValues.members, { ...initialValuesForForm, ...prefillValue }],
    }));
    setServiceList((prevState: any) => [...prevState, { ...initialValuesForForm, ...prefillValue }]);
  };

  const AddMultipleService = (prefillArray?: any[]) => {
    if (prefillArray) {
      offerAddForm.setValues((prevValues) => ({
        members: [...prefillArray],
      }));
      setServiceList((prevState: any) => [...prefillArray]);
    }
  };

  const getError = (name: string) => {
    const error = getIn(offerAddForm.errors, name);
    const touch = getIn(offerAddForm.touched, name);
    return touch && error ? error : null;
  };

  useEffect(() => {
    if (props.prefilData) {
      AddMultipleService(props.prefilData);
    } else if (serviceList.length === 0) handleServiceAdd();
  }, []);

  const receiveFileContent = (files: any, index: number) => {
    const tempArray = serviceListFiles;
    tempArray[index] = files;
    setServiceListFiles(() => [...tempArray]);
    offerAddForm.setFieldValue(`members[${index}].letterFiles`, files);
  };

  const removeFile = (index: number) => {
    const tempArray = [...serviceListFiles];
    tempArray.splice(index, 1);
    setServiceListFiles(() => tempArray);
    offerAddForm.values.members[index].letterFiles = null;
  };

  return (
    <React.Fragment>
      <div className="add-btn-div">
        <Button
          className="next-button stack-button"
          variant="contained"
          onClick={() => handleServiceAdd()}
          disabled={props.disabled}
        >
          <AddIcon className="add-icon" /> {OFFER_ADD_TEXT}
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
                      Add Offer {index + 1} Details
                    </Typography>
                    {/* {   
                        serviceList.length !== 0 && (
                        <Button
                            type="button"
                            onClick={() => handleServiceRemove(index)}
                            className="remove-btn"
                        >
                        <DeleteIcon color={ERROR_KEY} />
                        </Button>
                        )
                        } */}
                  </Grid>
                  <Grid
                    item
                    xs={FULL_SIZE_GRID}
                    sm={FULL_SIZE_GRID}
                    md={HALF_SIZE_GRID}
                    lg={HALF_SIZE_GRID}
                    className="add-team-grid"
                  >
                    <p>
                      {PROPOSED_DATE}
                      <span className="asterisk-span"> *</span>
                    </p>
                    <Calendar
                      setDate={(date) => {
                        offerAddForm.setFieldValue(
                          `members[${index}].joiningDate`,
                          date
                        );
                      }}
                      status={true}
                      value={offerAddForm.values.members[index].joiningDate}
                      calendarDisabled={props.disabled || offerAddForm.values.members[index].fieldDisabled}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={FULL_SIZE_GRID}
                    sm={FULL_SIZE_GRID}
                    md={HALF_SIZE_GRID}
                    lg={HALF_SIZE_GRID}
                    className="add-team-grid"
                  >
                    <p>
                      {JOIN_LOCATION}
                      <span className="asterisk-span"> *</span>
                    </p>
                    <TextField
                      disabled={
                        props.disabled ||
                        offerAddForm.values.members[index].fieldDisabled
                      }
                      required
                      id={FormAttributes.joiningLocation.id}
                      placeholder={FormAttributes.joiningLocation.placeholder}
                      label={FormAttributes.joiningLocation.label}
                      className={classes.boxInputField}
                      size="small"
                      name={`members[${index}].joiningLocation`}
                      onBlur={offerAddForm.handleBlur}
                      onChange={offerAddForm.handleChange}
                      value={offerAddForm.values.members[index].joiningLocation}
                      error={getError(`members[${index}].joiningLocation`)}
                      helperText={getError(`members[${index}].joiningLocation`)}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={FULL_SIZE_GRID}
                    sm={FULL_SIZE_GRID}
                    md={HALF_SIZE_GRID}
                    lg={HALF_SIZE_GRID}
                    className="add-team-grid"
                  >
                    <p>
                      {EMPLOYER_NAME}
                      <span className="asterisk-span"> *</span>
                    </p>
                    <TextField
                      disabled={
                        props.disabled ||
                        offerAddForm.values.members[index].fieldDisabled
                      }
                      required
                      id={FormAttributes.employerName.id}
                      placeholder={FormAttributes.employerName.placeholder}
                      label={FormAttributes.employerName.label}
                      className={classes.boxInputField}
                      size="small"
                      name={`members[${index}].employerName`}
                      onBlur={offerAddForm.handleBlur}
                      onChange={offerAddForm.handleChange}
                      value={offerAddForm.values.members[index].employerName}
                      error={getError(`members[${index}].employerName`)}
                      helperText={getError(`members[${index}].employerName`)}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={FULL_SIZE_GRID}
                    sm={FULL_SIZE_GRID}
                    md={HALF_SIZE_GRID}
                    lg={HALF_SIZE_GRID}
                    className="add-team-grid"
                  >
                    <p>
                      {OFFERED_ROLE}
                      <span className="asterisk-span"> *</span>
                    </p>
                    <TextField
                      disabled={
                        props.disabled ||
                        offerAddForm.values.members[index].fieldDisabled
                      }
                      id={FormAttributes.designation.id}
                      placeholder={FormAttributes.designation.placeholder}
                      label={FormAttributes.employerName.label}
                      required
                      size="small"
                      className={classes.boxInputField}
                      name={`members[${index}].designation`}
                      onBlur={offerAddForm.handleBlur}
                      onChange={offerAddForm.handleChange}
                      value={offerAddForm.values.members[index].designation}
                      error={getError(`members[${index}].designation`)}
                      helperText={getError(`members[${index}].designation`)}
                    />
                  </Grid>
                  <p className="sub-text">
                    Offer CTC in INR<span className="asterisk-span"> *</span>
                  </p>
                  <div className="inner-div">
                    <InlineInputs
                      InlineInputsArray={CTCDetails}
                      InlineInputTitle={FIXED_CTC_TEXT}
                      disabled={
                        props.disabled ||
                        offerAddForm.values.members[index].fieldDisabled
                      }
                      setValues={(val: string, ind: number) => {
                        handleFixedCtc(val, ind, index)
                      }}
                      value={offerAddForm.values.members[index].fixedCtc}
                    />
                    <InlineInputs
                      InlineInputsArray={CTCDetails}
                      InlineInputTitle={VARIABLE_CTC_TEXT}
                      disabled={
                        props.disabled ||
                        offerAddForm.values.members[index].fieldDisabled
                      }
                      setValues={(val: string, ind: number) => {
                        handleVariableCtc(val, ind, index)
                      }}
                      value={offerAddForm.values.members[index].variableCtc}
                    />
                    <div>
                      <div className="experience-card-title">
                        <div>
                          <p>{TOTAL_CTC_TEXT}</p>
                        </div>
                      </div>
                      <div className="inline-div">
                        <TextField
                          disabled
                          type="text"
                          label={TOTAL_CTC_LABEL}
                          placeholder={TCTC_PLACEHOLDER}
                          InputProps={{
                            inputProps: {
                              maxLength: 12,
                            },
                          }}
                          size="small"
                          value={offerAddForm.values.members[index].totalCtc}
                        />
                        <div className="tctc-text">
                          <span>{TCTC_SUB_TEXT}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="sub-text">Attach Offer Letter</p>
                  <Grid
                    item
                    xs={FULL_SIZE_GRID}
                    sm={FULL_SIZE_GRID}
                    md={HALF_SIZE_GRID}
                    lg={HALF_SIZE_GRID}
                    className={classes.limitWidth}
                  >
                    {(!offerAddForm.values.members[index].fieldDisabled && !props.disabled) ? (
                      <DropZoneUpload
                        receiveFileContent={receiveFileContent}
                        data={index}
                        disabled={props.disabled}
                      />
                    ) : null}
                    {serviceListFiles[index] && serviceListFiles?.length > 0 && serviceListFiles[index]?.length > 0 ? (
                      <Box>
                        <Button className="next-button" variant="contained">
                          {serviceListFiles[index][0]?.name}
                        </Button>
                        <Button
                          type="button"
                          disabled={
                            offerAddForm.values.members[index].saveStatus ||
                            props.disabled
                          }
                          onClick={() => removeFile(index)}
                          className="remove-btn"
                        >
                            <DeleteIcon
                            color={
                              (offerAddForm.values.members[index].fieldDisabled || props.disabled) 
                                ? DISABLED_KEY
                                : ERROR_KEY
                            }
                          />
                        </Button>
                      </Box>
                    ) : null}

                    {(!serviceListFiles[index] && prefillOfferLetters?.length > 0 && prefillOfferLetters[index]?.length > 0) ? (
                      <Box>
                        <Button className="next-button" variant="contained">
                          {prefillOfferLetters[index][0].path}
                        </Button>
                        <Button
                          type="button"
                          onClick={() => {
                            const letter = prefillOfferLetters
                            letter.splice(index, 1);
                            console.log(letter)
                            setPrefillOfferLetters([...letter])
                          }}
                          className="remove-btn"
                        >
                          <DeleteIcon
                            color={
                              !offerAddForm.values.members[index].saveStatus
                                ? ERROR_KEY
                                : DISABLED_KEY
                            }
                          />
                        </Button>
                      </Box>
                    ) : null}
                  </Grid>
                </Grid>
                {!props.disabled ? (
                  <div className="final-button-div">
                    {!offerAddForm.values.members[index].saveStatus ? (
                      <Button
                        className="save-button"
                        variant="outlined"
                        onClick={() => {
                          currentOfferSubmit(index);
                        }}
                      >
                        {SAVE_BTN_TEXT}
                      </Button>
                    ) : (
                      <Button
                        className="save-button"
                        variant="outlined"
                        onClick={() => {
                          handleDeleteData(index);
                        }}
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
    </React.Fragment>
  );
};

export default CurrentOffers;
