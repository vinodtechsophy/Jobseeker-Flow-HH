import React, {
  ReactElement,
  FC,
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";

import Checkbox from "@mui/material/Checkbox";
import { Button, Grid, Typography, Box, Tooltip } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { relations, LISTING_GENERIC_HEADERS } from "./ColumnHeaders";
import { ColDef } from "ag-grid-community";
import StepCount from "../../components/StepCount";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { LIGHT_GREY } from "../../color";
import ColumnSelection from "../../components/ColumnSelection/ColumnSelection";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AgGridWithPagination from "../GridItem/AgGridWithPagination";
import { PAGE_SIZE_ARRAY } from "../../constants";
import {
  statusFilterContestLinkedJobsekeers,
  getAggregateData,
  consentStatusFilterContestLinkedJobsekeers,
  JobSeekersStagefilterWithContest,
  JobSeekersInCoolingPeriodWithContest,
  JobSeekersMainStageAggregateWithContest,
  JobSeekersCoolingPeriodAggregateWithContest,
} from "../../services/JobSeekerService";
import moment from "moment";
import { makeStyles } from "@mui/styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const useStyles = makeStyles(() => ({
  mailIcon: { color: "#4D6CD9", margin: "10px" },
  actions1: { fontSize: "15px !important" },
  bookmarkIcon: { color: "#4D6CD9" },
}));

