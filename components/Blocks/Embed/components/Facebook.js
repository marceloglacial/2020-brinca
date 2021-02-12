import { FacebookProvider, Page } from 'react-facebook';
const Facebook = (props) => {
  const token = '474208436910673|b2505ebd2cf7f6e91a11054b7c4e6f44&';
  return (
    <FacebookProvider appId={token}>
      <Page href='https://www.facebook.com/ottawa.brinca/' tabs='timeline' />
    </FacebookProvider>
  );
};
export default Facebook;
