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
            display: "inline-flex",
            flexDirection: "column",
            borderWidth: "2px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "1vw",
          }}
        >
          <div
            style={{
              display: "block",
              height: "45%",
              padding: "10%",
              width: "100%",
            }}
          >
            <props.fileName sx={{ fontSize: "2.5rem" }} />
          </div>
          <hr
            style={{
              display: "block",
              width: "1vw",
              margin: "auto 0px",
              padding: "0",
              border: "1px solid #4D6CD9",
              alignItems: "center",
            }}
          />
          <div
            style={{
              display: "block",
              height: "45%",
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
