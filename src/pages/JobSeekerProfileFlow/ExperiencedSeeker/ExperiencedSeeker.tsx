import React, { ReactElement, FC, useImperativeHandle, useEffect } from "react";
import {
  Stack,
  Grid,
  Radio,
  TextField,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import { useStyles } from "../JobSeekerProfileFlowStyles";
import {
  ERROR_KEY,
  HALF_SIZE_GRID,
  FULL_SIZE_GRID,
  CITY_LABEL,
  COUNTRY_LABEL,
  WorkStatusType,
  WARNING_KEY,
} from "../../../constants";
import {
  JOB_TYPE_TEXT,
  JOBLESS_REASON,
  END_CLIENT_TEXT,
  JOB_TYPE_OPTIONS,
  PAYROLL_NAME_TEXT,
  COMPANY_NAME_LABEL,
  LAST_EMPLOYER_TEXT,
  JOBLESS_HELPER_TEXT,
  LAST_EMPLOYER_LOCATION_TEXT,
  PREV_EMPLOYER_RELIEVING_TEXT,
  CURRENT_EMPLOYER_TEXT,
  COMPANY_LOCATION_TEXT,
  CURRENT_EMPLOYER_JOINING_TEXT,
} from "./ExperiencedSeekerConstants";
import "../JobSeekerProfileFlow.css";
import Calendar from "../../../components/Calendar/Calendar";
import { useFormik, getIn } from "formik";
import * as Yup from "yup";
import moment from "moment";

const ExperiencedSeeker: FC<any> = React.forwardRef(
  (props, ref): ReactElement => {
    const classes: any = useStyles();

    const experiencedSeekerForm = useFormik({
      initialValues: {
        jobDurationType: JOB_TYPE_OPTIONS[0],
        currentEmployer: "",
        country: "",
        city: "",
        relievingDate: "",
        joiningDate: "",
        notWorkingReason: "",
        endClient: "",
        payrollEmployer: "",
        lastEmployer: "",
      },
      validationSchema: Yup.object().shape({
        currentEmployer: Yup.string()
          .required("Please add current Employer")
          .min(1),
        country: Yup.string().required("Please add Country").min(1),
        city: Yup.string().required("Please add City").min(1),
        jobDurationType: Yup.string(),
        endClient: Yup.string(),
        lastEmployer: Yup.string(),
        payrollEmployer: Yup.string(),
        joiningDate: Yup.string(),
        relievingDate: Yup.string(),
        notWorkingReason: Yup.string(),
      }),
      onSubmit: (values, { setSubmitting }) => {},
      enableReinitialize: true,
    });

    const handleDate = (dateValue) => {
      props.workStatus === WorkStatusType.JOBLESS
        ? experiencedSeekerForm.setFieldValue("relievingDate", dateValue)
        : experiencedSeekerForm.setFieldValue("joiningDate", dateValue);
      const tempObject = {
        ...experiencedSeekerForm.values,
      };
      props.workStatus === WorkStatusType.JOBLESS
        ? (tempObject["relievingDate"] = dateValue)
        : (tempObject["joiningDate"] = dateValue);
      props.setParentData(tempObject);
    };

    useImperativeHandle(ref, () => ({
      childMethod() {
        return experiencedSeekerForm.values;
      },
    }));

    useEffect(() => {
      if (props.experiencedPrefillData) {
        if (props.experiencedPrefillData?.jobDurationType)
          experiencedSeekerForm.setFieldValue(
            "jobDurationType",
            props.experiencedPrefillData?.jobDurationType
          );
        if (props.experiencedPrefillData?.city)
          experiencedSeekerForm.setFieldValue(
            "city",
            props.experiencedPrefillData?.city
          );
        if (props.experiencedPrefillData?.country)
          experiencedSeekerForm.setFieldValue(
            "country",
            props.experiencedPrefillData?.country
          );
        if (props.experiencedPrefillData?.endClient)
          experiencedSeekerForm.setFieldValue(
            "endClient",
            props.experiencedPrefillData?.endClient
          );
        if (props.experiencedPrefillData?.joiningDate)
          experiencedSeekerForm.setFieldValue(
            "joiningDate",
            props.experiencedPrefillData?.joiningDate
          );
        if (props.experiencedPrefillData?.lastEmployer)
          experiencedSeekerForm.setFieldValue(
            "lastEmployer",
            props.experiencedPrefillData?.lastEmployer
          );
        if (props.experiencedPrefillData?.relievingDate)
          experiencedSeekerForm.setFieldValue(
            "relievingDate",
            props.experiencedPrefillData?.relievingDate
          );
        if (props.experiencedPrefillData?.currentEmployer)
          experiencedSeekerForm.setFieldValue(
            "currentEmployer",
            props.experiencedPrefillData?.currentEmployer
          );
        if (props.experiencedPrefillData?.payrollEmployer)
          experiencedSeekerForm.setFieldValue(
            "payrollEmployer",
            props.experiencedPrefillData?.payrollEmployer
          );
        if (props.experiencedPrefillData?.notWorkingReason)
          experiencedSeekerForm.setFieldValue(
            "notWorkingReason",
            props.experiencedPrefillData?.notWorkingReason
          );
      }
    }, []);

    return (
      <React.Fragment>
        <div className="experienced-div">
          <Grid container className={classes.muiContainer}>
            <Grid
              item
              xs={FULL_SIZE_GRID}
              sm={FULL_SIZE_GRID}
              md={FULL_SIZE_GRID}
              lg={FULL_SIZE_GRID}
            >
              <div>
                <div className="experience-card-title">
                  <p>
                    {JOB_TYPE_TEXT}
                    <span className="asterisk-span"> *</span>
                  </p>
                </div>
                <div id="jobDurationType-container">
                  <FormControl>
                    <RadioGroup
                      id="jobDurationType"
                      value={experiencedSeekerForm.values.jobDurationType}
                      onChange={(e) => {
                        experiencedSeekerForm.setFieldValue(
                          "jobDurationType",
                          e.target.value
                        );
                      }}
                    >
                      {JOB_TYPE_OPTIONS.map((type) => (
                        <FormControlLabel
                          disabled={props.disabled}
                          value={type}
                          control={<Radio />}
                          label={type}
                          key={type}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </div>
                {props.workStatus === WorkStatusType.JOBLESS ? (
                  <div id="notWorkingReason-container" className="reason-field">
                    <TextField
                      required
                      id="notWorkingReason"
                      disabled={props.disabled}
                      label={JOBLESS_REASON}
                      type="text"
                      multiline
                      fullWidth
                      placeholder={JOBLESS_REASON}
                      rows={4}
                      helperText={JOBLESS_HELPER_TEXT}
                      onBlur={experiencedSeekerForm.handleBlur}
                      onChange={experiencedSeekerForm.handleChange}
                      value={experiencedSeekerForm.values.notWorkingReason}
                      InputProps={{
                        inputProps: { maxLength: 750 },
                      }}
                      size="small"
                    />
                  </div>
                ) : null}
              </div>
            </Grid>
            {experiencedSeekerForm.values.jobDurationType ===
            JOB_TYPE_OPTIONS[1] ? (
              <>
                <Grid
                  item
                  xs={FULL_SIZE_GRID}
                  sm={FULL_SIZE_GRID}
                  md={HALF_SIZE_GRID}
                  lg={HALF_SIZE_GRID}
                >
                  <p className="institute-field">{PAYROLL_NAME_TEXT}</p>
                  <TextField
                    required
                    id="payrollEmployer"
                    disabled={props.disabled}
                    label={PAYROLL_NAME_TEXT}
                    className={classes.boxInputField}
                    size="small"
                    onBlur={experiencedSeekerForm.handleBlur}
                    onChange={experiencedSeekerForm.handleChange}
                    value={experiencedSeekerForm.values.payrollEmployer}
                  />
                </Grid>
                <Grid
                  item
                  xs={FULL_SIZE_GRID}
                  sm={FULL_SIZE_GRID}
                  md={HALF_SIZE_GRID}
                  lg={HALF_SIZE_GRID}
                >
                  <p className="institute-field">{END_CLIENT_TEXT}</p>
                  <TextField
                    required
                    id="endClient"
                    disabled={props.disabled}
                    label={END_CLIENT_TEXT}
                    className={classes.boxInputField}
                    size="small"
                    onBlur={experiencedSeekerForm.handleBlur}
                    onChange={experiencedSeekerForm.handleChange}
                    value={experiencedSeekerForm.values.endClient}
                  />
                </Grid>
              </>
            ) : null}
            <Grid
              item
              xs={FULL_SIZE_GRID}
              sm={FULL_SIZE_GRID}
              md={HALF_SIZE_GRID}
              lg={HALF_SIZE_GRID}
            >
              <p className="institute-field">
                {props.workStatus === WorkStatusType.JOBLESS
                  ? LAST_EMPLOYER_TEXT
                  : CURRENT_EMPLOYER_TEXT}
                <span className="asterisk-span"> *</span>
              </p>
              {props.workStatus === WorkStatusType.JOBLESS ? (
                <div>
                  <TextField
                    required
                    id="lastEmployer"
                    disabled={props.disabled}
                    label={LAST_EMPLOYER_TEXT}
                    className={classes.boxInputField}
                    size="small"
                    onBlur={experiencedSeekerForm.handleBlur}
                    onChange={experiencedSeekerForm.handleChange}
                    value={experiencedSeekerForm.values.lastEmployer}
                  />
                </div>
              ) : (
                <div>
                  <TextField
                    required
                    id="currentEmployer"
                    disabled={props.disabled}
                    label={CURRENT_EMPLOYER_TEXT}
                    className={classes.boxInputField}
                    size="small"
                    onBlur={experiencedSeekerForm.handleBlur}
                    onChange={experiencedSeekerForm.handleChange}
                    value={experiencedSeekerForm.values.currentEmployer}
                  />
                </div>
              )}
            </Grid>
            <Grid
              item
              xs={FULL_SIZE_GRID}
              sm={FULL_SIZE_GRID}
              md={HALF_SIZE_GRID}
              lg={HALF_SIZE_GRID}
            >
              <p className="institute-field">
                {props.workStatus === WorkStatusType.JOBLESS
                  ? LAST_EMPLOYER_LOCATION_TEXT
                  : COMPANY_LOCATION_TEXT}
                <span className="asterisk-span"> *</span>
              </p>
              <Stack direction="row" spacing={3}>
                <TextField
                  required
                  id="city"
                  disabled={props.disabled}
                  label={CITY_LABEL}
                  className={classes.inputField}
                  size="small"
                  onBlur={experiencedSeekerForm.handleBlur}
                  onChange={experiencedSeekerForm.handleChange}
                  value={experiencedSeekerForm.values.city}
                />
                <TextField
                  required
                  id="country"
                  disabled={props.disabled}
                  label={COUNTRY_LABEL}
                  className={classes.inputField}
                  size="small"
                  onBlur={experiencedSeekerForm.handleBlur}
                  onChange={experiencedSeekerForm.handleChange}
                  value={experiencedSeekerForm.values.country}
                />
              </Stack>
            </Grid>
            <Grid
              item
              xs={FULL_SIZE_GRID}
              sm={FULL_SIZE_GRID}
              md={HALF_SIZE_GRID}
              lg={HALF_SIZE_GRID}
            >
              <p className="institute-field">
                {props.workStatus === WorkStatusType.JOBLESS
                  ? PREV_EMPLOYER_RELIEVING_TEXT
                  : CURRENT_EMPLOYER_JOINING_TEXT}
                <span className="asterisk-span"> *</span>
              </p>
              <Calendar
                setDate={handleDate}
                status={true}
                value={
                  props.workStatus === WorkStatusType.JOBLESS
                    ? props?.experiencedPrefillData?.relievingDate
                    : props?.experiencedPrefillData?.joiningDate
                }
                calendarDisabled={props.disabled}
              />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
);

export default ExperiencedSeeker;
