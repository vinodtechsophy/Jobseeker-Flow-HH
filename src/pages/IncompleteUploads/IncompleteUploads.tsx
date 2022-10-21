import React, {
  FC,
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button, Grid, Typography, Box, Tooltip } from "@mui/material";
import GridItem from "../GridItem/GridItem";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import StepCount from "../../components/StepCount";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { LIGHT_GREY } from "../../color";
import ColumnSelection from "../../components/ColumnSelection/ColumnSelection";
import BookmarkIcon from "../../assets/bookmark.svg";
import AgGridWithPagination from "../GridItem/AgGridWithPagination";
import { PAGE_SIZE_ARRAY } from "../../constants";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { LISTING_GENERIC_HEADERS } from "./ColumnHeaders";
import {
  getIncompleteUplodsStepCount,
  getJobseekersOnStepCount,
} from "../../services/JobSeekerService";
import moment from "moment";
import { makeStyles } from "@mui/styles";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const useStyles = makeStyles(() => ({
  iconStyle: { color: "#4D6CD9", margin: "5px" },
  action1: { fontSize: "15px !important" },
}));

const IncompleteUploads = (props) => {
  const { contestId, id } = props;
  const classes = useStyles();
  const gridRef = useRef<AgGridReact<any>>();
  const [columnDefs, setColumnDefs] = useState(LISTING_GENERIC_HEADERS);
  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = React.useState(0);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [rowData, setRowData] = React.useState<any[]>();
  const [selectedButtonId, setSelectedButtonId] = React.useState<Number>(1);
  const [columnsListOpen, setColumnsListOpen] = React.useState(false);
  const [floatingFilter, setFloatingFilter] = React.useState(true);
  const [selectedButtonValue, setSelectedButtonValue] = useState(1);
  const [inStepCount, setInStepCount] = useState<any>({
    step1: 0,
    step2: 0,
    step3: 0,
    step4: 0,
    step5: 0,
    step6: 0,
    step7: 0,
  });
  const [selectedEmails, setSelectedEmails] = useState<any>([]);
  const [isMailCheckEnable, setIsMailCheckEnable] = useState(false);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const setSelectedButton = (id: number, filterValue: number) => {
    console.log(filterValue, id);
    setSelectedButtonId(id);
    setSelectedButtonValue(filterValue);
    setPageNo(0);
    setPageSize(10);
  };

  const getTableRowData = async (filterValue, id, pageNo, pageSize) => {
    const response: any = await getJobseekersOnStepCount(
      filterValue,
      id,
      pageNo,
      pageSize
    );
    console.log(response?.data);
    if (response.data.success) {
      let mapData = response.data.data.content;
      let result = mapData.map((item, index) => {
        let Data = {
          ...item,
          ...item.matchedProfileLogsList[0],
          ...item.matchedProfilesList[0],
        };

        return Data;
      });

      let stateData = result.map((item, index) => {
        item.dateOfBirth = moment(item.dateOfBirth).format("DD-MM-YYYY");
        item.updatedOn = moment(item.updatedOn).format("DD-MM-YYYY");
        item.ownershipTillDate = moment(item.ownershipTillDate).format(
          "DD-MM-YYYY"
        );
        let Data = {
          ...item,
        };

        return Data;
      });

      setRowData(stateData);
      setTotalPages(response?.data?.data?.totalPages);
      setPageNo(response?.data?.data?.pageNo);
      setPageSize(response?.data?.data?.pageSize);
    } else {
      setRowData([]);
    }
  };

  const handleAggregateData = async () => {
    const response: any = await getIncompleteUplodsStepCount(id);
    console.log(response);

    if (response.data.success) {
      console.log(response.data.success);

      const result1 = response.data.data.filter(
        (data) => data.profileLastCompletedStep === "1"
      );

      const result2 = response.data.data.filter(
        (data) => data.profileLastCompletedStep === "2"
      );
      const result3 = response.data.data.filter(
        (data) => data.profileLastCompletedStep === "3"
      );
      const result4 = response.data.data.filter(
        (data) => data.profileLastCompletedStep === "4"
      );
      const result5 = response.data.data.filter(
        (data) => data.profileLastCompletedStep === "5"
      );
      const result6 = response.data.data.filter(
        (data) => data.profileLastCompletedStep === "6"
      );
      const result7 = response.data.data.filter(
        (data) => data.profileLastCompletedStep === "7"
      );

      setInStepCount({
        step1: (result1.length > 0 && result1[0].count) || 0,
        step2: (result2.length > 0 && result2[0].count) || 0,
        step3: (result3.length > 0 && result3[0].count) || 0,
        step4: (result4.length > 0 && result4[0].count) || 0,
        step5: (result5.length > 0 && result5[0].count) || 0,
        step6: (result6.length > 0 && result6[0].count) || 0,
        step7: (result7.length > 0 && result7[0].count) || 0,
      });
    } else {
      setInStepCount({
        step1: 0,
        step2: 0,
        step3: 0,
        step4: 0,
        step5: 0,
        step6: 0,
        step7: 0,
      });
    }
  };

  useEffect(() => {
    handleAggregateData();
    getTableRowData(selectedButtonValue, id, pageNo, pageSize);
  }, [selectedButtonValue, id, pageNo, pageSize]);

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
      cellStyle: { "borderRightColor": "#DFE5FF" },
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
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} p={2}>
          <Typography fontSize={30}>Incomplete Uploads</Typography>
          <StepCount
            StepCountList={[
              {
                label: "Step 1",
                tooltip: "Submitted",
                id: 1,
                value: 1,
              },
              {
                label: "Step 2",
                tooltip: "Upload Resume",
                id: 2,
                value: 2,
              },
              {
                label: "Step 3",
                tooltip: "Job Seeker Details",
                id: 3,
                value: 3,
              },
              {
                label: "Step 4",
                tooltip: "Work status",
                id: 4,
                value: 4,
              },
              {
                label: "Step 5",
                tooltip: "Notice Period",
                id: 5,
                value: 5,
              },
              {
                label: "Step 6",
                tooltip: "JD Specific Questions",
                id: 6,
                value: 6,
              },
              {
                label: "Step 7",
                tooltip: "Review and Submit",
                id: 7,
                value: 7,
              },
            ]}
            countsList={[
              { _id: 1, count: inStepCount.step1 },
              { _id: 2, count: inStepCount.step2 },
              { _id: 3, count: inStepCount.step3 },
              { _id: 4, count: inStepCount.step4 },
              { _id: 5, count: inStepCount.step5 },
              { _id: 6, count: inStepCount.step6 },
              { _id: 7, count: inStepCount.step7 },
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
              <Box display={"inline-block"} className={classes.action1}>
                <Checkbox
                  disabled={selectedRows.length > 0 ? false : true}
                  checked={isMailCheckEnable}
                  onChange={() => setIsMailCheckEnable(!isMailCheckEnable)}
                />{" "}
                {selectedRows.length} Selected
                <Tooltip title="Bookmark" placement="top" arrow>
                  <BookmarkBorderIcon className={classes.iconStyle} />
                </Tooltip>
                <Tooltip title="Mail All Jobseekers" placement="top" arrow>
                  <MailOutlineIcon
                    className={classes.iconStyle}
                    onClick={() =>
                      isMailCheckEnable &&
                      window.open(
                        `https://mail.google.com/mail/?view=cm&fs=1&to=${selectedEmails.toString()}`
                      )
                    }
                  />
                </Tooltip>
                <Tooltip title="Mail All Recruiters" placement="top" arrow>
                  <MailOutlineIcon
                    className={classes.iconStyle}
                    onClick={() =>
                      isMailCheckEnable &&
                      window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example,test@gamil.com"
                      )
                    }
                  />
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
    </>
  );
};

export default IncompleteUploads;
