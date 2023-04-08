import nc from 'next-connect';
import cors from 'cors';

const handler = nc()
  .use(cors())
  .get(async (req, res) => {
    const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
    const apiSecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET;
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const auth = 'Basic ' + btoa(apiKey + ':' + apiSecret);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CLOUDINARY_API_URL}/${cloudName}/resources/image/upload?prefix=${req.query.folder}`,
      {
        headers: {
          Authorization: auth,
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => res.json());
    res.send(response.resources);
  });

export default handler;
