// @see https://legacydocs.hubspot.com/docs/methods/companies/get_company

import nc from 'next-connect';
import cors from 'cors';

const handler = nc()
  .use(cors())
  .get(async (req, res) => {
    const { slug } = req.query;
    const url = `https://api.hubapi.com/companies/v2/companies/${slug}?hapikey=${process.env.NEXT_PUBLIC_HUBSPOT}&limit=100`;
    const response = await fetch(url).then((res) => res.json());
    res.send(response);
  });

export default handler;
