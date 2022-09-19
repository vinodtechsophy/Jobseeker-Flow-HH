import { Icons, ResumeUploaded } from "./CustomFields";
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
        cellRenderer: Icons,
    },
    {
        headerName: "Job seeker Name",
        field: "jobSeekerName",
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
        headerName: "Job Seeker ID",
        field: "jobSeekerID",
        hide: false,
        minWidth: 200,
        filter: "agTextColumnFilter",
        filterParams: dateFilterParams,
        floatingFilterComponentParams: {
            suppressFilterButton: true,
        },
    },
    {
        headerName: "Technology",
        field: "technology",
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
        headerName: "Experience",
        field: "experience",
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
        headerName: "Expected CTC",
        field: "expectedCTC",
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
        headerName: "Profile Uploaded",
        field: "profileUploaded",
        hide: false,
        minWidth: 215,
        filter: "agDateColumnFilter",
        filterParams: dateFilterParams,
        floatingFilterComponentParams: {
            suppressFilterButton: true,
        },
    },
    {
        headerName: "Ownership Expiry Date",
        field: "ownershipExpiryDate",
        filter: "agDateColumnFilter",
        floatingFilterComponentParams: {
            suppressFilterButton: true,
        },
        hide: false,
        minWidth: 215,
        filterParams: dateFilterParams,
    },
    {
        headerName: "Profile Owned by",
        field: "profileOwnedby",
        hide: false,
        minWidth: 180,
        filterParams: {
            buttons: ["apply", "clear"],
        },
        filter: "agTextColumnFilter",
        floatingFilterComponentParams: {
            suppressFilterButton: true,
        },
    },
    {
        headerName: "Last/Current Contest Participated",
        field: "lastCurrentContestParticipated",
        hide: false,
        minWidth: 180,
        filterParams: {
            buttons: ["apply", "clear"],
        },
        filter: "agTextColumnFilter",
        floatingFilterComponentParams: {
            suppressFilterButton: true,
        },
    },
    {
        headerName: "Job Seeker Main Stage",
        field: "jobSeekerMainStage",
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
        headerName: "Job Seeker Sub Stage",
        field: "jobSeekerSubStage",
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
        headerName: "Job Seeker Comment",
        field: "jobSeekerComment",
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
        headerName: "Belongs to Collection(s)",
        field: "belongstoCollection",
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
        field: "phoneNumber",
        hide: false,
        minWidth: 200,
        filter: "agNumberColumnFilter",
        floatingFilterComponentParams: {
            suppressFilterButton: true,
        },
        filterParams: {
            buttons: ["apply", "clear"],
        },
    },
    {
        headerName: "Email Address",
        field: "emailAddress",
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
        field: "currentLocation",
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
        field: "currentlyWorking",
        hide: false,
        minWidth: 215,
        filter: "agNumberColumnFilter",
        filterParams: {
            buttons: ["apply", "clear"],
        },
        floatingFilterComponentParams: {
            suppressFilterButton: true,
        },
    },
    {
        headerName: "Notice Period",
        field: "noticePeriod",
        hide: false,
        minWidth: 215,
        filter: "agNumberColumnFilter",
        filterParams: {
            buttons: ["apply", "clear"],
        },
        floatingFilterComponentParams: {
            suppressFilterButton: true,
        },
    },
    {
        headerName: "Resume Uploaded",
        field: "resumeUploaded",
        hide: false,
        minWidth: 215,
        filter: "agTextColumnFilter",
        cellRenderer: ResumeUploaded,
        floatingFilterComponentParams: {
            suppressFilterButton: true
        },
        filterParams: {
            buttons: ["apply", "clear"]
        },
    },
];
export var relations = [CONTEST_ABOUT_EMPLOYER];
