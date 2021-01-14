import FormInput from './FormInput';
import styles from '../Form.module.scss';
import FormTextArea from './FormTextArea';
import FormSelect from './FormSelect';
import FormMultiple from './FormMultiple';

const FormField = (props) => {
  const { type } = props.attributes;
  const fieldTypes = {
    short_text: <FormInput {...props} />,
    email: <FormInput {...props} />,
    number: <FormInput {...props} />,
    website: <FormInput {...props} />,
    phone_number: <FormInput {...props} />,
    long_text: <FormTextArea {...props} />,
    multiple_choice: <FormMultiple {...props} />,
    dropdown: <FormSelect {...props} />,
  };
  return (
    <div className={styles.formItem} data-aos='fade-in'>
      {fieldTypes[type] || ''}
    </div>
  );
};
export default FormField;