const Manage = (props) => {
  const classes = useStyles();
  const { contestId, id } = props;
  const gridRef = useRef<AgGridReact<any>>();
  const [columnDefs, setColumnDefs] = useState(LISTING_GENERIC_HEADERS);
  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = React.useState(0);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [rowData, setRowData] = React.useState<any[]>();
  const [columnsListOpen, setColumnsListOpen] = React.useState(false);
  const [floatingFilter, setFloatingFilter] = React.useState(true);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [agCount, setAgCount] = useState<any>({
    vetted: 0,
    phaseL1: 0,
    phaseL2: 0,
    phaseHR: 0,
    offerRolled: 0,
    coolingPeriod: 0,
  });
  const [selectedEmails, setSelectedEmails] = useState<any>([]);
  const [isMailCheckEnable, setIsMailCheckEnable] = useState(false);
  const [selectedButtonValue, setSelectedButtonValue] = useState(
    "JOB_SEEKER_CONSENT_PASS"
  );
  const [selectedButtonId, setSelectedButtonId] = React.useState<Number>(1);

  const setSelectedButton = (id: number, filterValue: string) => {
    setSelectedButtonId(id);
    setSelectedButtonValue(filterValue);
    setPageNo(0);
    setPageSize(10);
    // getTableRowData(0, 10, id, filterValue);
  };

  useEffect(() => {
    handleAggregateData(id, selectedButtonValue);
    getTableRowData(pageNo, pageSize, id, selectedButtonValue);
  }, [pageNo, pageSize, id, selectedButtonValue]);

  const handleAggregateData = async (id, selectedButtonValue) => {
    let result5: any;
    const coolingCount: any = await JobSeekersCoolingPeriodAggregateWithContest(
      id
    );
    if (coolingCount.data.success) {
      result5 = coolingCount.data.data.filter(
        (data) => data.status === "TOTAL_JOB_SEEKERS"
      );
    } else {
      result5 = [];
    }

    const response: any = await JobSeekersMainStageAggregateWithContest(id);

    if (response.data.success) {
      const result0 = response.data.data.filter(
        (data) => data.status === "TOTAL_JOB_SEEKERS"
      );
      const result1 = response.data.data.filter(
        (data) => data.status === "phaseL1"
      );
      const result2 = response.data.data.filter(
        (data) => data.status === "phaseL2"
      );
      const result3 = response.data.data.filter(
        (data) => data.status === "phaseHr"
      );
      const result4 = response.data.data.filter(
        (data) => data.status === "offerRolled"
      );
      setAgCount({
        vetted: (result0.length > 0 && result0[0].count) || 0,
        phaseL1: (result1.length > 0 && result1[0].count) || 0,
        phaseL2: (result2.length > 0 && result2[0].count) || 0,
        phaseHR: (result3.length > 0 && result3[0].count) || 0,
        offerRolled: (result4.length > 0 && result4[0].count) || 0,
        coolingPeriod: (result5.length > 0 && result5[0].count) || 0,
      });
    } else {
      setAgCount({
        vetted: 0,
        phaseL1: 0,
        phaseL2: 0,
        phaseHR: 0,
        offerRolled: 0,
        coolingPeriod: 0,
      });
    }
  };

  const handleconsentStatusFilterContestLinkedJobsekeers = async (
    pageNo,
    pageSize,
    id,
    selectedButtonValue
  ) => {
    const response: any = await consentStatusFilterContestLinkedJobsekeers(
      id,
      selectedButtonValue,
      pageNo,
      pageSize
    );

    if (response.data.success) {
      let mapData = response.data.data.content;
      let result = mapData.map((item, index) => {
        item.appliedDate = moment(item.appliedDate).format("DD-MM-YYYY");
        if (item.nextInterviewDate) {
          item.nextInterviewDate = moment(item.nextInterviewDate).format(
            "DD-MM-YYYY"
          );
        }
        if (item.jobSeekerJoinedDate) {
          item.jobSeekerJoinedDate = moment(item.jobSeekerJoinedDate).format(
            "DD-MM-YYYY"
          );
        }
        if (item.consentDate) {
          item.consentDate = moment(item.consentDate).format("DD-MM-YYYY");
        }
        let Data = {
          ...item,
          ...item.matchedProfileLogsList[0],
          ...item.matchedProfilesList[0],
        };

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

  const handleJobSeekersStagefilterWithContest = async (
    pageNo,
    pageSize,
    id,
    selectedButtonValue
  ) => {
    const response: any = await JobSeekersStagefilterWithContest(
      id,
      selectedButtonValue,
      pageNo,
      pageSize
    );

    if (response.data.success) {
      let mapData = response.data.data.content;
      let result = mapData.map((item, index) => {
        item.appliedDate = moment(item.appliedDate).format("DD-MM-YYYY");
        if (item.nextInterviewDate) {
          item.nextInterviewDate = moment(item.nextInterviewDate).format(
            "DD-MM-YYYY"
          );
        }
        if (item.jobSeekerJoinedDate) {
          item.jobSeekerJoinedDate = moment(item.jobSeekerJoinedDate).format(
            "DD-MM-YYYY"
          );
        }
        if (item.consentDate) {
          item.consentDate = moment(item.consentDate).format("DD-MM-YYYY");
        }
        let Data = {
          ...item,
          ...item.matchedProfileLogsList[0],
          ...item.matchedProfilesList[0],
        };

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

  const handleJobSeekersInCoolingPeriodWithContest = async (
    pageNo,
    pageSize,
    id,
    selectedButtonValue
  ) => {
    const response: any = await JobSeekersInCoolingPeriodWithContest(
      id,
      selectedButtonValue,
      pageNo,
      pageSize
    );

    if (response.data.success) {
      let mapData = response.data.data.content;
      let result = mapData.map((item, index) => {
        item.appliedDate = moment(item.appliedDate).format("DD-MM-YYYY");
        if (item.nextInterviewDate) {
          item.nextInterviewDate = moment(item.nextInterviewDate).format(
            "DD-MM-YYYY"
          );
        }
        if (item.jobSeekerJoinedDate) {
          item.jobSeekerJoinedDate = moment(item.jobSeekerJoinedDate).format(
            "DD-MM-YYYY"
          );
        }
        if (item.consentDate) {
          item.consentDate = moment(item.consentDate).format("DD-MM-YYYY");
        }
        let Data = {
          ...item,
          ...item.matchedProfileLogsList[0],
          ...item.matchedProfilesList[0],
        };

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

  const getTableRowData = async (pageNo, pageSize, id, selectedButtonValue) => {
    if (selectedButtonValue === "JOB_SEEKER_CONSENT_PASS") {
      handleconsentStatusFilterContestLinkedJobsekeers(
        pageNo,
        pageSize,
        id,
        selectedButtonValue
      );
    } else if (selectedButtonValue === "notNull") {
      handleJobSeekersInCoolingPeriodWithContest(
        pageNo,
        pageSize,
        id,
        selectedButtonValue
      );
    } else {
      handleJobSeekersStagefilterWithContest(
        pageNo,
        pageSize,
        id,
        selectedButtonValue
      );
    }
  };

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
      maxWidth: 480,
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
    setPageNo(pageNumber - 1);
  };
  const pageSizeChange = (pageSizeChanged) => {
    setPageNo(0);
    setPageSize(pageSizeChanged);
  };

  const filterEmailIds = () => {
    const emails = selectedRows.map((item) => item.emailId);
    setSelectedEmails(emails);
  };

  useEffect(() => {
    filterEmailIds();
  }, [selectedRows]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} p={2}>
        <Typography fontSize={30}>Profiles</Typography>
        <StepCount
          StepCountList={[
            {
              label: "Vetted",
              tooltip: "Vetted",
              id: 1,
              value: "JOB_SEEKER_CONSENT_PASS",
            },
            {
              label: "Phase-L1",
              tooltip: "Phase-L1",
              id: 2,
              value: "phaseL1",
            },
            {
              label: "Phase-L2",
              tooltip: "Phase-L2",
              id: 3,
              value: "phaseL2",
            },
            {
              label: "Phase-HR",
              tooltip: "Phase-HR",
              id: 4,
              value: "phaseHr",
            },
            {
              label: "Offer Rolled",
              tooltip: "Offer Rolled",
              id: 5,
              value: "offerRolled",
            },
            {
              label: "Cooling Period",
              tooltip: "Cooling Period",
              id: 6,
              value: "notNull",
            },
          ]}
          countsList={[
            { _id: 1, count: agCount.vetted },
            { _id: 2, count: agCount.phaseL1 },
            { _id: 3, count: agCount.phaseL2 },
            { _id: 4, count: agCount.phaseHR },
            { _id: 5, count: agCount.offerRolled },
            { _id: 6, count: agCount.coolingPeriod },
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
            <Box display={"inline-block"} className={classes.actions1}>
              <Checkbox
                disabled={selectedRows.length > 0 ? false : true}
                checked={isMailCheckEnable}
                onChange={() => setIsMailCheckEnable(!isMailCheckEnable)}
              />{" "}
              {selectedRows.length} Selected
              <Tooltip title="Mail All Jobseekers" placement="top" arrow>
                <MailOutlineIcon
                  className={classes.mailIcon}
                  onClick={() =>
                    isMailCheckEnable &&
                    window.open(
                      `https://mail.google.com/mail/?view=cm&fs=1&to=${selectedEmails.toString()}`
                    )
                  }
                />
              </Tooltip>
              <Tooltip title="Bookmark" placement="top" arrow>
                <BookmarkBorderIcon className={classes.bookmarkIcon} />
              </Tooltip>
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

export default Manage;
