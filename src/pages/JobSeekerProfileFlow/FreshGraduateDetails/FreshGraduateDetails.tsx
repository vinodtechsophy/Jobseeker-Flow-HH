import React, { ReactElement, FC, useImperativeHandle } from "react";
import {
  Stack,
  Grid,
  Button,
  Checkbox,
  TextField,
  Typography
} from '@mui/material';
import { useStyles } from "../JobSeekerProfileFlowStyles";
import { 
    CITY_LABEL,
    WARNING_KEY,
    COUNTRY_LABEL,
    HALF_SIZE_GRID,
    FULL_SIZE_GRID,
} from "../../../constants";
import {
    COLLEGE_END_TEXT,
    COLLEGE_START_TEXT,
    COLLEGE_NAME_LABEL,
    INSTITUTE_NAME_TEXT,
    INSTITUTE_LOCATION_TEXT,
} from "./FreshGraduateDetailsConstants";
import Calendar from '../../../components/Calendar/Calendar';
import { useFormik, getIn } from "formik";
import * as Yup from "yup";

const FreshGraduateDetails: FC<any> = React.forwardRef(
    (props, ref): ReactElement => {

    const classes: any = useStyles();

    const freshGraduateForm = useFormik({
        initialValues: {
            instituteName: "",
            instituteCity: "",
            instituteCountry: "",
            collegeEndDate: "",
            collegeStartDate: "",
        },
        validationSchema: Yup.object().shape({
            instituteName: Yup.string()
            .required("Please add Institute Name")
            .min(1),
            instituteCity: Yup.string().required("Please add Institute City").min(1),
            instituteCountry: Yup.string().required("Please add Institute Country").min(1),
            collegeEndDate: Yup.string().required("Please add Institute End Date").min(1),
            collegeStartDate: Yup.string().required("Please add Institute Start Date").min(1),
        }),
        onSubmit: (values, { setSubmitting }) => {},
        enableReinitialize: true,
      });

    const handleEndDate = (dateValue) => {
        freshGraduateForm.setFieldValue("collegeEndDate", dateValue)
    };

    const handleStartDate = (dateValue) => {
        freshGraduateForm.setFieldValue("collegeStartDate", dateValue)
    };

    useImperativeHandle(ref, () => ({
        childMethod() {
          handleSubmit();
        },
    }));

    const handleSubmit = () => {
        if (!validateFreshGraduateDetails()) {
          props.setParentData(freshGraduateForm.initialValues);
          props.setType(WARNING_KEY);
          props.setDataMessage("Please enter all experience details");
          props.setOpen(true);
        } else props.setParentData(freshGraduateForm.values);
    };

    const validateFreshGraduateDetails = () => {
        if(
            !freshGraduateForm.values.instituteName ||
            !freshGraduateForm.values.instituteCity ||
            !freshGraduateForm.values.instituteCountry ||
            !freshGraduateForm.values.collegeEndDate ||
            !freshGraduateForm.values.collegeStartDate
        ) return false 
        else return true
    }

    return (
        <React.Fragment>
            <div className="experience-details-card">
                <Grid container className={classes.muiContainer}>
                    <Grid
                        item
                        xs={FULL_SIZE_GRID}
                        sm={FULL_SIZE_GRID}
                        md={HALF_SIZE_GRID}
                        lg={HALF_SIZE_GRID}
                        className="add-team-grid"
                    >
                        <p>{INSTITUTE_NAME_TEXT}</p>
                        <TextField
                            disabled={props.disabled}
                            label={COLLEGE_NAME_LABEL}
                            className={classes.boxInputField}
                            size="small"
                            name="instituteName"
                            onBlur={freshGraduateForm.handleBlur}
                            onChange={freshGraduateForm.handleChange}
                            value={
                                freshGraduateForm.values.instituteName
                            }
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
                            <p>{INSTITUTE_LOCATION_TEXT}</p>
                            <Stack direction="row" spacing={3}>
                                <TextField
                                    disabled={props.disabled}
                                    label={CITY_LABEL}
                                    className={classes.inputField}
                                    size="small"
                                    name="instituteCity"
                                    onBlur={freshGraduateForm.handleBlur}
                                    onChange={freshGraduateForm.handleChange}
                                    value={
                                        freshGraduateForm.values.instituteCity
                                    }
                                />
                                <TextField
                                    disabled={props.disabled}
                                    label={COUNTRY_LABEL}
                                    className={classes.inputField}
                                    size="small"
                                    name="instituteCountry"
                                    onBlur={freshGraduateForm.handleBlur}
                                    onChange={freshGraduateForm.handleChange}
                                    value={
                                        freshGraduateForm.values.instituteCountry
                                    }
                                />
                            </Stack>
                    </Grid>
                    <Grid
                        item
                        xs={FULL_SIZE_GRID}
                        sm={FULL_SIZE_GRID}
                        md={HALF_SIZE_GRID}
                        lg={HALF_SIZE_GRID}
                        className="add-team-grid"
                    >
                        <p>{COLLEGE_START_TEXT}</p>
                        <Calendar  setDate={handleStartDate} />
                    </Grid>
                    <Grid
                        item
                        xs={FULL_SIZE_GRID}
                        sm={FULL_SIZE_GRID}
                        md={HALF_SIZE_GRID}
                        lg={HALF_SIZE_GRID}
                        className="add-team-grid"
                    >
                        <p>{COLLEGE_END_TEXT}</p>
                        <Calendar setDate={handleEndDate} status={false} />
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
});

export default FreshGraduateDetails;