import React, { ReactElement, FC, useEffect } from "react";
import {
  Grid,
  Stack,
  Radio,
  Select,
  Stepper,
  MenuItem,
  Checkbox,
  StepLabel,
  TextField,
  InputLabel,
  RadioGroup,
  FormControl,
  FormControlLabel
} from '@mui/material';
import { 
  YesNoOptions,
  WorkStatusArray,
  OTHER_LIMIT_TEXT,
  EXPERIENCE_TITLE,
  ProfileFetchLocations,
  PROFILE_SOURCE_HOLDER,
  PROFILE_LOCATION_TEXT,
  CURRENT_LOCATION_TEXT,
  CERTIFICATION_ADD_TEXT,
  PREFERRED_LOCATION_TEXT,
  ADDITIONAL_CERTIFICATES_TEXT,
  WORK_STATUS_TEXT,
} from './JobSeekerProfileFlowConstants';
import './JobSeekerProfileFlow.css';
import PreviousNextButtons from "../../components/PreviousNextButtons/PreviousNextButtons";
import CertificationDetails from "./CertificationDetails/CertificationDetails";
import { WARNING_KEY, WorkStatusType } from "../../constants";
import FreshGraduateDetails from "./FreshGraduateDetails/FreshGraduateDetails";
import ExperiencedSeeker from "./ExperiencedSeeker/ExperiencedSeeker";
import { useStyles } from "./JobSeekerProfileFlowStyles";
import {updateJobSeekerProfile} from '../../services/FormDataService';
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import { 
    ERROR_KEY,
    SUCCESS_KEY,
    FORM_SUBMISSION_SUCCESS
} from "../../constants";

