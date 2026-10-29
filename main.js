const express = require("express");
const { PORT } = require("./config/server.config");
const noteRoutes = require("./routes/notes.route");
const errorHandler = require("./utils/errorHandler");
const app = express();
app.use(express.json());
app.use("/api/notes", noteRoutes);
app.use(errorHandler);
app.get("/health", (req, res) => {
  res.send("Notes API running");
});
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
