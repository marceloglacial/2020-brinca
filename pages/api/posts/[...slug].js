import nc from 'next-connect';
import cors from 'cors';

const handler = nc({ attachParams: true })
  .use(cors())
  .get(async (req, res) => {
    const { slug } = req.query;
    const perPage = slug[0] ? `?per_page=${slug[0]}` : '';
    const page = slug[1] ? `&page=${slug[1]}` : '';
    const url = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts/${perPage}${page}`;
    const response = await fetch(url).then((res) => res.json());
    res.send(response);
  });

export default handler;
