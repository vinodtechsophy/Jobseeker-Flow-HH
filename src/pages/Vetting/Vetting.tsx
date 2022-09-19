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
import GridItem from "../GridItem/GridItem";
import { AgGridReact } from "ag-grid-react";
import { relations, LISTING_GENERIC_HEADERS } from "./ColumnHeaders";
import { ColDef } from "ag-grid-community";
import StepCount from "../../components/StepCount";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { LIGHT_GREY } from "../../color";
import ColumnSelection from "../../components/ColumnSelection/ColumnSelection";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BookmarkIcon from "../../assets/bookmark.svg";
import BookmarkSelectedIcon from "../../assets/bookmark-selected.svg";
import AgGridWithPagination from "../GridItem/AgGridWithPagination";
import { PAGE_SIZE_ARRAY } from "../../constants";
import { contestLinkedJobsekeers } from "../../services/JobSeekerService";

const rowData = [
  {
    jobSeekerName: "Vinod",
    experience: 2,
    expectedCTC: "7 LPA",
    profileUploaded: "30-09-2022",
    recruiterUploading: "HiringHood",
    phoneNumber: 9493947123,
    emailAddress: "test@gmail.com",
    currentLocation: "HYD",
    currentlyWorking: "Yes",
    resumeUploaded: "No",
    changeConsentStatus: "passed",
    jobSeekerID: "HH-1234",
    changeHHShortlisting: "passed",
    changeEmployerDuplication: "",
    changeEmployerShortlisting: "",
  },
  {
    jobSeekerName: "Harish",
    experience: 2,
    expectedCTC: "7 LPA",
    profileUploaded: "30-09-2022",
    recruiterUploading: "ABC Hiring",
    phoneNumber: 9493947123,
    emailAddress: "test@gmail.com",
    currentLocation: "HYD",
    currentlyWorking: "Yes",
    resumeUploaded: "No",
    changeConsentStatus: "passed",
    jobSeekerID: "HH-1234",
    changeHHShortlisting: "passed",
    changeEmployerDuplication: "",
    changeEmployerShortlisting: "",
  },
  {
    jobSeekerName: "Joel",
    experience: 2,
    expectedCTC: "7 LPA",
    profileUploaded: "30-09-2022",
    recruiterUploading: "",
    phoneNumber: 9493947123,
    emailAddress: "test@gmail.com",
    currentLocation: "HYD",
    currentlyWorking: "Yes",
    resumeUploaded: "No",
    changeConsentStatus: "passed",
    jobSeekerID: "HH-1234",
    changeHHShortlisting: "failed",
    changeEmployerDuplication: "",
    changeEmployerShortlisting: "",
  },
  {
    jobSeekerName: "Sam",
    experience: 0,
    expectedCTC: "",
    profileUploaded: "20-09-2022",
    recruiterUploading: "",
    phoneNumber: 0,
    emailAddress: "",
    currentLocation: "",
    currentlyWorking: "",
    resumeUploaded: "",
    changeConsentStatus: "pending",
    jobSeekerID: "",
    changeHHShortlisting: "",
    changeEmployerDuplication: "",
    changeEmployerShortlisting: "",
  },
  {
    jobSeekerName: "Jagadish",
    experience: 0,
    expectedCTC: "",
    profileUploaded: "20-09-2022",
    recruiterUploading: "",
    phoneNumber: 0,
    emailAddress: "",
    currentLocation: "",
    currentlyWorking: "",
    resumeUploaded: "",
    changeConsentStatus: "failed",
    jobSeekerID: "",
    changeHHShortlisting: "",
    changeEmployerDuplication: "",
    changeEmployerShortlisting: "",
  },
  {
    jobSeekerName: "Vinod",
    experience: 2,
    expectedCTC: "7 LPA",
    profileUploaded: "30-09-2022",
    recruiterUploading: "HiringHood",
    phoneNumber: 9493947123,
    emailAddress: "test@gmail.com",
    currentLocation: "HYD",
    currentlyWorking: "Yes",
    resumeUploaded: "No",
    changeConsentStatus: "passed",
    jobSeekerID: "HH-1234",
    changeHHShortlisting: "passed",
    changeEmployerDuplication: "",
    changeEmployerShortlisting: "",
  },
  {
    jobSeekerName: "Harish",
    experience: 2,
    expectedCTC: "7 LPA",
    profileUploaded: "30-09-2022",
    recruiterUploading: "ABC Hiring",
    phoneNumber: 9493947123,
    emailAddress: "test@gmail.com",
    currentLocation: "HYD",
    currentlyWorking: "Yes",
    resumeUploaded: "No",
    changeConsentStatus: "passed",
    jobSeekerID: "HH-1234",
    changeHHShortlisting: "passed",
    changeEmployerDuplication: "",
    changeEmployerShortlisting: "",
  },
  {
    jobSeekerName: "Joel",
    experience: 2,
    expectedCTC: "7 LPA",
    profileUploaded: "30-09-2022",
    recruiterUploading: "",
    phoneNumber: 9493947123,
    emailAddress: "test@gmail.com",
    currentLocation: "HYD",
    currentlyWorking: "Yes",
    resumeUploaded: "No",
    changeConsentStatus: "passed",
    jobSeekerID: "HH-1234",
    changeHHShortlisting: "failed",
    changeEmployerDuplication: "",
    changeEmployerShortlisting: "",
  },
  {
    jobSeekerName: "Sam",
    experience: 0,
    expectedCTC: "",
    profileUploaded: "20-09-2022",
    recruiterUploading: "",
    phoneNumber: 0,
    emailAddress: "",
    currentLocation: "",
    currentlyWorking: "",
    resumeUploaded: "",
    changeConsentStatus: "pending",
    jobSeekerID: "",
    changeHHShortlisting: "",
    changeEmployerDuplication: "",
    changeEmployerShortlisting: "",
  },
  {
    jobSeekerName: "Jagadish",
    experience: 0,
    expectedCTC: "",
    profileUploaded: "20-09-2022",
    recruiterUploading: "",
    phoneNumber: 0,
    emailAddress: "",
    currentLocation: "",
    currentlyWorking: "",
    resumeUploaded: "",
    changeConsentStatus: "failed",
    jobSeekerID: "",
    changeHHShortlisting: "",
    changeEmployerDuplication: "",
    changeEmployerShortlisting: "",
  },
  {
    jobSeekerName: "Vinod",
    experience: 2,
    expectedCTC: "7 LPA",
    profileUploaded: "30-09-2022",
    recruiterUploading: "HiringHood",
    phoneNumber: 9493947123,
    emailAddress: "test@gmail.com",
    currentLocation: "HYD",
    currentlyWorking: "Yes",
    resumeUploaded: "No",
    changeConsentStatus: "passed",
    jobSeekerID: "HH-1234",
    changeHHShortlisting: "passed",
    changeEmployerDuplication: "",
    changeEmployerShortlisting: "",
  },
  {
    jobSeekerName: "Harish",
    experience: 2,
    expectedCTC: "7 LPA",
    profileUploaded: "30-09-2022",
    recruiterUploading: "ABC Hiring",
    phoneNumber: 9493947123,
    emailAddress: "test@gmail.com",
    currentLocation: "HYD",
    currentlyWorking: "Yes",
    resumeUploaded: "No",
    changeConsentStatus: "passed",
    jobSeekerID: "HH-1234",
    changeHHShortlisting: "passed",
    changeEmployerDuplication: "",
    changeEmployerShortlisting: "",
  },
  {
    jobSeekerName: "Joel",
    experience: 2,
    expectedCTC: "7 LPA",
    profileUploaded: "30-09-2022",
    recruiterUploading: "",
    phoneNumber: 9493947123,
    emailAddress: "test@gmail.com",
    currentLocation: "HYD",
    currentlyWorking: "Yes",
    resumeUploaded: "No",
    changeConsentStatus: "passed",
    jobSeekerID: "HH-1234",
    changeHHShortlisting: "failed",
    changeEmployerDuplication: "",
    changeEmployerShortlisting: "",
  },
  {
    jobSeekerName: "Sam",
    experience: 0,
    expectedCTC: "",
    profileUploaded: "20-09-2022",
    recruiterUploading: "",
    phoneNumber: 0,
    emailAddress: "",
    currentLocation: "",
    currentlyWorking: "",
    resumeUploaded: "",
    changeConsentStatus: "pending",
    jobSeekerID: "",
    changeHHShortlisting: "",
    changeEmployerDuplication: "",
    changeEmployerShortlisting: "",
  },
  {
    jobSeekerName: "Jagadish",
    experience: 0,
    expectedCTC: "",
    profileUploaded: "20-09-2022",
    recruiterUploading: "",
    phoneNumber: 0,
    emailAddress: "",
    currentLocation: "",
    currentlyWorking: "",
    resumeUploaded: "",
    changeConsentStatus: "failed",
    jobSeekerID: "",
    changeHHShortlisting: "",
    changeEmployerDuplication: "",
    changeEmployerShortlisting: "",
  },
];

