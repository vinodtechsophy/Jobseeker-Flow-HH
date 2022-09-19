import React, { FC, ReactElement } from "react";
import {
  Box,
  Grid,
  Button,
  Checkbox,
  Typography,
  ButtonGroup,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDropzone } from "react-dropzone";
import DownloadIcon from "@mui/icons-material/Download";
import PreviousNextButtons from "../../components/PreviousNextButtons/PreviousNextButtons";
import {
  UploadFiles,
  createJobSeekerProfile,
} from "../../services/FormDataService";
import {
  ERROR_KEY,
  SUCCESS_KEY,
  IMAGE_UPLOAD_ERROR,
  JOB_SEEKER_RESUME,
  FORM_SUBMISSION_SUCCESS,
} from "../../constants";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";

const useStyles = makeStyles({
  Grid1: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
  },
  Grid2: {
    marginTop: 10,
  },
  bGroup: {
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#4D6CD9",
    },
    backgroundColor: "#4D6CD9",
    color: "white",
  },
  manaulUploadDiv: {
    border: "2px solid grey",
    height: "180px",
    width: "100%",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  maualUploadSubHeading: {
    marginLeft: "20px",
    fontSize: "12px",
    color: "red",
    alignSelf: "center",
  },
  subText1: {
    fontSize: "15px",
  },
  subText2: {
    fontSize: "15px",
  },
  subText3: {
    fontSize: "15px",
    color: "#4D6CD9",
    cursor: "pointer"
  },
  tempalteSubText1: {
    fontSize: "13px",
  },
  fillTemplate: {
    border: "1px solid #4D6CD9",
    height: "140px",
    width: "140px",
    marginTop: "10px",
    marginLeft: "90px",
    backgroundColor: "#4D6CD9",
    borderRadius: "10px",
    color: "white",
    fontSize: "15px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  uploadLogoText: {
    width: "96px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "22px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#A4A4A4",
  },

  browseFiles: {
    width: "228px",
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "22px",
    color: "#4D6CD9",
  },

  limitWidth: {
    width: "500px",
    float: "right",
  },
  uploadResume: {
    alignItems: "center",
    marginRight: 1,
    align: "left",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 700,
    color: " #30374C",
  },
  dragBox: {
    borderRadius: 10,
    border: "2px solid grey",
    width: "500px",
    height: "160px",
    marginRight: "70px",
  },
  dashedBox: {
    borderRadius: 10,
    border: "2px dashed blue",
  },
  filledWarning: {
    marginLeft: "25px",
    fontSize: "15px",
    marginTop: "5px",
    color: "red",
  },
  autoFillTxt: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 700,
    color: " #30374C",
  },
});

