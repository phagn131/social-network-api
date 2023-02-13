const router = require('express').Router();
const {
  getSinglePost,
  getPosts,
  createPost,
} = require('../../controllers/postController');
// GET '/api/posts/' - all posts
// POST '/api/posts/' - create one post
router.route('/').get(getPosts).post(createPost);

router.route('/:postId').get(getSinglePost);

module.exports = router;