const JobSeekerProfileWorkStatus: FC<any> = (props): ReactElement => {

    const classes: any = useStyles();
    const experiencedRef = React.useRef<any>();
    const freshGraduateRef = React.useRef<any>();
    const userDataState = useAppSelector((state) => state.currentUser);

    const [jobStatus, setJobStatus] = React.useState(userDataState.userData.workStatus);
    const [currentLocation, setCurrentLocation] = React.useState('');
    const [preferredLocation, setPreferredLocation] = React.useState('');
    const [profileFetchLocation, setProfileFetchLocation] = React.useState('');
    const [certificationDetails, setCertificationDetails] = React.useState<any[]>([]);
    const [additonalCertificationStatus, setAdditionalCertificationStatus] = React.useState('');
    const [experiencedDetails, setExperiencedDetails] = React.useState<{
        currentEmployer: string,
        country: string,
        city: string,
    }>({
        currentEmployer: '',
        country: '',
        city: '',
    });
    const [freshGraduateDetails, setFreshGraduateDetails] = React.useState<{
        instituteName: string,
        instituteCity: string,
        instituteCountry: string,
        collegeEndDate: string,
        collegeStartDate: string,
    }>({
        instituteName: "",
        instituteCity: "",
        instituteCountry: "",
        collegeEndDate: "",
        collegeStartDate: "",
    })

    const handleProfileFetch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProfileFetchLocation((event.target as HTMLInputElement).value);
    };

    const handleCertificationStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdditionalCertificationStatus((event.target as HTMLInputElement).value);
    };

    const submitWorkStatus = async () => {
        if(experiencedRef?.current) experiencedRef?.current.childMethod();
        if(freshGraduateRef?.current) freshGraduateRef?.current.childMethod();
        const profileWorkStatusMap = buildDetailsPayload();
        if(!validateWorkStatusMap(profileWorkStatusMap)) {
            props.setOpen(true);
            props.setType(WARNING_KEY);
            props.setDataMessage("Please enter all work status details");
            return
        };
        try {
            const profileDetailsResponse = await updateJobSeekerProfile({
                profileId: userDataState.userData.profileId,
                profileData: {profileWorkStatusMap}
            })
            console.log(profileDetailsResponse?.data)
            if(profileDetailsResponse?.data?.success) {
                props.setType(SUCCESS_KEY);
                props.setDataMessage(FORM_SUBMISSION_SUCCESS);
                props.setOpen(true);
                props.handleComplete(3);
                props.handleNext();
            }
        } catch (error: any) {
            console.log(error);
            props.setType(ERROR_KEY);
            props.setDataMessage(error?.message);
            props.setOpen(true);
        }
    }

    const buildDetailsPayload = () => {
        return {
            jobStatus, currentLocation, preferredLocation, profileFetchLocation, additonalCertificationStatus,
            ...experiencedDetails, certificationDetails, ...freshGraduateDetails
        }
    }

    const validateWorkStatusMap = (data) => {
        if(
            !data.currentLocation ||
            !data.preferredLocation ||
            !data.profileFetchLocation
        ) return false
        else if(data.additonalCertificationStatus === YesNoOptions[0]) {
            if(data.certificationDetails?.length < 1) return false;
        } else if(jobStatus === WorkStatusType.FRESHER) {
            if(
                !data.instituteName || !data.instituteCity || !data.instituteCountry
                || !data.collegeEndDate || !data.collegeStartDate
            ) return false
        }
        return true
    }

    const handleCertifications = (certification) => {
        delete certification.saveStatus;
        setCertificationDetails(data => [...data, certification]);
    }

    const removeCertification = (index) => {
        const list = [...certificationDetails];
        list.splice(index, 1);
        console.log(list)
        setCertificationDetails(list);
    }

    return (
            <div className="job-seeker-profile-content">
                <p className="step-content-title-text">
                    {EXPERIENCE_TITLE}
                </p>
                <div className="conditional-container">
                    <div className="experience-card-title">
                        <p>{PROFILE_LOCATION_TEXT}</p>
                    </div>
                    <div>
                        <FormControl>
                            <RadioGroup
                                value={profileFetchLocation}
                                onChange={handleProfileFetch}
                            >
                                {
                                    ProfileFetchLocations.map(location => (
                                        <FormControlLabel
                                            disabled={!props.hasButtons}
                                            value={location}
                                            control={<Radio />}
                                            label={location}
                                            key={location}
                                        />
                                    ))
                                }
                            </RadioGroup>
                        </FormControl>
                    </div>
                    {
                        profileFetchLocation === ProfileFetchLocations[ProfileFetchLocations.length -1] ?

                        <div className="profile-location-field">
                            <TextField 
                                disabled={!props.hasButtons}
                                type="text"
                                multiline
                                fullWidth
                                placeholder={PROFILE_SOURCE_HOLDER}
                                rows={2}
                                helperText={OTHER_LIMIT_TEXT}
                                onChange={(e) => console.log('val ', e.target.value)}
                                InputProps={{
                                    inputProps: { maxLength: 20 }
                                }}
                                size="small"
                            />
                        </div>

                        : null
                    }
                </div>
                <div className="conditional-container">
                    <div className="experience-card-title">
                        <p>{CURRENT_LOCATION_TEXT}<span className="asterisk-span"> *</span></p>
                    </div>
                    <div>
                        <FormControl sx={{minWidth: 250}}>
                            <InputLabel sx={{lineHeight: '15px'}}>{CURRENT_LOCATION_TEXT}</InputLabel>
                            <Select
                                disabled={!props.hasButtons}
                                size="small"
                                value={currentLocation}
                                label={CURRENT_LOCATION_TEXT}
                                className={classes.inputField}
                                onChange={(e) => setCurrentLocation(e.target.value)}
                            >
                                {
                                WorkStatusArray.map((item: string) => (
                                    <MenuItem key={item} value={item}>{item}</MenuItem>
                                ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="conditional-container">
                    <div className="experience-card-title">
                        <p>{PREFERRED_LOCATION_TEXT}<span className="asterisk-span"> *</span></p>
                    </div>
                    <div>
                        <FormControl sx={{minWidth: 250}}>
                            <InputLabel sx={{lineHeight: '15px'}}>{PREFERRED_LOCATION_TEXT}</InputLabel>
                            <Select
                                disabled={!props.hasButtons}
                                size="small"
                                value={preferredLocation}
                                label={PREFERRED_LOCATION_TEXT}
                                className={classes.inputField}
                                onChange={(e) => setPreferredLocation(e.target.value)}
                            >
                                {
                                WorkStatusArray.map((item: string) => (
                                    <MenuItem key={item} value={item}>{item}</MenuItem>
                                ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="conditional-container">
                    <div className="experience-card-title">
                        <p>{ADDITIONAL_CERTIFICATES_TEXT}</p>
                    </div>
                    <div>
                        <FormControl>
                            <RadioGroup
                                value={additonalCertificationStatus}
                                onChange={handleCertificationStatus}
                            >
                                {
                                    YesNoOptions.map(location => (
                                        <FormControlLabel
                                            disabled={!props.hasButtons}
                                            value={location}
                                            control={<Radio />}
                                            label={location}
                                            key={location}
                                        />
                                    ))
                                }
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                {
                    additonalCertificationStatus === YesNoOptions[0] ?

                    <div className="conditional-container">
                        <div className="experience-card-title">
                            <p>{CERTIFICATION_ADD_TEXT}</p>
                        </div>
                        <CertificationDetails 
                            disabled={!props.hasButtons} 
                            setCertificationData={handleCertifications}
                            removeCertification={removeCertification}
                            setType={props.setType}
                            setOpen={props.setOpen}
                            setDataMessage={props.setDataMessage}
                        />
                    </div>

                    : null
                }
                <div className="conditional-container">
                    <div className="experience-card-title">
                        <p>{WORK_STATUS_TEXT}: {jobStatus}</p>
                    </div>
                </div>
                <div className="conditional-container">
                    {
                        jobStatus === WorkStatusType.FRESHER ?

                        <FreshGraduateDetails 
                          disabled={!props.hasButtons} 
                          ref={freshGraduateRef}
                          setParentData={setFreshGraduateDetails}
                          setType={props.setType}
                          setOpen={props.setOpen}
                          setDataMessage={props.setDataMessage}
                        />

                        :

                        <ExperiencedSeeker 
                          disabled={!props.hasButtons} 
                          workStatus={jobStatus} 
                          ref={experiencedRef}
                          setParentData={setExperiencedDetails}
                          setType={props.setType}
                          setOpen={props.setOpen}
                          setDataMessage={props.setDataMessage}
                        />
                    }
                </div>
                {
                    props.hasButtons ?

                    <PreviousNextButtons handleNext={submitWorkStatus} handleBack={props.handleBack}/>

                    : null
                }
            </div>
    )
}

export default JobSeekerProfileWorkStatus;