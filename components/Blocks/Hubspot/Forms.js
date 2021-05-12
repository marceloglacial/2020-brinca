import useApi from 'hooks/useApi';

const HsForms = (props) => {
  const { data, isLoading } = useApi('/api/hubspot/forms');
  console.log(data);
  if (isLoading) return 'loading ...';
  return (
    <section className='forms'>
      <header>
        <h3>{data.name}</h3>
      </header>
      <form className='form'>
        {data.fieldGroups.map((item, index) => {
          const { label, required } = item.fields[0];
          return (
            <div className='forms__group' key={index}>
              <label className='label'>{label}:</label>
              <br />
              <input required={required} />
            </div>
          );
        })}
        <input type='submit' value={data.displayOptions.submitButtonText} />
      </form>
      <footer>
        <h6
          dangerouslySetInnerHTML={{
            __html: data.legalConsentOptions.communicationConsentText,
          }}
        />
      </footer>
    </section>
  );
};
export default HsForms;
