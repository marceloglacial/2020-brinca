import { multiple, multipleLabel, multipleItem } from '../Form.module.scss';

const FormMultiple = (props) => {
  const { attributes, handleOnChange } = props;
  const { id, type, label, values: choices } = attributes;
  const title = label;
  const inputType = {
    selectboxes: 'checkbox',
  };
  return (
    <fieldset className={multiple}>
      <label>{title}</label>
      {choices.map((item, index) => (
        <div key={item.id} key={index} className={multipleItem}>
          <input
            type={inputType[type] || type}
            id={id + index}
            name={id}
            value={item.label}
            onChange={(e) => handleOnChange(e)}
          />
          <label className={multipleLabel} htmlFor={id + index}>
            {item.label}
          </label>
        </div>
      ))}
    </fieldset>
  );
};
export default FormMultiple;
