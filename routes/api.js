const express = require("express");
const blogController = require("../app/controllers/blogController");

const router = express.Router();

router.get("/read-blog", blogController.readBlog);
router.post("/create-blog", blogController.createBlog);
router.put("/update-blog", blogController.updateBlog);
router.delete("/delete-blog", blogController.deleteBlog);

module.exports = router;
