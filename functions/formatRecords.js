const formatRecords = (records) => {
  const header = records[0];
  const rows = records.slice(1).filter((item) => item[0]);

  const formatedRecords = rows.map((row) => {
    return header.reduce((accumulator, element, index) => {
      return { ...accumulator, [element]: row[index] };
    }, {});
  });

  return formatedRecords;
};

export default formatRecords;
