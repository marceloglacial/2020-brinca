// @see https://web.postman.co/workspace/My-Workspace~16bf43ab-616a-418f-8552-34c48d2ef8c1/request/7121969-477fa5cf-da9c-40ed-95d1-00bd8f88df44
//  @see https://developers.hubspot.com/docs/api/crm/companies

const handleSearch = (data, filters) => {
  const bodyFilters = filters.map((item) => {
    return {
      filters: [
        {
          operator: 'CONTAINS_TOKEN',
          propertyName: 'industry',
          value: item,
        },
      ],
    };
  });

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    filterGroups: [...bodyFilters],
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(
    `https://api.hubapi.com/crm/v3/objects/companies/search?hapikey=${process.env.NEXT_PUBLIC_HUBSPOT}`,
    requestOptions
  )
    .then((response) => {
      response.text();
      console.log(response);
    })
    .catch((error) => {
      console.log('error', error);
    });
};
export default handleSearch;
