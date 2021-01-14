const fetchetWithToken = (url, token) => {
  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  console.log(myHeaders);

  return fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: myHeaders,
  }).then((res) => res.json());
};
export default fetchetWithToken;
