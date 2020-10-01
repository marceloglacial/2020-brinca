import ContentLoading from 'components/Content/ContentLoading';
import Head from 'next/head';
import Skeleton from 'react-loading-skeleton';

const LayoutLoading = (props) => {
  return (
    <>
      <Head>
        <title>Brinca 2020 </title>
      </Head>

      <div className='fixed-top'>
        <div className='container py-4 d-flex align-items-center'>
          <span className='mr-4'>
            <Skeleton width={200} height={80} />
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
      </div>
      <div className='container-fluid'>
        <Skeleton height={6} />
      </div>
      <div className='container'>
        <ContentLoading />
      </div>
      <div className='container-fluid mt-4 text-center'>
        <Skeleton height={70} />
        <p className='mt-2'>
          <Skeleton height={15} width={200} />
        </p>
      </div>
    </>
  );
};
export default LayoutLoading;
