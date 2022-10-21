import { request, ResponseProps } from "../request";
import { DELETE_DOCUMENT, DOWNLOAD_DOCUMENT } from "../constants";
import axios from "axios";

export const uploadDocument = async (url, data) => {
  const apiEndpoint = `${process.env.REACT_APP_API_GATEWAY_URL}${url}`;
  console.log(process.env.REACT_APP_API_GATEWAY_URL);
  console.log(apiEndpoint);
  const r: ResponseProps = (await request.postForm(
    apiEndpoint,
    data
  )) as ResponseProps;

  if (r.success) {
    return { success: r.success, message: r.message, data: r.data };
  }

  return { success: false };
};

export const deleteDocument = async (id) => {
  const apiEndpoint = `${process.env.REACT_APP_API_GATEWAY_URL}${DELETE_DOCUMENT}${id}`;
  const r: ResponseProps = (await request.delete(apiEndpoint)) as ResponseProps;

  if (r.success) {
    return { success: r.success, message: r.message, data: r.data };
  }

  return { success: false };
};

export const downloadDocument = async (id: string) => {
  const token = sessionStorage.getItem("react-token");
  const apiEndpoint = `${process.env.REACT_APP_API_GATEWAY_URL}${DOWNLOAD_DOCUMENT}${id}`;

  const response = await axios.get(apiEndpoint, {
    headers: {
      Authorization: `Bearer ${token}`,

      responseType: "blob", // VERY IMPORTANT 'arrayBuffer'
    },
  });
  console.log(response);
  return response;
};

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

export const openFile = async (id: string) => {
  let Token = sessionStorage.getItem("react-token");
  fetch(
    `${process.env.REACT_APP_MAIN_SERVER_URL}dms/v1/documents/download?id=${id}`,
    {
      method: "get",
      headers: new Headers({
        Authorization: `Bearer ${Token}`,
      }),
    }
  )
    .then((res) => res.blob())
    .then((blobData) => {
      const fileURL = URL.createObjectURL(blobData);
      //Open the URL on new Window
      const pdfWindow: any = window.open();
      pdfWindow.location.href = fileURL;
    });
};

export const getFileDetails = async (id: string) => {
  let token = sessionStorage.getItem("react-token");
  return axios.get(
    `${process.env.REACT_APP_MAIN_SERVER_URL}dms/v1/documents/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
