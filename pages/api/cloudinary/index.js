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
      `${process.env.NEXT_PUBLIC_CLOUDINARY_API_URL}/${cloudName}/resources/image/upload?prefix=${req.query.folder}/&max_results=500`,
      {
        headers: {
          Authorization: auth,
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => res.json());

    if (response.error) return res.send(response);

    res.send(
      response.resources.map((item) => {
        return {
          id: item.asset_id,
          index: item.asset_id,
          url: item.url,
          width: item.width,
          height: item.height,
          alternativeText: 'Photo',
        };
      })
    );
  });

export default handler;
