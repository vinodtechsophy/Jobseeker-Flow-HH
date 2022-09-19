import React, { ReactElement, FC } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography
} from '@mui/material';
import { 
    HALF_SIZE_GRID,
    FULL_SIZE_GRID,
    BROWSE_FILE_MSG,
    FILE_SIZE_MSG,
    DASHED_BORDER
} from "../../constants";
import { useDropzone } from "react-dropzone";
import { useStyles } from "./DropZoneUploadStyles";

const DropZoneUpload: FC<any> = (props): ReactElement => {

    const classes: any = useStyles();

    const {
        acceptedFiles: acceptedFilesOfferLetter,
        getRootProps: rootPropsOfferLetter,
        getInputProps: inputPropsOfferLetter,
        open: openOfferLetter,
      } = useDropzone({
        disabled: false,
        onDrop: (fileData) => {
            props.receiveFileContent(fileData, props.data);
        },
    });

    const removeFile = (file:any) => {
        const newFiles = [...acceptedFilesOfferLetter];
        acceptedFilesOfferLetter.splice(file, 1);
    };

    return (
        <React.Fragment>
            <Paper
                sx={{
                    borderRadius: 4,
                }}
                variant="outlined"
            >
                <Box
                    sx={{ border: DASHED_BORDER, p: 3, m: 3 }}
                    {...rootPropsOfferLetter({ className: "dropzone" })}
                >
                    <input {...inputPropsOfferLetter()} />
                    <Typography variant="body1" color="blue" textAlign="left">
                        Drag & drop{" "}
                    <Typography fontSize={20} color="blue" textAlign="right">
                        +
                    </Typography>
                    </Typography>
                    <Typography>
                        Your file here or browse
                    </Typography>
                    {/* <aside>
                        {
                            acceptedFilesOfferLetter.map((file: any) => (
                                <li key={file.path || file.name}>
                                {file.path} - {file.size} bytes
                                </li>
                            ))
                        }
                    </aside> */}
                </Box>
            </Paper>
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
                        textAlign="left"
                        onClick={openOfferLetter}
                        className={classes.browseFiles}
                    >
                        {BROWSE_FILE_MSG}
                    </Box>
                    <Box>
                        {FILE_SIZE_MSG}
                    </Box>
                </Box>

                <Box
                    textAlign="right"
                    onClick={openOfferLetter}
                    className={classes.uploadLogoText}
                >
                    Upload File
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default DropZoneUpload;