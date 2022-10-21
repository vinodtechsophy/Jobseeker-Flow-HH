import React, { ReactElement, FC, useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { makeStyles } from "@mui/styles";
import { ADD_PROFILE_CONFIRMATION_BOX_BUTTON } from "../../constants";
import {
  CLOSE_RED,
  MAIN_BLUE,
  BORDER_RED,
  WHITE_TEXT,
  DARK_BLUE,
  COOL_RED,
} from "../../color";

const useStyles = makeStyles(() => ({
  confirmationButton: {
    "&.MuiButton-contained": {
      backGroundColor: MAIN_BLUE,
      borderColor: MAIN_BLUE,
      textTransform: "none",
      borderRadius: ".5vw",
      fontWeight: "500",
    },
  },
  cancelButton: {
    "&.MuiButton-outlined": {
      color: MAIN_BLUE,
      borderColor: MAIN_BLUE,
      textTransform: "none",
      borderRadius: ".5vw",
      fontWeight: "500",
      width: "8vw",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: "2.5vh",
  },
  titleContainer: {
    // backgroundColor: MAIN_BLUE,
    // color: WHITE_TEXT,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "1.5vh",
    paddingBottom: "1.5vh",
  },
  titleText: {
    justifyContent: "center",
    display: "flex",
    fontWeight: "700",
    padding: "1vw",
  },
  titleIconButton: {
    "&.MuiIconButton-root": {
      // display: "inline",
      color: CLOSE_RED,
      // borderColor: BORDER_RED,
      // backGroundColor: "red",
      position: "absolute",
      alignItems: "center",
      right: "1px",
      top: "1px",
    },
  },
  messageContainer: {
    color: DARK_BLUE,
    padding: "3vh 4vw 3vh 4vw ",
  },
  messageText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2.5vh",
    textAlign: "center",
    color: "#626880",
  },
}));
const ConfirmationModel: FC<any> = (props): ReactElement => {
  const { isOpen, title, mainMessage, bottomMessage } = props.dialogAction;

  const classes = useStyles();

  const handleClose = () => {
    props.setDialogAction({
      isOpen: false,
      title: "",
      mainMessage: "",
      bottomMessage: "",
    });
  };

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle className={classes.titleContainer}>
          <Typography variant="h5" className={classes.titleText}>
            {title}
          </Typography>
        </DialogTitle>
        <IconButton
          className={classes.titleIconButton}
          onClick={() => handleClose()}
        >
          <CancelRoundedIcon />
        </IconButton>
        <DialogContent className={classes.messageContainer}>
          <Typography variant="body1" className={classes.messageText}>
            {mainMessage}
          </Typography>
        </DialogContent>
        <DialogActions className={classes.buttonContainer}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              variant="outlined"
              className={classes.cancelButton}
              onClick={() => props.buttonLeftFunction()}
            >
              {ADD_PROFILE_CONFIRMATION_BOX_BUTTON[0]}
            </Button>
            <Button
              variant="contained"
              className={classes.confirmationButton}
              onClick={() => props.buttonRightFunction()}
            >
              {ADD_PROFILE_CONFIRMATION_BOX_BUTTON[1]}
            </Button>
          </div>
        </DialogActions>
        <DialogContent className={classes.messageContainer}>
          <Typography variant="body1" className={classes.messageText}>
            {bottomMessage}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ConfirmationModel;
