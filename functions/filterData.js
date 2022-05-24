const filterData = (tableData, filters) => {
  return tableData.filter((item) => [...filters].includes(item.category));
};
export default filterData;
