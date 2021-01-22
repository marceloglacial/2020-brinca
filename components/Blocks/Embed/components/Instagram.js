import useScript from 'hooks/useScript';
import { instagram } from '../Embed.module.scss';

const Instagram = (props) => {
  useScript('instagram-container', '//www.instagram.com/embed.js');
  return (
    <div id='instagram-container' className={instagram}>
      <blockquote
        id='instagram-media'
        className='instagram-media'
        data-instgrm-captioned
        data-instgrm-permalink={props.attrs.url}
        data-instgrm-version='13'
      />
    </div>
  );
};
export default Instagram;
