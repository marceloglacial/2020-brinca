import Image from 'next/image';
import styles from './Hero.module.scss';

const Hero = (props) => {
  const { title, description, imageUrl, image, hasButton } = props;
  const { alt } = image;
  return (
    <section className='hero py-5'>
      <div className='row'>
        <div className='col'>
          <h2>{title}</h2>
          <p>{description}</p>
          {hasButton && <button className='btn btn-secondary'>Button</button>}
        </div>
        <div className='col'>
          <Image
            src={imageUrl}
            alt={alt ? alt : 'Hero Image'}
            width={500}
            height={300}
            className={`rounded ${styles.heroImage}`}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
