import React from "react";
import axios from "axios";

export const preDuplicationCheck = async (bodyPayload: {
  referralCompanyId: string;
  contestId: string;
  emailId: string;
  mobileNumber: string;
  firstName: string;
  lastName: string;
  interviewAttended: string;
}) => {
  return await axios
    .post(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/profile-log/check-duplicates`,
      bodyPayload,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
        },
      }
    )
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const fullDuplicationCheck = async (
  profileLogId: string,
  panNumber: string,
  dob: string
) => {
  return await axios
    .patch(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/profile-log/${profileLogId}/check-duplicates`,
      { panNumber: panNumber, dateOfBirth: dob },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
        },
      }
    )
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const getConsentAggregateData = async (contestId: string) => {
  return await axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seekers/aggregate/consent-status?filterColumn=contestId&filterValue=${contestId}`,
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

export const getAggregateData = async (contestId: string) => {
  return await axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seekers/aggregate/status?filterColumn=contestId&filterValue=${contestId}`,
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

export const getDuplicationFailedProfiles = async (
  filterValue: string,
  page: number,
  size: number,
  contestId: string
) => {
  return await axios
    .get(
      `${
        process.env.REACT_APP_MAIN_SERVER_URL
      }hiringhood/v1/profile-logs?contestId=${contestId}&filterColumn=status&filterValue=${filterValue}${
        page ? "&page=" + page : "&page=" + 0
      }${size ? "&size=" + size : ""}`,
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
export const getDuplicationFailedProfilesAggregate = async (
  contestId: string
) => {
  return await axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/profile-logs/aggregate/status?filterColumn=contestId&filterValue=${contestId}`,
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
export const startJobSeekerWorkflow = async (bodyPayload: {
  jobSeekerId: string;
  action: string;
}) => {
  return await axios
    .post(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seeker/${bodyPayload.jobSeekerId}/submit?action=${bodyPayload.action}`,
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
export const getContestAggregateStatistics = async () => {
  return await axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/profiles/aggregate/status`,
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
export const getContestAggregateStatisticsGroupBy = async (
  contestId: string,
  groupBy: string
) => {
  return await axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seekers/aggregate?groupBy=${groupBy}&filters=contestId:${contestId}`,
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

export const statusFilterContestLinkedJobsekeers = async (
  id?: string,
  status?: string,
  page?: number,
  size?: number
) => {
  return await axios
    .get(
      `${
        process.env.REACT_APP_MAIN_SERVER_URL
      }hiringhood/v1/job-seekers-profiles?contestId=${id}&filters=${
        status ? "status:" + status : ""
      }&page=${page}&size=${size}`,
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

export const consentStatusFilterContestLinkedJobsekeers = async (
  id: string,
  status: string,
  page: number,
  size: number
) => {
  return await axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seekers-profiles?contestId=${id}&filters=consentStatus:${status}&page=${page}&size=${size}`,
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

export const jobseekerConsentStatusChangeWorkflow = async (
  processPayload: any
) => {
  return axios
    .post(
      `${
        process.env.REACT_APP_MAIN_SERVER_URL ||
        "https://api.dev.hiringhood.com/"
      }camunda/engine-rest/message`,
      processPayload,
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

export const getIncompleteUplodsStepCount = async (contestId: string) => {
  return await axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/profiles/aggregate/step?filterColumn=contestId&filterValue=${contestId}`,
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

export const getJobseekersOnStepCount = async (
  step: number,
  contestId: string,
  page: number,
  size: number
) => {
  return await axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seekers-profiles?contestId=${contestId}&filters=matchedProfilesList.profileLastCompletedStep:${step}&page=${page}&size=${size}`,
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
export const getJobSeekersDetails = async (
  contestId?: string,
  profileId?: string
) => {
  return await axios
    .get(
      `${
        process.env.REACT_APP_MAIN_SERVER_URL
      }hiringhood/v1/job-seekers-profiles?${
        contestId ? "contestId=" + contestId : ""
      }&filters=${profileId ? "profileId:" + profileId : ""}`,
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

export const manageJobseekerPatch = async (
  jobSeekrId: string,
  payLoad: any
) => {
  return await axios
    .patch(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seeker/${jobSeekrId}`,
      payLoad,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
        },
      }
    )
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const JobSeekersStagefilterWithContest = async (
  contestId?: string,
  stage?: string,
  page?: number,
  size?: number
) => {
  return await axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seekers-profiles?contestId=${contestId}&filters=consentStatus:JOB_SEEKER_CONSENT_PASS,jobSeekerMainStage:${stage}&page=${page}&size=${size}`,
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

export const JobSeekersInCoolingPeriodWithContest = async (
  contestId?: string,
  filter?: string,
  page?: number,
  size?: number
) => {
  return await axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seekers-profiles?contestId=${contestId}&filters=consentStatus:JOB_SEEKER_CONSENT_PASS,coolingPeriod:${filter}&page=${page}&size=${size}`,
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

export const JobSeekersAggregateWithContest = async (
  contestId: string,
  groupBy: string,
  status?: string,
  consentStatus?: string
) => {
  return await axios
    .get(
      `${
        process.env.REACT_APP_MAIN_SERVER_URL
      }hiringhood/v1/job-seekers/aggregate?groupBy=${groupBy}&filters=contestId:${contestId}${
        status ? ",status:" + status : ""
      }${consentStatus ? ",consentStatus:" + consentStatus : ""}`,
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

export const JobSeekersMainStageAggregateWithContest = async (
  contestId?: string
) => {
  return await axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seekers/aggregate?groupBy=jobSeekerMainStage&filters=contestId:${contestId},consentStatus:JOB_SEEKER_CONSENT_PASS`,
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

export const JobSeekersCoolingPeriodAggregateWithContest = async (
  contestId?: string
) => {
  return await axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seekers/aggregate?groupBy=coolingPeriod&filters=contestId:${contestId},consentStatus:JOB_SEEKER_CONSENT_PASS`,
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

export const GenericProcess = async (processPayload: any) => {
  return axios
    .post(
      `${
        process.env.REACT_APP_MAIN_SERVER_URL ||
        "https://api.dev.hiringhood.com/"
      }workflow/v1/process/start`,
      processPayload,
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
