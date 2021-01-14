import { input } from '../Form.module.scss';
const FormInput = (props) => {
  const {
    id,
    title,
    type,
    validations: { required, max_length },
  } = props.attributes;

  const inputType = {
    short_text: 'text',
    email: 'email',
    phone_number: 'tel',
    website: 'url',
  };
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        type={inputType[type] || type}
        id={id}
        name={title}
        className={input}
        maxLength={max_length}
        required={required}
      />
    </>
  );
};
export default FormInput;
