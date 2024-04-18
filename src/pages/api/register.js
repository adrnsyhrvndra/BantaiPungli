// pages/api/register.js

export default async function handler(req, res) {
      console.log(req.body);

      try {
            const response = await fetch("https://rest-api-bantai-pungli-ysnn.vercel.app/register",{
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                  },
                  body: JSON.stringify(req.body),
            });

            const data = await response.json();
            res.status(response.status).json(data);
            
      } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ message: "Internal server error api" });
      }
}
