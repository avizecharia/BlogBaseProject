"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUsers = exports.createUser = void 0;
const userService_1 = require("../service/userService");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("object");
        const user = yield (0, userService_1.createUserService)(req.body);
        res.status(201).json({ user });
    }
    catch (err) {
        res.json({
            msg: err
        });
        console.log("");
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield (0, userService_1.getAllUsers)();
        res.status(200).json({
            allUsers
        });
    }
    catch (err) {
        console.log("field to get all users");
        res.json({
            err
        });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, userService_1.gettUserByName)(req.params.username);
        res.status(200).json({
            user
        });
    }
    catch (err) {
        res.json({
            err
        });
        console.log("filed to get user by name");
    }
});
exports.getUser = getUser;
// Optionally, add DELETE and EDIT functions
