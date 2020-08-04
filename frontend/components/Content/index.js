import styles from './styles.module.scss';

const Content = (props) => {
  const contentProps = {
    title: 'Title',
    content:
      'Minim reprehenderit elit commodo duis proident sunt sunt minim non ex anim est minim. Eiusmod ad minim qui nulla est mollit amet irure nisi. Labore fugiat adipisicing dolor cillum non aute irure velit adipisicing eu velit irure dolore dolor. Eu ex proident reprehenderit proident enim dolor ipsum velit magna sint. Irure laborum sit anim ad nulla ut tempor. Eu mollit Lorem enim quis ullamco eu eu ex officia occaecat minim. Incididunt nostrud sint et ipsum minim deserunt nostrud consequat consequat cillum pariatur minim ut. Enim magna irure Lorem elit consectetur aliqua esse sint fugiat. Eu minim cillum irure reprehenderit voluptate enim ex adipisicing eiusmod deserunt. Commodo qui nisi cupidatat Lorem.',
  };

  const { title, content } = contentProps;

  return (
    <>
      <h2 className={`bottomLine ${styles.contentTitle} mb-5`}>{title}</h2>
      <p>{content}</p>
      <p>{content}</p>
      <figure className='figure'>
        <img
          src='uploads/photo-1503516591419-4919952369f1.jpeg'
          className='figure-img img-fluid rounded'
        />
        <figcaption className='figure-caption text-center'>
          A caption for the above image.
        </figcaption>
      </figure>
      <p>{content}</p>
      <p>{content}</p>
      <p>{content}</p>
    </>
  );
};
export default Content;
