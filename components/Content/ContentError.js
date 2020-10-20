const ContentError = (props) => {
  return (
    <article className='content pt-5 pb-4'>
      <div className='alert alert-danger' role='alert'>
        <h4>Data not loading</h4>
        <p>Something is wrong</p>
      </div>
    </article>
  );
};
export default ContentError;
