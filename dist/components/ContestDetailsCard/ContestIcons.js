var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
var starImage = ("assets/star.svg");
var viewImage = ("assets/view.svg");
var thumbsDownImage = ("assets/thumbs-down.svg");
var thumbsDownSelectedImage = ("assets/thumbs-down-selected.svg");
var bookmarkImage = ("assets/bookmark.svg");
var bookmarkSelectedImage = ("assets/bookmark-selected.svg");
var helpImage = ("assets/help.svg");
var styles = require("./contestIcons.module.scss");
var ContestIcons = function (props) {
    var id = props.id, _a = props.iconsToShow, iconsToShow = _a === void 0 ? [] : _a, rating = props.rating, views = props.views, iconStatus = props.iconStatus;
    var _b = useState(iconStatus), previousState = _b[0], setPreviousState = _b[1];
    var urlToShare = "www.hiringhood.com/contest/".concat(id);
    var BOOKMARKED = "bookmarked";
    var REJECTED = "rejected";
    var onRejected = function () {
        var payload = { contest_id: id, previous_status: previousState, status: 'active' };
        if (previousState === REJECTED) {
            payload["status"] = "";
            setPreviousState("");
        }
        else {
            payload["status"] = REJECTED;
            setPreviousState(REJECTED);
        }
        // triggerAction(payload);
    };
    var onBookmarked = function () {
        var payload = { contest_id: id, previous_status: previousState, status: 'active' };
        if (previousState === BOOKMARKED) {
            payload["status"] = "";
            setPreviousState("");
        }
        else {
            payload["status"] = BOOKMARKED;
            setPreviousState(BOOKMARKED);
        }
        // triggerAction(payload);
    };
    return (_jsxs("div", __assign({ className: styles["contest-icons-conatiner"] }, { children: [_jsxs("div", __assign({ className: styles["contest-icon-conatiner"] }, { children: [_jsx("img", { src: starImage, alt: "Contest Rating", title: "Contest Rating" }), _jsx("p", __assign({ className: styles["contest-icons-text"] }, { children: rating }))] })), iconsToShow.includes("visit") && (_jsx("div", { className: styles["contest-icon-conatiner"] })), iconsToShow.includes("not-interested") && (_jsx("div", __assign({ className: "".concat(styles["contest-icon-conatiner"], " ").concat(styles["contest-icon-clickable"]) }, { children: _jsx("img", { src: previousState === "rejected"
                        ? thumbsDownSelectedImage
                        : thumbsDownImage, alt: "Not Interested", title: "Not Interested", onClick: function () {
                        onRejected();
                    } }) }))), iconsToShow.includes("bookmarked") && (_jsx("div", __assign({ className: "".concat(styles["contest-icon-conatiner"], "  ").concat(styles["contest-icon-clickable"]) }, { children: _jsx("img", { src: previousState === "bookmarked"
                        ? bookmarkSelectedImage
                        : bookmarkImage, alt: "Bookmark", title: "Bookmark", onClick: function () {
                        onBookmarked();
                    } }) }))), iconsToShow.includes("shares") && (_jsx("div", { className: styles["contest-icon-conatiner"] })), iconsToShow.includes("post-your-query") && (_jsx("div", __assign({ className: "".concat(styles["contest-icon-conatiner"], "  ").concat(styles["contest-icon-clickable"]) }, { children: _jsx("img", { src: helpImage, alt: "Questions", title: "Questions" }) })))] })));
};
export default ContestIcons;
