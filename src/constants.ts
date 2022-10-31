import GroupsIcon from "@mui/icons-material/Groups";
import UploadIcon from "@mui/icons-material/Upload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export enum PageStatus {
  SIGNUP = "signup",
  OTP = "otp",
  TYPE = "error",
  FORM = "form",
}

export interface ReferenceData {
  type: string;
  displayText: string;
}

export const SUCCESS_KEY = "success";
export const WARNING_KEY = "warning";
export const ERROR_KEY = "error";

export const BACK_BTN_TEXT = "Previous";
export const PROCEED_BTN_TEXT = "Next";
export const SKIP_BTN_TEXT = "Skip";
export const FULL_SIZE_GRID = 12;
export const HALF_SIZE_GRID = 6;
export const DASHED_BORDER = "2px dashed blue";
export const BROWSE_FILE_MSG = "Browse File";
export const FILE_SIZE_MSG = "Size: 5MB pdf";

export const MONTH_LABEL = "Month";
export const YEAR_LABEL = "Year";
export const CITY_LABEL = "City";
export const COUNTRY_LABEL = "Country";

export const SNACKBAR_ERROR_MSG =
  "Something went wrong, kindly retry with valid details";
export const FORM_SUBMISSION_SUCCESS = "Details are successfully submitted";
export const EXPEXTED_CTC_DET = "Please enter expected CTC";
export const IMAGE_UPLOAD_ERROR =
  "Something went wrong in image upload, please try again";
export const IMAGE_FORMAT_ERROR = "Invalid format";
export const FILE_UPLOAD = "Please upload a file";
export const FORM_INVALID_STATUS =
  "Form is not validated, kindly fill all the required details";
export const SPECIAL_CHAR_ERR_MSG = "cannot have special characters or numbers";
export const ALPHA_ERR_MSG = "Cannot have special charaters";
export const URL_ERROR_MSG = "Please Enter proper URL";
export const CONTEST_DETAILS = "991273137863147520";
export const JD_PATCH_FORM = "999548019411533824";
export const CONTEST_ABOUT_EMPLOYER = "991289466351534080";
export const JOB_SEEKER_RESUME = "1018802975069569024";
export const OFFER_LETTER = "1022430257759780864";
export const FILTER_CONTEST_DETAILS_RELATION =
  "/form-runtime/v1/form-data?relations=";

export const ALL_KEY = "All";
export const COLUMNS_TEXT = "Columns";
export const DISABLED_KEY = "disabled";

export const emailValidation = (email: string) => {
  const regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  return !(!email || regex.test(email) === false);
};

export const specialCharValidation = (input: string) => {
  const regex = /^[a-zA-Z \b]+$/;
  return !input || !regex.test(input) === false;
};

export const pincodeValidation = (pincode: string) => {
  const regex = /^[1-9]{1}[0-9]{2}[0-9]{3}$/;
  return !pincode || !regex.test(pincode) === false;
};

export const ifscValidation = (ifsc: string) => {
  const regex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
  return !ifsc || !regex.test(ifsc) === false;
};

export const accountNumValidation = (accNo: string) => {
  const regex = /^\d{9,18}$/;
  return !accNo || !regex.test(accNo) === false;
};

export const aadharNumValidation = (aadhar: string) => {
  const regex = /^[2-9]{1}[0-9]{11}$/;
  return !aadhar || !regex.test(aadhar) === false;
};

export const panNumValidation = (pan: string) => {
  const regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
  return !pan || !regex.test(pan) === false;
};

export const gstNumValidation = (gst: string) => {
  const regex = /[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[1-9A-Z]{1}/;
  return !gst || !regex.test(gst) === false;
};

export const tanNumValidation = (tan: string) => {
  const regex = /[A-Z]{4}[0-9]{5}[A-Z]{1}/;
  return !tan || !regex.test(tan) === false;
};

export const NUMBER_ONLY_REGEX = /^[0-9\b]+$/;
export const LETTERS_ONLY_REGEX = /^[a-zA-Z \b]+$/;
export const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9 \b]+$/;
export const URL_REGEX = new RegExp(
  "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
);

export const DELETE_DOCUMENT = "/dms/v1/documents?id=";
export const DOWNLOAD_DOCUMENT = "/dms/v1/documents/download?id=";

export const CONFIRMATION_BOX_BUTTON = ["Yes", "Cancel"];

export const GET_CONTEST_DETAILS = "form-runtime/v1/form-data?filter=id:";
export const PATCH_CONTEST_DETAILS = "/form-runtime/v1/form-data";

export const CONTESTSETTINGS_EDIT = "999548019411533824";
export const GET_CONTEST_SETTINGS =
  "/form-runtime/v1/form-data?filter=formData.contestId:";

export const JOB_SEEKER_TABS = [
  { name: "Add Profile", status: "" },
  { name: "Duplication Field", status: "" },
  { name: "Incomplete Uploads", status: "" },
  { name: "Vetting", status: "" },
  { name: "Manage Profiles", status: "" },
];

export const TEMPLATE_BUTTON = [
  {
    iconFileName: GroupsIcon,
    title: "Import From Job Seeker Collections",
  },
  {
    iconFileName: FileDownloadIcon,
    title: "Download the Pre Dupliation Template",
  },
  {
    iconFileName: FileDownloadIcon,
    title: "Download the Full Dupliation Template",
  },
  { iconFileName: UploadIcon, title: "Upload Template" },
];

export enum WorkStatusType {
  FRESHER = "Fresh Graduate",
  JOBLESS = "Not-Working",
  FULL_TIME = "Working",
}

export const JOB_SEEKER_STATUS = [
  { iconFileName: "Group 3474", title: "Bounty", data: " $1500" },
  { iconFileName: "Group 99", title: "Matching Profiles", data: " 20+" },
  { iconFileName: "Group 108", title: "Total Quota", data: " 320" },
  { iconFileName: "Group 3369", title: "Days Left", data: " 29" },
];
export const PAGE_SIZE_ARRAY = [10, 15, 20, 25, 50, 100];

export const DUPLICATION_PASS = {
  result: "Pass",
  color: "#22C55E",
  title: "",
  body: "",
};
export const DUPLICATION_FAIL = {
  result: "Fail",
  color: "#EF4444",
  title: "",
  body: "",
};
export const ADD_PROFILE_CONFIRMATION_BOX_BUTTON = [
  "Keep Editing",
  "Submit and Send Verification to Job Seeker",
];
export const ADD_PROFILE_CONFIRMATION_BOX_TEXT = {
  header: "Job Seeker Consent Required",
  mainMessage:
    "The Profile needs verification of data and consent of submission from Job Seeker before proceeding",
  bottomMessage:
    "Profile will be submitted to the HH Admin for further processing. After the Job Seeker consent is obtained",
};

export const JOB_SEEKER_COMLETE_PROFILE_TEXT = {
  title: "Congrats! The Profile is complete and saved in your dashboard.",
  titleOne: "Email & SMS sent to get consent from job seeker ",
  notification1: "Sent on 21 of July, 2021, 09:33:03 AM IST",
  notification2:
    "Please follow up and get the consent from the job seeker at the earliest.",
  notification3: "Stay tuned !! to get further updates on Recruiter Dashboard.",
  notification4:
    "Hope this job seeker converts into placement and we wish you all the best!!",
  alyticsTitle: "Your Profile Submission Statistics For this Contest",
};

export const JOB_TYPE_OPTIONS = ["Full-Time", "Contract"];
