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
import { Button, Grid, Typography, Box } from "@mui/material";
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
  contestLinkedJobsekeers,
  getAggregateData,
} from "../../services/JobSeekerService";
import KeycloakService from "../../services/KeycloakService";
import moment from "moment";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  deleteIcon: { color: "#4D6CD9", margin: "10px" },
  actions1: { fontSize: "15px !important" },
  bookmarkIcon: { color: "#4D6CD9" },
}));

// const rowData = [
//   {
//     jobSeekerName: "Vinod",
//     experience: 2,
//     expectedCTC: "7 LPA",
//     profileUploaded: "30-09-2022",
//     recruiterUploading: "HiringHood",
//     phoneNumber: 9493947123,
//     emailAddress: "test@gmail.com",
//     currentLocation: "HYD",
//     currentlyWorking: "Yes",
//     resumeUploaded: "No",
//     changeConsentStatus: "passed",
//     jobSeekerID: "HH-1234",
//     changeHHShortlisting: "passed",
//     changeEmployerDuplication: "",
//     changeEmployerShortlisting: "",
//   },
//   {
//     jobSeekerName: "Harish",
//     experience: 2,
//     expectedCTC: "7 LPA",
//     profileUploaded: "30-09-2022",
//     recruiterUploading: "ABC Hiring",
//     phoneNumber: 9493947123,
//     emailAddress: "test@gmail.com",
//     currentLocation: "HYD",
//     currentlyWorking: "Yes",
//     resumeUploaded: "No",
//     changeConsentStatus: "passed",
//     jobSeekerID: "HH-1234",
//     changeHHShortlisting: "passed",
//     changeEmployerDuplication: "",
//     changeEmployerShortlisting: "",
//   },
//   {
//     jobSeekerName: "Joel",
//     experience: 2,
//     expectedCTC: "7 LPA",
//     profileUploaded: "30-09-2022",
//     recruiterUploading: "",
//     phoneNumber: 9493947123,
//     emailAddress: "test@gmail.com",
//     currentLocation: "HYD",
//     currentlyWorking: "Yes",
//     resumeUploaded: "No",
//     changeConsentStatus: "passed",
//     jobSeekerID: "HH-1234",
//     changeHHShortlisting: "failed",
//     changeEmployerDuplication: "",
//     changeEmployerShortlisting: "",
//   },
//   {
//     jobSeekerName: "Sam",
//     experience: 0,
//     expectedCTC: "",
//     profileUploaded: "20-09-2022",
//     recruiterUploading: "",
//     phoneNumber: 0,
//     emailAddress: "",
//     currentLocation: "",
//     currentlyWorking: "",
//     resumeUploaded: "",
//     changeConsentStatus: "pending",
//     jobSeekerID: "",
//     changeHHShortlisting: "",
//     changeEmployerDuplication: "",
//     changeEmployerShortlisting: "",
//   },
//   {
//     jobSeekerName: "Jagadish",
//     experience: 0,
//     expectedCTC: "",
//     profileUploaded: "20-09-2022",
//     recruiterUploading: "",
//     phoneNumber: 0,
//     emailAddress: "",
//     currentLocation: "",
//     currentlyWorking: "",
//     resumeUploaded: "",
//     changeConsentStatus: "failed",
//     jobSeekerID: "",
//     changeHHShortlisting: "",
//     changeEmployerDuplication: "",
//     changeEmployerShortlisting: "",
//   },
//   {
//     jobSeekerName: "Vinod",
//     experience: 2,
//     expectedCTC: "7 LPA",
//     profileUploaded: "30-09-2022",
//     recruiterUploading: "HiringHood",
//     phoneNumber: 9493947123,
//     emailAddress: "test@gmail.com",
//     currentLocation: "HYD",
//     currentlyWorking: "Yes",
//     resumeUploaded: "No",
//     changeConsentStatus: "passed",
//     jobSeekerID: "HH-1234",
//     changeHHShortlisting: "passed",
//     changeEmployerDuplication: "",
//     changeEmployerShortlisting: "",
//   },
//   {
//     jobSeekerName: "Harish",
//     experience: 2,
//     expectedCTC: "7 LPA",
//     profileUploaded: "30-09-2022",
//     recruiterUploading: "ABC Hiring",
//     phoneNumber: 9493947123,
//     emailAddress: "test@gmail.com",
//     currentLocation: "HYD",
//     currentlyWorking: "Yes",
//     resumeUploaded: "No",
//     changeConsentStatus: "passed",
//     jobSeekerID: "HH-1234",
//     changeHHShortlisting: "passed",
//     changeEmployerDuplication: "",
//     changeEmployerShortlisting: "",
//   },
//   {
//     jobSeekerName: "Joel",
//     experience: 2,
//     expectedCTC: "7 LPA",
//     profileUploaded: "30-09-2022",
//     recruiterUploading: "",
//     phoneNumber: 9493947123,
//     emailAddress: "test@gmail.com",
//     currentLocation: "HYD",
//     currentlyWorking: "Yes",
//     resumeUploaded: "No",
//     changeConsentStatus: "passed",
//     jobSeekerID: "HH-1234",
//     changeHHShortlisting: "failed",
//     changeEmployerDuplication: "",
//     changeEmployerShortlisting: "",
//   },
//   {
//     jobSeekerName: "Sam",
//     experience: 0,
//     expectedCTC: "",
//     profileUploaded: "20-09-2022",
//     recruiterUploading: "",
//     phoneNumber: 0,
//     emailAddress: "",
//     currentLocation: "",
//     currentlyWorking: "",
//     resumeUploaded: "",
//     changeConsentStatus: "pending",
//     jobSeekerID: "",
//     changeHHShortlisting: "",
//     changeEmployerDuplication: "",
//     changeEmployerShortlisting: "",
//   },
//   {
//     jobSeekerName: "Jagadish",
//     experience: 0,
//     expectedCTC: "",
//     profileUploaded: "20-09-2022",
//     recruiterUploading: "",
//     phoneNumber: 0,
//     emailAddress: "",
//     currentLocation: "",
//     currentlyWorking: "",
//     resumeUploaded: "",
//     changeConsentStatus: "failed",
//     jobSeekerID: "",
//     changeHHShortlisting: "",
//     changeEmployerDuplication: "",
//     changeEmployerShortlisting: "",
//   },
//   {
//     jobSeekerName: "Vinod",
//     experience: 2,
//     expectedCTC: "7 LPA",
//     profileUploaded: "30-09-2022",
//     recruiterUploading: "HiringHood",
//     phoneNumber: 9493947123,
//     emailAddress: "test@gmail.com",
//     currentLocation: "HYD",
//     currentlyWorking: "Yes",
//     resumeUploaded: "No",
//     changeConsentStatus: "passed",
//     jobSeekerID: "HH-1234",
//     changeHHShortlisting: "passed",
//     changeEmployerDuplication: "",
//     changeEmployerShortlisting: "",
//   },
//   {
//     jobSeekerName: "Harish",
//     experience: 2,
//     expectedCTC: "7 LPA",
//     profileUploaded: "30-09-2022",
//     recruiterUploading: "ABC Hiring",
//     phoneNumber: 9493947123,
//     emailAddress: "test@gmail.com",
//     currentLocation: "HYD",
//     currentlyWorking: "Yes",
//     resumeUploaded: "No",
//     changeConsentStatus: "passed",
//     jobSeekerID: "HH-1234",
//     changeHHShortlisting: "passed",
//     changeEmployerDuplication: "",
//     changeEmployerShortlisting: "",
//   },
//   {
//     jobSeekerName: "Joel",
//     experience: 2,
//     expectedCTC: "7 LPA",
//     profileUploaded: "30-09-2022",
//     recruiterUploading: "",
//     phoneNumber: 9493947123,
//     emailAddress: "test@gmail.com",
//     currentLocation: "HYD",
//     currentlyWorking: "Yes",
//     resumeUploaded: "No",
//     changeConsentStatus: "passed",
//     jobSeekerID: "HH-1234",
//     changeHHShortlisting: "failed",
//     changeEmployerDuplication: "",
//     changeEmployerShortlisting: "",
//   },
//   {
//     jobSeekerName: "Sam",
//     experience: 0,
//     expectedCTC: "",
//     profileUploaded: "20-09-2022",
//     recruiterUploading: "",
//     phoneNumber: 0,
//     emailAddress: "",
//     currentLocation: "",
//     currentlyWorking: "",
//     resumeUploaded: "",
//     changeConsentStatus: "pending",
//     jobSeekerID: "",
//     changeHHShortlisting: "",
//     changeEmployerDuplication: "",
//     changeEmployerShortlisting: "",
//   },
//   {
//     jobSeekerName: "Jagadish",
//     experience: 0,
//     expectedCTC: "",
//     profileUploaded: "20-09-2022",
//     recruiterUploading: "",
//     phoneNumber: 0,
//     emailAddress: "",
//     currentLocation: "",
//     currentlyWorking: "",
//     resumeUploaded: "",
//     changeConsentStatus: "failed",
//     jobSeekerID: "",
//     changeHHShortlisting: "",
//     changeEmployerDuplication: "",
//     changeEmployerShortlisting: "",
//   },
// ];

