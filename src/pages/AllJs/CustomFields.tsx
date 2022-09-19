import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import DehazeIcon from "@mui/icons-material/Dehaze";
import KeycloakService from "../../services/KeycloakService";
import { downloadFile } from "../../services/DocumentService";

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
export const ResumeUploaded = () => {
  const classes = useStyles();

  useEffect(() => {
    fetchToken();
  }, []);
  const fetchToken = async () => {
    const token = await KeycloakService.fetchTokenOtherUser();
    sessionStorage.setItem("react-token", token);
  };

  const handleViewResume = async () => {
    let response = await downloadFile("1018755347892011008");
    let response1 = response?.data;
    var pdf = response1;
    var downloadLink = document.createElement("a");
    var blob = new Blob(["\ufeff", pdf]);
    var url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = "data.pdf";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
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
