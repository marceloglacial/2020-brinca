const getSlug = (link) => {
  if (!link.includes('http')) return '';

  const hasPort = new URL(link).port;

  if (hasPort) {
    const domain = new URL(link).host + '/';
    return link.split(domain)[1];
  } else {
    const domain = new URL(link).hostname + '/';
    return link.split(domain)[1];
  }
};
export default getSlug;
