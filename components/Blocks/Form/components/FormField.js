import FormInput from './FormInput';
import styles from '../Form.module.scss';
import FormTextArea from './FormTextArea';
import FormSelect from './FormSelect';
import FormMultiple from './FormMultiple';
import FormCheckbox from './FormCheckbox';
import FormDropDown from './FormDropdown';

const FormField = (props) => {
  const { type } = props.attributes || props;
  const fieldTypes = {
    textfield: <FormInput {...props} />,
    file: <FormInput {...props} />,
    email: <FormInput {...props} />,
    phoneNumber: <FormInput {...props} />,
    url: <FormInput {...props} />,
    textarea: <FormTextArea {...props} />,
    radio: <FormMultiple {...props} />,
    selectboxes: <FormMultiple {...props} />,
    checkbox: <FormCheckbox {...props} />,
    menu: <FormSelect {...props} />,
    dropdown: <FormDropDown {...props} />,
    date: <FormInput {...props} />
  };
  return (
    <div className={styles.formItem} data-aos='fade-in'>
      {fieldTypes[type] || ''}
    </div>
  );
};
export default FormField;
