import { textarea, textareaLabel } from '../Form.module.scss';
const FormTextArea = (props) => {
  const { attributes, handleOnChange } = props;
  const {
    id,
    key,
    label,
    validate: { required },
  } = attributes;
  const title = label;

  return (
    <>
      {title && <label className={textareaLabel}>{title}</label>}
      <textarea
        id={id}
        name={title}
        rows='10'
        cols='30'
        className={textarea}
        onChange={(e) => handleOnChange(e, key)}
        required={required}
      />
    </>
  );
};

export default FormTextArea;
