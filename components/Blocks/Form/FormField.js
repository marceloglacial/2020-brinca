const FormField = (props) => {
  const {
    id,
    index,
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
          onChange={(e) => handleOnChange(e)}
        />
        <label htmlFor={id}>{label || type}</label>
      </>
    ),
  };
  return (
    <div className='form__field'>
      {!noLabel && (
        <label htmlFor={id} className='form__label'>
          {label || type}
        </label>
      )}
      {fieldType[type] || (
        <input
          id={id}
          type={type}
          name={name || type}
          placeholder={placeholder}
          className={`form__${noLabel ? 'button' : 'input'}`}
          onChange={(e) => handleOnChange(e)}
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;
