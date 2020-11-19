const parseTagFromString = (code, tag) =>
  new DOMParser()
    .parseFromString(code, 'text/html')
    .getElementsByTagName(tag)[0];

export default parseTagFromString;
