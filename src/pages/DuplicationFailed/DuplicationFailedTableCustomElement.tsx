import React, { useState, useEffect } from "react";
import {
  Typography,
  Divider,
  Button,
  TextField,
  Box,
  IconButton,
  TooltipProps,
  tooltipClasses,
  Tooltip,
  ClickAwayListener,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

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
}));

export const CustomDropDown = (params: any) => {
  const yes = {
    option: "yes",
    color: "#EF4444",
    title: "Error!",
    body: "The job seeker needs 6 month cooldown before it can be entered again.",
  };

  const no = {
    option: "no",
    color: "#22C55E",
    title: "",
    body: "",
  };
  const [option, setOption] = useState({
    option: "",
    color: "",
    title: "",
    body: "",
  });
  useEffect(() => {
    setOption(params.getValue() == "yes" ? yes : no);
  }, []);

  const id = `cellNo${params.rowIndex}${params.column.instanceId}`;
  const iconId = `iconNo${params.rowIndex}${params.column.instanceId}`;

  const [message, setMessage] = useState(params.getValue());
  const handleChange = (event: any) => {
    setMessage(event.target.value);
    params.setValue(event.target.value);
    if (event.target.value == "yes") {
      setOption(yes);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 4000);
    } else {
      setOption(no);
      setOpen(false);
      setTimeout(() => {
        setOpen(false);
      }, 4000);
    }
  };
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
      {...props}
      placement="right"
      arrow
      classes={{ popper: className, arrow: classes.arrow }}
      // className={classes.arrowStyle}
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#ffffff",
      border: `1px solid ${option.color}`,
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      borderRadius: "1vw",
    },
  }));
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };
  return (
    <>
      <div>
        <select
          id={id}
          style={{ border: "1px solid #DFE5FF" }}
          value={message}
          onChange={handleChange}
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <HtmlTooltip
            // PopperProps={{
            //   disablePortal: true,
            // }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={
              <React.Fragment>
                <Typography variant="subtitle2">
                  <b style={{ color: option.color }}>{option.title}</b>
                </Typography>

                <Typography variant="caption" color="#626880">
                  {option.body}
                </Typography>
              </React.Fragment>
            }
          >
            {(() => {
              if (option.option == "yes") {
                return (
                  <ReportGmailerrorredIcon
                    id={iconId}
                    sx={{ color: option.color, fontSize: "20px" }}
                  />
                );
              } else {
                return <div></div>;
              }
            })()}
          </HtmlTooltip>
        </ClickAwayListener>
      </div>
    </>
  );
};
export const ActionButtons = (params: any) => {
  return (
    <>
      <IconButton color="primary" aria-label="delete">
        <BookmarkIcon />
      </IconButton>
    </>
  );
};
