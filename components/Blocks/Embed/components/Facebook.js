import useScript from 'hooks/useScript';
import { facebook } from '../Embed.module.scss';

const Facebook = (props) => {
  useScript(
    'facebook-container',
    'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2'
  );
  return (
    <div id='facebook-container' className={facebook}>
      <div id='fb-post' className='fb-post' data-href={props.url} />
    </div>
  );
};
export default Facebook;
