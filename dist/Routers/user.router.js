"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_contoler_1 = require("../controllers/user.contoler");
const userRouter = (0, express_1.Router)();
userRouter.post('/', user_contoler_1.createUser);
exports.default = userRouter;
