// @see https://legacydocs.hubspot.com/docs/methods/companies/get-all-companies

import nc from 'next-connect';
import cors from 'cors';

const handler = nc()
  .use(cors())
  .get(async (req, res) => {
    const { slug } = req.query;
    const url = `https://api.hubapi.com/companies/v2/companies/paged?hapikey=${process.env.NEXT_PUBLIC_HUBSPOT}&offset=${slug}&properties=name&properties=hs_avatar_filemanager_key&properties=address&properties=description&properties=city`;
    const response = await fetch(url).then((res) => res.json());
    res.send(response);
  });

export default handler;
