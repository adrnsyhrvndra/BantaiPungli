// pages/api/addKomentar.js
import * as cookie from 'cookie';

export default async function handler(req, res) {

      const parsedCookies = cookie.parse(req.headers.cookie);
      console.log(req.body);

      try {
            const response = await fetch("https://rest-api-bantai-pungli-ysnn.vercel.app/komentarPungli",{
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${parsedCookies.token}`
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