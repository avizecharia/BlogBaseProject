import { Request, Response } from "express";
import User, { IUser } from "../models/userModel";

export const createUser = async (req: Request, res: Response) => {
    try {
        const result:IUser = await 
    } catch (err) {
        console.log(err);
        
    }
};

export const getUsers = async (req: Request, res: Response) => {};

export const getUser = async (req: Request, res: Response) => {};

// Optionally, add DELETE and EDIT functions
