import React from "react";
import { makeStyles } from "@mui/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import DehazeIcon from "@mui/icons-material/Dehaze";

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
  commonAlignment:{
    textAlign: "center",
  },
}));

export const Icons = (params) => {
  
  const classes = useStyles();
  const handleClick = () => {
    console.log("Hello");
  };

  return (
    <>
    <div
      className={classes.commonAlignment}
    >
      <VisibilityIcon 
      className={classes.iconColor} 
      onClick={handleClick} 
      />

      <LocalPhoneRoundedIcon
        className={classes.iconColor}
        onClick={handleClick}
      />
      
      <DehazeIcon 
      className={classes.iconColor} 
      onClick={handleClick} 
      />
    </div> 
   
  </>
  
  )}

const CustomFields = () => {
  return <div>CustomFields</div>;
};
export default CustomFields;
