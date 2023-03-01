import Iframe from './components/Iframe';
import Twitter from './components/Twitter';

const Embed = (props) => {
  const { url, embedType, caption } = props;
  const embeds = {
    soundcloud: <Iframe type={'soundcloud'} url={url} caption={caption} />,
    twitter: <Twitter url={url} caption={caption} />,
    youtube: <Iframe type={'youtube'} url={url} caption={caption} />,
    vimeo: <Iframe type={'vimeo'} url={url} caption={caption} />,
  };
  return embeds[embedType] || <p>Embed not found.</p>;
};
export default Embed;
