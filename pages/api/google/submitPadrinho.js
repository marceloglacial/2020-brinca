// @see https://dev.to/solomon04/collect-form-submissions-with-nextjs-google-sheets-264j

import { google } from 'googleapis';

export default async function handler(req, res) {
  const scopes = ['https://www.googleapis.com/auth/spreadsheets'];

  const client = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes
  );

  client.authorize((error) => {
    if (error) {
      console.log(error);
      return;
    } else {
      console.log('Padrinhos Connected!');
    }
  });

  const options = [[...Object.values(req.body)]];
  return await getData(client, options, res);
}

async function getData(client, options, res) {
  const googleSheetApi = google.sheets({ version: 'v4', auth: client });
  const response = await googleSheetApi.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_PADRINHO_ID,
    range: 'Padrinhos',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: options,
    },
  });
  return res.status(201).json({
    data: response.data,
  });
}
