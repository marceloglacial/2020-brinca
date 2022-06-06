// @see https://gist.github.com/codeguy/6684588
// @TODO https://github.com/lovell/limax

import slugify from 'functions/slugfy';
import Link from 'next/link';

const PartnersTags = ({ tags, filter }) => {
  const hasTags = tags?.length > 0;
  if (!hasTags) return false;

  return (
    <div className='partners__tags'>
      <div className='partners__title'>
        <h4>Categorias</h4>
      </div>
      <div className='d-flex justify-content-start flex-wrap gap'>
        <Link href={'/parceiros'}>
          <a className={`btn btn-primary`}>Todas</a>
        </Link>
        {tags.map((item, index) => (
          <Link href={`/parceiros/${slugify(item)}`} key={index}>
            <a className='btn btn-secondary'>{item}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PartnersTags;
