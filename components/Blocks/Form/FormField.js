import styles from './Form.module.scss';
const FormField = (props) => {
  const {
    id,
    type,
    name,
    placeholder,
    value,
    label,
    required = true,
    handleOnChange,
  } = props;
  const noLabelItems = ['submit', 'checkbox'];
  const noLabel = noLabelItems.find((item) => item === type);
  const fieldType = {
    textarea: (
      <textarea
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => handleOnChange(e)}
        className={styles.textarea}
        required={required}
      />
    ),
    checkbox: (
      <>
        <input
          type='checkbox'
          id={id}
          name={name}
          defaultValue={value}
          required={required}
          className={styles.input}
          onChange={(e) => handleOnChange(e)}
        />
        <label htmlFor={id} className={styles.label}>
          {label || type}
        </label>
      </>
    ),
  };
  return (
    <div className={styles.formItem}>
      {!noLabel && (
        <label htmlFor={id} className='form__label' className={styles.label}>
          {label || type}
        </label>
      )}
      {fieldType[type] || (
        <input
          id={id}
          type={type}
          name={name || type}
          placeholder={placeholder}
          className={
            noLabel ? `btn btn-secondary ${styles.button}` : styles.input
          }
          onChange={(e) => handleOnChange(e)}
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;
