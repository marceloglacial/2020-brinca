import { select } from '../Form.module.scss';
const FormSelect = (props) => {
  const {
    id,
    headings,
    required,
    answers: { choices },
  } = props.attributes;
  const title = headings[0].heading;

  return (
    <>
      <label htmlFor={id}>{title}</label>
      <select
        id={id}
        name={title}
        defaultValue='nenhuma'
        className={select}
        required={required}
      >
        <option value={'nenhuma'}>Escolha uma opção</option>
        {choices.map((item) => (
          <option key={item.id} value={item.text}>
            {item.text}
          </option>
        ))}
      </select>
    </>
  );
};
export default FormSelect;
