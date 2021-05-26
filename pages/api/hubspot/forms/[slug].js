import nc from 'next-connect';
import cors from 'cors';

const handler = nc()
  .use(cors())
  .get(async (req, res) => {
    const { slug } = req.query;
    const response = await fetch(
      `https://api.hubapi.com/marketing/v3/forms/${slug}?hapikey=${process.env.NEXT_PUBLIC_HUBSPOT}&limit=100`
    ).then((res) => res.json());
    res.send(response);
  })
  .post(async (req, res) => {
    const { slug } = req.query;
    const response = await fetch(
      `https://api.hubapi.com/marketing/v3/forms/${slug}?hapikey=${process.env.NEXT_PUBLIC_HUBSPOT}&limit=100`
    ).then((res) => res.json());
    res.send(response);
  });

export default handler;
