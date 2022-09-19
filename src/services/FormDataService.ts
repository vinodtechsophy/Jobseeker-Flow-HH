import axios from 'axios';

export const getFormData = async (formId: string, id?: string, recordId?: string, page?: string, size?: number) => {
    return axios.get(`${process.env.REACT_APP_MAIN_SERVER_URL}form-runtime/v1/form-data?formId=${formId}${
        id ? '&filter=id:'+ id : ''}${
            page ? '&page='+page : ''}${
                size ? '&size='+size : ''}${
                    recordId ? '&filter=formData.recordId:' + recordId : ''
                }`,
    {headers: {Authorization: `Bearer ${localStorage.getItem('react-token')}`}}).catch((error) => {
        console.log(error);
    });
};

export const postFormData = async (bodyPayload: {formId: string, formData: any}) => {
    return axios.post(`${process.env.REACT_APP_MAIN_SERVER_URL}form-runtime/v1/form-data`,
    bodyPayload,{headers: {Authorization: `Bearer ${localStorage.getItem('react-token')}`}}).catch((error) => {
        console.log(error);
    });
};

export const getFormModeler = async (formId: string) => {
    return axios.get(`${process.env.REACT_APP_MAIN_SERVER_URL}form-modeler/v1/forms/${formId}`,
    {headers: {Authorization: `Bearer ${localStorage.getItem('react-token')}`}})
    .catch((error) => {
      console.log(error);
    });
};

export const UploadFiles = async (body: any) => {
    const formData = new FormData();
    formData.append("file", body.files[0]);
    formData.append("documentPath", body.documentPath);
    formData.append("documentName", body.documentName);
    return axios
      .post(
        `${
          process.env.REACT_APP_MAIN_SERVER_URL ||
          "https://api.dev.hiringhood.com/"
        }dms/v1/documents`,
        formData,
        {
          headers : {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('react-token')}`
          },
          params: {
            documentTypeId: body.documentTypeId
          }
        }
    )
};

export const createJobSeekerProfile = async (bodyPayload: {profileLogId: string, profileData: any}) => {
    return axios.post(`${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seeker?profileLogId=${
        bodyPayload.profileLogId}`,
        bodyPayload.profileData, 
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('react-token')}`
            }
        }
    )
};

export const updateJobSeekerProfile = async (bodyPayload: {profileId: string, profileData: any}) => {
    return axios.patch(`${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/profile/${
        bodyPayload.profileId}`,
        bodyPayload.profileData, 
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('react-token')}`
            }
        }
    )
};