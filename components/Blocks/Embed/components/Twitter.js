import { twitter } from '../Embed.module.scss';
import { useEffect } from 'react';

const Twitter = (props) => {
  const { url } = props;

  if (!url) return null;

  const hasStatus = url.includes('status');
  const twitterTag = hasStatus ? 'twitter-tweet' : 'twitter-timeline';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    document.getElementsByClassName(twitterTag)[0].appendChild(script);
  }, []);

  if (hasStatus) {
    return (
      <div className={twitter}>
        <blockquote className={twitterTag}>
          <a href={`${url}`}></a>
        </blockquote>
      </div>
    );
  } else {
    return (
      <div className={twitter}>
        <a className={twitterTag} href={url}></a>
      </div>
    );
  }
};
export default Twitter;
