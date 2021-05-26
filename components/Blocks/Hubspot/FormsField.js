import Input from 'components/Form/Input';
import CheckBox from 'components/Form/CheckBox';
import TextArea from 'components/Form/TextArea';
import DropDown from 'components/Form/DropDown';

const FormsField = (props) => {
  const { fieldType } = props;
  const handleFieldUpdate = (e) => console.log(e);
  const inputProps = {
    ...props,
    onChange: (e) => handleFieldUpdate(e.target.value),
  };

  const inputType = {
    single_checkbox: <CheckBox {...inputProps} />,
    single_line_text: <Input {...inputProps} />,
    email: <Input {...inputProps} />,
    dropdown: <DropDown {...inputProps} />,
    phone: <Input type={'tel'} {...inputProps} />,
    multi_line_text: <TextArea {...inputProps} />,
  };
  return <>{inputType[fieldType]}</>;
};
export default FormsField;
