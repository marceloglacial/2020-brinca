const Alert = (props) => {
  const { title, type, error } = props;
  return (
    <div className='container mt-4 text-center' data-aos='fade-in'>
      <div className={`alert alert-${type || 'danger'} mt-2`} role='alert'>
        <h4 className='m-0 text-center'>{title}</h4>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};
export default Alert;
