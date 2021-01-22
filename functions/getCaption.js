import ReactHtmlParser from 'react-html-parser';

export const getCaption = (data) => {
  const description = ReactHtmlParser(data)[0].props.children.find(
    (item) => item.type === 'figcaption'
  );
  return description ? description.props.children[0] : false;
};
