const { google } = require('googleapis');
// TODO: Move this to ENV
const keys = require('../keys.json');

export default async function getRecords() {
  const scopes = ['https://www.googleapis.com/auth/spreadsheets'];

  const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    scopes
  );

  client.authorize((error, tokens) => {
    if (error) {
      console.log(error);
      return;
    } else {
      console.log('Connected!');
    }
  });

  return await getData(client);
}

async function getData(client) {
  const googleSheetApi = google.sheets({ version: 'v4', auth: client });
  const readOptions = {
    spreadsheetId: '14n8UmDvGP1aV0mbfBHh73YgsbmtMtVN82fvs2FsdJds',
    range: '2022!A1:E5',
  };

  let dataFromSheet = await googleSheetApi.spreadsheets.values.get(readOptions);
  let allRecords = dataFromSheet.data.values;
  return allRecords;
}
