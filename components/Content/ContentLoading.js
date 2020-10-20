import Skeleton from 'react-loading-skeleton';

const ContentLoading = (props) => {
  return (
    <article className='content py-5'>
      <p>
        <Skeleton />
        <Skeleton width={'50%'} /> <br />
        <Skeleton width={'90%'} />
        <br />
        <Skeleton width={'60%'} /> <br />
        <Skeleton width={'50%'} />
        <br />
      </p>
      <p>
        <Skeleton />
        <Skeleton width={'80%'} /> <br />
        <Skeleton width={'70%'} />
        <br />
        <Skeleton width={'40%'} /> <br />
        <Skeleton width={'30%'} />
        <br />
      </p>
    </article>
  );
};
export default ContentLoading;
