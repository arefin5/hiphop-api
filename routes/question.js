import express from "express";
import formidable from "express-formidable";
const router = express.Router();


router.get("/get-all-questions", (req, res) => {
    res.send("get all questions");
    
});

module.exports = router;
