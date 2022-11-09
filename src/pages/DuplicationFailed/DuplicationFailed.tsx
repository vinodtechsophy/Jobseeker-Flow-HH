import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback,
  FC,
} from "react";
import { Button, Grid, Typography, Box, Checkbox } from "@mui/material";
import StepCount from "../../components/StepCount";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { LISTING_GENERIC_HEADERS } from "./DuplicationFailedColumnHeaders";
import ColumnSelection from "../../components/ColumnSelection/ColumnSelection";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { LIGHT_GREY } from "../../color";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BookmarkIcon from "../../../src/assets/bookmark.svg";
import { PAGE_SIZE_ARRAY } from "../../constants";
import AgGridWithPagination from "../GridItem/AgGridWithPagination";
import {
  getDuplicationFailedProfiles,
  getDuplicationFailedProfilesAggregate,
} from "../../services/JobSeekerService";
import moment from "moment";

const DuplicationFailed: FC<any> = (props) => {
  const [selectedButtonId, setSelectedButtonId] = useState<Number>(1);
  const [selectedButtonValue, setSelectedButtonValue] = useState("SUBMITTED");

  const gridRef = useRef<AgGridReact<any>>();
  const [columnDefs, setColumnDefs] = useState(LISTING_GENERIC_HEADERS);
  const [pageSize, setPageSize] = useState(10);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [rowData, setRowData] = useState<any[]>();
  const [columnsListOpen, setColumnsListOpen] = React.useState(false);
  const [floatingFilter, setFloatingFilter] = React.useState(true);
  const [pageNo, setPageNo] = React.useState(0);
  const [agCount, setAgCount] = useState<any>({});

  useEffect(() => {
    apiCallAggregateData();
    apiCallDuplicationFailedData(selectedButtonValue, pageNo, pageSize);
  }, []);

  const setSelectedButton = (id: number, filterValue: string) => {
    setSelectedButtonId(id);
    setSelectedButtonValue(filterValue);
    apiCallDuplicationFailedData(filterValue, 0, 10);
  };
  const apiCallAggregateData = async () => {
    const response: any = await getDuplicationFailedProfilesAggregate(
      props.contestId
    );

    if (response.data.success) {
      const result = response.data.data;
      const t = {};
      result.map((data: { count: number; status: string }) => {
        Object.assign(t, { [data.status]: data.count });
      });
      setAgCount(t);
    }
  };

  const apiCallDuplicationFailedData = async (
    filterValue: string,
    page: number,
    size: number
  ) => {
    // if (gridRef.current) {
    //   console.log(gridRef.current.api.showLoadingOverlay());
    //   gridRef.current.api.showLoadingOverlay();
    // }
    const response: any = await getDuplicationFailedProfiles(
      filterValue,
      page,
      size,
      props.contestId
    );
    if (response?.data?.success) {
      const duplicationFailedRecords = response?.data?.data?.content;

      let result = duplicationFailedRecords.map((item, index) => {
        const janmDin = item.dateOfBirth;
        if (janmDin == "N/A") item.dateOfBirth = "N/A";
        else item.dateOfBirth = moment(janmDin).utc().format("DD-MM-YYYY");

        if (item.status === "PDC_PASS") {
          item.fdcStatus = "N/A";
        } else if (item.status === "FDC_PASS") {
          item.status = "PDC_PASS";
          item.fdcStatus = "FDC_PASS";
        } else {
          item.status = "PDC_PASS";
          item.fdcStatus = "FDC_FAIL";
        }

        return item;
      });

      setRowData(result);
      setTotalPages(response?.data?.data?.totalPages);
      setPageNo(response?.data?.data?.pageNo);
      setPageSize(response?.data?.data?.pageSize);
    } else {
      setRowData([]);
    }
    // if (gridRef.current) {
    //   gridRef.current.api.hideOverlay();
    // }
  };
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
    apiCallDuplicationFailedData(selectedButtonValue, pageNumber - 1, pageSize);
  };
  const pageSizeChange = (pageSizeChanged) => {
    setPageSize(pageSizeChanged);
    apiCallDuplicationFailedData(selectedButtonValue, pageNo, pageSizeChanged);
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
              value: "SUBMITTED",
            },
            {
              label: "PDC Fail",
              tooltip: "PDC Fail",
              id: 2,
              value: "PDC_FAIL",
            },
            {
              label: "PDC Pass",
              tooltip: "PDC Pass",
              id: 3,
              value: "PDC_PASS",
            },
            {
              label: "FDC Fail",
              tooltip: "FDC Fail",
              id: 4,
              value: "FDC_FAIL",
            },
          ]}
          countsList={[
            {
              _id: 1,
              count:
                (agCount?.PDC_PASS ? agCount?.PDC_PASS : 0) +
                (agCount?.FDC_FAIL ? agCount?.FDC_FAIL : 0) +
                (agCount?.PDC_FAIL ? agCount?.PDC_FAIL : 0),
            },
            { _id: 2, count: agCount.PDC_FAIL },
            { _id: 3, count: agCount.PDC_PASS },
            { _id: 4, count: agCount.FDC_FAIL },
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
          currentPage={pageNo + 1}
          // onCellValueChanged={onCellValueChanged}
        />
      </Grid>
    </Grid>
  );
};

export default DuplicationFailed;
