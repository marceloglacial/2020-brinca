import { input } from '../Form.module.scss';
const FormInput = (props) => {
  const { attributes, handleOnChange } = props;
  const { id, label, type, required, validation } = attributes;
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
        onChange={(e) => handleOnChange(e)}
        required={required}
      />
    </>
  );
};
export default FormInput;
