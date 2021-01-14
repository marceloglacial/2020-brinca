import FormInput from './FormInput';
import styles from '../Form.module.scss';
import FormTextArea from './FormTextArea';
import FormSelect from './FormSelect';

const FormField = (props) => {
  const { type } = props.attributes;
  const fieldTypes = {
    short_text: <FormInput {...props} />,
    email: <FormInput {...props} />,
    number: <FormInput {...props} />,
    website: <FormInput {...props} />,
    phone_number: <FormInput {...props} />,
    long_text: <FormTextArea {...props} />,
    multiple_choice: <FormSelect {...props} />,
  };

  return <div className={styles.formItem}>{fieldTypes[type] || type}</div>;
};
export default FormField;
