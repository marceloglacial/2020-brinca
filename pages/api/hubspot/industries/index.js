// @see https://legacydocs.hubspot.com/docs/methods/companies/get_company_property

import nc from 'next-connect';
import cors from 'cors';

const handler = nc()
  .use(cors())
  .get(async (req, res) => {
    const url = `https://api.hubapi.com/properties/v1/companies/properties/named/industry?hapikey=${process.env.NEXT_PUBLIC_HUBSPOT}&limit=100`;
    const response = await fetch(url).then((res) => res.json());
    res.send(response);
  });

export default handler;
