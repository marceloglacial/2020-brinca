// @see https://lunar-resonance-935024.postman.co/workspace/Brinca~cfb50980-5042-4a41-840c-51280b87a96d/overview
//  @see https://developers.hubspot.com/docs/api/crm/companies

const handleSearch = (data, filters) => {
  const bodyFilters = filters.map((item) => {
    return {
      filters: [
        {
          operator: 'CONTAINS_TOKEN',
          propertyName: 'category',
          value: item,
        },
      ],
    };
  });

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    filterGroups: [...bodyFilters],
    properties: [
      'name',
      'description',
      'address',
      'city',
      'hs_avatar_filemanager_key',
    ],
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
