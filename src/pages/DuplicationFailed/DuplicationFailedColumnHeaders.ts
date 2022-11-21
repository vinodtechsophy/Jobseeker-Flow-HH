import {
  CheckboxSelectionCallbackParams,
  HeaderCheckboxSelectionCallbackParams,
} from "ag-grid-community";
import {
  CustomDropDown,
  ActionButtons,
} from "./DuplicationFailedTableCustomElement";
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
    // hide: false,
    minWidth: 230,
    // filter: "agTextColumnFilter",
    cellRenderer: ActionButtons,
    // valueSetter: (params: any) => {
    //   params.data.interviewed = params.newValue;
    //   return true;
    // },
    // floatingFilterComponentParams: {
    //   suppressFilterButton: true,
    // },
    // filterParams: {
    //   buttons: ["apply", "clear"],
    // },
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
    minWidth: 180,
    filterParams: {
      buttons: ["apply", "clear"],
    },
    filter: "agNumberColumnFilter",
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
  },
  {
    headerName: "Phone Number",
    field: "mobileNumber",
    hide: false,
    minWidth: 215,
    filterParams: {
      buttons: ["apply", "clear"],
    },
    filter: "agTextColumnFilter",
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
  },
  {
    headerName: "Email Address",
    field: "emailId",

    hide: false,
    filter: "agTextColumnFilter",
    filterParams: {
      buttons: ["apply", "clear"],
    },
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
    minWidth: 215,
  },
  {
    headerName: "Recruiter Uploading",
    field: "referredBy",
    hide: false,
    minWidth: 230,
    filter: "agTextColumnFilter",
    filterParams: {
      buttons: ["apply", "clear"],
    },
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
  },
  {
    headerName: "Interviewed or Applied to this Employer in the Last 6 Months",
    field: "interviewAttended",
    hide: false,
    minWidth: 230,
    filter: "agTextColumnFilter",
    cellRenderer: CustomDropDown,
    valueSetter: (params: any) => {
      params.data.interviewed = params.newValue;
      return true;
    },
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
    filterParams: {
      buttons: ["apply", "clear"],
    },
  },
  {
    headerName: "PDC Status",
    field: "status",
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
    minWidth: 200,
    filter: "agDateColumnFilter",
    filterParams: dateFilterParams,
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
  },
  {
    headerName: "PAN Number",
    field: "panNumber",
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
  {
    headerName: "FDC Status",
    field: "fdcStatus",
    hide: false,
    minWidth: 215,
    filter: "agTextColumnFilter",
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
    filterParams: {
      buttons: ["apply", "clear"],
    },
  },
];

export const relations = [CONTEST_ABOUT_EMPLOYER];
