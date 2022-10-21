import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  TextField,
  Paper,
  Chip,
  Avatar,
  Typography,
} from "@mui/material";
import PushPinIcon from "@mui/icons-material/PushPin";
import CloseIcon from "@mui/icons-material/Close";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import MicNoneIcon from "@mui/icons-material/MicNone";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/styles";
import icon1 from "../../assets/company.svg";
import icon2 from "../../assets/positions.svg";
import icon3 from "../../assets/location.svg";
import icon4 from "../../assets/ctc.svg";
import icon5 from "../../assets/experience.svg";
import { getUserData } from "../../services/UserService";
import { filterContestDetailsWithRelation } from "../../services/ContestService";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: 400,
    // margin: 30,
    overflow: "auto",
    border: "1px solid #E5E5E5",
  },
  section1: {
    textAlign: "center",
    backgroundColor: "#4D6CD9",
    height: "50px",
    width: "390px",
    color: "#FFFFFF",
    padding: "10px",
  },
  section2: {
    marginTop: "15px",
    height: "auto",
    width: "390px",
    marginBottom: "15px",
    // overflow: "auto",
  },
  card: {
    marginLeft: "15px",
    backgroundColor: "white",
    width: "350px",
    height: "auto",
    borderRadius: "10px",
  },
  cardHeader: {
    margin: "8px",
    display: "flex",
    color: "#4D6CD9",
    flexDirection: "row-reverse",
  },
  cardGridContainer: {
    display: "flex",
    flexDirection: "row",
    fontSize: "13px",
  },
  section3: {
    backgroundColor: "#E8EAFA",
    height: "70px",
    alignItems: "center",
    // display: 'flex',
    flexDirection: "row",
    paddingBottom: "20px",
    // flexWrap: 'wrap',
  },
  messageField: {
    borderRadius: 3,
    border: "1px solid #ccc",
    width: "260px",
    left: "8px",
    top: "18px",
  },
  section3Icon1: {
    color: "#4D6CD9",
    marginLeft: "8px",
    marginTop: "20px",
  },
  section3Icon2: {
    color: "#4D6CD9",
    marginLeft: "5px",
    marginTop: "20px",
  },
  section3Icon3: {
    color: "#4D6CD9",
    marginLeft: "10px",
    marginTop: "20px",
  },
});

