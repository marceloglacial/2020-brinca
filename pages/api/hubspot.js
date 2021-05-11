import nc from 'next-connect';
import cors from 'cors';

const handler = nc()
  .use(cors())
  .get(async (req, res) => {
    const response = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts?hapikey=c35d50af-ccc6-4692-a8db-e426aed7a6c1&limit=100`
    ).then((res) => res.json());
    res.send(response);
  });

export default handler;
