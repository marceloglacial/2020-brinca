export const getCard = (props) => {
  const { title, slug, thumbnail } = props.attributes;
  const { url } = thumbnail.data.attributes;
  return {
    id: props.id,
    title,
    link: slug,
    image: {
      url,
    },
  };
};
