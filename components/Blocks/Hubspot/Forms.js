import useApi from 'hooks/useApi';
import { useState } from 'react';
import FormsField from './FormsField';
import FormWrapper from './FormWrapper';

const HsForms = (props) => {
  // const { slug = 'be5b0da8-829d-4842-8f5c-19e82baee940', archived } = props;
  const { slug = '28b1f0ae-e05a-474e-8366-07be0ddb4ca3', archived } = props;
  const [formData, setFormData] = useState({});
  const [formStatus, setFormStatus] = useState(false);
  const { data, isLoading } = useApi(`/api/hubspot/forms/${slug}`);

  if (isLoading) return 'loading ...';
  if (archived) return null;

  const { name, fieldGroups, legalConsentOptions, displayOptions } = data;
  const { communicationConsentText, communicationsCheckboxes = false } =
    legalConsentOptions;

  const handleFieldUpdate = (e, item) => {
    e.persist();
    const name = item.fields[0].name;
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.value || e.target.checked,
    }));
  };

  const formatFormData = (formData) =>
    Object.keys(formData).map(function (key) {
      const value = formData[key];
      return { name: key, value: value };
    });

  // @see https://legacydocs.hubspot.com/docs/methods/forms/submit_form

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      fields: [...formatFormData(formData)],
      context: {
        pageUri: 'www.brinca.ca',
        pageName: 'Brinca Website',
      },
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.NEXT_PUBLIC_HUBSPOT_SITE}/${slug}`,
      requestOptions
    )
      .then((response) => {
        response.status === 200 && setFormStatus(true);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const formProps = {
    name,
    handleSubmit,
  };

  if (formStatus) {
    return (
      <FormWrapper {...formProps}>
        <div
          className='form-success'
          dangerouslySetInnerHTML={{
            __html: data.configuration.postSubmitAction.value,
          }}
        />
      </FormWrapper>
    );
  } else {
    return (
      <FormWrapper {...formProps}>
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
          {fieldGroups.map((item, index) => (
            <FormsField
              {...item.fields[0]}
              id={`form-id-${index}`}
              onChange={(e) => handleFieldUpdate(e, item)}
              key={index}
            />
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
                  <div
                    className='form__group form__group--checkbox'
                    key={index}
                  >
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
      </FormWrapper>
    );
  }
};
export default HsForms;
