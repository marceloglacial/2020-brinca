import Input from 'components/Form/Input';
import CheckBox from 'components/Form/CheckBox';
import TextArea from 'components/Form/TextArea';
import DropDown from 'components/Form/DropDown';

const FormsField = (props) => {
  const { fieldType } = props;

  const inputType = {
    single_checkbox: <CheckBox {...props} />,
    single_line_text: <Input {...props} />,
    email: <Input {...props} />,
    dropdown: <DropDown {...props} />,
    phone: <Input type={'tel'} {...props} />,
    multi_line_text: <TextArea {...props} />,
  };
  return <>{inputType[fieldType]}</>;
};
export default FormsField;
