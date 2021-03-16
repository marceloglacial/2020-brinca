import Alert from 'components/Alert/Alert';
import useForms from 'hooks/useForms';
import { useState } from 'react';
import FormField from './components/FormField';
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

  const handleOnChange = (e, key) => {
    e.persist();
    setFormdata((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleServerResponse = (ok, message) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, message: message },
      });
    } else {
      setStatus({
        info: { error: true, message: message },
      });
    }
  };

  const handleSubmition = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append('x-token', process.env.NEXT_PUBLIC_FORM_KEY);
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      data: formData,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${formUrl}/submission`, requestOptions)
      .then((response) => {
        response.text();
        handleServerResponse(true, 'Obrigado por enviar essa mensagem.');
      })
      .catch((error) => {
        console.log('error', error);
        handleServerResponse(false, 'Error!');
      });
  };

  if (status.submitting) return <p>Enviando sua mensagem.</p>;
  if (status.submitted) return <p>Obrigado. Mensagem enviada com sucesso.</p>;

  return (
    <form
      className={form}
      data-aos='fade-up'
      onSubmit={(e) => handleSubmition(e)}
    >
      {title && <h3>{title}</h3>}
      {fields.map((field, index) => {
        const fieldProps = {
          attributes: field,
          handleOnChange,
        };
        return <FormField {...fieldProps} key={index} />;
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