const MessageBox = ({ closeIt, params }) => {
  const classes = useStyles();
  const [contestData, setContestData] = React.useState<any>({});
  const [employerData, setEmployerData] = React.useState<any>({});
  const [currentUserId, setCurrentUserId] = useState(params.data.contestId);
  const [chatMessages, setChatMessages] = useState<any>([
    {
      message: " Hi",
      userId: "821024382412341234",
    },
    {
      message: "Hello there!",
      userId: currentUserId,
    },
    {
      message: " Hi",
      userId: "821024382412341234",
    },
    {
      message: "Hello there!",
      userId: currentUserId,
    },
    {
      message: " Hi",
      userId: "821024382412341234",
    },
    {
      message: "Hello there!",
      userId: currentUserId,
    },
    {
      message: "Hi",
      userId: "821024382412341234",
    },
    {
      message: "Hello there!",
      userId: currentUserId,
    },
    {
      message: "Hi",
      userId: "821024382412341234",
    },
    {
      message: "Hello there!",
      userId: currentUserId,
    },
    {
      message: "Hi",
      userId: "821024382412341234",
    },
    {
      message: "Hey!",
      userId: currentUserId,
    },
    {
      message: "Hola!!",
      userId: "821024382412341234",
    },
    {
      message: "Hello there!",
      userId: currentUserId,
    },
    {
      message: "Greetings!",
      userId: "821024382412341234",
    },
  ]);

  const searchContestDeatils = async (id) => {
    const response = await filterContestDetailsWithRelation(id);
    console.log("response", response);
    if (response) {
      setContestData(response?.data?.data[0].formData);
      setEmployerData(response?.data?.data[0]);
      Object.keys(response?.data?.data[0]).map((keyName) => {
        if (/^\d+$/.test(keyName))
          setEmployerData(response?.data?.data[0][keyName][0].formData);
      });
    }
  };
  // searchContestDeatils("CONTEST_2209000101");

  const handleCurrentUserData = async () => {
    const Data = await getUserData();
    console.log(Data?.data.data[0].userId);
    setCurrentUserId(Data?.data.data[0].userId);
    //   setCurrentUser(Data?.data.data[0]);
  };

  useEffect(() => {
    searchContestDeatils(params.data.contestId);
    handleCurrentUserData();
  }, []);

  return (
    <div>
      <Grid container spacing={0} className={classes.mainContainer}>
        <Box className={classes.section1}>
          Message
          <CloseIcon sx={{ float: "right" }} onClick={closeIt} />
        </Box>
        <Box className={classes.section2}>
          <h5 style={{ color: "#4D6CD9", marginLeft: 4, textAlign: 'center' }}>
            {params.data.firstName}
          </h5>
          <p style={{ marginLeft: 4, textAlign: 'center' }}>
            {" "}
            Profile Source: Name of the Recruiter
          </p>
          <Paper elevation={3} className={classes.card}>
            <Box className={classes.cardHeader}>
              <p>{contestData.position}</p>
              <PushPinIcon color="primary" />
            </Box>
            <Grid container spacing={1} className={classes.cardGridContainer}>
              <Grid item xs={6}>
                <img src={icon4} alt="Banner-Icon4" />{" "}
                {contestData.budgetCtcFrom}LPA - {contestData.budgetCtcTo}LPA
              </Grid>
              <Grid item xs={6}>
                <img src={icon5} alt="Banner-Icon5" />{" "}
                {contestData.experienceFrom} to {contestData.experienceTo} Yrs
              </Grid>

              <Grid item xs={6}>
                <img src={icon1} alt="Banner-Icon1" />
                {"       "}
                {employerData.employerName || "unknown"}
              </Grid>
              <Grid item xs={6}>
                <img src={icon2} alt="Banner-Icon2" />
                {"   "}
                {contestData.numberOfPositions} Positions
              </Grid>
              <Grid xs={6} item display="inline-flex">
                <img src={icon3} alt="Banner-Icon3" />
                <Typography
                  variant="body1"
                  sx={{
                    wordWrap: "break-word",
                    // m: 0.5,
                    fontSize: 13,
                    fontWeight: "bold",
                    fontFamily: "nunito",
                  }}
                >
                  {contestData.locations && contestData.locations.join(", ")}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Box textAlign={"center"} p={1}>
            Message
          </Box>
          <Paper
            elevation={0}
            //   className={classes.msgBody}
            sx={{
              width: "380px",
              height: "280px",
              position: "relative",
              overflowY: "scroll",
              paddingBottom: 2,
            }}
          >
            {/* {console.log("ID ", currentUserId)} */}
            {currentUserId !== "" &&
              chatMessages.reverse().map((message, index) => (
                <>
                  <Chip
                    label={`${message.message} ${index}`}
                    sx={
                      message.userId !== currentUserId
                        ? {
                            position: "absolute",
                            left: 0,
                            m: 1,
                            bottom: 0,
                            marginBottom: 4 * index,
                          }
                        : {
                            position: "absolute",
                            right: 0,
                            m: 1,
                            bottom: 0,
                            marginBottom: 4 * index,
                          }
                    }
                  />
                  {/* <Box
                    display="flex"
                    margin={5}
                    sx={
                      message.userId !== currentUserId
                        ? { position: "absolute", left: 0, m: 1 }
                        : { position: "absolute", right: 0, m: 1 }
                    }
                  >
                    {message.message}
                    <Avatar />
                  </Box> */}
                  <br />
                </>
              ))}
          </Paper>

          {/* <List
            sx={{ width: "40%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {[1, 2, 3].map((value) => (
              <ListItem
                key={value}
                disableGutters
                secondaryAction={
                  <IconButton aria-label="comment">
                    <Avatar />
                  </IconButton>
                }
              >
                <ListItemText primary={`Line item ${value}`} />
              </ListItem> 
            ))}
          </List> */}
        </Box>

        <Box className={classes.section3}>
          <SentimentSatisfiedAltIcon className={classes.section3Icon1} />
          <InsertLinkIcon className={classes.section3Icon2} />
          <TextField
            placeholder="Hello"
            variant="standard"
            className={classes.messageField}
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              border: "1px solid #ccc",
            }}
          />
          <SendIcon className={classes.section3Icon3} />
        </Box>
      </Grid>
    </div>
  );
};

export default MessageBox;
