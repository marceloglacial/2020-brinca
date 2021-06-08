const Input = (props) => {
  const { id, label, name, type, value, className, required, onChange } = props;
  return (
    <div className={`form__group`}>
      <label className='label' htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type || 'text'}
        className={`input ${className || ''}`}
        defaultValue={value || ''}
        required={required || false}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
export default Input;
