import * as cookie from 'cookie';

export default async function handler(req, res) {

      const parsedCookies = cookie.parse(req.headers.cookie);
      const paramsReq = req.query;

      try {

            const response = await fetch(`https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungli/${paramsReq.id}`,{
                  method: "DELETE",
                  headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${parsedCookies.token}`
                  },
            });

            const data = await response.json();
            res.status(response.status).json(data);
            
      } catch (error) {
            
            console.error("Error:", error);
            res.status(500).json({ message: "Internal server error api" });
      }
}
