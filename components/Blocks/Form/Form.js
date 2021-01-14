import useForms from 'functions/useForms';
const Form = (props) => {
  const { formKey } = props.attributes || props.attrs;
  const { data, isLoading, isError } = useForms(formKey);

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>Error!</p>;
  console.log(data);

  return <p>{data}</p>;
};
export default Form;
