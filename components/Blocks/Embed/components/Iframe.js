import getVimeoId from 'functions/getVimeoId';
import getYouTubeId from 'functions/getYoutubeId';
import styles from '../Embed.module.scss';

const Iframe = (props) => {
  const { url, type, caption } = props;
  const embeds = {
    soundcloud: {
      url: `https://w.soundcloud.com/player/?url=${url}`,
      type: 'audio',
    },
    youtube: {
      url: `https://www.youtube.com/embed/${getYouTubeId(url)}`,
      type: 'video',
    },
    vimeo: {
      url: `https://player.vimeo.com/video/${getVimeoId(url)}`,
      type: 'video',
    },
  };

  return (
    <figure
      className={`${styles.iframeContainer} ${styles[embeds[type].type]}  ${
        caption && styles.iframeWithCaption
      }`}
    >
      <iframe
        width='100%'
        height={embeds[type].height}
        scrolling='no'
        frameBorder='no'
        allow='autoplay'
        className={styles.iframe}
        src={embeds[type].url}
      ></iframe>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
};
export default Iframe;
