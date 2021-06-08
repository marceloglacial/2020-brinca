import useApi from 'hooks/useApi';
import { useState } from 'react';
import FormsField from './FormsField';
import FormWrapper from './FormWrapper';

const HubSpotForms = (props) => {
  const { formID } = props.attrs;
  const [formData, setFormData] = useState({});
  const [formStatus, setFormStatus] = useState(false);
  const [consent, setConsent] = useState({});
  const { data, isLoading } = useApi(`/api/hubspot/forms/${formID}`);

  if (!formID) return null;
  if (isLoading) return 'loading ...';

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

  const handleConsent = (e, label) => {
    setConsent({
      checked: e.target.checked,
      label,
    });
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
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: 'I agree to allow Example Company to store and process my personal data.',
          communications: [
            {
              value: consent.checked,
              subscriptionTypeId: 9584744,
              text: consent.label,
            },
          ],
        },
      },
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.NEXT_PUBLIC_HUBSPOT_SITE}/${formID}`,
      requestOptions
    )
      .then((response) => {
        response.text();
        response.status === 200 && setFormStatus(true);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const formProps = {
    name,
    handleSubmit,
    displayOptions,
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
                <div className='form__group form__group--checkbox' key={index}>
                  <input
                    type='checkbox'
                    className='checkbox'
                    id={`content__${index}`}
                    required={required}
                    onChange={(e) => handleConsent(e, label)}
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
      </FormWrapper>
    );
  }
};
export default HubSpotForms;
