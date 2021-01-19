import { multiple } from '../Form.module.scss';
const FormMultiple = (props) => {
  const { attributes, handleOnChange } = props;
  const {
    id,
    headings,
    required,
    family,
    answers: { choices },
  } = attributes;
  const type = family === 'single_choice' ? 'radio' : 'checkbox';
  const title = headings[0].heading;
  return (
    <fieldset className={multiple}>
      <label>{title}</label>
      <div>
        {choices.map((item) => (
          <div key={item.id}>
            <input
              type={type}
              id={item.id}
              name={id}
              value={item.text}
              onChange={(e) => handleOnChange(e)}
            />
            <label htmlFor={item.id}>{item.text}</label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
export default FormMultiple;
