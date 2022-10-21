import React from "react";
import {
  uploadDocument,
  deleteDocument,
  downloadDocument,
} from "../services/DocumentService";

export class FileService {
  async uploadFile(storage, file, fileName, dir, evt, url, options, fileKey) {
    console.log("upload action");
    console.log(url);
    return new Promise(async (resolve, reject) => {
      console.log(storage, file, fileName, dir, evt, url, options, fileKey);

      const res: any = await uploadDocument(url, {
        file,
        documentPath: dir,
        name: file.name,
      });
      if (res.success) {
        return resolve({
          storage: "url",
          name: file.name,
          url: "",
          size: file.size,
          type: file.type,
          file: file,
          data: res.data,
        });
      } else {
        reject("Falied to upload");
      }
    });
  }
  async deleteFile(fileInfo) {
    console.log(fileInfo);
    deleteDocument(fileInfo.data.id);

    //do something
  }
  async downloadFile(fileInfo, options) {
    console.log(fileInfo);
    const response = await downloadDocument(fileInfo.data.id);

    // console.log(response.data);
    if (fileInfo.type.includes("image")) {
      return {
        url: "https://cdn-icons-png.flaticon.com/512/6789/6789174.png",
        name: fileInfo.name,
      };
    } else if (fileInfo.type.includes("pdf")) {
      return {
        url: "https://cdn.pixabay.com/photo/2017/03/08/21/20/pdf-2127829_960_720.png",
        name: fileInfo.name,
      };
    } else {
      return {
        url: "https://cdn.pixabay.com/photo/2017/03/08/21/19/file-2127825_960_720.png",
        name: fileInfo.name,
      };
    }
  }

  async loadImage(fileInfo) {
    return this.downloadFile(fileInfo, {}).then((result: any) => ({
      src: fileInfo.file,
      name: fileInfo.name,
      id: fileInfo.data.id,
    }));
  }
}

export const myOptions = {
  fileService: new FileService(),

  // builder: {
  //     customAdvanced: {
  //         title: 'Advanced',
  //         default: false,
  //         weight: 0,
  //         components: {
  //             inputcamera: {
  //                 schema: {
  //                     label: 'camera',
  //                     type: 'file',
  //                     key: 'inputcamera',
  //                     image: true,
  //                     url: 'https://api-gateway.techsophy.com/api/dms/v1/documents?documentTypeId=920997426618875904',
  //                     options: JSON.stringify({
  //                         withCredentials: true,
  //                         Authorization: `Bearer ${localStorage.getItem('token')}`,
  //                     }),
  //                 },
  //             },
  //         },
  //     },
  // },
};
