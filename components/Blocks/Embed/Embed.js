import { getCaption } from 'functions/getCaption';
import Iframe from './components/Iframe';
import Twitter from './components/Twitter';

const Embed = (props) => {
  const { innerHTML, attrs } = props;
  const { url, providerNameSlug: type } = attrs;
  const caption = innerHTML && getCaption(innerHTML);
  const embeds = {
    soundcloud: <Iframe type={'soundcloud'} url={url} caption={caption} />,
    twitter: <Twitter url={url} caption={caption} />,
    youtube: <Iframe type={'youtube'} url={url} caption={caption} />,
    vimeo: <Iframe type={'vimeo'} url={url} caption={caption} />,
  };
  return embeds[type] || <p>Embed not found.</p>;
};
export default Embed;
