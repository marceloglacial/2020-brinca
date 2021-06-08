const FormWrapper = (props) => {
  const { name, handleSubmit, children } = props;
  return (
    <section className='form'>
      <header className='form__header'>
        <h3>{name}</h3>
      </header>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        {children}
      </form>
    </section>
  );
};
export default FormWrapper;
