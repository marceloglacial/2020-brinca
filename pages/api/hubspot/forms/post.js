import nc from 'next-connect';
import cors from 'cors';

const handler = nc()
  .use(cors())
  .post(async (req, res) => {
    const response = await fetch(
      `https://api.hubapi.com/marketing/v3/forms/?hapikey=${process.env.NEXT_PUBLIC_HUBSPOT}`
    ).then((res) => res.json());
    res.send(response);
  });

export default handler;
