import axios from "axios";
import { HH_Skills } from "../constants";

export const filterSkillValuesWithSkillName = async (skillName?: string) => {
  return axios
    .get(
      `${process.env.REACT_APP_API_GATEWAY_URL}/form-runtime/v1/form-data?filter=formData.skillName:${skillName}&formId=${HH_Skills}`,
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
