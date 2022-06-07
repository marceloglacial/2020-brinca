import { input } from '../Form.module.scss';
const FormInput = (props) => {
  const { attributes, handleOnChange } = props;
  const {
    id,
    key,
    label,
    type,
    validate: { required },
    validation,
    placeholder,
  } = attributes;
  const title = label;
  const validationType = validation && validation.type;
  const finalType = type || validationType;
  const inputTypes = {
    text: 'text',
    email: 'email',
    phoneNumber: 'tel',
    url: 'url',
  };

  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        type={inputTypes[finalType] || finalType}
        id={id}
        name={title}
        className={input}
        onChange={(e) => handleOnChange(e, key)}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};
export default FormInput;
