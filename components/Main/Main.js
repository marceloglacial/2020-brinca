const Main = (props) => {
  return (
    <main className='container'>
      <div className='row'>
        <div className='col'>{props.children}</div>
      </div>
    </main>
  );
};
export default Main;
