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
export var getImageForTag = function (tag) {
    if (tag === "hot") {
        return hotBadgeImage;
    }
    else if (tag === "actively-hiring") {
        return activelyHiringBadgeImage;
    }
    else if (tag === "trending") {
        return trendingBadgeImage;
    }
    else if (tag === "premium") {
        return premiumBadgeImage;
    }
    else if (tag === "invite-only") {
        return inviteOnlyBadgeImage;
    }
    return undefined;
};
export var getImageForBadge = function (badge) {
    if (badge === "most-wanted") {
        return mostWantedImage;
    }
    else if (badge === "hot") {
        return hotImage;
    }
    else if (badge === "actively-hiring") {
        return activelyHiringImage;
    }
    else if (badge === "trending") {
        return trendinImage;
    }
    else if (badge === "premium") {
        return premiumImage;
    }
    return undefined;
};
export var fileToBase64 = function (file, cb) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(null, reader.result);
    };
    reader.onerror = function (error) {
        cb(error, null);
    };
};
export var stringToDate = function (strDate) {
    if (!strDate) {
        return null;
    }
    return moment(strDate, "DD/MM/YYYY");
};
export var dateToString = function (dateValue) {
    if (!dateValue) {
        return "";
    }
    var momentDate = moment(dateValue);
    var formatMoment = momentDate.format("DD/MM/YYYY");
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
export var getQueryParams = function () {
    if (window.location.search) {
        var queryParamValues_1 = {};
        var queryParams = window.location.search.substring(1).split("&");
        queryParams.map(function (param) {
            var paramArray = param.split("=");
            queryParamValues_1[paramArray[0]] = paramArray[1];
        });
        return queryParamValues_1;
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
