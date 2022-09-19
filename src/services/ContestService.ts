import axios from 'axios';
import {
  GET_CONTEST_DETAILS,
  CONTEST_DETAILS,
  PATCH_CONTEST_DETAILS,
  CONTESTSETTINGS_EDIT,
  GET_CONTEST_SETTINGS,
} from "../constants";

export const getContestDetails = async (filterId?: string) => {
  return axios
    .get(
      `${process.env.REACT_APP_API_GATEWAY_URL}${GET_CONTEST_DETAILS}${filterId}&&formId=${CONTEST_DETAILS}`
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