const Manage = (props) => {
  const classes = useStyles();
  const { contestId } = props;
  const gridRef = useRef<AgGridReact<any>>();
  const [columnDefs, setColumnDefs] = useState(LISTING_GENERIC_HEADERS);
  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = React.useState(0);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [rowData, setRowData] = React.useState<any[]>();
  const [selectedButton, setSelectedButton] = React.useState<Number>(1);
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

  useEffect(() => {
    fetchToken();
  }, [contestId]);

  const fetchToken = async () => {
    const token = await KeycloakService.fetchTokenOtherUser();
    sessionStorage.setItem("react-token", token);
  };

  useEffect(() => {
    getTableRowData(pageNo, pageSize, contestId);
    handleAggregateData(contestId);
  }, []);

  const handleAggregateData = async (contestId) => {
    const response: any = await getAggregateData(contestId);

    if (response.data.success) {
      setAgCount({
        vetted: 0,
        phaseL1: 0,
        phaseL2: 0,
        phaseHR: 0,
        offerRolled: 0,
        coolingPeriod: 0,
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

  const getTableRowData = async (pageNo, pageSize, contestId) => {
    const response: any = await contestLinkedJobsekeers(
      contestId,
      pageNo,
      pageSize
    );

    if (response.data.success) {
      let mapData = response.data.data.content;
      let result = mapData.map((item, index) => {
        item.appliedDate = moment(item.appliedDate).format("DD-MM-YYYY");

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
      cellStyle: { "border-right-color": "#DFE5FF" },
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

  useEffect(() => {
    // call api with new pagenumber
    getTableRowData(pageNo, pageSize, contestId);
  }, [pageNo, pageSize, contestId]);

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
    setPageSize(pageSizeChanged);
  };

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
            },
            {
              label: "Phase-L1",
              tooltip: "Phase-L1",
              id: 2,
            },
            {
              label: "Phase-L2",
              tooltip: "Phase-L2",
              id: 3,
            },
            {
              label: "Phase-HR",
              tooltip: "Phase-HR",
              id: 4,
            },
            {
              label: "Offer Rolled",
              tooltip: "Offer Rolled",
              id: 5,
            },
            {
              label: "Cooling Period",
              tooltip: "Cooling Period",
              id: 6,
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
          selectedButton={selectedButton}
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
              <Checkbox /> {selectedRows.length} Selected
              <DeleteOutlineIcon className={classes.deleteIcon} />
              <BookmarkBorderIcon className={classes.bookmarkIcon} />
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
