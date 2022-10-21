import axios from "axios";
import {
  GET_CONTEST_DETAILS,
  CONTEST_DETAILS,
  PATCH_CONTEST_DETAILS,
  CONTESTSETTINGS_EDIT,
  GET_CONTEST_SETTINGS,
  FILTER_CONTEST_DETAILS_RELATION,
  CONTEST_ABOUT_EMPLOYER,
} from "../constants";

let token = sessionStorage.getItem("react-token");

export const getContestDetails = async (filterId?: string) => {
  return axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}${GET_CONTEST_DETAILS}${filterId}&formId=${CONTEST_DETAILS}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
        },
      }
    )
    .catch((error) => {
      console.log(error);
    });
};

export const patchContestDetails = async (body?: object) => {
  return axios
    .patch(
      `${process.env.REACT_APP_API_GATEWAY_URL}${PATCH_CONTEST_DETAILS}`,
      body
    )
    .catch((error) => {
      console.log(error);
    });
};

export const getContestSettings = async (filterId?: string) => {
  return axios
    .get(
      `${process.env.REACT_APP_API_GATEWAY_URL}${GET_CONTEST_SETTINGS}${filterId}&&formId=${CONTESTSETTINGS_EDIT}`
    )
    .catch((error) => {
      console.log(error);
    });
};

export const filterContestDetailsWithRelation = async (contestId?: string) => {
  return axios
    .get(
      `${process.env.REACT_APP_API_GATEWAY_URL}${FILTER_CONTEST_DETAILS_RELATION}${CONTEST_ABOUT_EMPLOYER}:parentDataId&filter=formData.contestId:${contestId}&formId=${CONTEST_DETAILS}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
        },
      }
    )
    .catch((error) => {
      console.log(error);
    });
};
