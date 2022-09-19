import React, { ReactElement, FC } from "react";
import {
  ButtonGroup,
  Button,
  Tooltip,
  Stack,
  CircularProgress,
} from "@mui/material";
import { LIGHT_YELLOW, MAIN_GREEN, DARK_RED, LIGHT_ORANGE } from "../color";

const StepCount: FC<any> = (props): ReactElement => {
  return (
    <>
      <ButtonGroup fullWidth sx={{ gap: "1%", px: "1vw", my: 2 }}>
        {props.StepCountList.map((button: any) => (
          <Tooltip
            title={props.StepCountList.length < 6 ? "" : button.tooltip}
            key={button.id}
            placement="top"
            arrow
          >
            <Button
              className="step-count-wrapper"
              variant={
                button.id === props.selectedButton ? "contained" : "outlined"
              }
              onClick={() => props.setSelectedButton(button.id)}
            >
              <div className="step-count-text">
                {props.countsList.find(
                  (item: { _id: any }) => item._id === button.id
                )?.count || "0"}
              </div>
              {button.label}
              <div
                className="step-underline"
                style={{
                  background: MAIN_GREEN,
                }}
              ></div>
            </Button>
          </Tooltip>
        ))}
      </ButtonGroup>
    </>
  );
};

export default StepCount;
