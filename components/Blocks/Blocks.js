import Hero from './Hero/Hero';
import ImageCore from './Image/Image';
import Gallery from './Gallery/Gallery';
import PostList from './PostList/PostList';
import Form from './Form/Form';
import Embed from './Embed/Embed';
import InstaFeed from './InstaFeed/InstaFeed';
import HubSpotForms from './Hubspot/Forms';
import ContentList from './ContentList/ContentList';
import TextEditor from './TextEditor/TextEditor';
import CloudinaryGallery from './CloudinaryGallery/CloudinaryGallery';

const Blocks = (props) => {
  const blockType = {
    hero: <Hero {...props} />,
    'content-list': <ContentList {...props} />,
    'text-editor': <TextEditor {...props} />,
    'cloudinary-folder': <CloudinaryGallery {...props} />,
    postslist: <PostList {...props} />,
    image: <ImageCore {...props} />,
    'instagram-feed': <InstaFeed {...props} />,
    forms: <Form {...props} />,
    hubspot: <HubSpotForms {...props} />,
    image: <ImageCore {...props} />,
    gallery: <Gallery {...props} />,
    embed: <Embed {...props} />,
  };
  return <div data-aos='fade-up'>{blockType[props.type]}</div>;
};
export default Blocks;
