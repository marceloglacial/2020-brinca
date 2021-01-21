// TODO: comment this function
const getYouTubeId = (url) => {
  var ID = '';
  url = url
    ? url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)
    : [];
  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  } else {
    ID = url;
  }
  return ID;
};

export default getYouTubeId;
