import Skeleton from 'react-loading-skeleton';

const HeaderLoading = (props) => {
  return (
    <>
      <div className='container py-4 d-flex align-items-center'>
        <span className='mr-4'>
          <Skeleton width={233} height={95} />
        </span>
        <span className='mr-3  d-none d-sm-block'>
          <Skeleton width={100} />
        </span>
        <span className='mr-3  d-none d-sm-block'>
          <Skeleton width={100} />
        </span>
        <span className='mr-3  d-none d-sm-block'>
          <Skeleton width={100} />
        </span>
        <span className='mr-3  d-none d-sm-block'>
          <Skeleton width={100} />
        </span>
      </div>
    </>
  );
};
export default HeaderLoading;
