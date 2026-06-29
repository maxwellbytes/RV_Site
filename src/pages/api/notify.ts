import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
// initialize resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const incomingSecret = req.headers['x-webhook-secret'];
    if (incomingSecret !== process.env.WEBHOOK_SECRET) {
        return res.status(401).json({ message: "Unauthorized!" });
    }
    // only allow post requests to supabase
    if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {
    const { record } = req.body;
    const { first_name, last_name, start_date, end_date, email, message } = record;
    const response = await resend.emails.send({
      from: 'Brookshire Basecamp <bookings@boonervsite.com>',
      to: [process.env.RESEND_EMAIL || ''],
      subject: `New Booking Request: ${first_name} ${last_name}`,
      html: `<p>New Request from ${first_name}</p>`,
    });
    if (response.error) {
      console.error("Resend API Error:", response.error);
      return res.status(400).json({ error: response.error });
    }
    console.log("Resend Success:", response.data);
    return res.status(200).json({ success: true, id: response.data?.id });
  } catch (err) {
    console.error('System Error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}