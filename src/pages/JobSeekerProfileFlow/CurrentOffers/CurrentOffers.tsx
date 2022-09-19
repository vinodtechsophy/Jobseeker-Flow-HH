import React, { ReactElement, FC, useEffect } from "react";
import {
  Box,
  Grid,
  Button,
  TextField,
  Typography
} from '@mui/material';
import { useFormik, getIn } from "formik";
import * as Yup from "yup";
import { StyledContainer, useStyles } from "../JobSeekerProfileFlowStyles";
import { 
    ERROR_KEY,
    HALF_SIZE_GRID,
    FULL_SIZE_GRID,
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
import './CurrentOffers.css';
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
import Calendar from '../../../components/Calendar/Calendar';

const CurrentOffers: FC<any> = (props): ReactElement => {

    const classes: any = useStyles();

    const [serviceList, setServiceList] = React.useState<any>([]);
    const [serviceListFiles, setServiceListFiles] = React.useState<any>([]);
    const [joiningDate, setJoiningDate] = React.useState('');
    
    const handleServiceRemove = (index: any) => {
        const list = [...serviceList];
        list.splice(index, 1);
        setServiceList(list);
    };

    const initialValuesForForm = {
        joiningDate: "",
        joiningLocation: "",
        employerName: "",
        countryCode: "",
        designation: "",
        letterFiles: [],
        saveStatus: false,
        fieldDisabled: false
    };

   const currentOfferSubmit = (index: any) => {
     offerAddForm.values.members[index].saveStatus = true;
     offerAddForm.values.members[index].fieldDisabled = true;
     props.setOfferData(offerAddForm.values.members);
    };
    const teamArray: any[] = [];

    const offerAddForm = useFormik({
        initialValues: { members: teamArray },
        validationSchema: Yup.object().shape({
            members: Yup.array()
            .of(
                Yup.object({
                // joiningDate: Yup.string().required(joiningDate_MSG).min(3).max(FormAttributes.joiningDate.maxLength).matches(LETTERS_ONLY_REGEX, SPECIAL_CHAR_ERR_MSG),
                // joiningLocation: Yup.string().required(joiningLocation_MSG).min(1).max(FormAttributes.joiningLocation.maxLength).matches(LETTERS_ONLY_REGEX, SPECIAL_CHAR_ERR_MSG),
                // employerName: Yup.string()
                //   .email(EMAIL_ERR_MSG).min(6).max(FormAttributes.employerName.maxLength)
                //   .required(EMAIL_REQ_MSG),
                // countryCode: Yup.string().required(COUNTRY_CODE_MSG).min(1).max(FormAttributes.countryCode.maxLength).matches(NUMBER_ONLY_REGEX),
                // designation: Yup.string().max(FormAttributes.designation.maxLength)
                //   .matches(phoneRegExp, PHN_ERR_MSG).length(10)
                //   .required(PHN_REQ_MSG),
                })
            )
            .required('offr details required')
            .min(1, 'add at least one offer'),
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
            //   userType: RECRUITMENT_COMPANY,
            //   groups: [INTERNAL_GROUP],
            //   internalRecruiter: true,
            //   mobile2: "",
            //   companyId: userDataState.userData.companyId,
              channel: "Company Onboard",
              otherChannel: "",
        }));
        // const userResponse = userPayload.map(
        //   async (teamMember: any, index: number) => {
        //     const responseCreate = await CreateUser(teamMember, true);
        //   }
        // );
        props.handleComplete();
        props.handleNext()
        if(serviceList.length > 0) {
        //   setShowNofitication(true);
        //   setNotificationType(ERROR_KEY);
        //   setNoticationMessage(USER_ADD_ERR_MSG);
        }
        setSubmitting(false);
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
        if(serviceList.length === 0) handleServiceAdd();
    }, []);

    const receiveFileContent = (files: any, index: number) => {
        const tempArray = serviceListFiles;
        tempArray[index] = files;
        setServiceListFiles(() => [...tempArray]);
    }

    const removeFile = (index: number) => {
        const tempArray = serviceListFiles;
        tempArray[index] = null;
        setServiceListFiles(() => [...tempArray]);
    }

    return (
        <React.Fragment>
            <div className="add-btn-div">
                <Button 
                  className="next-button stack-button" 
                  variant="contained"
                  onClick={handleServiceAdd}
                >
                    <AddIcon className="add-icon"/> {OFFER_ADD_TEXT}
                </Button>
            </div>
            {
                serviceList.length > 0 &&
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
                                                Add Offer { index + 1} Details
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
                                            <p>{PROPOSED_DATE}<span className="asterisk-span"> *</span></p>
                                            <Calendar setDate={(date) => {
                                                offerAddForm.setFieldValue(`members[${index}].joiningDate`, date)
                                            }} status={true} 
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
                                            <p>{JOIN_LOCATION}<span className="asterisk-span"> *</span></p>
                                            <TextField
                                                disabled={props.disabled || offerAddForm.values.members[index].fieldDisabled}
                                                required
                                                id={FormAttributes.joiningLocation.id}
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
                                            <p>{EMPLOYER_NAME}<span className="asterisk-span"> *</span></p>
                                            <TextField
                                                disabled={props.disabled || offerAddForm.values.members[index].fieldDisabled}
                                                required
                                                id={FormAttributes.employerName.id}
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
                                            <p>{OFFERED_ROLE}<span className="asterisk-span"> *</span></p>
                                            <TextField
                                                disabled={props.disabled || offerAddForm.values.members[index].fieldDisabled}
                                                id={FormAttributes.designation.id}
                                                label={FormAttributes.designation.label}
                                                required
                                                size="small"
                                                className={classes.boxInputField}
                                                name={`members[${index}].designation`}
                                                onBlur={offerAddForm.handleBlur}
                                                onChange={offerAddForm.handleChange}
                                                value={offerAddForm.values.members[index].designation}
                                                error={getError(`members[${index}].designation`)}
                                                helperText={getError(
                                                    `members[${index}].designation`
                                                )}
                                            />
                                        </Grid>
                                        <p className="sub-text">
                                            Offer CTC in INR<span className="asterisk-span"> *</span>
                                        </p>
                                        <div className="inner-div">
                                            <InlineInputs 
                                                InlineInputsArray={CTCDetails} 
                                                InlineInputTitle={FIXED_CTC_TEXT}
                                                disabled={props.disabled || offerAddForm.values.members[index].fieldDisabled}
                                            />
                                            <InlineInputs 
                                                InlineInputsArray={CTCDetails} 
                                                InlineInputTitle={VARIABLE_CTC_TEXT}
                                                disabled={props.disabled || offerAddForm.values.members[index].fieldDisabled}
                                            />
                                            <div>
                                                <div className="experience-card-title">
                                                    <div>
                                                        <p>{TOTAL_CTC_TEXT}</p>
                                                    </div>
                                                </div>
                                                <div className="inline-div">
                                                    <TextField
                                                        disabled={props.disabled || offerAddForm.values.members[index].fieldDisabled} 
                                                        type="text"
                                                        label={TOTAL_CTC_LABEL}
                                                        onChange={(e) => console.log('val ', e.target.value)}
                                                        placeholder={TCTC_PLACEHOLDER}
                                                        InputProps={{
                                                            inputProps: 
                                                            {
                                                                maxLength: 12
                                                            }
                                                        }}
                                                        size="small"
                                                    />
                                                    <div className="tctc-text">
                                                        <span>{TCTC_SUB_TEXT}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="sub-text">
                                            Attach Offer Letter
                                        </p>
                                        <Grid
                                            item
                                            xs={FULL_SIZE_GRID}
                                            sm={FULL_SIZE_GRID}
                                            md={HALF_SIZE_GRID}
                                            lg={HALF_SIZE_GRID}
                                            className={classes.limitWidth}
                                        >
                                            <DropZoneUpload 
                                              receiveFileContent={receiveFileContent} 
                                              data={index} 
                                            />
                                            {
                                                serviceListFiles[index] && serviceListFiles[index][0] ?

                                                <Box>
                                                    <Button
                                                        className="next-button"
                                                        variant="contained"
                                                    >
                                                        {serviceListFiles[index][0]?.name}
                                                    </Button>
                                                    <Button
                                                            type="button"
                                                            onClick={() => removeFile(index)}
                                                            className="remove-btn"
                                                    >
                                                        <DeleteIcon color={ERROR_KEY} />
                                                    </Button>
                                                </Box>

                                                : null
                                            }
                                        </Grid>
                                    </Grid>
                                    {
                                        !props.disabled ?

                                        <div className="final-button-div">
                                            {
                                                 !offerAddForm.values.members[index].saveStatus ?

                                                <Button 
                                                className="save-button"
                                                variant="outlined"
                                                onClick={() => {
                                                    currentOfferSubmit(index);
                                                    
                                                }}
                                                >
                                                    {SAVE_BTN_TEXT}
                                                </Button>

                                                 : 

                                                <Button 
                                                className="save-button"
                                                variant="outlined"
                                                onClick={handleServiceRemove}
                                                >
                                                    {DELETE_BTN_TEXT}
                                                </Button>
                                            }
                                        </div>

                                        : null

                                    }
                                </StyledContainer>
                            </div>
                        </div>
                    )
                )
            }
        </React.Fragment>
    )
}

export default CurrentOffers;