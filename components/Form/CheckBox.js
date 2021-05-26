const CheckBox = (props) => {
  const { id, label, name, value, required, onChange } = props;
  return (
    <div className={`form__group form__group--checkbox`}>
      <input
        id={id}
        type={'checkbox'}
        name={name}
        className={'checkbox'}
        defaultValue={value || ''}
        required={required || false}
        onChange={(e) => onChange(e)}
      />
      <label htmlFor={id} className='label'>
        {label}
      </label>
    </div>
  );
};
export default CheckBox;
