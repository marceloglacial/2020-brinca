// @see https://gist.github.com/codeguy/6684588
// @TODO https://github.com/lovell/limax

import slugfy from 'functions/slugfy';
import Link from 'next/link';

const PartnersTags = ({ tags, filter }) => {
  const hasTags = tags?.length > 0;
  if (!hasTags) return false;

  const allClassName = !filter ? 'btn-primary' : 'btn-secondary';

  return (
    <section className='partners__tags'>
      <div className='partners__title'>
        <h4>Categorias</h4>
      </div>
      <div className='d-flex justify-content-start flex-wrap gap'>
        <Link href={'/parceiros'}>
          <a className={`btn btn--small ${allClassName}`}>Todas</a>
        </Link>
        {tags.map((item, index) => {
          const tagClassName =
            filter === slugfy(item) ? 'btn-primary' : 'btn-secondary';

          return (
            <Link href={`/parceiros/${slugfy(item)}`} key={index}>
              <a className={`btn btn--small ${tagClassName}`}>{item}</a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default PartnersTags;
