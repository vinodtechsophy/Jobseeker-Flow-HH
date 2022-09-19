import React, { ReactElement, FC, useEffect } from "react";
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

const FreshGraduateDetails: FC<any> = (props): ReactElement => {

    const classes: any = useStyles();

    const experiencedSeekerForm = useFormik({
        initialValues: {
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

    const handleDate = (dateValue) => {
        experiencedSeekerForm.setFieldValue("relievingDate", dateValue)
    };

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
                                />
                                <TextField
                                    disabled={props.disabled}
                                    label={COUNTRY_LABEL}
                                    className={classes.inputField}
                                    size="small"
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
                        <Calendar />
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
                        <Calendar setDate={handleDate} status={false} />
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}

export default FreshGraduateDetails;