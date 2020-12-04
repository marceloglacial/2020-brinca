import Image from 'next/image';

const PostListImage = (props) => {
  if (!props.source_url) return null;
  const {
    source_url: src,
    alt_text: alt,
    media_details: { height, width },
  } = props;

  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      className='card-img-top'
    />
  );
};
export default PostListImage;
