import useApi from 'hooks/useApi';
import FormsField from './FormsField';

const HsForms = (props) => {
  const { data, isLoading } = useApi(
    '/api/hubspot/forms/be5b0da8-829d-4842-8f5c-19e82baee940'
  );
  if (isLoading) return 'loading ...';

  const { archived, name, fieldGroups, legalConsentOptions, displayOptions } =
    data;
  const { communicationConsentText, communicationsCheckboxes = false } =
    legalConsentOptions;

  if (archived) return null;

  return (
    <section className='form'>
      <header className='form__header'>
        <h3>{name}</h3>
      </header>
      <form className='form'>
        {fieldGroups.map((item, index) => (
          <FormsField {...item.fields[0]} id={`form-id-${index}`} key={index} />
        ))}
        {communicationsCheckboxes && (
          <div className='form-consent'>
            <label
              className='label'
              dangerouslySetInnerHTML={{
                __html: communicationConsentText,
              }}
            />
            {communicationsCheckboxes.map((item, index) => {
              const { label, required } = item;
              return (
                <div className='form__group form__group--checkbox' key={index}>
                  <input
                    type='checkbox'
                    className='checkbox'
                    id={`content__${index}`}
                    required={required}
                  />
                  <label className='label' htmlFor={`content__${index}`}>
                    {label}
                  </label>
                </div>
              );
            })}
          </div>
        )}

        <input
          type='submit'
          className='btn btn-secondary btn-form'
          value={displayOptions.submitButtonText}
        />
      </form>
    </section>
  );
};
export default HsForms;
