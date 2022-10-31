import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { downloadFile, openFile } from "../../services/DocumentService";

const useStyles = makeStyles(() => ({
  buttonContainer: {
    "&.MuiButton-root": {
      minWidth: "2vw",
    },
  },

  arrow: {
    "&:before": {
      border: "1px solid #36454F",
      color: "#ffffff",
    },
  },
  iconColor: {
    color: "#4d6cd9",
    margin: "8px",
  },
  uploadText: {
    color: "#4d6cd9",
  },
}));
export const ResumeUploaded = (params) => {
  console.log(params);
  const classes = useStyles();

  const handleViewResume = async () => {
    const resumeId = params.getValue();
    await openFile(resumeId);
  };
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Typography onClick={handleViewResume} className={classes.uploadText}>
        View Resume Uploaded
      </Typography>
    </div>
  );
};

export const Icons = (params) => {
  const classes = useStyles();
  const handleClick = () => {
    console.log(params);
  };
  const handleChat = () => {
    console.log("Chat Icon clicked");
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <VisibilityIcon className={classes.iconColor} onClick={handleClick} />

      <LocalPhoneRoundedIcon
        className={classes.iconColor}
        onClick={handleClick}
      />
      <ChatBubbleOutlineIcon
        className={classes.iconColor}
        onClick={handleChat}
      />
      <DehazeIcon className={classes.iconColor} onClick={handleClick} />
    </div>
  );
};

const CustomFields = () => {
  return <div>CustomFields</div>;
};
export default CustomFields;
