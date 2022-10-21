import {
  CheckboxSelectionCallbackParams,
  HeaderCheckboxSelectionCallbackParams,
} from "ag-grid-community";
import { Icons } from "./CustomFields";
import { CONTEST_ABOUT_EMPLOYER } from "../../constants";

export const dateFilterParams = {
  comparator: (filterLocalDateAtMidnight, cellValue) => {
    console.log(cellValue);
    const dateAsString = cellValue;

    if (dateAsString == null) {
      return 0;
    }

    // In the example application, dates are stored as dd-mm-yyyy
    // We create a Date object for comparison against the filter date
    const dateParts = dateAsString.split("-");
    const year = Number(dateParts[2]);
    const month = Number(dateParts[1]) - 1;
    const day = Number(dateParts[0]);
    const cellDate = new Date(year, month, day);

    // Now that both parameters are Date objects, we can compare
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    } else if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
    return 0;
  },
};

export const checkboxSelection = function (
  params: CheckboxSelectionCallbackParams
) {
  return params.columnApi.getRowGroupColumns().length === 0;
};

export const headerCheckboxSelection = function (
  params: HeaderCheckboxSelectionCallbackParams
) {
  return params.columnApi.getRowGroupColumns().length === 0;
};

export const LISTING_GENERIC_HEADERS = [
  {
    headerName: "All",
    checkboxSelection: checkboxSelection,
    headerCheckboxSelection: headerCheckboxSelection,
    maxWidth: 50,
    floatingFilter: false,
  },
  {
    headerName: "Actions",
    floatingFilter: false,
    cellRenderer: Icons,
  },
  {
    headerName: "First Name",
    field: "firstName",
    filter: "agTextColumnFilter",
    minWidth: 200,
    hide: false,
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
    filterParams: {
      buttons: ["apply", "clear"],
    },
  },
  {
    headerName: "Last Name",
    field: "lastName",
    hide: false,
    minWidth: 200,
    filter: "agTextColumnFilter",
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
    filterParams: {
      buttons: ["apply", "clear"],
    },
  },
  {
    headerName: "Recruiter Uploading",
    field: "referredBy",
    hide: false,
    minWidth: 200,
    filter: "agTextColumnFilter",
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
    filterParams: {
      buttons: ["apply", "clear"],
    },
  },
  {
    headerName: "Phone Number",
    field: "mobileNumber",
    hide: false,
    minWidth: 200,
    filter: "agTextColumnFilter",
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
    filterParams: {
      buttons: ["apply", "clear"],
    },
  },
  {
    headerName: "Email Address",
    field: "emailId",
    hide: false,
    minWidth: 200,
    filter: "agTextColumnFilter",
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
    filterParams: {
      buttons: ["apply", "clear"],
    },
  },
  {
    headerName: "DOB",
    field: "dateOfBirth",
    hide: false,
    minWidth: 215,
    filter: "agDateColumnFilter",
    filterParams: dateFilterParams,
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
  },
  {
    headerName: "PAN NO",
    field: "panNumber",
    hide: false,
    minWidth: 200,
    filter: "agTextColumnFilter",
    filterParams: dateFilterParams,
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
  },
  {
    headerName: "FDC Status Check on",
    field: "updatedOn",
    filter: "agDateColumnFilter",
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
    hide: false,
    minWidth: 215,
    filterParams: dateFilterParams,
  },
  {
    headerName: "Ownership Till",
    field: "ownershipTillDate",
    filter: "agDateColumnFilter",
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
    hide: false,
    minWidth: 215,
    filterParams: dateFilterParams,
  },

  {
    headerName: "Current Upload Step",
    field: "profileLastCompletedStep",
    hide: false,
    minWidth: 215,
    filter: "agTextColumnFilter",
    filterParams: {
      buttons: ["apply", "clear"],
    },
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
  },
];

export const relations = [CONTEST_ABOUT_EMPLOYER];
