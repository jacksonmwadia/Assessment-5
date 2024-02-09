import { Router } from "express";
import { createNotebook, deleteNotebook, updateNotebook } from "../controllers/notebook.contoler";

const notebookRouter=Router()
notebookRouter.post('/', createNotebook)
notebookRouter.delete('/delete/:id', deleteNotebook)
notebookRouter.put('/update/:id',  updateNotebook)


export default notebookRouter;