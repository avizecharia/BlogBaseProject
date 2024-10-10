import { Request, Response } from "express";
import { IUser, User } from "../models/userModel";
import { createUserService, getAllUsers, gettUserByName } from "../service/userService";
import { log } from "console";

export const createUser = async (req: Request, res: Response) => {
    try {
        console.log("object")
        const user:User | unknown = await createUserService(req.body)
        res.status(201).json({user})
    } catch (err) {
        res.json({
            msg:err
        })
        console.log("");
        
    }
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        const allUsers : User[] | unknown = await getAllUsers()
        res.status(200).json({
            allUsers
        })
    } catch (err) {
        console.log("field to get all users");
        
        res.json({
            err
        })
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const user : User| unknown = await gettUserByName(req.params.username)
        res.status(200).json({
            user
        })
    } catch (err) {
        res.json({
            err
        })
        console.log("filed to get user by name");
        
    }
};

// Optionally, add DELETE and EDIT functions
