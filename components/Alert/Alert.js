const Alert = (props) => {
  const { title, type } = props;
  return (
    <div className='container-fluid mt-4 text-center'>
      <div className={`alert alert-${type || 'danger'} mt-2`} role='alert'>
        <h4 className='m-0 text-center'>{title}</h4>
      </div>
    </div>
  );
};
export default Alert;
