const fetchData = (endpoint, setter) => {
  return fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/${endpoint}`)
    .then((response) => response.json())
    .then((data) => setter(data));
};
export default fetchData;
