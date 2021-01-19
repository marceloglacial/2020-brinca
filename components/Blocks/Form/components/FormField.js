import FormInput from './FormInput';
import styles from '../Form.module.scss';
import FormTextArea from './FormTextArea';
import FormSelect from './FormSelect';
import FormMultiple from './FormMultiple';

const FormField = (props) => {
  const { type } = props.attributes;
  const fieldTypes = {
    textfield: <FormInput {...props} />,
    email: <FormInput {...props} />,
    number: <FormInput {...props} />,
    url: <FormInput {...props} />,
    phoneNumber: <FormInput {...props} />,
    textarea: <FormTextArea {...props} />,
    vertical: <FormMultiple {...props} />,
    menu: <FormSelect {...props} />,
  };
  return (
    <div className={styles.formItem} data-aos='fade-in'>
      {fieldTypes[type] || ''}
    </div>
  );
};
export default FormField;
