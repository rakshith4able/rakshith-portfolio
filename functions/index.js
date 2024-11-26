const functions = require("firebase-functions");
const prerender = require("prerender-node");
const express = require("express");
const path = require("path");
const app = express();

const PRERENDER_TOKEN = "xWJ9JvboGVRMELfikPBR"; // Replace with your Prerender.io token

// Set up prerender.io middleware with whitelist
prerender.set("prerenderToken", PRERENDER_TOKEN);

// Whitelist specific routes
app.use(prerender.whitelisted(["^/search", "^/users/.*/profile"]));

// Serve static files from CRA build folder
app.use(express.static(path.join(__dirname, "../build"))); // CRA build files are in 'build' folder

// Catch-all handler for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

exports.app = functions.https.onRequest(app);
