const Menu = (props) => {
  const { topMenu } = props;
  const menuItems = topMenu.map((item, index) => {
    return <li key={index}>{item.name}</li>;
  });

  return <u>{menuItems}</u>;
};
export default Menu;
