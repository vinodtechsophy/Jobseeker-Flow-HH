import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const starImage = ("assets/star.svg");
const viewImage = ("assets/view.svg");
const thumbsDownImage = ("assets/thumbs-down.svg");
const thumbsDownSelectedImage = ("assets/thumbs-down-selected.svg");
const bookmarkImage = ("assets/bookmark.svg");
const bookmarkSelectedImage = ("assets/bookmark-selected.svg");
const helpImage = ("assets/help.svg");
const styles = require("./contestIcons.module.scss");

interface Props {
  id: string;
  iconsToShow: Array<string>;
  rating?: number;
  views?: number;
  iconStatus?: string;
}

const ContestIcons: React.FC<Props> = (props) => {
  const { id, iconsToShow = [], rating, views, iconStatus } = props;
  const [previousState, setPreviousState] = useState(iconStatus);

  const urlToShare = `www.hiringhood.com/contest/${id}`;

  const BOOKMARKED = "bookmarked";
  const REJECTED = "rejected";

  const onRejected = () => {
    const payload = { contest_id: id, previous_status: previousState, status: 'active' };
    if (previousState === REJECTED) {
      payload["status"] = "";
      setPreviousState("");
    } else {
      payload["status"] = REJECTED;
      setPreviousState(REJECTED);
    }
    // triggerAction(payload);
  };

  const onBookmarked = () => {
    const payload = { contest_id: id, previous_status: previousState, status: 'active' };
    if (previousState === BOOKMARKED) {
      payload["status"] = "";
      setPreviousState("");
    } else {
      payload["status"] = BOOKMARKED;
      setPreviousState(BOOKMARKED);
    }
    // triggerAction(payload);
  };

  return (
    <div className={styles["contest-icons-conatiner"]}>
      <div className={styles["contest-icon-conatiner"]}>
        <img src={starImage} alt="Contest Rating" title="Contest Rating" />
        <p className={styles["contest-icons-text"]}>{rating}</p>
      </div>
      {iconsToShow.includes("visit") && (
        <div className={styles["contest-icon-conatiner"]}></div>
      )}
      {iconsToShow.includes("not-interested") && (
        <div
          className={`${styles["contest-icon-conatiner"]} ${styles["contest-icon-clickable"]}`}
        >
          <img
            src={
              previousState === "rejected"
                ? thumbsDownSelectedImage
                : thumbsDownImage
            }
            alt="Not Interested"
            title="Not Interested"
            onClick={() => {
              onRejected();
            }}
          />
        </div>
      )}
      {iconsToShow.includes("bookmarked") && (
        <div
          className={`${styles["contest-icon-conatiner"]}  ${styles["contest-icon-clickable"]}`}
        >
          <img
            src={
              previousState === "bookmarked"
                ? bookmarkSelectedImage
                : bookmarkImage
            }
            alt="Bookmark"
            title="Bookmark"
            onClick={() => {
              onBookmarked();
            }}
          />
        </div>
      )}
      {iconsToShow.includes("shares") && (
        <div className={styles["contest-icon-conatiner"]}></div>
      )}
      {iconsToShow.includes("post-your-query") && (
        <div
          className={`${styles["contest-icon-conatiner"]}  ${styles["contest-icon-clickable"]}`}
        >
          <img src={helpImage} alt="Questions" title="Questions" />
        </div>
      )}
    </div>
  );
};

export default ContestIcons;
