import Hero from './Hero/Hero';
import ImageCore from './Image/Image';
import Gallery from './Gallery/Gallery';

const BlocksView = (props) => {
  const { attrs, innerHTML, blockName } = props;
  if (blockName === null) return false;

  const blockType = {
    'snow-blocks/hero': <Hero {...attrs} />,
    'core/image': <ImageCore {...props} />,
  };

  if (!blockType[blockName])
    return <div dangerouslySetInnerHTML={{ __html: innerHTML }} />;

  return blockType[blockName];
};
export default BlocksView;
