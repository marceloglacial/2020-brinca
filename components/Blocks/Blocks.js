import Hero from './Hero/Hero';

const BlocksView = (props) => {
  const { attrs, innerHTML, blockName } = props;
  if (blockName === null) return false;
  if (blockName.includes('core'))
    return <div dangerouslySetInnerHTML={{ __html: innerHTML }} />;

  const blockType = {
    'snow-blocks/hero': <Hero {...attrs} />,
  };
  return blockType[blockName];
};
export default BlocksView;

//
// WIP: Button Block
//
