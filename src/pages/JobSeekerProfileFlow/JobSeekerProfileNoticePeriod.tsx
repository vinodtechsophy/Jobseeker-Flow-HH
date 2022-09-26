import React, { ReactElement, FC, useEffect, useState } from "react";
import {
  Radio,
  TextField,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import {
  LWD_TEXT,
  YesNoOptions,
  NoticeOptions,
  OFFER_IN_HAND,
  NOTICE_STATUS,
  BUYOUT_OPTION,
  SEEKER_STATUS,
  NO_OFFER_REASON,
  WORD_LIMIT_TEXT,
  NEGOTIABLE_TEXT,
  NEGOTIABLE_LABEL,
  JOINING_DATE_TEXT,
  LATE_JOINING_TEXT,
  CHANGE_REASON_TEXT,
  NEGOTIABLE_YES_TEXT,
  BUYOUT_QUESTION_TEXT,
  OFFICIAL_NOTICE_PERIOD_TEXT,
} from "./JobSeekerProfileFlowConstants";
import "./JobSeekerProfileFlow.css";
import PreviousNextButtons from "../../components/PreviousNextButtons/PreviousNextButtons";
import CurrentOffers from "./CurrentOffers/CurrentOffers";
import { useStyles } from "./JobSeekerProfileFlowStyles";
import Calendar from "../../components/Calendar/Calendar";
import {
  updateJobSeekerProfile,
  UploadFiles,
} from "../../services/FormDataService";
import {
  ERROR_KEY,
  SUCCESS_KEY,
  FORM_SUBMISSION_SUCCESS,
  WARNING_KEY,
  OFFER_LETTER,
} from "../../constants";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";

const JobSeekerProfileNoticePeriod: FC<any> = (props): ReactElement => {
  const classes = useStyles();
  const userDataState = useAppSelector((state) => state.currentUser);
  const [offerStatus, setOfferStatus] = React.useState("");
  const [joiningDate, setJoiningDate] = React.useState("");
  const [noticePeriod, setNoticePeriod] = React.useState("");
  const [noticeStatus, setNoticeStatus] = React.useState("");
  const [buyoutStatus, setBuyoutStatus] = React.useState("");
  const [lastWorkingDate, setLastWorkingDate] = React.useState("");
  const [negotiablePeriod, setNegotiablePeriod] = React.useState("");
  const [negotiableStatus, setNegotiableStatus] = React.useState("");
  const [currentlyWorking, setCurrentlyWorking] = React.useState(true);
  const [offerData, setOfferData] = useState<any[]>([]);
  const [reasonOfJobChange, setReasonOfJobChange] = useState("");
  const [reasonOfResignation, setReasonOfResignation] = useState("");

  const uploadPayloadBuild = (files) => {
    return {
      documentTypeId: OFFER_LETTER,
      documentPath: `offerLetter/${files[0]?.path}`,
      documentName: files[0]?.path,
      files,
    };
  };

  const buildDetailsPayload = () => {
    return {
      currentlyWorking,
      noticeStatus,
      lastWorkingDate,
      noticePeriod,
      reasonOfJobChange,
      negotiableStatus,
      buyoutStatus,
      offerStatus,
      reasonOfResignation,
      joiningDate,
      offerData,
      negotiablePeriod,
    };
  };
  const submitNoticePeriodInfo = async () => {
    const noticePeriodInfoMap = buildDetailsPayload();

    if (!validateNoticePeriodInfo(noticePeriodInfoMap)) {
      props.setOpen(true);
      props.setType(WARNING_KEY);
      props.setDataMessage("Please enter all Notice Period details");
      return;
    }
    if (noticePeriodInfoMap.offerData.length > 0) {
      try {
        const fileIds: { index: number; id: string }[] = [];
        await Promise.all(
          noticePeriodInfoMap.offerData.map(async (offer, index) => {
            const uploadResponse = await UploadFiles(
              uploadPayloadBuild(offer?.letterFiles)
            );
            fileIds.push({
              index,
              id: uploadResponse?.data?.data?.id,
            });
          })
        );
        noticePeriodInfoMap.offerData.forEach((offer, index) => {
          const idData = fileIds.find((files) => files.index === index);
          noticePeriodInfoMap.offerData[index].offerDocumentId = idData?.id;
        });
      } catch (error) {
        props.setOpen(true);
        props.setType(ERROR_KEY);
        props.setDataMessage(
          "File upload failed, cannot process further, please try again"
        );
        return;
      }
    }
    try {
      const profileDetailsResponse = await updateJobSeekerProfile({
        profileId: userDataState.userData.profileId || "1018862574432321536",
        profileData: { noticePeriodInfoMap },
      });
      console.log(profileDetailsResponse?.data);
      if (profileDetailsResponse?.data?.success) {
        props.setType(SUCCESS_KEY);
        props.setDataMessage(FORM_SUBMISSION_SUCCESS);
        props.setOpen(true);
        props.handleComplete(3);
        props.handleNext();
      }
    } catch (error: any) {
      console.log(error);
      props.setType(ERROR_KEY);
      props.setDataMessage(error?.message);
      props.setOpen(true);
    }
  };
  const validateNoticePeriodInfo = (data) => {
    if (data.noticeStatus === "Serving Notice Period") {
      if (
        !data.lastWorkingDate ||
        !data.reasonOfJobChange ||
        !data.offerStatus ||
        !data.negotiableStatus
      )
        return false;
      if (data.negotiableStatus === "Yes") {
        if (!data.negotiablePeriod) return false;
      }
      if (data.offerStatus === "Yes") {
        if (offerData.length === 0) {
          return false;
        } else {
          offerData.forEach((row) => {
            if (
              !row.designation ||
              !row.joiningDate ||
              !row.employerName ||
              !row.joiningLocation
            )
              return false;
          });
        }
      } else {
        setOfferData([]);
        if (!data.reasonOfResignation) return false;
      }
    } else {
      if (
        !data.noticePeriod ||
        !data.reasonOfJobChange ||
        !data.negotiableStatus ||
        !data.buyoutStatus
      )
        return false;
      if (data.negotiableStatus === "Yes") {
        if (!data.negotiablePeriod) return false;
      }
    }
    return true;
  };

  const removeOfferData = (index) => {
    const list = [...offerData];
    list.splice(index, 1);
    setOfferData(list);
  };
  return (
    <div className="job-seeker-profile-content">
      <div className="notice-details-card">
        {currentlyWorking ? (
          <>
            <div className="experience-card-title">
              <span>
                {NOTICE_STATUS}
                <span className="asterisk-span"> *</span>
              </span>
            </div>
            <div className="notice-period-radio">
              <FormControl>
                <RadioGroup
                  value={noticeStatus}
                  onChange={(e) => setNoticeStatus(e.target.value)}
                >
                  {NoticeOptions.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={option}
                      disabled={!props.hasButtons}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </>
        ) : (
          <>
            <div className="experience-card-title">
              <span>
                {SEEKER_STATUS}
                <span className="asterisk-span"> *</span>
              </span>
            </div>
            <div className="notice-period-radio">
              <p>
                {JOINING_DATE_TEXT}
                <span className="asterisk-span"> *</span>
              </p>
              <Calendar setDate={setJoiningDate} status={true} />
            </div>
            <div className="job-change-field">
              <p>
                {LATE_JOINING_TEXT}
                <span className="asterisk-span"> *</span>
              </p>
              <TextField
                type="text"
                multiline
                fullWidth
                rows={3}
                disabled={!props.hasButtons}
                helperText={WORD_LIMIT_TEXT}
                onChange={(e) => console.log("val ", e.target.value)}
                InputProps={{
                  inputProps: {
                    maxLength: 1200,
                  },
                }}
              />
            </div>
          </>
        )}
        <div className="notice-period-conditional">
          {noticeStatus === NoticeOptions[0] ? (
            <div>
              <p>
                {LWD_TEXT}
                <span className="asterisk-span"> *</span>
              </p>
              <Calendar setDate={setLastWorkingDate} status={true} />
            </div>
          ) : noticeStatus === NoticeOptions[1] ? (
            <div>
              <p>
                {OFFICIAL_NOTICE_PERIOD_TEXT}
                <span className="asterisk-span"> *</span>
              </p>
              <TextField
                disabled={!props.hasButtons}
                className={classes.inputField}
                type="number"
                label={OFFICIAL_NOTICE_PERIOD_TEXT}
                value={noticePeriod}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (
                    Number(e.target.value) > 180 ||
                    Number(e.target.value) < 0
                  ) {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 2);
                  }
                  setNoticePeriod(e.target.value);
                }}
                size="small"
              />
            </div>
          ) : null}
        </div>
        {noticeStatus !== "" ? (
          <React.Fragment>
            <div className="job-change-field">
              <p>
                {CHANGE_REASON_TEXT}
                <span className="asterisk-span"> *</span>
              </p>
              <TextField
                disabled={!props.hasButtons}
                type="text"
                multiline
                fullWidth
                rows={3}
                helperText={WORD_LIMIT_TEXT}
                onChange={(e) => setReasonOfJobChange(e.target.value)}
                InputProps={{
                  inputProps: {
                    maxLength: 1200,
                  },
                }}
              />
            </div>
            <div className="notice-period-conditional">
              <p>
                {NEGOTIABLE_TEXT}
                <span className="asterisk-span"> *</span>
              </p>
              <FormControl>
                <RadioGroup
                  value={negotiableStatus}
                  onChange={(e) => setNegotiableStatus(e.target.value)}
                >
                  {YesNoOptions.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={option}
                      disabled={!props.hasButtons}
                    />
                  ))}
                  {noticeStatus === NoticeOptions[0] ? (
                    <FormControlLabel
                      value={BUYOUT_OPTION}
                      control={<Radio />}
                      label={BUYOUT_OPTION}
                    />
                  ) : null}
                </RadioGroup>
              </FormControl>
            </div>
          </React.Fragment>
        ) : null}
        {negotiableStatus === YesNoOptions[0] ? (
          <div className="notice-period-conditional">
            <p>
              {NEGOTIABLE_YES_TEXT}
              {noticeStatus === NoticeOptions[1] ? (
                <span className="asterisk-span"> *</span>
              ) : null}
            </p>
            <TextField
              disabled={!props.hasButtons}
              className={classes.inputField}
              type="number"
              label={NEGOTIABLE_LABEL}
              value={negotiablePeriod}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (
                  Number(e.target.value) > 180 ||
                  Number(e.target.value) < 0
                ) {
                  e.target.value = Math.max(0, parseInt(e.target.value))
                    .toString()
                    .slice(0, 2);
                }
                setNegotiablePeriod(e.target.value);
              }}
              size="small"
            />
          </div>
        ) : null}
        {noticeStatus === NoticeOptions[1] ? (
          <div className="notice-period-conditional">
            <p>
              {BUYOUT_QUESTION_TEXT}
              <span className="asterisk-span"> *</span>
            </p>
            <FormControl>
              <RadioGroup
                value={buyoutStatus}
                onChange={(e) => setBuyoutStatus(e.target.value)}
              >
                {YesNoOptions.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    label={option}
                    disabled={!props.hasButtons}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        ) : null}
        {noticeStatus === NoticeOptions[0] || !currentlyWorking ? (
          <React.Fragment>
            <div className="notice-period-conditional">
              <p>
                {OFFER_IN_HAND}
                <span className="asterisk-span"> *</span>
              </p>
              <FormControl>
                <RadioGroup
                  value={offerStatus}
                  onChange={(e) => setOfferStatus(e.target.value)}
                >
                  {YesNoOptions.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={option}
                      disabled={!props.hasButtons}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            {offerStatus === YesNoOptions[1] ? (
              <div className="job-change-field">
                <p>
                  {NO_OFFER_REASON}
                  <span className="asterisk-span"> *</span>
                </p>
                <TextField
                  disabled={!props.hasButtons}
                  type="text"
                  multiline
                  fullWidth
                  rows={3}
                  helperText={WORD_LIMIT_TEXT}
                  onChange={(e) => setReasonOfResignation(e.target.value)}
                  InputProps={{
                    inputProps: {
                      maxLength: 1200,
                    },
                  }}
                  size="small"
                />
              </div>
            ) : offerStatus === YesNoOptions[0] ? (
              <div className="notice-period-conditional">
                <div className="outline-div">
                  <CurrentOffers
                    setOfferData={setOfferData}
                    removeOfferData={removeOfferData}
                    setType={props.setType}
                    setOpen={props.setOpen}
                    setDataMessage={props.setDataMessage}
                  />
                </div>
              </div>
            ) : null}
          </React.Fragment>
        ) : null}
      </div>
      {props.hasButtons ? (
        <PreviousNextButtons
          handleNext={submitNoticePeriodInfo}
          handleBack={props.handleBack}
        />
      ) : null}
    </div>
  );
};

export default JobSeekerProfileNoticePeriod;
