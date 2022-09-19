import React, { ReactElement, FC, useEffect } from "react";
import {
  Stack,
  Button,
  CircularProgress
} from '@mui/material';
import { BACK_BTN_TEXT, PROCEED_BTN_TEXT } from "../../constants";

const PreviousNextButtons: FC<any> = (props): ReactElement => {
    return (
        <div className="button-stack-container">
            <Stack direction="row" justifyContent="center" spacing={5}>
                {
                  props.loader ? 
                    <CircularProgress />
                  :
                  <>
                      <Button
                        variant="outlined"
                        className="previous-button stack-button"
                        onClick={() => props.handleBack()}
                      >
                        {BACK_BTN_TEXT}
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => props.handleNext()}
                        className="stack-button next-button"
                      >
                        {PROCEED_BTN_TEXT}
                      </Button>
                  </>
                }
            </Stack>
        </div>
    )
}

export default PreviousNextButtons;