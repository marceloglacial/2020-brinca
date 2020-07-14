// Check if props is defined
const checkProps = (type, props) => (props[type] ? props[type] : {});
export default checkProps;
