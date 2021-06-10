import useApi from 'hooks/useApi';
import styles from './CompaniesFilter.module.scss';

const CompaniesFilter = (props) => {
  const { data, isLoading } = useApi(`/api/hubspot/industries/`);

  if (isLoading) return '...';

  const { filters, setFilters } = props;
  const hasFilter = (value) => filters.includes(value);
  const handleClick = (e, value) => {
    e.preventDefault();

    if (hasFilter(value)) {
      const filtered = [...filters].filter((item) => item !== value);
      return setFilters(filtered);
    }

    return setFilters([...filters, value]);
  };

  return (
    <div className={styles.companyContainer}>
      <div className={styles.companyFilter}>
        {data.options.map((item, index) => {
          if (!item) return false;
          return (
            <a
              className={`btn ${
                hasFilter(item.value) ? `btn-selected` : `btn-unselected`
              } ${styles.companyFilterItem}`}
              key={index}
              onClick={(e) => handleClick(e, item.value)}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default CompaniesFilter;
