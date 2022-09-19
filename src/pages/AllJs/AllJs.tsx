import React, {
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
import { ColDef } from "ag-grid-community";
import StepCount from "../../components/StepCount";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { LIGHT_GREY } from "../../color";
import ColumnSelection from "../../components/ColumnSelection/ColumnSelection";
import BookmarkIcon from "../../assets/bookmark.svg";
import { relations, LISTING_GENERIC_HEADERS } from "./ColumnHeader";
import AgGridWithPagination from "../GridItem/AgGridWithPagination";
import { PAGE_SIZE_ARRAY } from "../../constants";
import { contestLinkedJobsekeers } from "../../services/JobSeekerService";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const rowData = [
  {
    jobSeekerName: "Narayana",
    jobSeekerID: "HH-121",
    technology: "JAVA",
    experience: "2Years",
    expectedCTC: "6Lakhs",
    profileUploaded: "12-08-2022",
    ownershipExpiryDate: "30-08-2022",
    profileOwnedby: "Vinod",
    lastCurrentContestParticipated: "DataScience",
    jobSeekerMainStage: "Data",
    jobSeekerSubStage: "onHold",
    jobSeekerComment: "pending",
    belongstoCollection: "High",
    phoneNumber: 9014064300,
    emailAddress: "narayana@gmail.com",
    currentLocation: "hyderabad",
    currentlyWorking: "yes",
    noticePeriod: "30 days",
    resumeUploaded: "yes",
  },
  {
    jobSeekerName: "Bujji",
    jobSeekerID: "HH-122",
    technology: "JAVA",
    experience: "2Years",
    expectedCTC: "6Lakhs",
    profileUploaded: "19-07-2022",
    ownershipExpiryDate: "30-08-2022",
    profileOwnedby: "Vinod",
    lastCurrentContestParticipated: "DataScience",
    jobSeekerMainStage: "Data",
    jobSeekerSubStage: "onHold",
    jobSeekerComment: "pending",
    belongstoCollection: "High",
    phoneNumber: 9703121036,
    emailAddress: "narayana@gmail.com",
    currentLocation: "hyderabad",
    currentlyWorking: "yes",
    noticePeriod: "30 days",
    resumeUploaded: "yes",
  },
  {
    jobSeekerName: "Sai",
    jobSeekerID: "HH-123",
    technology: "JAVA",
    experience: "2Years",
    expectedCTC: "6Lakhs",
    profileUploaded: "11-08-2022",
    ownershipExpiryDate: "30-07-2022",
    profileOwnedby: "Vinod",
    lastCurrentContestParticipated: "DataScience",
    jobSeekerMainStage: "Data",
    jobSeekerSubStage: "onHold",
    jobSeekerComment: "pending",
    belongstoCollection: "High",
    phoneNumber: 9494764509,
    emailAddress: "narayana@gmail.com",
    currentLocation: "hyderabad",
    currentlyWorking: "yes",
    noticePeriod: "30 days",
    resumeUploaded: "yes",
  },
];
const AllJs = () => {
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
        <Typography fontSize={30}>Profile</Typography>
        <StepCount
          StepCountList={[
            {
              label: "Submitted",
              tooltip: "Submitted",
              id: 1,
            },
            {
              label: "HH Shortlisting",
              tooltip: "HH Shortlisting",
              id: 2,
            },
            {
              label: "Employer Duplication ",
              tooltip: "Employer Duplication",
              id: 3,
            },
            {
              label: "Employer Shortlisting",
              tooltip: "Employer Shortlisting",
              id: 4,
            },
            {
              label: "Phase-L1",
              tooltip: "Phase-L1",
              id: 5,
            },
            {
              label: "Phase-L2",
              tooltip: "Phase-L2",
              id: 6,
            },
            {
              label: "Phase-HR",
              tooltip: "Phase-HR",
              id: 7,
            },
            {
              label: "Offer Rolled",
              tooltip: "Offer Rolled",
              id: 8,
            },
            {
              label: "Cooling Period",
              tooltip: "Cooling Period",
              id: 9,
            },
          ]}
          countsList={[
            { _id: 1, count: 12 },
            { _id: 2, count: 8 },
            { _id: 3, count: 6 },
            { _id: 4, count: 4 },
            { _id: 5, count: 8 },
            { _id: 6, count: 6 },
            { _id: 7, count: 4 },
            { _id: 8, count: 2 },
            { _id: 9, count: 2 },
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
              <MailOutlineIcon sx={{ color: "#4D6CD9" }} />
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
