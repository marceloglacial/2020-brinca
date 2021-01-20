import FormInput from './FormInput';
import styles from '../Form.module.scss';
import FormTextArea from './FormTextArea';
import FormSelect from './FormSelect';
import FormMultiple from './FormMultiple';
import FormCheckbox from './FormCheckbox';

const FormField = (props) => {
  const { type } = props.attributes;
  const fieldTypes = {
    textfield: <FormInput {...props} />,
    email: <FormInput {...props} />,
    number: <FormInput {...props} />,
    url: <FormInput {...props} />,
    tel: <FormInput {...props} />,
    textarea: <FormTextArea {...props} />,
    radio: <FormMultiple {...props} />,
    selectboxes: <FormMultiple {...props} />,
    checkbox: <FormCheckbox {...props} />,
    menu: <FormSelect {...props} />,
  };
  return (
    <div className={styles.formItem} data-aos='fade-in'>
      {fieldTypes[type] || ''}
    </div>
  );
};
export default FormField;
