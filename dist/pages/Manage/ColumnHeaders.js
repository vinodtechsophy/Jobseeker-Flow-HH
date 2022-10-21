import { MainStageDropDown, Icons, Interview, ResumeUploaded, ViewAssessments, SubStageDropDown, SubStageCommentsDropDown, Reward, JobSeekerJoined, CoolingPeriod, } from "./CustomFields";
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
        minWidth: 230,
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
        minWidth: 230,
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
    {
        headerName: "Profile Vetted",
        field: "consentDate",
        hide: false,
        filter: "agDateColumnFilter",
        filterParams: dateFilterParams,
        floatingFilterComponentParams: {
            suppressFilterButton: true,
        },
        minWidth: 200,
    },
    {
        headerName: "Partner Assessments",
        field: "partnerAssessments",
        hide: false,
        minWidth: 250,
        cellRenderer: ViewAssessments,
    },
    {
        headerName: "Job Seeker Main Stage",
        field: "jobSeekerMainStage",
        hide: false,
        filter: "agTextColumnFilter",
        cellRenderer: MainStageDropDown,
        valueGetter: function (params) {
            return params.data.jobSeekerMainStage;
        },
        valueSetter: function (params) {
            params.data.jobSeekerComment = "N/A";
            params.data.jobSeekerSubStage = "N/A";
            params.data.jobSeekerMainStage = params.newValue;
            return true;
        },
        filterParams: {
            buttons: ["apply", "clear"],
        },
        floatingFilterComponentParams: {
            suppressFilterButton: true,
        },
        minWidth: 260,
    },
    {
        headerName: "Job Seeker Sub Stage",
        field: "jobSeekerSubStage",
        hide: false,
        filter: "agTextColumnFilter",
        cellRenderer: SubStageDropDown,
        valueGetter: function (params) {
            return params.data.jobSeekerMainStage;
        },
        valueSetter: function (params) {
            params.refresh = true;
            params.data.jobSeekerSubStage = params.newValue;
            return true;
        },
        filterParams: {
            buttons: ["apply", "clear"],
        },
        floatingFilterComponentParams: {
            suppressFilterButton: true,
        },
        minWidth: 430,
    },
    {
        headerName: "Job Seeker Comment",
        field: "jobSeekerComment",
        hide: false,
        filter: "agTextColumnFilter",
        cellRenderer: SubStageCommentsDropDown,
        valueGetter: function (params) {
            return params.data.jobSeekerSubStage;
        },
        valueSetter: function (params) {
            params.data.jobSeekerComment = params.newValue;
            return true;
        },
        filterParams: {
            buttons: ["apply", "clear"],
        },
        floatingFilterComponentParams: {
            suppressFilterButton: true,
        },
        minWidth: 260,
    },
    {
        headerName: "Interview Scheduling",
        field: "interviewScheduling",
        cellRenderer: Interview,
        valueSetter: function (params) {
            params.data.nextInterviewDate = params.newValue;
            return true;
        },
        hide: false,
        minWidth: 230,
    },
    {
        headerName: "Next Interview Date",
        field: "nextInterviewDate",
        hide: false,
        filter: "agDateColumnFilter",
        filterParams: dateFilterParams,
        floatingFilterComponentParams: {
            suppressFilterButton: true,
        },
        minWidth: 230,
    },
    {
        headerName: "Job Seeker Joined",
        field: "jobSeekerJoinedDate",
        cellRenderer: JobSeekerJoined,
        valueGetter: function (params) {
            return params.data.jobSeekerJoinedDate;
        },
        valueSetter: function (params) {
            params.data.jobSeekerJoinedDate = params.newValue;
            return true;
        },
        hide: false,
        minWidth: 230,
    },
    {
        headerName: "Cooling Period",
        field: "coolingPeriod",
        cellRenderer: CoolingPeriod,
        valueGetter: function (params) {
            return params.data.coolingPeriod;
        },
        valueSetter: function (params) {
            params.data.coolingPeriod = params.newValue;
            return true;
        },
        hide: false,
        minWidth: 250,
    },
    {
        headerName: "Send Reward",
        field: "sendReward",
        hide: false,
        cellRenderer: Reward,
        valueGetter: function (params) {
            return params.data.coolingPeriod;
        },
        valueSetter: function (params) {
            params.data.sendReward = params.newValue;
            return true;
        },
        minWidth: 230,
    },
];
export var relations = [CONTEST_ABOUT_EMPLOYER];
