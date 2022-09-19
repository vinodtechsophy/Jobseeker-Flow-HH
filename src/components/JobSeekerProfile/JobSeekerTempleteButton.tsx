import React, { ReactElement, FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography, Divider, Button } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4D6CD9",
    },
  },
});
const JobSeekerTempleteButton: FC<any> = (props): ReactElement => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            padding: "0",
            margin: "2vw",
            width: "9vw",
            height: "9vw",
            position: "static",
            display: "inline-grid",
            borderWidth: "2px",
          }}
        >
          <div
            style={{
              display: "block",
              height: "49%",
            }}
          >
            <img
              src={`assets/images/${props.fileName}`}
              width={"40%"}
              height={"120%"}
            />
          </div>
          {/* <hr
            style={{
              display: "block",
              width: "1vw",
              color: "black",
              margin: "auto 0px",
              padding: "0",
              border: "1px solid #4D6CD9",
              alignItems: "center",
            }}
          /> */}
          <div
            style={{
              display: "block",
              height: "49%",
            }}
          >
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              fontSize={".8vw"}
            >
              {props.title}
            </Typography>
          </div>
        </Button>
      </ThemeProvider>
    </>
  );
};

export default JobSeekerTempleteButton;
