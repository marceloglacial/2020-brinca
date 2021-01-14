import styles from '../Form.module.scss';
const FormField = (props) => {
  const { type, title, name, placeholder, required } = props.props;
  console.log(props);
  return (
    <div className={styles.formItem}>
      <label>{title}</label>
    </div>
  );
};
export default FormField;
