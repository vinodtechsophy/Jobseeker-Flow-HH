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
              className={
                button.id === props.selectedButton
                  ? "step-count-wrapper"
                  : "step-count-outlined"
              }
              onClick={() => props.setSelectedButton(button.id, button?.value)}
            >
              <div className="step-count-text">
                {props.countsList.find(
                  (item: { _id: any }) => item._id === button.id
                )?.count || "0"}
              </div>
              <div className="step-count-label">{button.label}</div>
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
