import Skeleton from 'react-loading-skeleton';

const LayoutLoading = (props) => {
  return (
    <>
      <div className='fixed-top'>
        <div className='container py-4 d-flex align-items-center'>
          <span className='mr-4'>
            <Skeleton width={200} height={80} />
          </span>
          <span className='mr-3'>
            <Skeleton width={100} />
          </span>
          <span className='mr-3'>
            <Skeleton width={100} />
          </span>
          <span className='mr-3'>
            <Skeleton width={100} />
          </span>
          <span className='mr-3'>
            <Skeleton width={100} />
          </span>
        </div>
      </div>
      <div className='container-fluid'>
        <Skeleton height={4} />
      </div>

      <div className='container'>
        <h2 className='pt-3 pb-3'>
          <Skeleton width={250} />
        </h2>
        <p>
          <Skeleton />
          <Skeleton width={700} /> <br />
          <Skeleton width={800} />
          <br />
          <Skeleton width={600} /> <br />
          <Skeleton width={500} />
          <br />
        </p>
        <p>
          <Skeleton />
          <Skeleton width={800} /> <br />
          <Skeleton width={700} />
          <br />
          <Skeleton width={400} /> <br />
          <Skeleton width={300} />
          <br />
        </p>
      </div>
      <div className='container-fluid mt-5 text-center'>
        <Skeleton height={70} />
        <p className='mt-2'>
          <Skeleton height={15} width={200} />
        </p>
      </div>
    </>
  );
};
export default LayoutLoading;
