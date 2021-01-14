import { multiple } from '../Form.module.scss';
const FormMultiple = (props) => {
  const {
    id,
    title,
    validations: { required },
    properties: { choices, allow_multiple_selection },
  } = props.attributes;
  const type = allow_multiple_selection ? 'checkbox' : 'radio';

  return (
    <fieldset className={multiple}>
      <label>{title}</label>
      <div>
        {choices.map((item) => (
          <div key={item.id}>
            <input type={type} id={item.id} name={id} value={item.label} />
            <label htmlFor={item.id}>{item.label}</label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
export default FormMultiple;
