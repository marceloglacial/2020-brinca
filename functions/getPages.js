export const getPages = (data, contentType) =>
  data?.data.map((page) => {
    const { title, slug, thumbnail, date } = page.attributes;
    return {
      id: page.id,
      title: title,
      link: `/${contentType}/${slug}`,
      image: thumbnail?.data?.attributes,
      date,
    };
  });
