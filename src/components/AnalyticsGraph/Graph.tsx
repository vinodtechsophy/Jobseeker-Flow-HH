import React, { ReactElement, FC, useState, useEffect } from "react";
import { Box } from "@mui/material";
import GraphCo from "../../../src/assets/GraphCo.png";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import {
  getContestAggregateStatistics,
  getContestAggregateStatisticsGroupBy,
} from "../../services/JobSeekerService";

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
  // const [contestStatistics, setContestStatistics] = useState<any>({});
  const [aggregateCount, setAggregateCount] = useState<any>([]);
  const [aggregatePercentage, setAggregatePercentage] = useState<any>([]);

  const apiCallAggregateContestStatistics = async () => {
    let count: any = [];
    let percentage: any = [];
    const response = await getContestAggregateStatistics();
    if (response?.data?.success) {
      const result = response.data.data.filter(
        (data) => data.status === "PROFILE_DUPLICATE"
      );
      count[0] = result[0]?.count;
      percentage[0] = result[0]?.percentage;
      const result1 = response.data.data.filter(
        (data) => data.status === "TOTAL_PROFILES_UPLOADED"
      );
      count[1] = result1[0]?.count;
      percentage[1] = result1[0]?.percentage;
    }
    const response1 = await getContestAggregateStatisticsGroupBy(
      props.contestId,
      "consentStatus"
    );
    if (response1?.data?.success) {
      const result2 = response1.data.data.filter(
        (data) => data.status === "JOB_SEEKER_CONSENT_PENDING"
      );
      count[2] = result2[0]?.count;
      percentage[2] = "_ _";

      const result3 = response1.data.data.filter(
        (data) => data.status === "JOB_SEEKER_CONSENT_PASS"
      );
      count[3] = result3[0]?.count;
      percentage[3] = "_ _";
    }
    const response2 = await getContestAggregateStatisticsGroupBy(
      props.contestId,
      "jobSeekerMainStage"
    );
    if (response2?.data?.success) {
      const result4 = response2.data.data.filter(
        (data) => data.status === "hhShortListing"
      );
      count[4] = result4[0]?.count;
      percentage[4] = "_ _";
      const result5 = response2.data.data.filter(
        (data) => data.status === "employerDuplication"
      );
      count[5] = result5[0]?.count;
      percentage[5] = "_ _";
      const result6 = response2.data.data.filter(
        (data) => data.status === "employerShortlisting"
      );
      count[6] = result6[0]?.count;
      percentage[6] = "_ _";
      const result7 = response2.data.data.filter(
        (data) => data.status === "phaseHr"
      );
      count[7] = "_ _";
      percentage[7] = "_ _";
    }
    setAggregateCount(count);
    setAggregatePercentage(percentage);
    // prepareData(response?.data?.data);
  };

  useEffect(() => {
    apiCallAggregateContestStatistics();
  }, []);
  // useEffect(() => console.log(contestStatistics), [contestStatistics]);
  // const prepareData = (agregateData: any) => {
  //   const t = {};
  //   agregateData.map(
  //     (data: { count: number; status: string; percentage: string }) => {
  //       Object.assign(t, {
  //         [data.status]: { count: data.count, percentage: data.percentage },
  //       });
  //     }
  //   );
  //   setContestStatistics(t);
  // };
  // useEffect(() => {}, [contestStatistics]);

  return (
    <Box position="relative">
      <Box display="flex" justifyContent={"center"}>
        <Box
          display="flex"
          flexDirection={"column"}
          className={classes.leftDiv}
        >
          <Item className={classes.leftItem1}>
            {aggregatePercentage[0] || "_ _"}
          </Item>
          <Item className={classes.leftItem2}>
            {aggregatePercentage[1] || "_ _"}
          </Item>
          <Item className={classes.leftItem3}>
            {aggregatePercentage[2] || "_ _"}
          </Item>
          <Item className={classes.leftItem4}>
            {aggregatePercentage[3] || "_ _"}
          </Item>
          <Item className={classes.leftItem5}>
            {aggregatePercentage[4] || "_ _"}
          </Item>
          <Item className={classes.leftItem6}>
            {aggregatePercentage[5] || "_ _"}
          </Item>
          <Item className={classes.leftItem7}>
            {aggregatePercentage[6] || "_ _"}
          </Item>
          <Item className={classes.leftItem8}>
            {aggregatePercentage[7] || "_ _"}
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
            {aggregateCount[0] || "_ _"}
          </Item>
          <Item className={classes.rightItem2}>
            {aggregateCount[1] || "_ _"}
          </Item>
          <Item className={classes.rightItem3}>
            {aggregateCount[2] || "_ _"}
          </Item>
          <Item className={classes.rightItem4}>
            {aggregateCount[3] || "_ _"}
          </Item>
          <Item className={classes.rightItem5}>
            {aggregateCount[4] || "_ _"}
          </Item>
          <Item className={classes.rightItem6}>
            {aggregateCount[5] || "_ _"}
          </Item>
          <Item className={classes.rightItem7}>
            {aggregateCount[6] || "_ _"}
          </Item>
          <Item className={classes.rightItem8}>
            {aggregateCount[7] || "_ _"}
          </Item>
        </Box>
      </Box>
    </Box>
  );
};
export default Graph;
