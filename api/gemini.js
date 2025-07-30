// api/gemini.js

export default async function handler(req, res) {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  
    const query = req.query.q;
    if (!query ) {
      return res.status(400).json({ error: "Missing query" });
    }
    if (!GEMINI_API_KEY) {
      return res.status(400).json({ error: "Missing API key" });
    }
  
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + GEMINI_API_KEY, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: query }] }]
        })
      });
  
      const data = await response.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini.";
  
      res.status(200).json({ reply });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error talking to Gemini." });
    }
  }
  