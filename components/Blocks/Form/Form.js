import Alert from 'components/Alert/Alert';
import useForms from 'functions/useForms';
import FormField from './components/FormField';
import { form } from './Form.module.scss';

const Form = (props) => {
  const { formKey } = props.attributes || props.attrs;
  const { data, isLoading, isError } = useForms(formKey);

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>Error!</p>;

  const { title, fields } = data;
  const hasFields = fields && fields.length > 0;

  if (!hasFields) return <Alert title='No Fields' />;

  return (
    <form className={form}>
      {title && <h3>{title}</h3>}
      {fields.map((field) => (
        <FormField attributes={field} key={field.id} />
      ))}
    </form>
  );
};
export default Form;
