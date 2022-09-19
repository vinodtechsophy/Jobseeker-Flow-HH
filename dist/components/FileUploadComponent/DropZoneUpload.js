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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Box, Paper, Typography } from '@mui/material';
import { BROWSE_FILE_MSG, FILE_SIZE_MSG, DASHED_BORDER } from "../../constants";
import { useDropzone } from "react-dropzone";
import { useStyles } from "./DropZoneUploadStyles";
var DropZoneUpload = function (props) {
    var classes = useStyles();
    var _a = useDropzone({
        disabled: false,
        onDrop: function (fileData) {
            props.receiveFileContent(fileData, props.data);
        },
    }), acceptedFilesOfferLetter = _a.acceptedFiles, rootPropsOfferLetter = _a.getRootProps, inputPropsOfferLetter = _a.getInputProps, openOfferLetter = _a.open;
    var removeFile = function (file) {
        var newFiles = __spreadArray([], acceptedFilesOfferLetter, true);
        acceptedFilesOfferLetter.splice(file, 1);
    };
    return (_jsxs(React.Fragment, { children: [_jsx(Paper, __assign({ sx: {
                    borderRadius: 4,
                }, variant: "outlined" }, { children: _jsxs(Box, __assign({ sx: { border: DASHED_BORDER, p: 3, m: 3 } }, rootPropsOfferLetter({ className: "dropzone" }), { children: [_jsx("input", __assign({}, inputPropsOfferLetter())), _jsxs(Typography, __assign({ variant: "body1", color: "blue", textAlign: "left" }, { children: ["Drag & drop", " ", _jsx(Typography, __assign({ fontSize: 20, color: "blue", textAlign: "right" }, { children: "+" }))] })), _jsx(Typography, { children: "Your file here or browse" })] })) })), _jsxs(Box, __assign({ sx: {
                    display: {
                        xs: "block",
                        sm: "flex",
                        md: "flex",
                        lg: "flex",
                    },
                    justifyContent: "space-between",
                    p: 2,
                }, className: classes.limitWidth }, { children: [_jsxs(Box, { children: [_jsx(Box, __assign({ textAlign: "left", onClick: openOfferLetter, className: classes.browseFiles }, { children: BROWSE_FILE_MSG })), _jsx(Box, { children: FILE_SIZE_MSG })] }), _jsx(Box, __assign({ textAlign: "right", onClick: openOfferLetter, className: classes.uploadLogoText }, { children: "Upload File" }))] }))] }));
};
export default DropZoneUpload;
