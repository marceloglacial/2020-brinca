// const { google } = require('googleapis');
// const keys = require('../secrets.json');

// export default async function postRecord(options) {
//   const scopes = ['https://www.googleapis.com/auth/spreadsheets'];

//   const client = new google.auth.JWT(
//     keys.client_email,
//     null,
//     keys.private_key,
//     scopes
//   );

//   client.authorize((error) => {
//     if (error) {
//       console.log(error);
//       return;
//     } else {
//       console.log('Connected!');
//     }
//   });

//   return await updateData(client, options);
// }

// async function updateData(client, options) {
//   const googleSheetApi = google.sheets({ version: 'v4', auth: client });
//   const res = await googleSheetApi.spreadsheets.values.append(options);
//   console.log(res.data);
//   return res.data;
// }
