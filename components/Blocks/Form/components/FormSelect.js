import { select } from '../Form.module.scss';
const FormSelect = (props) => {
  const { attributes, handleOnChange } = props;
  const {
    id,
    key,
    headings = {},
    validate: { required },
    answers: { choices },
    label,
  } = attributes;
  const title = headings[0]?.heading || label;

  return (
    <>
      <label htmlFor={id}>{title}</label>
      <select
        id={id}
        name={title}
        defaultValue='nenhuma'
        className={select}
        required={required}
        onChange={(e) => handleOnChange(e, key)}
      >
        <option value={'nenhuma'}>Escolha uma opção</option>
        {choices?.map((item) => (
          <option key={item.id} value={item.text}>
            {item.text}
          </option>
        ))}
      </select>
    </>
  );
};
export default FormSelect;
