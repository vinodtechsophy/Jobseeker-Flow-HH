import React, { ReactElement, FC, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
import { MenuItem, Select, Typography, Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MAIN_BLUE, WHITE_TEXT } from "../../color";
import "./AgGrid.css";
const theme = createTheme({
  palette: {
    primary: {
      main: MAIN_BLUE,
      contrastText: WHITE_TEXT,
    },
  },
});

const GridItem: FC<any> = (props): ReactElement => {
  const [gotData, setGotData] = React.useState(false);
  const [type, setType] = React.useState("");

  useEffect(() => {}, []);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    props.pageChange(value);
  };
  const getRowStyle = (params: any) => {
    if (params.node.rowIndex % 2 != 0) {
      return { background: "#F1F7FF" };
    }
  };
  
  const onCellClicked = (event) => {
    if(event?.colDef?.headerName === "Upload Profile") {
      props.fulfillUpload(event?.data);
    }
  }

  return (
    <div className="ag-theme-alpine grid-container ag-root-wrapper ">
      <AgGridReact
        ref={props.gridRef}
        rowData={props.rowData}
        columnDefs={props.columnDefs}
        defaultColDef={props.defaultColDef}
        getRowStyle={getRowStyle}
        onGridReady={props.onGridReady}
        autoGroupColumnDef={props.autoGroupColumnDef}
        suppressRowClickSelection={props.suppressRowClickSelection}
        groupSelectsChildren={props.groupSelectsChildren}
        rowSelection={props.rowSelection}
        rowGroupPanelShow={props.rowGroupPanelShow}
        pivotPanelShow={props.pivotPanelShow}
        enableRangeSelection={props.enableRangeSelection}
        pagination={props.pagination}
        onSelectionChanged={props.onSelectionChanged}
        onCellClicked={onCellClicked}
      />
      {/* <div className="pagination-container">
        <Select
          label={false}
          value={props.pageSize}
          size="small"
          className="grid-select"
          onChange={(e) => props.pageSizeChange(e.target.value)}
        >
          {props.pageSizeArray.map((size: string) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
        <ThemeProvider theme={theme}>
          <Pagination
            count={props.totalPages}
            shape="rounded"
            color="primary"
            onChange={handleChange}
          />
        </ThemeProvider>
      </div> */}
    </div>
  );
};

export default GridItem;