const JobSeekerProfileUpload: FC<any> = (props): ReactElement => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const userDataState = useAppSelector((state) => state.currentUser);

  const [manualState, setManualState] = React.useState(true);
  const [templateState, setTemplateState] = React.useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [iconID, setIconID] = React.useState("");
  //   const [file, setFile] = React.useState<any>(null);

  // const onDrop = useCallback((acceptedFiles) => {
  //   // console.log(acceptedFiles);
  //   // Do something with the files
  // }, []);
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const {
    acceptedFiles: acceptedFilesTemplate,
    getRootProps: rootPropsTemplate,
    getInputProps: inputPropsTemplate,
    isDragActive: openTemplate,
  } = useDropzone({ onDrop: () => {} });

  const {
    acceptedFiles: acceptedFilesTemplateResume,
    getRootProps: rootPropsTemplateResume,
    getInputProps: inputPropsTemplateResume,
    isDragActive: openTemplateResume,
  } = useDropzone({ onDrop: () => {} });

  const {
    acceptedFiles: acceptedFilesResume,
    getRootProps: rootPropsResume,
    getInputProps: inputPropsResume,
    isDragActive: openResume,
  } = useDropzone({ onDrop: () => {} });

  const handleManualUpload = () => {
    setManualState(true);
    setTemplateState(false);
  };

  const handleTemplateUpload = () => {
    setTemplateState(true);
    setManualState(false);
  };

  const uploadPayloadBuild = () => {
    return {
      documentTypeId: JOB_SEEKER_RESUME,
      documentPath: `resume/${userDataState.userData.profileLogId}`,
      documentName: userDataState.userData.profileLogId,
      files: acceptedFilesResume,
    };
  };

  const callResumeUpload = async () => {
    if (acceptedFilesResume.length > 0) {
      try {
        const uploadResponse = await UploadFiles(uploadPayloadBuild()).catch(
          (error) => {
            props.setType(ERROR_KEY);
            props.setDataMessage(IMAGE_UPLOAD_ERROR);
            props.setOpen(true);
            console.log(error);
          }
        );
        if (uploadResponse?.data?.success) {
          setIconID(uploadResponse?.data?.data?.id);
          const seekerProfile = await createJobSeekerProfile({
            profileLogId: userDataState.userData.profileLogId,
            profileData: {
              resumeDocumentId: uploadResponse?.data?.data?.id,
            },
          });
          if (seekerProfile?.data?.success) {
            dispatchProfileId(seekerProfile?.data?.data?.profileId);
          }
          props.setType(SUCCESS_KEY);
          props.setDataMessage(FORM_SUBMISSION_SUCCESS);
          props.setOpen(true);
          props.handleComplete(1);
          props.handleNext();
        }
      } catch (error: any) {
        console.log(error);
        props.setType(ERROR_KEY);
        props.setDataMessage(error?.message);
        props.setOpen(true);
      }
    }
  };

  const dispatchProfileId = (profileId) => {
    dispatch({
      type: "USER_ADD",
      data: {
        userData: {
          ...userDataState.userData,
          profileId,
        },
        userId: userDataState.userId,
      },
    });
  };

  return (
    <div className="job-seeker-profile-content">
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.Grid1}>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              className={templateState ? classes.bGroup : ""}
              onClick={handleTemplateUpload}
            >
              Template Upload
            </Button>
            <Button
              className={manualState ? classes.bGroup : ""}
              onClick={handleManualUpload}
            >
              Manual Upload
            </Button>
          </ButtonGroup>
        </Grid>
        {manualState ? (
          <Grid item xs={12} margin={8} className={classes.Grid2}>
            <Box display={"inline-flex"} marginTop={3} marginBottom={3}>
              <Typography className={classes.uploadResume} variant="h6">
                Upload Resume*
              </Typography>
              <Typography className={classes.maualUploadSubHeading}>
                Warning! Make Sure the Job Seeker can Join within 30 days after
                Profile is entered into the contest
              </Typography>
            </Box>
            <div {...rootPropsResume()} className={classes.manaulUploadDiv}>
              <input {...inputPropsResume()} />{" "}
              <Typography textAlign="center">
                {openResume ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag 'n' drop some files here, or click to select files</p>
                )}
              </Typography>
            </div>
            <Box
              marginTop={3}
              justifyContent={"space-between"}
              sx={{
                display: {
                  sm: "block",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            >
              <Box textAlign="left" className={classes.subText1}>
                <Box>
                  {acceptedFilesResume.map((file: any) => (
                    <Box key={file.path || file.name}>{file.path}</Box>
                  ))}
                </Box>
              </Box>
              <Box textAlign="left" className={classes.subText2}>
                <Checkbox {...label} defaultChecked color="success" />
                Duplication Check with Hiringhood Completed
              </Box>
              <Box
                {...rootPropsResume()}
                textAlign="left"
                className={classes.subText3}
              >
                Re-Upload
              </Box>
            </Box>
          </Grid>
        ) : null}
        {templateState ? (
          <Grid container spacing={3}>
            <Grid item xs={12} marginLeft={10}>
              <h1>
                Dear User Template upload is unavailable currently, will be
                updated in the next iteration
              </h1>
              <Box
                display={"inline-flex"}
                marginTop={10}
                justifyContent={"space-between"}
              >
                <Typography
                  variant="h6"
                  align="left"
                  className={classes.autoFillTxt}
                >
                  Auto Fill Using Template*
                  <p className={classes.tempalteSubText1}>
                    Auto fill information for steps 3-6
                  </p>
                </Typography>
                <Typography className={classes.filledWarning}>
                  Warning! make sure all information is filled before uploading
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              display={"inline-flex"}
              justifyContent={"space-between"}
            >
              <Box className={classes.fillTemplate}>
                <DownloadIcon style={{ fontSize: "80px" }} />
                <Box>Auto Fill Template</Box>
              </Box>
              <Box className={classes.dragBox} {...rootPropsTemplate()}>
                <Box className={classes.dashedBox} sx={{ p: 1, m: 3 }}>
                  <input {...inputPropsTemplate()} />
                  <Typography fontSize={20} color="blue" textAlign="center">
                    +
                  </Typography>
                  <Typography variant="body1" color="blue" textAlign="center">
                    Drag & drop{" "}
                  </Typography>
                  <Typography textAlign="center">
                    Your file here or browse
                  </Typography>
                  <aside>
                    {/* {isDragActive ? (
                        <p className={classes.drag}>Drop the files here ...</p>
                      ) : (
                        <p>
                          Drag 'n' drop some files here, or click to select files
                        </p>
                      )} */}
                  </aside>
                </Box>
                <Box
                  sx={{
                    display: {
                      xs: "block",
                      sm: "flex",
                      md: "flex",
                      lg: "flex",
                    },
                    justifyContent: "space-between",
                    p: 2,
                  }}
                  className={classes.limitWidth}
                >
                  <Box>
                    <Box
                      {...rootPropsTemplate()}
                      textAlign="left"
                      className={classes.browseFiles}
                    >
                      Browse File
                    </Box>
                    <Box sx={{ fontSize: "10px" }}>Size: 5MB, Format: .pdf</Box>
                  </Box>

                  <Box
                    {...rootPropsTemplate()}
                    textAlign="right"
                    className={classes.uploadLogoText}
                  >
                    Upload File
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} margin={8}>
              <Box
                display={"inline-flex"}
                marginTop={3}
                marginBottom={3}
                justifyContent={"space-between"}
              >
                <Typography className={classes.uploadResume}>
                  Upload Resume*
                </Typography>
                <Typography className={classes.maualUploadSubHeading}>
                  Warning! Make Sure the Job Seeker can Join within 30 days
                  after Profile is entered into the contest
                </Typography>
              </Box>
              <div
                {...rootPropsTemplateResume()}
                className={classes.manaulUploadDiv}
              >
                <input {...inputPropsTemplateResume()} />{" "}
                <Typography textAlign="center">
                  {openTemplateResume ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  )}
                </Typography>
              </div>
              <Box
                marginTop={3}
                justifyContent={"space-between"}
                sx={{
                  display: {
                    sm: "block",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                }}
              >
                <Box textAlign="left" className={classes.subText1}>
                  <Box>
                    {acceptedFilesTemplateResume.map((file: any) => (
                      <Box key={file.path || file.name}>{file.path}</Box>
                    ))}
                  </Box>
                </Box>
                <Box textAlign="left" className={classes.subText2}>
                  <Checkbox {...label} disabled checked color="success" />
                  Duplication Check with Hiringhood Completed
                </Box>
                <Box
                  {...rootPropsResume()}
                  textAlign="left"
                  className={classes.subText3}
                >
                  Re-Upload
                </Box>
              </Box>
            </Grid>
          </Grid>
        ) : null}
      </Grid>
      <PreviousNextButtons
        handleNext={callResumeUpload}
        handleBack={props.handleBack}
      />
    </div>
  );
};

export default JobSeekerProfileUpload;
