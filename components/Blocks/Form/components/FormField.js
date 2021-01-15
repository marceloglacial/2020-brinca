import FormInput from './FormInput';
import styles from '../Form.module.scss';
import FormTextArea from './FormTextArea';
import FormSelect from './FormSelect';
import FormMultiple from './FormMultiple';

const FormField = (props) => {
  const { subtype } = props.attributes;
  const type = subtype;
  const fieldTypes = {
    single: <FormInput {...props} />,
    email: <FormInput {...props} />,
    number: <FormInput {...props} />,
    website: <FormInput {...props} />,
    phone_number: <FormInput {...props} />,
    essay: <FormTextArea {...props} />,
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
