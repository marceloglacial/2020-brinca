export const getCard = (props) => {
  const { title, slug, thumbnail } = props.attributes;
  return {
    id: props.id,
    title,
    link: slug,
    image: {
      url: thumbnail?.data?.attributes?.url,
    },
  };
};
