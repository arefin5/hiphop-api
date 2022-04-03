import express from "express";
import formidable from "express-formidable";



import {
    createPost,
    getAllPosts,
}
from '../controllers/post';
const router = express.Router();
router.post("/create-post", createPost);
router.get("/get-all-posts", getAllPosts);
module.exports = router;
