import nc from 'next-connect';
import cors from 'cors';
const handler = nc()
  .use(cors())
  .post(async (req, res) => {
    const data = JSON.parse(req.body);
    console.log(data);

    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Basic Nzk4NzkzNjMyMTMyNTM0OlItbTdmZ1J2WmVMX3EzcDVsQ1UzdFphRXkyZw==',
      'Accept: application/json',
      'Content-Type: application/json'
    );

    var formdata = new FormData();
    formdata.append('file', data.image, data.image.name);
    formdata.append('upload_preset', 'brinca');
    formdata.append('api_key', '798793632132534');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://api.cloudinary.com/v1_1/dw2wjwhuv/image/upload',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  });
export default handler;
