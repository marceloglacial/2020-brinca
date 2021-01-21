import { getCaption } from 'functions/getCaption';
import Iframe from './components/Iframe';
import Twitter from './components/Twitter';
import Facebook from './components/Facebook';
import Instagram from './components/Instagram';

const Embed = (props) => {
  const { innerHTML, attrs } = props;
  const { url, providerNameSlug: type } = attrs;
  const caption = innerHTML && getCaption(innerHTML);
  const embeds = {
    soundcloud: <Iframe type={'soundcloud'} url={url} caption={caption} />,
    twitter: <Twitter url={url} caption={caption} />,
    youtube: <Iframe type={'youtube'} url={url} caption={caption} />,
    vimeo: <Iframe type={'vimeo'} url={url} caption={caption} />,
    facebook: <Facebook url={url} />,
    inatagram: <Instagram url={url} />,
  };
  return embeds[type] || <p>Embed not found.</p>;
};
export default Embed;
