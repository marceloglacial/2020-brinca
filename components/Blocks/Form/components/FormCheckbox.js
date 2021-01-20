import {
  multipleCheckbox,
  multipleLabel,
  multipleItem,
} from '../Form.module.scss';

const FormCheckbox = (props) => {
  const { attributes, handleOnChange } = props;
  const { id, label } = attributes;
  const title = label;
  return (
    <fieldset className={multipleCheckbox}>
      <div className={multipleItem}>
        <input
          type={'checkbox'}
          id={id}
          name={id}
          onChange={(e) => handleOnChange(e)}
        />
        <label className={multipleLabel} htmlFor={id}>
          {title}
        </label>
      </div>
    </fieldset>
  );
};
export default FormCheckbox;
