import BusinessCard from '../BusinessCard/BusinessCard';
const PartnersGroup = ({ title, partners }) => {
  if (!partners.length) return false;
  return (
    <div className='partners__group' data-aos='fade-in'>
      {title && <h4>{title}</h4>}
      <div className='grid grid-2 mb-5'>
        {partners?.map((item) => (
          <BusinessCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default PartnersGroup;
