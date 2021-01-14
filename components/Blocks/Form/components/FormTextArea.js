import { textarea } from '../Form.module.scss';
const FormTextArea = (props) => {
  const {
    id,
    title,
    validations: { required },
  } = props.attributes;
  return (
    <>
      {title && <label>{title}</label>}
      <textarea
        id={id}
        name={title}
        rows='10'
        cols='30'
        className={textarea}
        required={required}
      />
    </>
  );
};

export default FormTextArea;
