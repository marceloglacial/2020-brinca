// @see https://dev.to/solomon04/collect-form-submissions-with-nextjs-google-sheets-264j

import { google } from 'googleapis';
const keys = require('../../secrets.json');

export default async function handler(req, res) {
  const scopes = ['https://www.googleapis.com/auth/spreadsheets'];

  const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    scopes
  );

  client.authorize((error) => {
    if (error) {
      console.log(error);
      return;
    } else {
      console.log('Connected!');
    }
  });

  const options = [[...Object.values(req.body)]];
  return await getData(client, options, res);
}

async function getData(client, options, res) {
  const googleSheetApi = google.sheets({ version: 'v4', auth: client });
  const response = await googleSheetApi.spreadsheets.values.append({
    spreadsheetId: '19RbFQdJZWygp-feLAmtWNK4KagWK6cHpNG_1ya2winM',
    range: 'Test',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: options,
    },
  });
  return res.status(201).json({
    data: response.data,
  });
}
