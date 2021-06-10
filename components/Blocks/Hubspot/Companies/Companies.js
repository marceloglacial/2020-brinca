import Card from 'components/Card/Card';
import useApi from 'hooks/useApi';
import { useEffect, useState } from 'react';
import CompaniesFilter from './CompaniesFilter';

const HubSpotCompanies = (props) => {
  const [filters, setFilters] = useState([]);
  const [dataList, setDataList] = useState({});
  const { data, isLoading } = useApi(`/api/hubspot/companies/`);

  useEffect(() => {
    data && setDataList(data);
  }, [data]);

  useEffect(() => {
    if (!data) return false;
    const updatedData = { ...data };
    const updatedCompanies = [...updatedData.companies].filter((item) =>
      filters.includes(item.properties.industry?.value)
    );
    updatedData.companies = updatedCompanies;
    if (filters.length === 0) {
      setDataList(data);
    } else {
      setDataList(updatedData);
    }
  }, [filters]);

  if (isLoading) return '...';

  const handleClick = (e) => {
    e.preventDefault();
    setOffset(data.offset);
  };

  const filterProps = {
    filters,
    setFilters,
  };

  return (
    <section className='container'>
      <h2>Companies</h2>
      <CompaniesFilter {...filterProps} />
      <div className={`card-grid`}>
        {dataList?.companies?.length === 0 && <p>Nenhum item encontrado</p>}
        {dataList?.companies?.map((item) => {
          const { companyId, properties } = item;
          const {
            name,
            address,
            city,
            description,
            hs_avatar_filemanager_key: avatar,
          } = properties;
          const cardProps = {
            id: companyId,
            title: name?.value,
            date: `${address?.value}, ${city?.value}`,
            excerpt: description?.value,
            link: '',
            image: {
              source_url:
                avatar?.value && `https://cdn2.hubspot.net/${avatar?.value}`,
            },
          };

          return <Card key={companyId} {...cardProps} />;
        })}
      </div>
      {data['has-more'] && (
        <div className={`card-grid__load`}>
          <a
            href='#'
            className={`btn btn-primary`}
            onClick={(e) => handleClick(e)}
          >
            {isLoading ? 'Carregando ...' : 'Ver Mais'}
          </a>
        </div>
      )}
    </section>
  );
};
export default HubSpotCompanies;
