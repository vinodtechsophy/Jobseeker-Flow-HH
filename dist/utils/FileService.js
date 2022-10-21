var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { uploadDocument, deleteDocument, downloadDocument, } from "../services/DocumentService";
var FileService = /** @class */ (function () {
    function FileService() {
    }
    FileService.prototype.uploadFile = function (storage, file, fileName, dir, evt, url, options, fileKey) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("upload action");
                console.log(url);
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(storage, file, fileName, dir, evt, url, options, fileKey);
                                    return [4 /*yield*/, uploadDocument(url, {
                                            file: file,
                                            documentPath: dir,
                                            name: file.name,
                                        })];
                                case 1:
                                    res = _a.sent();
                                    if (res.success) {
                                        return [2 /*return*/, resolve({
                                                storage: "url",
                                                name: file.name,
                                                url: "",
                                                size: file.size,
                                                type: file.type,
                                                file: file,
                                                data: res.data,
                                            })];
                                    }
                                    else {
                                        reject("Falied to upload");
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    FileService.prototype.deleteFile = function (fileInfo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(fileInfo);
                deleteDocument(fileInfo.data.id);
                return [2 /*return*/];
            });
        });
    };
    FileService.prototype.downloadFile = function (fileInfo, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(fileInfo);
                        return [4 /*yield*/, downloadDocument(fileInfo.data.id)];
                    case 1:
                        response = _a.sent();
                        // console.log(response.data);
                        if (fileInfo.type.includes("image")) {
                            return [2 /*return*/, {
                                    url: "https://cdn-icons-png.flaticon.com/512/6789/6789174.png",
                                    name: fileInfo.name,
                                }];
                        }
                        else if (fileInfo.type.includes("pdf")) {
                            return [2 /*return*/, {
                                    url: "https://cdn.pixabay.com/photo/2017/03/08/21/20/pdf-2127829_960_720.png",
                                    name: fileInfo.name,
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    url: "https://cdn.pixabay.com/photo/2017/03/08/21/19/file-2127825_960_720.png",
                                    name: fileInfo.name,
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FileService.prototype.loadImage = function (fileInfo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.downloadFile(fileInfo, {}).then(function (result) { return ({
                        src: fileInfo.file,
                        name: fileInfo.name,
                        id: fileInfo.data.id,
                    }); })];
            });
        });
    };
    return FileService;
}());
export { FileService };
export var myOptions = {
    fileService: new FileService(),
    // builder: {
    //     customAdvanced: {
    //         title: 'Advanced',
    //         default: false,
    //         weight: 0,
    //         components: {
    //             inputcamera: {
    //                 schema: {
    //                     label: 'camera',
    //                     type: 'file',
    //                     key: 'inputcamera',
    //                     image: true,
    //                     url: 'https://api-gateway.techsophy.com/api/dms/v1/documents?documentTypeId=920997426618875904',
    //                     options: JSON.stringify({
    //                         withCredentials: true,
    //                         Authorization: `Bearer ${localStorage.getItem('token')}`,
    //                     }),
    //                 },
    //             },
    //         },
    //     },
    // },
};
