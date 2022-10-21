import { FirstNameInputBox, LastNameInputBox, MobileNumberInputBox, EmailTextInput, CustomDropDown, PanInputBox, CustomDOBInputBox, CustomUploadButton, PDCStatusCheckButton, FDCStatusCheckButton, ClearRowButton, } from "../ManualDataInputTableElement";
import { CONTEST_ABOUT_EMPLOYER } from "../../constants";
import "./JobSeekerAddProfile.css";
export var dateFilterParams = {
    comparator: function (filterLocalDateAtMidnight, cellValue) {
        var dateAsString = cellValue;
        if (dateAsString == null)
            return -1;
        var dateParts = dateAsString.split("-");
        var cellDate = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2].slice(0, 2)));
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
            return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
            return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
            return 1;
        }
    },
    browserDatePicker: true,
};
export var checkboxSelection = function (params) {
    return params.columnApi.getRowGroupColumns().length === 0;
};
export var headerCheckboxSelection = function (params) {
    return params.columnApi.getRowGroupColumns().length === 0;
};
export var LISTING_GENERIC_HEADERS = [
    // {
    //   // headerName: "All",
    //   // checkboxSelection: checkboxSelection,
    //   // headerCheckboxSelection: headerCheckboxSelection,
    //   maxWidth: 50,
    //   floatingFilter: false,
    // },
    {
        headerName: "Actions",
        floatingFilter: false,
        editable: false,
        cellRenderer: ClearRowButton,
    },
    {
        headerName: "First Name",
        field: "firstName",
        // hide: false,
        // minWidth: 215,
        // filterParams: {
        //   buttons: ["apply", "clear"],
        // },
        // filter: "agTextColumnFilter",
        // floatingFilterComponentParams: {
        //   suppressFilterButton: true,
        // },
        floatingFilter: false,
        editable: false,
        cellRenderer: FirstNameInputBox,
        valueSetter: function (params) {
            params.data.firstName = params.newValue;
            return true;
        },
    },
    {
        headerName: "Last Name",
        field: "lastName",
        floatingFilter: false,
        editable: false,
        cellRenderer: LastNameInputBox,
        valueSetter: function (params) {
            params.data.lastName = params.newValue;
            return true;
        },
    },
    {
        headerName: "Phone Number",
        field: "phoneNumber",
        floatingFilter: false,
        editable: false,
        cellRenderer: MobileNumberInputBox,
        valueSetter: function (params) {
            params.data.phoneNumber = params.newValue;
            return true;
        },
    },
    {
        headerName: "Email Address",
        field: "email",
        floatingFilter: false,
        editable: false,
        cellRenderer: EmailTextInput,
        valueSetter: function (params) {
            params.data.email = params.newValue;
            return true;
        },
    },
    {
        headerName: "Interviewed or Applied to this Emloyer in the last 6 months",
        field: "interviewed",
        floatingFilter: false,
        editable: false,
        cellRenderer: CustomDropDown,
        valueSetter: function (params) {
            params.data.interviewed = params.newValue;
            return true;
        },
    },
    {
        headerName: "PDC Status",
        field: "pdcStatus",
        floatingFilter: false,
        editable: false,
        cellRenderer: PDCStatusCheckButton,
        valueSetter: function (params) {
            params.data.pdcStatus = params.newValue[0];
            params.data.profileLogId = params.newValue[1];
            if (!params.newValue) {
                // params.data.pdc="false"
                params.data.fdcStatus = params.newValue[0];
            }
            else {
                // params.data.pdc="true"
            }
            return true;
        },
    },
    {
        headerName: "DOB",
        field: "dob",
        floatingFilter: false,
        editable: false,
        cellRenderer: CustomDOBInputBox,
        valueSetter: function (params) {
            params.data.dob = params.newValue;
            return true;
        },
        // cellClassRules: {
        //   "cell-pass": (params: any) =>
        //     params.data.pdcStatus == false || params.data.pdcStatus == null,
        // },
    },
    {
        headerName: "Last 5 digits of PAN",
        field: "lastFiveDigitOfPan",
        floatingFilter: false,
        editable: false,
        cellRenderer: PanInputBox,
        valueSetter: function (params) {
            params.data.lastFiveDigitOfPan = params.newValue;
            return true;
        },
        // cellClassRules: {
        //   "cell-pass": (params: any) =>
        //     params.data.pdcStatus == false || params.data.pdcStatus == null,
        // },
    },
    {
        headerName: "FDC Status",
        field: "fdcStatus",
        floatingFilter: false,
        editable: false,
        cellRenderer: FDCStatusCheckButton,
        valueSetter: function (params) {
            params.data.fdcStatus = params.newValue;
            return true;
        },
        // cellClassRules: {
        //   "cell-pass": (params: any) =>
        //     params.data.pdcStatus == false || params.data.pdcStatus == null,
        // },
    },
    {
        headerName: "Upload Profile",
        field: "uploadProfile",
        // hide: false,
        // filter: "agNumberColumnFilter",
        // floatingFilter: false,
        // floatingFilterComponentParams: {
        //   suppressFilterButton: true,
        // },
        // filterParams: {
        //   buttons: ["apply", "clear"],
        // },
        floatingFilter: false,
        editable: false,
        cellRenderer: CustomUploadButton,
        // cellClassRules: {
        //   "cell-pass": (params: any) =>
        //     params.data.fdcStatus == false || params.data.fdcStatus == null,
        // },
    },
];
export var relations = [CONTEST_ABOUT_EMPLOYER];
