import * as cookie from 'cookie';
import { IncomingForm } from 'formidable';

export const config = {
  api: {
    bodyParser: false
  }
}

export default async function handler(req, res) {
      const parsedCookies = cookie.parse(req.headers.cookie);

      const form = new IncomingForm(); // Perubahan di sini

      form.parse(req, async (err, fields, files) => {

            if (err) {
                  console.error(err);
                  return res.status(500).json({ error: 'Internal server error' });
            }

            try {

                  const formData = new FormData();
                  formData.append('userId', parsedCookies.userId);
                  formData.append('kategoriPungliId', fields.kategoriPungliId);
                  formData.append('judul_pelaporan', fields.judul_pelaporan);
                  formData.append('deskripsi_pelaporan', fields.deskripsi_pelaporan);
                  formData.append('tanggal_pelaporan', fields.tanggal_pelaporan);
                  formData.append('status_pelaporan', 'Belum Selesai');
                  formData.append('bukti_pendukung', files.bukti_pendukung);
                  formData.append('created_at', new Date());
                  formData.append('updated_at', new Date());

                  const response = await fetch("https://rest-api-bantai-pungli-ysnn.vercel.app/pelaporanPungli", {
                        method: "POST",
                        headers: {
                        'Authorization': `Bearer ${parsedCookies.token}`
                        },
                        body: formData
                  });

                  const data = await response.json();
                  res.status(response.status).json(data);

            } catch (error) {         
                  console.error("Error:", error);
                  res.status(500).json({ message: "Internal server error" });
            }            
      })
}
