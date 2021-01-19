import Alert from 'components/Alert/Alert';
import getFormKey from 'functions/getFormKey';
import useForms from 'functions/useForms';
import { useState } from 'react';
import FormField from './components/FormField';
import axios from 'axios';
import { form, button } from './Form.module.scss';

const Form = (props) => {
  const { formUrl } = props.attributes || props.attrs;
  const { data, isLoading, isError } = useForms(formUrl);
  const [formData, setFormdata] = useState({});
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, message: null },
  });

  if (isLoading) return <p>loading...</p>;
  if (isError) return <Alert title='Error loading the data' />;

  const { title, components } = data;
  const fields = components;

  if (!fields) return <Alert title='No Fields' />;

  const handleOnChange = (e) => {
    e.persist();
    setFormdata((prev) => ({
      ...prev,
      [e.target.name || e.target.type]: e.target.value,
    }));
  };

  const handleServerResponse = (ok, message) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, message: message },
      });
      setInputs({});
    } else {
      setStatus({
        info: { error: true, message: message },
      });
    }
  };

  const handleSubmition = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: `https://api.surveymonkey.com/v3/collectors/299834934/responses`,
      data: formData,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch((error) => {
        handleServerResponse(false, 'Error!');
      });
  };

  if (status.submitting) return <p>Enviando sua mensagem.</p>;
  if (status.submitted) return <p>Obrigado por enviar essa mensagem.</p>;

  return (
    <form
      className={form}
      data-aos='fade-up'
      onSubmit={(e) => handleSubmition(e)}
    >
      {title && <h3>{title}</h3>}
      {fields.map((field) => {
        const fieldProps = {
          attributes: field,
          handleOnChange,
        };
        console.log(field.type);
        return <FormField {...fieldProps} key={field.id} />;
      })}
      <input
        type='submit'
        value='Enviar'
        className={`btn btn-secondary ${button}`}
        data-aos='fade-in'
      />
    </form>
  );
};
export default Form;
