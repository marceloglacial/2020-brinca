// @see https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj

const randomArray = (array) => {
  return array.sort((a, b) => 0.5 - Math.random());
};
export default randomArray;
