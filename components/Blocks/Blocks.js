import Hero from './Hero/Hero';
import ImageCore from './Image/Image';
import Gallery from './Gallery/Gallery';
import PostList from './PostList/PostList';
import Form from './Form/Form';

const BlocksView = (props) => {
  const { attrs, innerHTML, blockName } = props;
  if (blockName === null) return false;

  const blockType = {
    'snow-blocks/hero': <Hero {...attrs} />,
    'snow-blocks/postslist': <PostList {...attrs} />,
    'snow-blocks/forms': <Form {...props} />,
    'core/image': <ImageCore {...props} />,
    'core/gallery': <Gallery {...props} />,
  };

  if (!blockType[blockName])
    return (
      <div dangerouslySetInnerHTML={{ __html: innerHTML }} data-aos='fade-in' />
    );

  return <div data-aos='fade-up'>{blockType[blockName]}</div>;
};
export default BlocksView;
