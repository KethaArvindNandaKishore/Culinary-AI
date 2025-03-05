const { GoogleGenerativeAI } = require("@google/generative-ai");
const ChatBot = async (req, res) => {
    let prompt = req.body.prompt;
    const genAI = new GoogleGenerativeAI("##################################");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    console.log(result);


    console.log(prompt);
    res.send("Hello from the chatBot controller")
}

module.exports = ChatBot;
