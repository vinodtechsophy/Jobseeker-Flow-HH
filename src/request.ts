import wretch, { Wretcher } from "wretch";
import { ResponseChain } from "wretch/dist/resolver";

export interface ResponseProps {
  success?: boolean;
  data?: unknown;
  message?: string;
}

type ApiResponse = unknown;

const toJson = (r: ResponseChain): Promise<ApiResponse> => r.json();

const process = async (
  url: string,
  method: (w: Wretcher) => ResponseChain,
  format: (r: ResponseChain) => Promise<ApiResponse>,
  controller?: AbortController
): Promise<ApiResponse> => {
  const w: Wretcher = controller ? wretch(url).signal(controller) : wretch(url);
  return format(method(w))
    .then((r) => r)
    .catch((error) => {
      console.log(error);
      return {
        success: false,
        message: "Error communicating with server",
      };
    });
};

const callAPI = async (w: ResponseChain): Promise<ApiResponse> => {
  return w
    .unauthorized((_error) => {
      return {
        success: false,
        message: "Unauthorized..!",
      };
    })
    .internalError((error) => {
      const { message } = JSON.parse(error.message);
      return {
        success: false,
        message: message,
      };
    })
    .json((response) => response)
    .catch((error) => {
      console.log(error);
      return {
        success: false,
        message: "Error communicating with server",
      };
    });
};

export const request = {
  get: (url: string): Promise<ApiResponse> =>
    callAPI(
      wretch(url)
        .auth(`Bearer ${sessionStorage.getItem("react-token")}`)
        .get()
    ),

  post: (url: string, body: unknown): Promise<ApiResponse> =>
    callAPI(
      wretch(url)
        .auth(`Bearer ${sessionStorage.getItem("react-token")}`)
        .post(body)
    ),
  put: (url: string, body: unknown): Promise<ApiResponse> =>
    callAPI(
      wretch(url)
        .auth(`Bearer ${sessionStorage.getItem("react-token")}`)
        .put(body)
    ),

  delete: (url: string): Promise<ApiResponse> =>
    callAPI(
      wretch(url)
        .auth(`Bearer ${sessionStorage.getItem("react-token")}`)
        .delete()
    ),

  postForm: (
    url: string,
    params: { [key: string]: unknown },
    controller?: AbortController
  ): Promise<ApiResponse> =>
    process(
      url,
      (w) =>
        w
          .auth(`Bearer ${sessionStorage.getItem("react-token")}`)
          .formData(params)
          .post(),
      toJson,
      controller
    ),
};
