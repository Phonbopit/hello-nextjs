import posts from '../../../mock/posts.js';

export default (req, res) => {
  const { query } = req;
  const { id } = query;
  // หรือ req.query.id

  // ผมใช้ == เพราะ query id เป็น string แต่ id ใน mock เป็น number.
  // 💡ในการใช้งานจริง ควรไป validation ดีๆนะครับ เพราะ user input อะไรมาก็ได้
  const post = posts.find(post => post.id == id) || {};

  res.json({
    post
  });
};
