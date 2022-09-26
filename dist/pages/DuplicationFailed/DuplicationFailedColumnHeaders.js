import { CustomDropDown, ActionButtons, } from "./DuplicationFailedTableCustomElement";
import { CONTEST_ABOUT_EMPLOYER } from "../../constants";
export var dateFilterParams = {
    comparator: function (filterLocalDateAtMidnight, cellValue) {
        console.log(cellValue);
        var dateAsString = cellValue;
        if (dateAsString == null) {
            return 0;
        }
        // In the example application, dates are stored as dd-mm-yyyy
        // We create a Date object for comparison against the filter date
        var dateParts = dateAsString.split("-");
        var year = Number(dateParts[2]);
        var month = Number(dateParts[1]) - 1;
        var day = Number(dateParts[0]);
        var cellDate = new Date(year, month, day);
        // Now that both parameters are Date objects, we can compare
        if (cellDate < filterLocalDateAtMidnight) {
            return -1;
        }
        else if (cellDate > filterLocalDateAtMidnight) {
            return 1;
        }
        return 0;
    },
};
export var checkboxSelection = function (params) {
    return params.columnApi.getRowGroupColumns().length === 0;
};
export var headerCheckboxSelection = function (params) {
    return params.columnApi.getRowGroupColumns().length === 0;
};
export var LISTING_GENERIC_HEADERS = [
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
        field: "recruiterUploading",
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
        valueSetter: function (params) {
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
        field: "status",
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
export var relations = [CONTEST_ABOUT_EMPLOYER];
