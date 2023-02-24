export const getHomePageData = async () => {
  const results = await fetch(
    'http://localhost:1337/api/homepage?populate=frontpage.image,frontpage.button'
  );
  const blocks = await results.json();

  const allBlocks = blocks.data.attributes.frontpage.map((block) => {
    const blockName = getComponentType(block);
    const componentType = {
      hero: getHero(block),
      'content-list': getHero(block),
    };
    return componentType[blockName];
  });
  return allBlocks;
};

const getHero = (props) => {
  const { id, title, description, image, button, isRounded } = props;
  return {
    id,
    type: getComponentType(props),
    title,
    description,
    imageUrl: image.data.attributes.url,
    image: image.data.attributes,
    hasButton: button,
    buttonText: button.text,
    buttonLink: button.href,
    imagePosition: id % 2 ? 'right' : 'left',
    isRounded,
  };
};

const getComponentType = (component) =>
  component.__component.replace('components.', '');
