import Hero from './Hero/Hero';
import ImageCore from './Image/Image';
import Gallery from './Gallery/Gallery';
import PostList from './PostList/PostList';
import Form from './Form/Form';
import Embed from './Embed/Embed';
import InstaFeed from './InstaFeed/InstaFeed';
import HubSpotForms from './Hubspot/Forms';

const BlocksView = (props) => {
  const { attrs, innerHTML, blockName } = props;
  if (blockName === null) return false;

  const blockType = {
    'snow-blocks/hero': <Hero {...attrs} />,
    'snow-blocks/postslist': <PostList {...attrs} />,
    'snow-blocks/instagram-feed': <InstaFeed {...attrs} />,
    'snow-blocks/forms': <Form {...props} />,
    'snow-blocks/hubspot-forms': <HubSpotForms {...props} />,
    'core/image': <ImageCore {...props} />,
    'core/gallery': <Gallery {...props} />,
    'core/embed': <Embed {...props} />,
  };

  if (!blockType[blockName])
    return (
      <div data-aos='fade-in'>
        <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
      </div>
    );

  return <div data-aos='fade-up'>{blockType[blockName]}</div>;
};
export default BlocksView;
