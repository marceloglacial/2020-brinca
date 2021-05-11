import useApi from 'hooks/useApi';

const HsForms = (props) => {
  const { data, isLoading } = useApi('/api/hubspot');
  if (isLoading) return 'loading ...';
  console.log(data);
  return (
    <ul>
      {data.results.map((item, index) => (
        <li key={index}>
          {item.properties.firstname && item.properties.firstname} {` `}
          {item.properties.lastname && item.properties.lastname}
        </li>
      ))}
    </ul>
  );
};
export default HsForms;
