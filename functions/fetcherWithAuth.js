const fetcherWithAuth = (url) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization:
        'bearer AB0hW0pH61EBNFQBB9MjGXphlXte.8-TuXBL5W.4cUnsmrEC-uI9Iyo.78iq-Sw-i-K-W45Zqhbf4mvMdXD3kWbekHf7oL36QjdoEVVT9vt1gaTuJejAZPjWaINDvyU4',
      contentType: 'application/json',
    },
  }).then((res) => res.json());
};
export default fetcherWithAuth;
