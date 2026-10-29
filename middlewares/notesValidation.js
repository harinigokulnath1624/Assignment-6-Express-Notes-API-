function validateNote(req, res, next) {
  const { title, content, category } = req.body;
  if (!title || !content || !category) {
    return res
      .status(400)
      .json({ message: "Title,Content,Category are Required" });
  }
  next();
}

module.exports = validateNote;
