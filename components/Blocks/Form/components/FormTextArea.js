import { textarea, textareaLabel } from '../Form.module.scss';
const FormTextArea = (props) => {
  const { id, headings, required } = props.attributes;
  const title = headings[0].heading;
  return (
    <>
      {title && <label className={textareaLabel}>{title}</label>}
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
