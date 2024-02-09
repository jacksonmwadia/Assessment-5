"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notebook_contoler_1 = require("../controllers/notebook.contoler");
const notebookRouter = (0, express_1.Router)();
notebookRouter.post('/', notebook_contoler_1.createNotebook);
notebookRouter.delete('/delete/:id', notebook_contoler_1.deleteNotebook);
notebookRouter.put('/update/:id', notebook_contoler_1.updateNotebook);
exports.default = notebookRouter;
