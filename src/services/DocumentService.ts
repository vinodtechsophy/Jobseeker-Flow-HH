import axios from "axios";

export const downloadFile = async (id: string) => {
  let token = sessionStorage.getItem("react-token");
  const response = await axios.get(
    `${process.env.REACT_APP_MAIN_SERVER_URL}dms/v1/documents/download?id=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        responseType: "blob",
      },
    }
  );
  console.log(response);
  return response;
};
