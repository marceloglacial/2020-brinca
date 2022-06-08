const handleCheck = (id, checked) => {
  const hasId = checked.includes(id);
  if (!hasId) return [...checked, id];
  return [...checked].filter((item) => item !== id);
};
export default handleCheck;
