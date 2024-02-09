import { Request, Response } from "express";
import{v4} from 'uuid'
import { notebook } from "../interface/notebook";


const notebooks: notebook[] =[]
export const createNotebook = async(req:Request, res:Response)=>{
    try {
        const id =v4()
        const {  title, email, content}:notebook =req.body
        const newNotebook =  {user_id:id, title, email, content} 
        notebooks.push(newNotebook);

        return res.json({
            message: 'Account created successfully',
            user:newNotebook
        })

    } catch (error) {
        return res.json({ error}); 
    }
}

export const updateNotebook = async(req:Request, res: Response)=>{
    try {
        const id = req.params.id

        const {title, email, title, content}:notebook = req.body

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("user_id", id)
        .input("title", mssql.VarChar, title)
        .input("email", mssql.VarChar, email)
        .input("content", mssql.VarChar, content)
        
        .execute('updateNotebook')).rowsAffected

        console.log(result);
        

        return res.status(200).json({
            message: "nootbook updated successfully"
        })

    } catch (error) {
        return res.json({error})
    }
}


export const deleteNotebook = async(req: Request, res: Response)=>{
    try {
        const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        let result = (await pool.request()
        .input("user_id", mssql.VarChar, id)
        .execute('deleteNotebook')
        ).rowsAffected

        console.log(result[0]);
        
        if(result[0] == 0){
            return res.status(201).json({
                error: "User not found"
            })
        }else{
            return res.status(200).json({
                message: "Account deleted successfully"
            })
        }

        
       
    } catch (error) {
        return res.json({error})
    }
}