import React, { ReactElement, FC, useEffect } from "react";
import {
  Step,
  Stack,
  Radio,
  Select,
  Button,
  Stepper,
  MenuItem,
  Checkbox,
  StepLabel,
  TextField,
  FormLabel,
  RadioGroup,
  InputLabel,
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

const JobSeekerProfileNoticePeriod: FC<any> = (props): ReactElement => {
  const classes = useStyles();

  const [offerStatus, setOfferStatus] = React.useState("");
  const [joiningDate, setJoiningDate] = React.useState("");
  const [noticePeriod, setNoticePeriod] = React.useState("");
  const [noticeStatus, setNoticeStatus] = React.useState("");
  const [buyoutStatus, setBuyoutStatus] = React.useState("");
  const [lastWorkingDate, setLastWorkingDate] = React.useState("");
  const [negotiablePeriod, setNegotiablePeriod] = React.useState("");
  const [negotiableStatus, setNegotiableStatus] = React.useState("");
  const [currentlyWorking, setCurrentlyWorking] = React.useState(true);

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
                onChange={(e) => console.log("val ", e.target.value)}
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
                  onChange={(e) => console.log("val ", e.target.value)}
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
                  <CurrentOffers />
                </div>
              </div>
            ) : null}
          </React.Fragment>
        ) : null}
      </div>
      {props.hasButtons ? (
        <PreviousNextButtons
          handleNext={props.handleNext}
          handleBack={props.handleBack}
        />
      ) : null}
    </div>
  );
};

export default JobSeekerProfileNoticePeriod;
