import Alert from 'components/Alert/Alert';
import useForms from 'functions/useForms';
import FormField from './components/FormField';
import { form, button } from './Form.module.scss';

const Form = (props) => {
  const { formKey } = props.attributes || props.attrs;
  const { data, isLoading, isError } = useForms(formKey);

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>Error!</p>;

  const { title, pages } = data;
  const fields = pages[0].questions;
  const hasFields = fields && fields.length > 0;
  console.log(fields);

  if (!hasFields) return <Alert title='No Fields' />;

  return (
    <form className={form} data-aos='fade-up'>
      {title && <h3>{title}</h3>}
      {fields.map((field) => (
        <FormField attributes={field} key={field.id} />
      ))}
      <input
        type='submit'
        value='Enviar'
        className={`btn btn-secondary ${button}`}
        data-aos='fade-in'
      />
    </form>
  );
};
export default Form;
