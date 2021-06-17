import nc from 'next-connect';
import cors from 'cors';

const handler = nc()
  .use(cors())
  .get(async (req, res) => {
    const { slug } = req.query;
    const url = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/menus/v1/menus/${slug}`;
    const response = await fetch(url).then((res) => res.json());
    res.send(response);
  });

export default handler;
