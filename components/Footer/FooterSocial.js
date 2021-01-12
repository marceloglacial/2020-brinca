import useMenu from 'functions/useMenu';
import FooterLoading from './FooterLoading';
import Alert from 'components/Alert/Alert';
import Image from 'next/image';
import { socialLink, socialMenu, socialList } from './Footer.module.scss';

const FooterSocial = (props) => {
  const { menuContent, isLoading, isError } = useMenu('social');

  if (isLoading) return <FooterLoading />;
  if (isError) return <Alert title={`Data error`} />;
  if (menuContent.code === 'not_found')
    return <Alert title={menuContent.message} />;

  return (
    <div className={socialMenu} data-aos='fade'>
      <ul className={socialList}>
        {menuContent.items.map((item) => {
          const { ID, title, url } = item;
          return (
            <li className={`ml-auto ${socialLink}`} key={ID}>
              <a href={url} target='_blank' rel='noopener'>
                <Image
                  src={`/images/icon-${title.toLowerCase()}.png`}
                  alt={`logo ${title}`}
                  width={42}
                  height={42}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FooterSocial;
