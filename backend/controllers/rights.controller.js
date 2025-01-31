// import Right from "../models/rights.model.js";

// const rightsController = async (req, res) => {
//     try {
//         let rights = await Right.find();

//         if (rights.length === 0) {
//             rights = await Right.insertMany([
//                 { title: "Right to Dignity and Equality", description: "Sex workers are entitled to dignity and equality under Articles 14 and 21 of the Constitution." },
//                 { title: "Right Against Exploitation", description: "Under Article 23, forced prostitution and trafficking are illegal." },
//                 { title: "Protection Under Immoral Traffic (Prevention) Act, 1956", description: "Sex work in private is legal, but brothels, pimping, and public solicitation are prohibited." },
//                 { title: "Right to Healthcare", description: "Under the HIV/AIDS Act, 2017, sex workers must receive medical care without discrimination." },
//                 { title: "Right to Legal Protection", description: "They can file complaints under IPC Sections 354 (outraging modesty), 370 (trafficking), and 375 (rape)." },
//                 { title: "Right to Work and Livelihood", description: "Voluntary sex work is not a criminal offense, and they can take up other jobs without discrimination." },
//                 { title: "Supreme Court Protection", description: "The SC in Budhadev Karmaskar v. State of WB ruled that sex workers should not be harassed and should be rehabilitated voluntarily." },
//                 { title: "Right to Custody of Children", description: "Sex workers can raise their children unless proven unfit in court." },
//                 { title: "Right to Rehabilitation", description: "ITPA Section 19 allows sex workers to seek rehabilitation and exit sex work if they choose." },
//                 { title: "Right Against Police Harassment", description: "Police cannot arbitrarily arrest sex workers engaged in voluntary work." }
//             ]);
//         }

//         res.status(200).json(rights);
//     } catch (error) {
//         console.error("Error fetching rights:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// export default rightsController;

import axios from "axios";
import dotenv from "dotenv";
import Right from "../models/rights.model.js";
// Fetch rights
export const rightsController = async (req, res) => {
    try {
        let rights = await Right.find();
        if (rights.length === 0) {
            rights = await Right.insertMany([
                // Your legal rights data
            ]);
        }
        res.status(200).json(rights);
    } catch (error) {
        console.error("Error fetching rights:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};






dotenv.config();

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent";
const API_KEY = process.env.RIGHTS_API_KEY;



const formatResponse = (text) => {
    return text
        .replace(/\\/g, '') // Remove unnecessary backslashes
        .replace(/\*/g, '') // Remove asterisks
    
        .replace(/\n\s*/g, (match) => match.trim() ? '\n• ' : '\n'); // Add bullet points for valid points
};



const askRights = async (req, res) => {
    try {
        const { userMessage, conversationHistory = [] } = req.body;  // Get conversation history from request body
        const therapyPrompt = "Provide a concise response in 3-5 points. Use a numbered list format. " + userMessage + " Women laws for India";

        // Append the new message to the conversation history
        const newConversationHistory = [...conversationHistory, { role: "user", text: therapyPrompt }];

        // Make the API call
        const response = await axios.post(
            `${GEMINI_API_URL}?key=${API_KEY}`,
            {
                contents: newConversationHistory.map(message => ({ role: message.role, parts: [{ text: message.text }] }))
            }
        );

        if (response.data.candidates && response.data.candidates.length > 0) {
            const rawText = response.data.candidates[0].content.parts[0].text;
            const formattedText = "• " + formatResponse(rawText); // Add bullet point to the first line
            
            // Add the response from Gemini to the conversation history
            newConversationHistory.push({ role: "assistant", text: formattedText });
            
            // Send the response and the updated conversation history
            res.json({ reply: formattedText, conversationHistory: newConversationHistory });
        } else {
            res.json({ reply: "No meaningful response received from Gemini.", conversationHistory: newConversationHistory });
        }
    } catch (error) {
        console.error("Error communicating with Gemini API:", error.message);
        res.status(500).json({ error: "Error communicating with Gemini API" });
    }
};

export default askRights;

