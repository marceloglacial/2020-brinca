import FormField from './FormField';
const Form = (props) => {
  const { formFields } = props.attributes || props.attrs;
  return formFields.map((field, index) => <FormField {...field} key={index} />);
};
export default Form;
