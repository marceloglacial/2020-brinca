import { useState } from 'react';
import axios from 'axios';
import styles from './Form.module.scss';
import FormField from './FormField';

const Form = (props) => {
  const { formUrl, formFields } = props.attributes || props.attrs;
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, message: null },
  });

  const [inputs, setInputs] = useState({});

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

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.name || e.target.type]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, message: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: formUrl,
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  if (status.submitted) return <p>Obrigado por enviar essa mensagem.</p>;

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      {formFields.map((field, index) => {
        const fieldProps = {
          ...field,
          handleOnChange,
        };
        return <FormField {...fieldProps} key={index} />;
      })}
      {status.submitting && <p>Sending ...</p>}
    </form>
  );
};
export default Form;
