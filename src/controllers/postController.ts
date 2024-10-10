import { Request, Response, NextFunction } from "express";
import Post, { IPost } from "../models/postModel";
import {User} from "../models/userModel";
import { createPostService, getAllPosts, gettPostById, updatePostService } from "../service/postService";
import mongoose from "mongoose";

// Create a new post
export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const myPost :IPost | unknown = await createPostService(req.body)
    res.status(201).json({
      myPost
    })
  } catch (err) {
    res.json({
      err
    })
  }
};

// Delete a post
export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};



// Get all posts
export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const allPosts:IPost|unknown = await getAllPosts()
    res.status(200).json({
      allPosts
    })
  } catch (err) {
    res.json({
      err
    })
  }
};


// Get a single post by ID
export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const myPost : IPost | unknown = await gettPostById(req.params.id)
    res.status(200).json({
      myPost
    })
  } catch (err) {
    res.json({
      err
    })
  }
};


// Update a post
export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updatePost :IPost | unknown = await updatePostService(req.params.id , req.body)
    res.status(200).json({
      updatePost
    })
  } catch (err) {
    res.json({
      err
    })
  }
};


// Add a comment to a post
export const addComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};


