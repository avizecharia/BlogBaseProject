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
exports.addComment = exports.updatePost = exports.getPost = exports.getPosts = exports.deletePost = exports.createPost = void 0;
const postService_1 = require("../service/postService");
// Create a new post
const createPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myPost = yield (0, postService_1.createPostService)(req.body);
        res.status(201).json({
            myPost
        });
    }
    catch (err) {
        res.json({
            err
        });
    }
});
exports.createPost = createPost;
// Delete a post
const deletePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, postService_1.DeletePost)(req.params.id);
        res.status(204).json({
            result
        });
    }
    catch (err) {
        res.json({
            err
        });
    }
});
exports.deletePost = deletePost;
// Get all posts
const getPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allPosts = yield (0, postService_1.getAllPosts)();
        res.status(200).json({
            allPosts
        });
    }
    catch (err) {
        res.json({
            err
        });
    }
});
exports.getPosts = getPosts;
// Get a single post by ID
const getPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myPost = yield (0, postService_1.getPostById)(req.params.id);
        res.status(200).json({
            myPost
        });
    }
    catch (err) {
        res.json({
            err
        });
    }
});
exports.getPost = getPost;
// Update a post
const updatePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatePost = yield (0, postService_1.updatePostService)(req.params.id, req.body);
        res.status(200).json({
            updatePost
        });
    }
    catch (err) {
        res.json({
            err
        });
    }
});
exports.updatePost = updatePost;
// Add a comment to a post
const addComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.addComment = addComment;
