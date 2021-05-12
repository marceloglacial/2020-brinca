import nc from 'next-connect';
import cors from 'cors';

const handler = nc()
  .use(cors())
  .get(async (req, res) => {
    const { slug } = req.query;
    const routes = {
      contacts: `crm/v3/objects/contacts`,
      forms: `marketing/v3/forms/28b1f0ae-e05a-474e-8366-07be0ddb4ca3`,
    };

    const response = await fetch(
      `https://api.hubapi.com/${routes[slug]}?hapikey=${process.env.NEXT_PUBLIC_HUBSPOT}&limit=100`
    ).then((res) => res.json());
    res.send(response);
  });

export default handler;
