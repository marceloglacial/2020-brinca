import { input } from '../Form.module.scss';
const FormInput = (props) => {
  const { id, headings, type, required, validation } = props.attributes;
  const title = headings[0].heading;
  const validationType = validation && validation.type;
  const finalType = type || validationType;
  const inputType = {
    single: 'text',
    email: 'email',
    phone_number: 'tel',
    website: 'url',
  };
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        type={inputType[finalType] || finalType}
        id={id}
        name={title}
        className={input}
        required={required}
      />
    </>
  );
};
export default FormInput;
