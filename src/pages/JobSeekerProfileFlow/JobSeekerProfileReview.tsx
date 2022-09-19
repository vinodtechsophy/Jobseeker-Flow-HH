import React, { ReactElement, FC, useEffect } from "react";
import {
  Stack,
  Button,
  Divider,
  Typography,
  IconButton,
  CircularProgress,
} from '@mui/material';
import InlineInputs from '../../components/InlineInputs/InlineInputs';
import {
  JobSeekerReviewArray,
} from './JobSeekerProfileFlowConstants';
import './JobSeekerProfileFlow.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ERROR_KEY, FORM_SUBMISSION_SUCCESS, SUCCESS_KEY } from "../../constants";
import JobSeekerProfileJD from "./JobSeekerProfileJD";
import JobSeekerProfileUpload from "./JobSeekerProfileUpload";
import JobSeekerProfileDetails from "./JobSeekerProfileDetails";
import JobSeekerProfileWorkStatus from "./JobSeekerProfileWorkStatus";
import JobSeekerProfileNoticePeriod from "./JobSeekerProfileNoticePeriod";

const JobSeekerProfileReview: FC<any> = (props): ReactElement => {

    const [loader, setLoader] = React.useState(false);
    const [checkout, setCheckout] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(-1);

    const renderCurrentSelection = (currentSection) => {
        switch (currentSection) {
            case 1:
                return null;
            case 2:
                return <JobSeekerProfileUpload 
                          hasButtons={false}
                       />;
            case 3:
                return <JobSeekerProfileDetails 
                          hasButtons={false}
                        />;
            case 4:
                return <JobSeekerProfileWorkStatus
                          hasButtons={false}
                        />;
            case 5:
                return <JobSeekerProfileNoticePeriod
                          hasButtons={false}
                        />;
            default:
                return <JobSeekerProfileJD
                          hasButtons={false}
                       />;
        }
    };

    const submitAllDetails = async () => {
        setLoader(true);
        try {
            // const postFormResponse = await GenericProcess(
            //     {
            //         processDefinitionKey: CONTEST_PROCESS_ID,
            //         businessKey: userDataState.userId || JSON.stringify(Math.random()),
            //         variables: {
            //             action: ACTIVATE_ACTION,
            //             formDataIds: JSON.stringify([userDataState.userData.parentDataId])
            //         }
            //     }
            // );
            // if(postFormResponse?.data?.success) {
            //     props.setType(SUCCESS_KEY);
            //     props.setDataMessage(FORM_SUBMISSION_SUCCESS);
            //     props.setOpen(true);
            //     props.setCheckout(true);
            //     setCheckout(true);
            // }
        } catch (error: any) {
        console.log(error?.response)
        props.setType(ERROR_KEY);
        props.setDataMessage(error?.response?.data?.message);
        props.setOpen(true);
        }
        setLoader(false);
    }

    return (
        <div className="form-internal-body">
            {
                checkout ? 
                // <SignupSuccess 
                //     setCheckout={setCheckout}
                //     setActiveStep={props.setActiveStep}
                //     setCompleted={props.setCompleted}
                //     displayMessage={`Your Contest has been Published Successfully`} 
                // /> 
                <></>
                :
                <>
                    <div className="stepper-container">
                        {
                            JobSeekerReviewArray.map((reviewData, index) => (
                                <div 
                                  className="review-card" 
                                  key={index}
                                  style={currentIndex === index ? 
                                    {
                                        height: 'auto',
                                        flexDirection: 'column'
                                    } : {
                                        height: '68px',
                                        flexDirection: 'row'
                                    }
                                  }
                                >
                                    <span className="review-title-text">
                                        {reviewData.label}
                                    </span>
                                    <div>
                                        {
                                            reviewData.navigate ? 
                                            <Button variant="text" className="review-buttons-color"
                                                onClick={() => props.setActiveStep(index)}>
                                                <img src="assets/images/Edit.png" className="review-icons" />
                                                Edit
                                            </Button>
                                            : null
                                        }
                                        <IconButton 
                                          aria-label="plus" 
                                          className="review-buttons-color"
                                          onClick={() => {
                                            if(currentIndex !== index) setCurrentIndex(index)
                                            else setCurrentIndex(-1)
                                          }}
                                        >
                                            {currentIndex !== index ? <AddIcon /> : <RemoveIcon />}
                                        </IconButton>
                                    </div>
                                    {
                                        currentIndex === index ?

                                        <div style={{width: '100%'}}>
                                            {renderCurrentSelection(index+1)}
                                        </div>
                                        
                                        : null
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div className="review-divider">
                        <Divider />
                    </div>
                    {
                        loader ? 
                        <Stack alignItems="center">
                            <CircularProgress />
                        </Stack>
                        :
                        <div className="forms-button-container">
                            <Typography variant="h6" noWrap component="div">
                            </Typography>
                            <Typography variant="h6" noWrap component="div">
                                <Button 
                                    variant="contained" 
                                    className="next-button"
                                    onClick={submitAllDetails}
                                    >
                                    Submit All Details
                                    <ArrowForwardIosIcon className="next-icon" />
                                </Button>
                            </Typography>
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default JobSeekerProfileReview;