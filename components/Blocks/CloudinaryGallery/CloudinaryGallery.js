import useApi from 'hooks/useApi';
import Gallery from '../Gallery/Gallery';
import Alert from 'components/Alert/Alert';

const CloudinaryGallery = (props) => {
  const { data } = useApi(`/api/cloudinary?folder=${props.folderName}`);
  if (!data && data?.length === 0) <p>loading ...</p>;
  if (data?.error)
    return <Alert title='API Error' error={data.error.message} />;
  if (!data) return <Alert title='API Error' error='Unknown error' />;

  return (
    <div className='cloudinary-gallery'>
      <Gallery title={props.title} images={data} />
    </div>
  );
};

export default CloudinaryGallery;
