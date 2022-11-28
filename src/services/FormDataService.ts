import axios from "axios";
import { request, ResponseProps } from "../request";

export const getFormData = async (
  formId: string,
  id?: string,
  recordId?: string,
  page?: string,
  size?: number
) => {
  return axios
    .get(
      `${
        process.env.REACT_APP_MAIN_SERVER_URL
      }form-runtime/v1/form-data?formId=${formId}${
        id ? "&filter=id:" + id : ""
      }${page ? "&page=" + page : ""}${size ? "&size=" + size : ""}${
        recordId ? "&filter=formData.recordId:" + recordId : ""
      }`,
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

export const postFormData = async (bodyPayload: {
  formId: string;
  formData: any;
}) => {
  return axios
    .post(
      `${process.env.REACT_APP_MAIN_SERVER_URL}form-runtime/v1/form-data`,
      bodyPayload,
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

export const getFormModeler = async (formId: string) => {
  return axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}form-modeler/v1/forms/${formId}`,
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

export const UploadFiles = async (body: any) => {
  const formData = new FormData();
  formData.append("file", body.files[0]);
  formData.append("documentPath", body.documentPath);
  formData.append("documentName", body.documentName);
  return axios.post(
    `${
      process.env.REACT_APP_MAIN_SERVER_URL || "https://api.dev.hiringhood.com/"
    }dms/v1/documents`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
      },
      params: {
        documentTypeId: body.documentTypeId,
      },
    }
  );
};

export const createJobSeekerProfile = async (bodyPayload: {
  profileLogId: string;
  profileData: any;
}) => {
  return axios.post(
    `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seeker-profile?profileLogId=${bodyPayload.profileLogId}`,
    bodyPayload.profileData,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
      },
    }
  );
};

export const updateJobSeekerProfile = async (bodyPayload: {
  profileId: string;
  profileData: any;
}) => {
  return axios.patch(
    `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/profile/${bodyPayload.profileId}`,
    bodyPayload.profileData,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
      },
    }
  );
};

export const getJobSeekerProfile = async (profileId: string) => {
  return axios.get(
    `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/profile/${profileId}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
      },
    }
  );
};

export const getCityList = async () => {
  return axios.get(
    `https://gist.githubusercontent.com/palimadra/133517e2dca16f31e41af82419d6a50f/raw/bf9d1a603b8edabcdcfdefbdeeafd76f1469da1d/city-list-india`
  );
};

export const fetchFormData = async (
  formId: string,
  page?: number,
  size?: number
): Promise<{ success: boolean; data?: any; message?: string }> => {
  const r: any = await request.get(
    `${process.env.REACT_APP_API_GATEWAY_URL}/form-runtime/v1/form-data?formId=${formId}&page=${page}&size=${size}`
  );

  if (r.success) {
    const form = r.data;
    return { success: r.success, data: form, message: r.message };
  }

  return { success: false };
};
