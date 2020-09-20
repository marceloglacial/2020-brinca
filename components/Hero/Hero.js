import { Row, Carousel, Image, Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './styles.module.scss';

const Hero = (props) => {
  const images = [
    {
      id: 1,
      src: 'uploads/photo-1503516591419-4919952369f1.jpeg',
      alt: 'Quem Somos',
      title: 'Quem Somos',
      description: 'Conheça o Brinca',
      link: '/quem-somos/',
    },
    {
      id: 2,
      src: 'uploads/photo-1530298867005-03ec1a6affd9.jpeg',
      alt: 'Eventos',
      title: 'Eventos',
      description: 'Celebre com o Brinca',
      link: '/eventos/',
    },
    {
      id: 3,
      src: 'uploads/photo-1536082555308-99948d5c8ecf.jpeg',
      alt: 'Associe-se',
      title: 'Associe-se',
      description: 'Seja Membro!',
      link: '/associe-se/',
    },
  ];

  return (
    <Container fluid>
      <Row>
        <Carousel className={styles.carouselContainer}>
          {images.map((item) => {
            const { id, src, alt, title, description, link } = item;
            return (
              <Carousel.Item className={styles.item} key={id}>
                <Link href={link}>
                  <a>
                    <Image
                      className={`d-block w-100 ${styles.heroImage}`}
                      src={src}
                      alt={alt}
                    />
                    <Carousel.Caption>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </Carousel.Caption>
                  </a>
                </Link>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Row>
    </Container>
  );
};

export default Hero;