import randomArray from './ramdomArray';

export const getGold = (data) => {
  const partners = getPartners(data);
  return randomArray(partners.filter((item) => item.membership));
};

export const getSilver = (data) => {
  const partners = getPartners(data);
  return randomArray(partners.filter((item) => !item.membership));
};

const getPartners = (records) => {
  const header = records[0];
  const rows = records.slice(1).filter((item) => item[0]);

  const formatedRecords = rows.map((row) => {
    return header.reduce((accumulator, element, index) => {
      return { ...accumulator, [element]: row[index] };
    }, {});
  });

  const filteredRecords = formatedRecords.filter(
    (item) => item.active === 'TRUE'
  );

  return filteredRecords;
};

export default getPartners;
