import slugfy from './slugfy';

const filterData = (tableData, filters) => {
  if (!filters) return tableData;
  return tableData.filter((item) => filters.includes(slugfy(item.category)));
};
export default filterData;
