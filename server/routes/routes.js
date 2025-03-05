const express = require("express");
const Api_Routes = express.Router();
const ChatBot = require("../controllers/chatBot");

Api_Routes.post(("/chat-res"),ChatBot)

module.exports = Api_Routes;