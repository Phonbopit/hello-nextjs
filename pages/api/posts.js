import posts from '../../mock/posts.js';

export default (req, res) => {
  res.json({
    posts
  });
};
