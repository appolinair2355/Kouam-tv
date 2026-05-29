const express = require("express");
const path = require("path");

const app = express();

// 🔥 Render donne automatiquement un PORT
const PORT = process.env.PORT || 3000;

// servir le fichier HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 🚀 ouverture du serveur (IMPORTANT POUR RENDER)
app.listen(PORT, () => {
  console.log("Kouamé TV running on port " + PORT);
});
