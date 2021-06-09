const CompaniesFilter = (props) => {
  const { companies } = props;

  const filters = new Set(
    companies.map((item) => item.properties.industry?.value)
  );

  return (
    <div className='company-filter'>
      <ul>
        {[...filters].map((item, index) => {
          if (!item) return false;
          return <li key={index}>{item.replace('_', ' ')}</li>;
        })}
      </ul>
    </div>
  );
};
export default CompaniesFilter;
