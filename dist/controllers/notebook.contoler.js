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
exports.deleteNotebook = exports.updateNotebook = exports.createNotebook = void 0;
const uuid_1 = require("uuid");
const notebooks = [];
const createNotebook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, uuid_1.v4)();
        const { title, email, content } = req.body;
        const newNotebook = { user_id: id, title, email, content };
        notebooks.push(newNotebook);
        return res.json({
            message: 'Account created successfully',
            user: newNotebook
        });
    }
    catch (error) {
        return res.json({ error });
    }
});
exports.createNotebook = createNotebook;
const updateNotebook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { title, email, title, content } = req.body;
        const pool = yield mssql.connect(sqlConfig);
        let result = (yield pool.request()
            .input("user_id", id)
            .input("title", mssql.VarChar, title)
            .input("email", mssql.VarChar, email)
            .input("content", mssql.VarChar, content)
            .execute('updateNotebook')).rowsAffected;
        console.log(result);
        return res.status(200).json({
            message: "nootbook updated successfully"
        });
    }
    catch (error) {
        return res.json({ error });
    }
});
exports.updateNotebook = updateNotebook;
const deleteNotebook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const pool = yield mssql.connect(sqlConfig);
        let result = (yield pool.request()
            .input("user_id", mssql.VarChar, id)
            .execute('deleteNotebook')).rowsAffected;
        console.log(result[0]);
        if (result[0] == 0) {
            return res.status(201).json({
                error: "User not found"
            });
        }
        else {
            return res.status(200).json({
                message: "Account deleted successfully"
            });
        }
    }
    catch (error) {
        return res.json({ error });
    }
});
exports.deleteNotebook = deleteNotebook;
