import {
  CheckboxSelectionCallbackParams,
  HeaderCheckboxSelectionCallbackParams,
} from "ag-grid-community";
import { CustomDropDown, Icons, ResumeUploaded } from "./CustomFields";
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
    cellRenderer: Icons,
    floatingFilter: false,
  },
  {
    headerName: "Job seeker Name",
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
    headerName: "Experience(Years)",
    field: "profileDetailsMap.totalExperience.totalExperienceYears",
    hide: false,
    minWidth: 240,
    filterParams: {
      buttons: ["apply", "clear"],
    },
    filter: "agTextColumnFilter",
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
  },
  {
    headerName: "Expected CTC(LPA)",
    field: "profileDetailsMap.expectedCtc.expectedCtcLakh",
    hide: false,
    minWidth: 240,
    filterParams: {
      buttons: ["apply", "clear"],
    },
    filter: "agTextColumnFilter",
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
  },
  {
    headerName: "Profile Uploaded",
    field: "appliedDate",
    hide: false,
    filter: "agDateColumnFilter",
    filterParams: dateFilterParams,
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
    headerName: "Current Location",
    field: "profileWorkStatusMap.currentLocation",
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
    headerName: "Currently Working",
    field: "profileDetailsMap.currentlyWorking",
    hide: false,
    minWidth: 215,
    filter: "agTextColumnFilter",
    // floatingFilterComponent: ,
    filterParams: {
      buttons: ["apply", "clear"],
    },
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
  },
  {
    headerName: "Resume Uploaded",
    field: "resumeDocumentId",
    hide: false,
    minWidth: 215,
    cellRenderer: ResumeUploaded,
  },
  {
    headerName: "Change Consent Status",
    field: "consentStatus",
    hide: false,
    minWidth: 230,
    filter: "agTextColumnFilter",
    cellRenderer: CustomDropDown,
    floatingFilterComponentParams: {
      suppressFilterButton: true,
    },
    filterParams: {
      buttons: ["apply", "clear"],
    },
  },
  {
    headerName: "Job Seeker ID",
    field: "_id",
    hide: false,
    minWidth: 200,
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
