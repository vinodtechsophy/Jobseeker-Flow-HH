import React from "react";
import { makeStyles } from "@mui/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import DehazeIcon from "@mui/icons-material/Dehaze";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useAppDispatch, useAppSelector } from "../../services/StoreHooks";

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
  commonAlignment: {
    textAlign: "center",
  },
}));

export const Icons = (params: any) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const userDataState = useAppSelector((state) => state.currentUser);

  const handleClick = () => {
    console.log("Hello");
  };

  console.log(params.data.profileLastCompletedStep);
  const handleStepOpen = async () => {
    const jobSeekerId = params.data._id;
    const profileId = params.data.profileId;
    if (jobSeekerId && profileId) {
      await dispatch({
        type: "USER_ADD",
        data: {
          userData: {
            ...userDataState.userData,
            profileId,
            jobSeekerId,
          },
          userId: userDataState?.userId,
        },
      });
      dispatch({
        type: "STEP_CHANGE",
        data: {
          step: params.data.profileLastCompletedStep,
          tab: 0,
        },
      });
    }
  };

  const state = useAppSelector((state) => state.tabsState);
  console.log(state);

  return (
    <>
      <div className={classes.commonAlignment}>
        <VisibilityIcon className={classes.iconColor} onClick={handleClick} />

        <LocalPhoneRoundedIcon
          className={classes.iconColor}
          onClick={handleClick}
        />
        <OpenInNewIcon className={classes.iconColor} onClick={handleStepOpen} />
        <DehazeIcon className={classes.iconColor} onClick={handleClick} />
      </div>
    </>
  );
};

const CustomFields = () => {
  return <div>CustomFields</div>;
};
export default CustomFields;
