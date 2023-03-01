import nc from 'next-connect';
import cors from 'cors';

const handler = nc()
  .use(cors())
  .get(async (req, res) => {
    const { slug } = req.query;
    const response = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${slug}?limit=100`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUBSPOT_APP}`,
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => res.json());
    res.send(response);
  });

export default handler;
