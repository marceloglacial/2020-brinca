export const getCard = (props) => {
  const { title, slug, thumbnail } = props.attributes;
  const { url } = thumbnail.data.attributes;
  console.log(props);
  return {
    id: props.id,
    title,
    link: slug,
    image: {
      url,
    },
  };
};
