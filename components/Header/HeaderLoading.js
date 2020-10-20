import Skeleton from 'react-loading-skeleton';
import { loadingLogo } from './Header.module.scss';

const HeaderLoading = (props) => {
  return (
    <>
      <div className='fixed-top'>
        <div className='container py-4 d-flex align-items-center'>
          <span className='mr-4'>
            <Skeleton width={200} className={loadingLogo} />
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
    </>
  );
};
export default HeaderLoading;
