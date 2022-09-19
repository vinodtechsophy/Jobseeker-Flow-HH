import activelyHiringBadgeImage from "../../assets/actively-hiring-badge.svg";
import hotBadgeImage from "../../assets/hot-badge.svg";
import trendingBadgeImage from "../../assets/trending-badge.svg";
import inviteOnlyBadgeImage from "../../assets/invite-only-badge.svg";
import premiumBadgeImage from "../../assets/premium-badge.svg";
import mostWantedImage from "../../assets/most-wanted.svg";
import activelyHiringImage from "../../assets/actively-hiring.svg";
import hotImage from "../../assets/hot.svg";
import trendinImage from "../../assets/trending.svg";
import premiumImage from "../../assets/premium.svg";
import moment from "moment";

// import {
//   FREELANCE_RECRUITER_STAGE_NAMES,
//   RECRUITMENT_COMPANY,
//   RECRUITMENT_COMPANY_STAGE_NAMES,
//   USER_URL_MAPPING,
// } from "./constants";

export const getImageForTag = (tag: string | undefined) => {
  if (tag === "hot") {
    return hotBadgeImage;
  } else if (tag === "actively-hiring") {
    return activelyHiringBadgeImage;
  } else if (tag === "trending") {
    return trendingBadgeImage;
  } else if (tag === "premium") {
    return premiumBadgeImage;
  } else if (tag === "invite-only") {
    return inviteOnlyBadgeImage;
  }

  return undefined;
};

export const getImageForBadge = (badge: string | undefined) => {
  if (badge === "most-wanted") {
    return mostWantedImage;
  } else if (badge === "hot") {
    return hotImage;
  } else if (badge === "actively-hiring") {
    return activelyHiringImage;
  } else if (badge === "trending") {
    return trendinImage;
  } else if (badge === "premium") {
    return premiumImage;
  }

  return undefined;
};

export const fileToBase64 = (file: any, cb: any) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    cb(null, reader.result);
  };
  reader.onerror = function (error) {
    cb(error, null);
  };
};

export const stringToDate = (strDate: string) => {
  if (!strDate) {
    return null;
  }
  return moment(strDate, "DD/MM/YYYY");
};

export const dateToString = (dateValue: string) => {
  if (!dateValue) {
    return "";
  }
  const momentDate = moment(dateValue);
  const formatMoment = momentDate.format("DD/MM/YYYY");
  return formatMoment.toString();
};

// export const getStageNameForRecruiterType = (role, stageNumber) => {
//   if (!role || !stageNumber) {
//     return "";
//   }
//   const stageName =
//     role === USER_URL_MAPPING[RECRUITMENT_COMPANY]
//       ? RECRUITMENT_COMPANY_STAGE_NAMES[stageNumber - 1]
//       : FREELANCE_RECRUITER_STAGE_NAMES[stageNumber - 1];

//   return stageName;
// };

export const getQueryParams = () => {
  if (window.location.search) {
    const queryParamValues: any = {};
    const queryParams = window.location.search.substring(1).split("&");
    queryParams.map((param) => {
      const paramArray = param.split("=");
      queryParamValues[paramArray[0]] = paramArray[1];
    });
    return queryParamValues;
  }
  return null;
};

// export const createChunks = (array, numberOfSlides = 3) => {
//   const chunks = [];
//   for (let i = 0; i < array.length; i += numberOfSlides) {
//     chunks.push(array.slice(i, i + numberOfSlides));
//   }
//   return chunks;
// };
