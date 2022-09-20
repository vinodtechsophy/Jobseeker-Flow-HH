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
