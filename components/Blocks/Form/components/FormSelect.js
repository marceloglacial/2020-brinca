import { select } from '../Form.module.scss';
const FormSelect = (props) => {
  const {
    id,
    title,
    validations: { required },
    properties: { choices, allow_multiple_selection },
  } = props.attributes;
  console.log(props.attributes);
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <select
        id={id}
        name={title}
        required={required}
        multiple={allow_multiple_selection}
        defaultValue='nenhuma'
        className={select}
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
