import DOMPurify from 'isomorphic-dompurify';

const TextEditor = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(props.content),
      }}
    />
  );
};
export default TextEditor;
