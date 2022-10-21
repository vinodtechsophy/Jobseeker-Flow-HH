export var commentsInvalid = [
    {
        title: "N/A",
        value: "N/A",
    },
    {
        title: "Wrong Notice Period",
        value: "wrongNoticePeriod",
    },
    {
        title: "Wrong Resume",
        value: "wrongResume",
    },
    {
        title: "Others",
        value: "others",
    },
];
export var mainStages = [
    {
        title: "N/A",
        value: "N/A",
    },
    {
        title: "HH-Shortlisting",
        value: "hhShortlisting",
    },
    {
        title: "HH-Screening",
        value: "hhScreening",
    },
    {
        title: "Phase-L1",
        value: "phaseL1",
    },
    {
        title: "Phase-L2",
        value: "phaseL2",
    },
    {
        title: "Phase-L3",
        value: "phaseL3",
    },
    {
        title: "Phase-L4",
        value: "phaseL4",
    },
    {
        title: "Phase-HR",
        value: "phaseHr",
    },
    {
        title: "Offer Rolled",
        value: "offerRolled",
    },
];
export var subStages = {
    hhShortlisting: {
        subStages: [
            {
                title: "N/A",
                value: "N/A",
            },
            { title: "On Hold", value: "onHold" },
            { title: "Dropped", value: "dropped" },
            { title: "Rejected", value: "rejected" },
            { title: "Shortlisted", value: "shortlisted" },
            { title: "Invalid", value: "invalid" },
        ],
        shortlisted: [
            {
                title: "N/A",
                value: "N/A",
            },
            {
                title: "Second Priority",
                value: "secondPriority",
            },
            {
                title: "Others",
                value: "others",
            },
        ],
        rejected: [
            {
                title: "N/A",
                value: "N/A",
            },
            {
                title: "High CTC",
                value: "highCtc",
            },
            {
                title: "Missing Mandatory Skills",
                value: "missingMandatorySkills",
            },
            {
                title: "Bad Communication Skills",
                value: "badCommunicationSkills",
            },
            {
                title: "Long Notice Period",
                value: "longNoticePeriod",
            },
            {
                title: "Location",
                value: "location",
            },
            {
                title: "Less Relavent Experience",
                value: "lessRelaventExperience",
            },
        ],
        dropped: [
            {
                title: "N/A",
                value: "N/A",
            },
            {
                title: "Js not responding",
                value: "jsNotResponding",
            },
            {
                title: "Js not Interested",
                value: "jsNotInterested",
            },
            {
                title: "Other",
                value: "other",
            },
        ],
        onHold: [
            {
                title: "N/A",
                value: "N/A",
            },
            {
                title: "Postion on Hold",
                value: "positionOnHold",
            },
            {
                title: "Not Responding",
                value: "notResponding",
            },
            {
                title: "Second Priority",
                value: "secondPriority",
            },
            {
                title: "Awaiting updated resume",
                value: "awaitingUpdatedResume",
            },
            {
                title: "Other",
                value: "other",
            },
        ],
        invalid: commentsInvalid,
        "N/A": [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
    },
    hhScreening: {
        subStages: [
            {
                title: "N/A",
                value: "N/A",
            },
            { title: "Invalid", value: "invalid" },
            { title: "Assigned", value: "assigned" },
            { title: "In Progress", value: "inProgress" },
            { title: "Shortlisted", value: "shortlisted" },
            { title: "On Hold", value: "onHold" },
            { title: "Rejected", value: "rejected" },
        ],
        rejected: [
            {
                title: "N/A",
                value: "N/A",
            },
            {
                title: "Suitable For Other Requirement",
                value: "suitableForOtherRequirement",
            },
            {
                title: "High CTC",
                value: "highCtc",
            },
            {
                title: "Less Relavent Experience",
                value: "lessRelaventExperience",
            },
        ],
        onHold: [
            {
                title: "N/A",
                value: "N/A",
            },
            {
                title: "Incorrect Profile Submission",
                value: "incorrectProfileSubmission",
            },
            {
                title: "Postion on Hold",
                value: "positionOnHold",
            },
            {
                title: "High CTC",
                value: "highCtc",
            },
            {
                title: "Less Relavent Experience",
                value: "lessRelaventExperience",
            },
            {
                title: "Profile Info Missing",
                value: "profileInfoMissing",
            },
            {
                title: "Other",
                value: "other",
            },
        ],
        assigned: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        inProgress: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        shortlisted: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        invalid: commentsInvalid,
        "N/A": [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
    },
    phaseL1: {
        subStages: [
            {
                title: "N/A",
                value: "N/A",
            },
            {
                title: "Scheduled",
                value: "scheduled",
            },
            {
                title: "Rescheduled",
                value: "rescheduled",
            },
            {
                title: "No Show",
                value: "noShow",
            },
            {
                title: "Panel No Show",
                value: "panelNoShow",
            },
            {
                title: "Selected",
                value: "selected",
            },
            {
                title: "Rejected",
                value: "rejected",
            },
            {
                title: "Hold",
                value: "hold",
            },
            {
                title: "Awaiting Feedback",
                value: "awaitingFeedback",
            },
        ],
        scheduled: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        rescheduled: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        noShow: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        panelNoShow: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        selected: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        rejected: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        hold: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        awaitingFeedback: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        "N/A": [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
    },
    phaseL2: {
        subStages: [
            {
                title: "N/A",
                value: "N/A",
            },
            {
                title: "Scheduled",
                value: "scheduled",
            },
            {
                title: "Rescheduled",
                value: "rescheduled",
            },
            {
                title: "JS Not Responding Before L2",
                value: "jsNotRespondingBeforeL2",
            },
            {
                title: "No Show",
                value: "noShow",
            },
            {
                title: "Panel No Show",
                value: "panelNoShow",
            },
            {
                title: "Selected",
                value: "selected",
            },
            {
                title: "Rejected",
                value: "rejected",
            },
            {
                title: "Hold",
                value: "hold",
            },
            {
                title: "Awaiting Feedback",
                value: "awaitingFeedback",
            },
        ],
        scheduled: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        rescheduled: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        jsNotRespondingBeforeL2: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        noShow: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        panelNoShow: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        selected: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        rejected: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        hold: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        awaitingFeedback: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        "N/A": [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
    },
    phaseL3: {
        subStages: [
            {
                title: "N/A",
                value: "N/A",
            },
            {
                title: "Scheduled",
                value: "scheduled",
            },
            {
                title: "Rescheduled",
                value: "rescheduled",
            },
            {
                title: "JS Not Responding Before L3",
                value: "jsNotRespondingBeforeL3",
            },
            {
                title: "No Show",
                value: "noShow",
            },
            {
                title: "Panel No Show",
                value: "panelNoShow",
            },
            {
                title: "Selected",
                value: "selected",
            },
            {
                title: "Rejected",
                value: "rejected",
            },
            {
                title: "Hold",
                value: "hold",
            },
            {
                title: "Awaiting Feedback",
                value: "awaitingFeedback",
            },
        ],
        scheduled: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        rescheduled: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        jsNotRespondingBeforeL3: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        noShow: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        panelNoShow: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        selected: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        rejected: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        hold: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        awaitingFeedback: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        "N/A": [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
    },
    phaseL4: {
        subStages: [
            {
                title: "N/A",
                value: "N/A",
            },
            {
                title: "Scheduled",
                value: "scheduled",
            },
            {
                title: "Rescheduled",
                value: "rescheduled",
            },
            {
                title: "JS Not Responding Before L4",
                value: "jsNotRespondingBeforeL4",
            },
            {
                title: "No Show",
                value: "noShow",
            },
            {
                title: "Panel No Show",
                value: "panelNoShow",
            },
            {
                title: "Selected",
                value: "selected",
            },
            {
                title: "Rejected",
                value: "rejected",
            },
            {
                title: "Hold",
                value: "hold",
            },
            {
                title: "Awaiting Feedback",
                value: "awaitingFeedback",
            },
        ],
        scheduled: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        rescheduled: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        jsNotRespondingBeforeL4: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        noShow: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        panelNoShow: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        selected: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        rejected: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        hold: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        awaitingFeedback: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        "N/A": [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
    },
    offerRolled: {
        subStages: [
            {
                title: "N/A",
                value: "N/A",
            },
            {
                title: "JS Not Responding Before Offer",
                value: "jsNotRespondingBeforeOffer",
            },
            {
                title: "Offer In Progress",
                value: "offerInProgress",
            },
            {
                title: "Offer On Hold",
                value: "offerOnHold",
            },
            {
                title: "Offer Rolled Out",
                value: "offerRolledOut",
            },
            {
                title: "Offer Acceptance Awaited By JS",
                value: "offerAcceptanceAwaitedByJS",
            },
            {
                title: "Offer Rejected By JS",
                value: "offerRejectedByJS",
            },
            {
                title: "Offer Accepted By JS",
                value: "offerAcceptedByJS",
            },
            {
                title: "JS Accepted Other Offer & Not Available/Interested",
                value: "jsAcceptedOtherOffer&NotAvailable/Interested",
            },
        ],
        jsNotRespondingBeforeOffer: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        offerInProgress: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        offerOnHold: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        offerRolledOut: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        offerAcceptanceAwaitedByJS: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        offerRejectedByJS: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        offerAcceptedByJS: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        " jsAcceptedOtherOffer&NotAvailable/Interested": [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        "N/A": [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
    },
    phaseHr: {
        subStages: [
            {
                title: "N/A",
                value: "N/A",
            },
            {
                title: "JS Not Responding Before HR",
                value: "jsNotRespondingBeforeHr",
            },
            {
                title: "HR Yet To Schedule",
                value: "hrYetToSchedule",
            },
            {
                title: "HR Scheduled",
                value: "hrScheduled",
            },
            {
                title: "HR Rescheduled",
                value: "hrRescheduled",
            },
            {
                title: "HR No Show",
                value: "hrNoShow",
            },
            {
                title: "HR Panel No Show",
                value: "hrPanelNoShow",
            },
            {
                title: "HR Selected",
                value: "hrSelected",
            },
            {
                title: "HR Rejected",
                value: "hrRejected",
            },
            {
                title: "HR Hold",
                value: "hrHold",
            },
            {
                title: "HR Awaiting Feedback",
                value: "hrAwaitingFeedback",
            },
            {
                title: "Js Accepted Other Offer & Not Avaliable/Interested",
                value: "jsAcceptedOtherOffer&NotAvaliable/Interested",
            },
        ],
        jsNotRespondingBeforeHr: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        hrYetToSchedule: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        hrScheduled: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        hrRescheduled: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        hrNoShow: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        hrPanelNoShow: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        hrSelected: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        hrRejected: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        hrHold: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        hrAwaitingFeedback: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        jsAcceptedOtherOffer: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        "N/A": [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
    },
    "N/A": {
        subStages: [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
        "N/A": [
            {
                title: "N/A",
                value: "N/A",
            },
        ],
    },
};
