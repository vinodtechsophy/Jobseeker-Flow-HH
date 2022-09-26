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
  };

  const currentOfferSubmit = (index: any) => {
    offerAddForm.values.members[index].fixedCtc = fixedCtc;
    offerAddForm.values.members[index].variableCtc = variableCtc;
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
      fixedCtc.fixedCtcLakh === "" ||
      fixedCtc.fixedCtcThousand === "" ||
      variableCtc.variableCtcLakh === "" ||
      variableCtc.variableCtcThousand === ""
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
    onSubmit: (values, { setSubmitting }) => {},
    enableReinitialize: true,
  });

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

  const handleServiceAdd = () => {
    offerAddForm.setValues((prevValues) => ({
      members: [...prevValues.members, { ...initialValuesForForm }],
    }));
    setServiceList((prevState: any) => [...prevState, { service: "" }]);
  };

  const getError = (name: string) => {
    const error = getIn(offerAddForm.errors, name);
    const touch = getIn(offerAddForm.touched, name);
    return touch && error ? error : null;
  };

  useEffect(() => {
    if (serviceList.length === 0) handleServiceAdd();
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
          onClick={handleServiceAdd}
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
                      setValues={handleFixedCtc}
                    />
                    <InlineInputs
                      InlineInputsArray={CTCDetails}
                      InlineInputTitle={VARIABLE_CTC_TEXT}
                      disabled={
                        props.disabled ||
                        offerAddForm.values.members[index].fieldDisabled
                      }
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
                          disabled={props.disabled}
                          type="text"
                          label={TOTAL_CTC_LABEL}
                          onChange={(e) => console.log("val ", e.target.value)}
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
                  <p className="sub-text">Attach Offer Letter</p>
                  <Grid
                    item
                    xs={FULL_SIZE_GRID}
                    sm={FULL_SIZE_GRID}
                    md={HALF_SIZE_GRID}
                    lg={HALF_SIZE_GRID}
                    className={classes.limitWidth}
                  >
                    {!offerAddForm.values.members[index].saveStatus && (
                      <DropZoneUpload
                        receiveFileContent={receiveFileContent}
                        data={index}
                      />
                    )}
                    {serviceListFiles[index] && serviceListFiles[index][0] ? (
                      <Box>
                        <Button className="next-button" variant="contained">
                          {serviceListFiles[index][0]?.name}
                        </Button>
                        <Button
                          type="button"
                          disabled={
                            offerAddForm.values.members[index].saveStatus
                          }
                          onClick={() => removeFile(index)}
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
