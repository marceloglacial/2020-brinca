import getPhoneNumer from 'functions/getPhoneNumber';
import getSocialLink from 'functions/getSocialLink';
import { BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs';

const BusinessCardFooter = ({
  address,
  category,
  email,
  facebook,
  instagram,
  phone,
  website,
  whatsapp,
  iconSize,
}) => {
  return (
    <div className='card-footer'>
      <div className='card-meta'>
        {address && <div className='card-address'>{address}</div>}
        {email && (
          <div className='card-email'>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        )}
        {phone && (
          <div className='card-phone'>
            <a href={`tel:${getPhoneNumer(phone)}`}>{phone}</a>
          </div>
        )}
        {website && (
          <div className='card-url'>
            <a href={website} target={`_blank`}>
              {website}
            </a>
          </div>
        )}
        <div className='card-social'>
          {whatsapp && (
            <a
              href={`https://wa.me/${getPhoneNumer(whatsapp)}`}
              target='_blank'
            >
              <BsWhatsapp className='card-icon' size={iconSize} />
            </a>
          )}
          {facebook && (
            <a
              href={`https://facebook.com/${getSocialLink(facebook)}`}
              target='_blank'
            >
              <BsFacebook className='card-icon' size={iconSize} />
            </a>
          )}
          {instagram && (
            <a
              href={`https://instagram.com/${getSocialLink(instagram)}`}
              target='_blank'
            >
              <BsInstagram className='card-icon' size={iconSize} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default BusinessCardFooter;
