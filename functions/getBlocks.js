export const getBlocks = (data) => {
  const allBlocks = data?.map((block) => {
    const blockName = getComponentType(block);
    const componentType = {
      'content-list': getContentList(block),
      'text-editor': getTextEditor(block),
      hero: getHero(block),
    };
    return componentType[blockName];
  });
  return allBlocks;
};

const getTextEditor = (props) => {
  return {
    ...props,
    type: getComponentType(props),
  };
};

const getContentList = (props) => {
  return {
    ...props,
    contentType: props.type,
    type: getComponentType(props),
  };
};

const getHero = (props) => {
  const { id, title, description, image, button, isRounded } = props;
  return {
    id,
    type: getComponentType(props),
    title,
    description,
    imageUrl: image?.data.attributes.url,
    image: image?.data.attributes,
    hasButton: button,
    buttonText: button?.text,
    buttonLink: button?.href,
    imagePosition: id % 2 ? 'right' : 'left',
    isRounded,
  };
};

const getComponentType = (component) =>
  component.__component.replace('components.', '');
