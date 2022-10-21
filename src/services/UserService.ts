import axios from "axios";
import KeycloakService from "./KeycloakService";

export const getUserData = async () => {
  return axios
    .get(
      `${
        process.env.REACT_APP_MAIN_SERVER_URL
      }accounts/v1/users?filter-column=userName&filter-value=${KeycloakService.getUsername()}`,
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
