import React, { ReactElement, FC, useImperativeHandle } from "react";
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

const ExperiencedSeeker: FC<any> = React.forwardRef(
  (props, ref): ReactElement => {
    const classes: any = useStyles();

    const [jobType, setJobType] = React.useState(JOB_TYPE_OPTIONS[0]);

    const experiencedSeekerForm = useFormik({
      initialValues: {
        jobType: JOB_TYPE_OPTIONS[0],
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
        jobType: Yup.string(),
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

    const handleSubmit = () => {
      if (!validateExperienceDetails()) {
        props.setParentData(experiencedSeekerForm.initialValues);
        props.setType(WARNING_KEY);
        props.setDataMessage("Please enter all experience details");
        props.setOpen(true);
      } else props.setParentData(experiencedSeekerForm.values);
    };

    const validateExperienceDetails = () => {
      if (
        !experiencedSeekerForm.values.city ||
        !experiencedSeekerForm.values.country
      )
        return false;
      switch (props.workStatus) {
        case WorkStatusType.JOBLESS:
          if (jobType === JOB_TYPE_OPTIONS[0]) {
            if (
              !experiencedSeekerForm.values.lastEmployer ||
              !experiencedSeekerForm.values.relievingDate ||
              !experiencedSeekerForm.values.notWorkingReason
            )
              return false;
          } else {
            if (
              !experiencedSeekerForm.values.lastEmployer ||
              !experiencedSeekerForm.values.relievingDate ||
              !experiencedSeekerForm.values.notWorkingReason ||
              !experiencedSeekerForm.values.payrollEmployer ||
              !experiencedSeekerForm.values.endClient
            )
              return false;
          }
          break;
        case WorkStatusType.FULL_TIME:
          if (jobType === JOB_TYPE_OPTIONS[0]) {
            if (
              !experiencedSeekerForm.values.currentEmployer ||
              !experiencedSeekerForm.values.joiningDate
            )
              return false;
          } else {
            if (
              !experiencedSeekerForm.values.currentEmployer ||
              !experiencedSeekerForm.values.joiningDate ||
              !experiencedSeekerForm.values.payrollEmployer ||
              !experiencedSeekerForm.values.endClient
            )
              return false;
          }
          break;
      }
      return true;
    };

    const handleDate = (dateValue) => {
      props.workStatus === WorkStatusType.JOBLESS
        ? experiencedSeekerForm.setFieldValue("relievingDate", dateValue)
        : experiencedSeekerForm.setFieldValue("joiningDate", dateValue);
    };

    useImperativeHandle(ref, () => ({
      childMethod() {
        handleSubmit();
      },
    }));

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
                <div>
                  <FormControl>
                    <RadioGroup
                      id="jobType"
                      value={jobType}
                      onChange={(e) => {
                        setJobType(e.target.value);
                        experiencedSeekerForm.setFieldValue(
                          "jobType",
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
                  <div className="reason-field">
                    <TextField
                      required
                      id="notWorkingReason"
                      disabled={props.disabled}
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
            {jobType === JOB_TYPE_OPTIONS[1] ? (
              <>
                <Grid
                  item
                  xs={FULL_SIZE_GRID}
                  sm={FULL_SIZE_GRID}
                  md={HALF_SIZE_GRID}
                  lg={HALF_SIZE_GRID}
                >
                  <p>{PAYROLL_NAME_TEXT}</p>
                  <TextField
                    required
                    id="payrollEmployer"
                    disabled={props.disabled}
                    label={COMPANY_NAME_LABEL}
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
                  <p>{END_CLIENT_TEXT}</p>
                  <TextField
                    required
                    id="endClient"
                    disabled={props.disabled}
                    label={COMPANY_NAME_LABEL}
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
              <p>
                {props.workStatus === WorkStatusType.JOBLESS
                  ? LAST_EMPLOYER_TEXT
                  : CURRENT_EMPLOYER_TEXT}
                <span className="asterisk-span"> *</span>
              </p>
              {props.workStatus === WorkStatusType.JOBLESS ? (
                <TextField
                  required
                  id="lastEmployer"
                  disabled={props.disabled}
                  label={COMPANY_NAME_LABEL}
                  className={classes.boxInputField}
                  size="small"
                  onBlur={experiencedSeekerForm.handleBlur}
                  onChange={experiencedSeekerForm.handleChange}
                  value={experiencedSeekerForm.values.lastEmployer}
                />
              ) : (
                <TextField
                  required
                  id="currentEmployer"
                  disabled={props.disabled}
                  label={COMPANY_NAME_LABEL}
                  className={classes.boxInputField}
                  size="small"
                  onBlur={experiencedSeekerForm.handleBlur}
                  onChange={experiencedSeekerForm.handleChange}
                  value={experiencedSeekerForm.values.currentEmployer}
                />
              )}
            </Grid>
            <Grid
              item
              xs={FULL_SIZE_GRID}
              sm={FULL_SIZE_GRID}
              md={HALF_SIZE_GRID}
              lg={HALF_SIZE_GRID}
            >
              <p>
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
              <p>
                {props.workStatus === WorkStatusType.JOBLESS
                  ? PREV_EMPLOYER_RELIEVING_TEXT
                  : CURRENT_EMPLOYER_JOINING_TEXT}
                <span className="asterisk-span"> *</span>
              </p>
              <Calendar setDate={handleDate} status={true} />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
);

export default ExperiencedSeeker;
