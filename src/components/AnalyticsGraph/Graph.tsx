import React, { ReactElement, FC, useState, useEffect } from "react";
import { Box } from "@mui/material";
import GraphCo from "../../../src/assets/GraphCo.png";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { getContestAggregateStatistics } from "../../services/JobSeekerService";

const useStyles = makeStyles({
  graphImg: {
    // position: "absolute",

    // left: "18vw",
    top: 0,
    width: "850px",
  },
  leftDiv: {
    position: "absolute",
    right: "40vw",
  },
  rightDiv: {
    position: "absolute",
    left: "49vw",
  },
  leftItem1: {
    borderColor: "#266E88",
    borderLeft: "1px solid",
    width: "200px",
  },
  leftItem2: {
    borderColor: "#CD433E",
    width: "200px",
    borderLeft: "1px solid",
  },
  leftItem3: {
    borderColor: "#F2B241",
    width: "200px",
    borderLeft: "1px solid",
    marginBottom: "20px",
  },
  leftItem4: {
    borderColor: "#EDD85F",
    width: "220px",
    borderLeft: "1px solid",
    marginBottom: "28px",
  },
  leftItem5: {
    borderColor: "#8FC38B",
    width: "270px",
    borderLeft: "1px solid",
  },
  leftItem6: {
    borderColor: "#5DACC8",
    width: "300px",
    borderLeft: "1px solid",
  },
  leftItem7: {
    borderColor: "#9167B3",
    width: "320px",
    borderLeft: "1px solid",
    marginBottom: "30px",
  },
  leftItem8: {
    borderColor: "#4A779F",
    width: "330px",
    borderLeft: "1px solid",
  },
  rightItem1: {
    borderColor: "#266E88",
    borderRight: "1px solid #266E88",
    width: "200px",
    marginLeft: "-3px",
  },
  rightItem2: {
    borderColor: "#CD433E",
    borderRight: "1px solid #CD433E",
    width: "200px",
    marginLeft: "-3px",
  },
  rightItem3: {
    borderColor: "#F2B241",
    width: "200px",
    borderRight: "1px solid #F2B241",
    marginLeft: "-3px",
  },
  rightItem4: {
    borderColor: "#EDD85F",
    width: "220px",
    borderRight: "1px solid #EDD85F",
    marginBottom: "28px",
    marginLeft: "-20px",
  },
  rightItem5: {
    borderColor: "#8FC38B",
    width: "270px",
    borderRight: "1px solid #8FC38B",
    marginLeft: "-70px",
  },
  rightItem6: {
    borderColor: "#5DACC8",
    width: "300px",
    borderRight: "1px solid #5DACC8",
    marginLeft: "-100px",
  },
  rightItem7: {
    borderColor: "#9167B3",
    width: "320px",
    borderRight: "1px solid #9167B3",
    marginBottom: "30px",
    marginLeft: "-120px",
  },
  rightItem8: {
    borderColor: "#4A779F",
    width: "330px",
    borderRight: "1px solid #4A779F",
    marginLeft: "-130px",
  },
});

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "8px 9px",
  // top right bottom left
  margin: "5px 13px 18px 13px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  color: theme.palette.text.secondary,
  borderTop: "1px solid",
  borderBottom: "1px solid",
}));

const Graph: FC<any> = (props): ReactElement => {
  const classes = useStyles();
  const [contestStatistics, setContestStatistics] = useState<any>({});

  const apiCallContestStatistics = async () => {
    const response = await getContestAggregateStatistics();
    prepareData(response?.data?.data);
  };

  useEffect(() => {
    apiCallContestStatistics();
  }, []);
  // useEffect(() => console.log(contestStatistics), [contestStatistics]);
  const prepareData = (agregateData: any) => {
    const t = {};
    agregateData.map(
      (data: { count: number; status: string; percentage: string }) => {
        Object.assign(t, {
          [data.status]: { count: data.count, percentage: data.percentage },
        });
      }
    );
    setContestStatistics(t);
  };
  useEffect(() => {}, [contestStatistics]);

  return (
    <Box position="relative">
      <Box display="flex" justifyContent={"center"}>
        <Box
          display="flex"
          flexDirection={"column"}
          className={classes.leftDiv}
        >
          <Item className={classes.leftItem1}>
            {contestStatistics?.PROFILE_DUPLICATE?.percentage || "_ _"}
          </Item>
          <Item className={classes.leftItem2}>
            {contestStatistics?.TOTAL_PROFILES_UPLOADED?.percentage || "_ _"}
          </Item>
          <Item className={classes.leftItem3}>
            {contestStatistics?.AWAITING_JOB_SEEKEER_CONSENT?.percentage ||
              "_ _"}
          </Item>
          <Item className={classes.leftItem4}>
            {contestStatistics?.JOB_SEEKEER_CONSENT_APPROVED?.percentage ||
              "_ _"}
          </Item>
          <Item className={classes.leftItem5}>0</Item>
          <Item className={classes.leftItem6}>
            {contestStatistics?.PROFILE_DUPLICATE?.percentage || "_ _"}
          </Item>
          <Item className={classes.leftItem7}>0</Item>
          <Item className={classes.leftItem8}>
            {contestStatistics?.PROFILE_ACTIVE?.percentage || "_ _"}
          </Item>
        </Box>
        <Box>
          <img
            className={classes.graphImg}
            src={GraphCo}
            alt="Graph"
            loading="lazy"
          />
        </Box>
        <Box
          alignItems={"end"}
          display="flex"
          flexDirection={"column"}
          className={classes.rightDiv}
        >
          <Item className={classes.rightItem1}>
            {contestStatistics?.PROFILE_DUPLICATE?.count || "_ _"}
          </Item>
          <Item className={classes.rightItem2}>
            {contestStatistics?.TOTAL_PROFILES_UPLOADED?.count || "_ _"}
          </Item>
          <Item className={classes.rightItem3}>
            {contestStatistics?.AWAITING_JOB_SEEKEER_CONSENT?.count || "_ _"}
          </Item>
          <Item className={classes.rightItem4}>
            {contestStatistics?.JOB_SEEKEER_CONSENT_APPROVED?.count || "_ _"}
          </Item>
          <Item className={classes.rightItem5}>0</Item>
          <Item className={classes.rightItem6}>
            {contestStatistics?.PROFILE_DUPLICATE?.count || "_ _"}
          </Item>
          <Item className={classes.rightItem7}>0</Item>
          <Item className={classes.rightItem8}>
            {contestStatistics?.PROFILE_ACTIVE?.count || "_ _"}
          </Item>
        </Box>
      </Box>
    </Box>
  );
};
export default Graph;
