const htmlparser2 = require('htmlparser2');
const parseTagFromString = (code, type) => {
  const html = htmlparser2.parseDocument(code);
  const htmlTag = html.children.find((item) => item.type === 'tag');

  const types = {
    image: {
      className: htmlTag.attribs.class,
      src: htmlTag.children[0].attribs.src,
      alt: htmlTag.children[0].attribs.alt,
      imageClass: htmlTag.children[0].attribs.class,
    },
    gallery: {
      className: htmlTag.attribs.class,
      images: htmlTag.children[0].children.map(
        (item) => item.children[0].children[0]
      ),
    },
  };

  if (!types[type]) {
    console.log(`'No element with the tag: ${type}`);
    return null;
  }

  return types[type];
};
export default parseTagFromString;
