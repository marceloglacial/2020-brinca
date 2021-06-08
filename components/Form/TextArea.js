const TextArea = (props) => {
  const { id, label, name, value, required, onChange } = props;
  return (
    <div className={`form__group`}>
      <label className='label' htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        className={'textarea'}
        defaultValue={value || ''}
        required={required || false}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
export default TextArea;
