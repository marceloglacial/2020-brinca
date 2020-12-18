import { useState } from 'react';
import axios from 'axios';
import styles from './Form.module.scss';

const Form = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, message: null },
  });

  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });

  const handleServerResponse = (ok, message) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, message: message },
      });
      setInputs({
        email: '',
        message: '',
      });
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
      [e.target.id]: e.target.value,
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
      url: `https://formspree.io/${process.env.NEXT_PUBLIC_FORM_ID}`,
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
    <form onSubmit={handleOnSubmit} className={styles.form}>
      <div className={styles.formItem}>
        <label className='form-label' htmlFor='name'>
          Name
        </label>
        <input
          className={`form-control ${styles.input}`}
          id='name'
          type='text'
          name='_name'
          onChange={handleOnChange}
          required
        />
      </div>
      <div className={styles.formItem}>
        <label className='form-label' htmlFor='email'>
          Email
        </label>
        <input
          className={`form-control ${styles.input}`}
          id='email'
          type='email'
          name='_replyto'
          onChange={handleOnChange}
          required
        />
      </div>
      <div className={styles.formItem}>
        <label className='form-label' htmlFor='message'>
          Message
        </label>
        <textarea
          className={`form-control ${styles.textarea}`}
          id='message'
          name='message'
          onChange={handleOnChange}
          required
        />
      </div>
      <div className={styles.formItem}>
        <button
          type='submit'
          disabled={status.submitting}
          className={`btn btn-secondary ${styles.button}`}
        >
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </div>
    </form>
  );
};
export default Form;
