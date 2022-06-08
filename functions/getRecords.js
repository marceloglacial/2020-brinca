const { google } = require('googleapis');
// TODO: Move this to ENV

export default async function getRecords(options) {
  const scopes = ['https://www.googleapis.com/auth/spreadsheets'];

  const client = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
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

  return await getData(client, options);
}

async function getData(client, options) {
  const googleSheetApi = google.sheets({ version: 'v4', auth: client });
  const dataFromSheet = await googleSheetApi.spreadsheets.values.get(options);
  const allRecords = dataFromSheet.data.values;
  const normalizedRecords = allRecords.filter((item) => item[0][0]);
  return normalizedRecords;
}
