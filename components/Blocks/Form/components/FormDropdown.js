const FormDropDown = (props) => {
  const { id, name, label, value, required, options } =
    props.attributes || props;
  const { handleOnChange } = props;
  return (
    <div className={`form__group form__group--select`}>
      <label className='label' htmlFor={id}>
        {label}
      </label>
      <select
        name={name}
        id={id}
        className={`select`}
        defaultValue={value || ''}
        required={required || false}
        onChange={(e) => handleOnChange(e)}
      >
        <option value=''>--------</option>
        {options?.map((item, index) => {
          const { label, value } = item;
          return (
            <option value={value} key={index}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormDropDown;
