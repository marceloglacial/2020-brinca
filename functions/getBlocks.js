export const getBlocks = (data) => {
  const allBlocks = data?.map((block) => {
    const blockName = getComponentType(block);
    const componentType = {
      'content-list': getContentList(block),
      'text-editor': getTextEditor(block),
      'cloudinary-folder': getCloudinaryFolder(block),
      hero: getHero(block),
      hubspot: getHubspot(block),
      gallery: getGallery(block),
      embed: getEmbed(block),
    };
    return componentType[blockName] || null;
  });

  return allBlocks;
};

const getEmbed = (props) => {
  return {
    ...props,
    type: getComponentType(props),
  };
};
const getCloudinaryFolder = (props) => {
  return {
    ...props,
    type: getComponentType(props),
  };
};

const getGallery = (props) => {
  return {
    id: props.id,
    title: props.title,
    images: props.photos?.data.map((photo) => {
      return {
        id: photo.id,
        ...photo.attributes,
      };
    }),
    type: getComponentType(props),
  };
};

const getHubspot = (props) => {
  return {
    ...props,
    attrs: {
      formID: props.formId,
    },
    type: getComponentType(props),
  };
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
