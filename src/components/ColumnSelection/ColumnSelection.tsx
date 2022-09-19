import React, { ReactElement, FC, useEffect } from "react";
import {
  Grid,
  Dialog,
  Divider,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { COLUMNS_TEXT, ALL_KEY } from "../../constants";

const ColumnSelection: FC<any> = (props): ReactElement => {
  const { onClose, open, setColumnsDisplay, AllColumns } = props;

  const [selectAll, setSelectAll] = React.useState(true);
  const [currentColumns, setCurrentColumns] = React.useState(AllColumns);

  const handleClose = () => {
    onClose(false);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  const handleChange = (event, column) => {
    if (column === ALL_KEY && event.target.checked) {
      AllColumns.forEach((col) => (col.hide = true));
      setColumnsDisplay(AllColumns);
      setSelectAll(true);
      setCurrentColumns((cols) => [...AllColumns]);
    } else if (column !== ALL_KEY) {
      if (selectAll === true) setSelectAll(false);
      const colIndex = AllColumns.findIndex((val) => val.headerName === column);
      const allCount = AllColumns.reduce(
        (total, column) => total + (column.hide === true ? 1 : 0),
        0
      );
      const currentCount = currentColumns.reduce(
        (total, column) => total + (column.hide === true ? 1 : 0),
        0
      );
      const currentDifference = Math.abs(allCount - currentCount);
      if (currentDifference > 1) {
        currentColumns[colIndex] = {
          headerName: column,
          hide: event.target.checked,
        };
        setCurrentColumns((cols) => [...currentColumns]);
        setColumnsDisplay(currentColumns);
        const hideArr = currentColumns
          .filter((col) => col.headerName !== undefined)
          .map((column) => column.hide)
          .findIndex((hide) => hide === false);
        if (hideArr === -1) setSelectAll(true);
      } else {
        AllColumns[colIndex] = {
          headerName: column,
          hide: event.target.checked,
        };
        setCurrentColumns((cols) => [...AllColumns]);
        setColumnsDisplay(AllColumns);
        const hideArr = AllColumns.filter((col) => col.headerName !== undefined)
          .map((column) => column.hide)
          .findIndex((hide) => hide === false);
        if (hideArr === -1) setSelectAll(true);
      }
    } else {
      setSelectAll(false);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Grid container spacing={1} my={2}>
        <Grid xs={6} pl={10}>
          <p className="columns-dialog-title">{COLUMNS_TEXT}</p>
        </Grid>
        <Grid xs={6} pl={10}>
          <FormControlLabel
            value={selectAll}
            checked={selectAll}
            control={<Checkbox />}
            label="Show All Columns"
            onChange={(e) => handleChange(e, ALL_KEY)}
            labelPlacement="end"
          />
        </Grid>
        <Grid xs={12} mb={1}>
          <Divider />
        </Grid>
        {currentColumns
          .filter((col) => col.headerName !== undefined)
          .map((column) => (
            <Grid xs={6} key={column.headerName} pl={10}>
              <FormControlLabel
                checked={column.hide}
                control={<Checkbox />}
                label={column.headerName}
                onChange={(e) => handleChange(e, column.headerName)}
                labelPlacement="end"
              />
            </Grid>
          ))}
      </Grid>
    </Dialog>
  );
};

export default ColumnSelection;
