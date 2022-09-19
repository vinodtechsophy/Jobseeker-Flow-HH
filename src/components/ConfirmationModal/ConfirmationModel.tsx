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
import { CONFIRMATION_BOX_BUTTON } from "../../constants";
import { 
  CLOSE_RED, 
  MAIN_BLUE, 
  BORDER_RED,
  WHITE_TEXT,
  DARK_BLUE,
  COOL_RED
} from "../../color";

const useStyles = makeStyles(() => ({
  confirmationButton: {
    "&.MuiButton-outlined": {
      color: MAIN_BLUE,
      borderColor: MAIN_BLUE,
      textTransform: "none",
      borderRadius: "1vw",
      fontWeight: "500",
      width: "8vw",
    },
  },
  cancelButton: {
    "&.MuiButton-outlined": {
      color: COOL_RED,
      borderColor: COOL_RED,
      textTransform: "none",
      borderRadius: "1vw",
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
    backgroundColor: MAIN_BLUE,
    color: WHITE_TEXT,
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
  },
  titleIconButton: {
    display: "inline",
    color: CLOSE_RED,
    borderColor: BORDER_RED,
    position: "absolute",
    alignItems: "center",
    right: "0px",
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
  },
}));
const ConfirmationModel: FC<any> = (props): ReactElement => {

  const { isOpen, title, message } = props.dialogAction;

  const classes = useStyles();

  const handleClose = () => {
    props.setDialogAction({
      isOpen: false,
      title: '',
      message: ''
    });
  };

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle className={classes.titleContainer}>
          <Typography variant="h6" className={classes.titleText}>
            {title}
          </Typography>

          <IconButton
            className={classes.titleIconButton}
            onClick={() => handleClose()}
          >
            <CancelRoundedIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className={classes.messageContainer}>
          <Typography variant="subtitle2" className={classes.messageText}>
            {message}
          </Typography>
        </DialogContent>
        <DialogActions className={classes.buttonContainer}>
          <Button
            variant="outlined"
            className={classes.cancelButton}
            onClick={() => props.buttonLeftFunction()}
          >
            {CONFIRMATION_BOX_BUTTON[1]}
          </Button>
          <Button
            variant="outlined"
            className={classes.confirmationButton}
            onClick={() => props.buttonRightFunction()}
          >
            {CONFIRMATION_BOX_BUTTON[0]}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmationModel;