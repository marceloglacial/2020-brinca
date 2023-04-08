import useApi from 'hooks/useApi';

const CloudinaryGallery = (props) => {
  const { data } = useApi('/api/cloudinary?folder=brinca-ui');
  console.log(data);
  return (
    <div>
      <h1>Cloudinary Images</h1>
    </div>
  );
};

export default CloudinaryGallery;
