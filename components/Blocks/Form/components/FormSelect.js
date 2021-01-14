import { select } from '../Form.module.scss';
const FormSelect = (props) => {
  const {
    id,
    title,
    validations: { required },
    properties: { choices, allow_multiple_selection },
  } = props.attributes;
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <select
        id={id}
        name={title}
        multiple={allow_multiple_selection}
        defaultValue='nenhuma'
        className={select}
        required={required}
      >
        <option value={'nenhuma'}>Escolha uma opção</option>
        {choices.map((item) => (
          <option key={item.id} value={item.label}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
};
export default FormSelect;