const Vetting = () => {
  const gridRef = useRef<AgGridReact<any>>();
  const [columnDefs, setColumnDefs] = useState(LISTING_GENERIC_HEADERS);
  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = React.useState(1);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(4);
  // const [rowData, setRowData] = React.useState<any[]>();
  const [selectedButton, setSelectedButton] = React.useState<Number>(1);
  const [columnsListOpen, setColumnsListOpen] = React.useState(false);
  const [floatingFilter, setFloatingFilter] = React.useState(true);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  useEffect(() => {
    const getTableRowData = async () => {
      const response = await contestLinkedJobsekeers(
        "CONTEST_07_10078",
        0,
        100
      );
      console.log(response?.data);
      // setTotalPages(response?.data?.data?.totalPages);
      // setPageNo(response?.data?.data?.page);
      // setPageSize(response?.data?.data?.size);
    };
    getTableRowData();
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
      cellStyle: { "border-right-color": "#DFE5FF" },
    };
  }, []);

  console.log(columnDefs);

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
    // apiCallRelatedFormData(contestStatus, pageNumber - 1);
  };
  const pageSizeChange = (pageSizeChanged) => {
    setPageSize(pageSizeChanged);
    // apiCallRelatedFormData(contestStatus, 0, pageSizeChanged);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} p={2}>
        <Typography fontSize={30}>Profiles</Typography>
        <StepCount
          StepCountList={[
            {
              label: "Submitted",
              tooltip: "Submitted",
              id: 1,
            },
            {
              label: "Consent",
              tooltip: "Consent",
              id: 2,
            },
            {
              label: "HH Shortlisting",
              tooltip: "HH Shortlisting",
              id: 3,
            },
            {
              label: "Employer Duplication",
              tooltip: "Employer Duplication",
              id: 4,
            },
            {
              label: "Employer Shortlisting",
              tooltip: "Employer Shortlisting",
              id: 5,
            },
          ]}
          countsList={[
            { _id: 1, count: 5 },
            { _id: 2, count: 5 },
            { _id: 3, count: 5 },
            { _id: 4, count: 5 },
            { _id: 5, count: 5 },
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
            <Box display={"inline-block"}>
              <Checkbox /> 10 Selected
              <DeleteOutlineIcon sx={{ color: "#4D6CD9" }} />
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

export default Vetting;
