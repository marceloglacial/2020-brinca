const HeaderError = (props) => {
  return (
    <div className='fixed-top'>
      <div className='container py-4'>
        <div className='alert alert-danger mt-2' role='alert'>
          <h4 className='m-0 text-center'>Data error</h4>
        </div>
      </div>
    </div>
  );
};
export default HeaderError;
