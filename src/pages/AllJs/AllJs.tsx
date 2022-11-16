import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button, Grid, Typography, Box } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import StepCount from "../../components/StepCount";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { LIGHT_GREY } from "../../color";
import ColumnSelection from "../../components/ColumnSelection/ColumnSelection";
import BookmarkIcon from "../../../src/assets/bookmark.svg";
import { LISTING_GENERIC_HEADERS } from "./ColumnHeader";
import AgGridWithPagination from "../GridItem/AgGridWithPagination";
import { PAGE_SIZE_ARRAY } from "../../constants";
import {
  statusFilterContestLinkedJobsekeers,
  getAggregateData,
  JobSeekersAggregateWithContest,
} from "../../services/JobSeekerService";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import moment from "moment";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
const useStyles = makeStyles(() => ({
  mailIcon: { color: "#4D6CD9", margin: "10px" },
  actions1: { fontSize: "15px !important" },
  bookmarkIcon: { color: "#4D6CD9" },
}));

const AllJs = (props) => {
  const gridRef = useRef<AgGridReact<any>>();
  const { contestId } = props;
  const classes = useStyles();

  const [columnDefs, setColumnDefs] = useState(LISTING_GENERIC_HEADERS);
  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = React.useState(0);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(4);
  const [rowData, setRowData] = React.useState<any[]>();
  const [selectedButtonId, setSelectedButtonId] = React.useState<Number>(1);
  const [selectedButtonValue, setSelectedButtonValue] =
    React.useState("JOB_SEEKER_APPLIED");

  const [columnsListOpen, setColumnsListOpen] = React.useState(false);
  const [floatingFilter, setFloatingFilter] = React.useState(true);
  const [aggregateCount, setAggregateCount] = useState<any[]>([]);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [isMailCheckEnable, setIsMailCheckEnable] = useState(false);

  useEffect(() => {
    getTableRowData(contestId, selectedButtonValue, pageNo, pageSize);
    handleAggregateData(contestId);
  }, []);

  const autoGroupColumnDef = useMemo<ColDef>(() => {
    return {
      headerName: "Group",
      minWidth: 170,
      field: "athlete",
      valueGetter: (params) => {
        if (params.node!.group) {
          return params.node!.key;
        } else {
          return params.data[params.colDef.field!];
        }
      },
      headerCheckboxSelection: true,
      cellRenderer: "agGroupCellRenderer",
      cellRendererParams: {
        checkbox: true,
      },
    };
  }, []);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 170,
      maxWidth: 250,
      sortable: true,
      floatingFilter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      resizable: true,
      cellStyle: { borderRightColor: "#DFE5FF" },
    };
  }, []);

  const setColumnsDisplay = (columnList) => {
    const newColumnDefs = columnDefs.map((colDef) => {
      const columnReference = columnList.find(
        (col) => col.headerName === colDef.headerName
      );
      if (columnReference) {
        return { ...colDef, hide: !columnReference.hide };
      }
    });
    onUpdateColumns(newColumnDefs);
  };

  const toogleFloatingFilter = (toggleOption: any) => {
    setFloatingFilter(toggleOption);
    const newColumnDefs = columnDefs.map((colDef) => {
      return { ...colDef, floatingFilter: toggleOption };
    });
    onUpdateColumns(newColumnDefs);
  };

  const onUpdateColumns = useCallback((data) => {
    if (gridRef?.current) gridRef.current.api.setColumnDefs(data);
  }, []);

  const onSelectionChanged = useCallback(() => {
    if (gridRef.current) {
      const rowSelection = gridRef.current.api.getSelectedRows();
      setSelectedRows(rowSelection);
    }
  }, []);
  const pageChange = (pageNumber) => {
    setPageNo(pageNumber);
    getTableRowData(contestId, selectedButtonValue, pageNumber, pageSize);
  };
  const pageSizeChange = (pageSizeChanged) => {
    setPageSize(pageSizeChanged);
    getTableRowData(contestId, selectedButtonValue, pageNo, pageSizeChanged);
  };
  const setSelectedButton = (id: number, filterValue: string) => {
    setSelectedButtonId(id);
    setSelectedButtonValue(filterValue);
    getTableRowData(contestId, filterValue, 0, 10);
  };

  const getTableRowData = async (
    contestId,
    selectedButtonValue,
    pageNo,
    pageSize
  ) => {
    const response: any = await statusFilterContestLinkedJobsekeers(
      contestId,
      selectedButtonValue,
      pageNo,
      pageSize
    );

    if (response.data.success) {
      let mapData = response.data.data.content;
      let result = mapData.map((item, index) => {
        let Data = {
          ...item,
          ...item.matchedProfileLogsList[0],
          ...item.matchedProfilesList[0],
        };
        Data.name = `${Data.firstName} ${Data.lastName}`;
        Data.appliedDate = moment(Data.appliedDate).format("DD-MM-YYYY");
        Data.ownershipTillDate = Data.ownershipTillDate
          ? moment(Data.ownershipTillDate).format("DD-MM-YYYY")
          : "";
        const y = Data.profileDetailsMap?.totalExperience?.totalExperienceYears;
        const m =
          Data.profileDetailsMap?.totalExperience?.totalExperienceMonths;
        Data.experience = `${y ? y : 0} years ${m ? m : 0} months`;
        const lakh = Data.profileDetailsMap?.expectedCtc?.expectedCtcLakh;
        const thousand =
          Data.profileDetailsMap?.expectedCtc?.expectedCtcThousand;
        Data.expectedCtc = `${lakh ? lakh : 0} lakh ${
          thousand ? thousand : 0
        } thousand`;
        Data.currentLocation = Data.profileWorkStatusMap?.currentLocation;
        Data.currentlyWorking = Data.profileDetailsMap?.currentlyWorking;
        Data.noticePeriod = Data.profileNoticePeriodMap?.noticePeriod;

        return Data;
      });
      setRowData(result);
      setTotalPages(response?.data?.data?.totalPages);
      setPageNo(response?.data?.data?.pageNo);
      setPageSize(response?.data?.data?.pageSize);
    } else {
      console.log("false");
      setRowData([]);
    }
  };

  const handleAggregateData = async (contestId) => {
    let count: any = [];

    const response: any = await JobSeekersAggregateWithContest(
      contestId,
      "status",
      "",
      ""
    );
    if (response.data.success) {
      const result = response.data.data.filter(
        (data) => data.status === "JOB_SEEKER_APPLIED"
      );
      count[0] = result[0]?.count;
    }
    const response1: any = await JobSeekersAggregateWithContest(
      contestId,
      "jobSeekerMainStage",
      "JOB_SEEKER_APPLIED",
      ""
    );
    if (response1.data.success) {
      const result1 = response1.data.data.filter(
        (data) => data.status === "hhShortlisting"
      );
      count[1] = result1[0]?.count;
      const result2 = response1.data.data.filter(
        (data) => data.status === "employerDuplication"
      );
      count[2] = result2[0]?.count;
      const result3 = response1.data.data.filter(
        (data) => data.status === "employerShortlisting"
      );
      count[3] = result3[0]?.count;
      const result4 = response1.data.data.filter(
        (data) => data.status === "phaseL1"
      );
      count[4] = result4[0]?.count;
      const result5 = response1.data.data.filter(
        (data) => data.status === "phaseL2"
      );
      count[5] = result5[0]?.count;
      const result6 = response1.data.data.filter(
        (data) => data.status === "phaseHr"
      );
      count[6] = result6[0]?.count;
      const result7 = response1.data.data.filter(
        (data) => data.status === "offerRolled"
      );
      count[7] = result7[0]?.count;
    }
    const response2: any = await JobSeekersAggregateWithContest(
      contestId,
      "coolingPeriod",
      "",
      ""
    );
    if (response2.data.success) {
      const result8 = response2.data.data.filter(
        (data) => data.status === "TOTAL_JOB_SEEKERS"
      );
      count[8] = result8[0]?.count;
    }
    setAggregateCount(count);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} p={2}>
        <Typography fontSize={30}>Profile</Typography>
        <StepCount
          StepCountList={[
            {
              label: "Submitted",
              tooltip: "Submitted",
              id: 1,
              value: "JOB_SEEKER_APPLIED",
            },
            {
              label: "HH Shortlisting",
              tooltip: "HH Shortlisting",
              id: 2,
              value: "JOB_SEEKER_APPLIED,jobSeekerMainStage:hhShortlisting",
            },
            {
              label: "Employer Duplication ",
              tooltip: "Employer Duplication",
              id: 3,
              value:
                "JOB_SEEKER_APPLIED,jobSeekerMainStage:employerDuplication",
            },
            {
              label: "Employer Shortlisting",
              tooltip: "Employer Shortlisting",
              id: 4,
              value:
                "JOB_SEEKER_APPLIED,jobSeekerMainStage:employerShortlisting",
            },
            {
              label: "Phase-L1",
              tooltip: "Phase-L1",
              id: 5,
              value: "JOB_SEEKER_APPLIED,jobSeekerMainStage:phaseL1",
            },
            {
              label: "Phase-L2",
              tooltip: "Phase-L2",
              id: 6,
              value: "JOB_SEEKER_APPLIED,jobSeekerMainStage:phaseL2",
            },
            {
              label: "Phase-HR",
              tooltip: "Phase-HR",
              id: 7,
              value: "JOB_SEEKER_APPLIED,jobSeekerMainStage:phaseHr",
            },
            {
              label: "Offer Rolled",
              tooltip: "Offer Rolled",
              id: 8,
              value: "JOB_SEEKER_APPLIED,jobSeekerMainStage:offerRolled",
            },
            {
              label: "Cooling Period",
              tooltip: "Cooling Period",
              id: 9,
              value: "JOB_SEEKER_APPLIED,coolingPeriod:notNull",
            },
          ]}
          countsList={[
            { _id: 1, count: aggregateCount[0] },
            { _id: 2, count: aggregateCount[1] },
            { _id: 3, count: aggregateCount[2] },
            { _id: 4, count: aggregateCount[3] },
            { _id: 5, count: aggregateCount[4] },
            { _id: 6, count: aggregateCount[5] },
            { _id: 7, count: aggregateCount[6] },
            { _id: 8, count: aggregateCount[7] },
            { _id: 9, count: aggregateCount[8] },
          ]}
          setSelectedButton={setSelectedButton}
          selectedButton={selectedButtonId}
        />
      </Grid>
      <Grid item xs={12}>
        <div className="forms-button-container">
          <div>
            <Button
              variant="outlined"
              className="save-draft-button"
              onClick={() => setColumnsListOpen(true)}
              disabled={columnsListOpen}
            >
              Columns <GridViewOutlinedIcon className="generic-icon" />
            </Button>
            <Button
              variant="outlined"
              className="save-draft-button"
              onClick={() => toogleFloatingFilter(!floatingFilter)}
              sx={{ background: floatingFilter ? LIGHT_GREY : "inherit" }}
            >
              Filters <FilterAltOutlinedIcon className="generic-icon" />
            </Button>
          </div>
          <div>
            <Box display={"inline-block"}>
              <Box display={"inline-block"} className={classes.actions1}>
                <Checkbox
                  disabled={selectedRows.length > 0 ? false : true}
                  checked={isMailCheckEnable}
                  onChange={() => setIsMailCheckEnable(!isMailCheckEnable)}
                />{" "}
                {selectedRows.length} Selected
              </Box>
              <MailOutlineIcon
                sx={{ color: "#4D6CD9" }}
                className={classes.mailIcon}
              />
              <img src={BookmarkIcon} />
            </Box>
          </div>
        </div>
      </Grid>
      <ColumnSelection
        AllColumns={columnDefs.map((cl) =>
          Object.assign({ headerName: cl.headerName, hide: !cl.hide })
        )}
        setColumnsDisplay={setColumnsDisplay}
        onClose={setColumnsListOpen}
        open={columnsListOpen}
      />
      <Grid item xs={12}>
        <AgGridWithPagination
          gridRef={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          suppressRowClickSelection={true}
          groupSelectsChildren={true}
          rowSelection={"multiple"}
          rowGroupPanelShow={"always"}
          pivotPanelShow={"always"}
          enableRangeSelection={true}
          pagination={false}
          pageSize={pageSize}
          onSelectionChanged={onSelectionChanged}
          pageSizeArray={PAGE_SIZE_ARRAY}
          totalPages={totalPages}
          pageChange={pageChange}
          pageSizeChange={pageSizeChange}
          // onCellValueChanged={onCellValueChanged}
        />
      </Grid>
    </Grid>
  );
};

export default AllJs;
