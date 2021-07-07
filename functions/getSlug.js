const getSlug = (link) => {
  const path = new URL(link).pathname;
  const subPath = '/brinca/';

  if (!link.includes('http')) return '';
  if (link.includes(subPath)) return path.split('/brinca/')[1];

  return path;
};
export default getSlug;
