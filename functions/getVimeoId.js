// @see https://stackoverflow.com/questions/2916544/parsing-a-vimeo-id-using-javascript

const getVimeoId = (url) => {
  const regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
  const parseUrl = regExp.exec(url) || [];
  return parseUrl[5];
};
export default getVimeoId;
