// @see https://legacydocs.hubspot.com/docs/methods/companies/get-all-companies

import nc from 'next-connect';
import cors from 'cors';

const handler = nc()
  .use(cors())
  .get(async (req, res) => {
    const url = `https://api.hubapi.com/companies/v2/companies/?hapikey=${process.env.NEXT_PUBLIC_HUBSPOT}&limit=3`;
    const response = await fetch(url).then((res) => res.json());
    res.send(response);
  });

export default handler;
