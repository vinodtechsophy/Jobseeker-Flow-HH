import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { Button, Grid, Typography, Box, Checkbox } from "@mui/material";
import StepCount from "../../components/StepCount";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { LISTING_GENERIC_HEADERS } from "./DuplicationFailedColumnHeaders";
import KeycloakService from "../../services/KeycloakService";
import ColumnSelection from "../../components/ColumnSelection/ColumnSelection";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { LIGHT_GREY } from "../../color";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BookmarkIcon from "../../assets/bookmark.svg";
import { PAGE_SIZE_ARRAY } from "../../constants";
import AgGridWithPagination from "../GridItem/AgGridWithPagination";

const DuplicationFailed = () => {
  const [selectedButton, setSelectedButton] = useState<Number>(1);
  const gridRef = useRef<AgGridReact<any>>();
  const [columnDefs, setColumnDefs] = useState(LISTING_GENERIC_HEADERS);
  const [pageSize, setPageSize] = useState(10);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(2);
  const [rowData, setRowData] = useState<any[]>();
  const [columnsListOpen, setColumnsListOpen] = React.useState(false);
  const [floatingFilter, setFloatingFilter] = React.useState(true);
  const [pageNo, setPageNo] = React.useState(0);

  const row = [
    {
      firstName: "Vinod",
      lastName: 2,
      dob: "30-09-2022",
      recruiterUploading: "",
      phoneNumber: 9493947123,
      emailAddress: "test@gmail.com",
      pdcStatus: "HYD",
      fdcStatus: "Yes",
      interviewed: "no",
      panNumber: "HH-1234",
    },
    {
      firstName: "Harish",
      lastName: 2,
      expectedCTC: "7 LPA",
      dob: "30-09-2022",
      recruiterUploading: "",
      phoneNumber: 9493947123,
      emailAddress: "test@gmail.com",
      pdcStatus: "HYD",
      currentlyWorking: "Yes",
      interviewed: "no",
      panNumber: "HH-1234",
    },
    {
      firstName: "Joel",
      lastName: 2,
      expectedCTC: "7 LPA",
      dob: "30-09-2022",
      recruiterUploading: "",
      phoneNumber: 9493947123,
      emailAddress: "test@gmail.com",
      pdcStatus: "HYD",
      currentlyWorking: "Yes",
      interviewed: "no",
      panNumber: "HH-1234",
    },
    {
      firstName: "Sam",
      lastName: 0,
      expectedCTC: "",
      dob: "20-09-2022",
      recruiterUploading: "",
      phoneNumber: 0,
      emailAddress: "",
      pdcStatus: "",
      currentlyWorking: "",
      interviewed: "no",
      panNumber: "",
    },
    {
      firstName: "Jagadish",
      lastName: 0,
      expectedCTC: "",
      dob: "20-09-2022",
      recruiterUploading: "",
      phoneNumber: 0,
      emailAddress: "",
      pdcStatus: "",
      currentlyWorking: "",
      interviewed: "no",
      panNumber: "",
    },
    {
      firstName: "Vinod",
      lastName: 2,
      expectedCTC: "7 LPA",
      dob: "30-09-2022",
      recruiterUploading: "",
      phoneNumber: 9493947123,
      emailAddress: "test@gmail.com",
      pdcStatus: "HYD",
      currentlyWorking: "Yes",
      interviewed: "no",
      panNumber: "HH-1234",
    },
    {
      firstName: "Harish",
      lastName: 2,
      expectedCTC: "7 LPA",
      dob: "30-09-2022",
      recruiterUploading: "",
      phoneNumber: 9493947123,
      emailAddress: "test@gmail.com",
      pdcStatus: "HYD",
      currentlyWorking: "Yes",
      interviewed: "yes",
      panNumber: "HH-1234",
    },
  ];

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

  useEffect(() => {
    fetchToken();
  }, []);

  const fetchToken = async () => {
    const token = await KeycloakService.fetchTokenOtherUser();
    sessionStorage.setItem("react-token", token);
  };

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
    <Grid container spacing={3} rowSpacing={4}>
      <Grid item xs={12} p={2}>
        <Typography fontSize={30}>
          Previously Failed PDC and FDC Profiles.
        </Typography>
      </Grid>
      <Grid item xs={12} p={2}>
        <StepCount
          StepCountList={[
            {
              label: "Submitted",
              tooltip: "Submitted",
              id: 1,
            },
            {
              label: "PDC Fail",
              tooltip: "PDC Fail",
              id: 2,
            },
            {
              label: "PDC Pass",
              tooltip: "PDC Pass",
              id: 3,
            },
            {
              label: "FDC Fail",
              tooltip: "FDC Fail",
              id: 4,
            },
          ]}
          countsList={[
            { _id: 1, count: 5 },
            { _id: 2, count: 5 },
            { _id: 3, count: 5 },
            { _id: 4, count: 5 },
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
              {/* <DeleteOutlineIcon color="primary" /> */}
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
          rowData={row}
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

export default DuplicationFailed;
