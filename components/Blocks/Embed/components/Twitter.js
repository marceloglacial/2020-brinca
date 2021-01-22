import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import { twitter } from '../Embed.module.scss';

const Twitter = (props) => {
  const { url } = props;

  // Single Tweet
  if (url.includes('/status/')) {
    const tweetID = url.split('/status/')[1];
    return (
      <div className={twitter}>
        <TwitterTweetEmbed tweetId={tweetID} />
      </div>
    );
  }

  // User Timeline
  const userName = url.split('twitter.com/')[1];
  return (
    <div className={twitter}>
      <TwitterTimelineEmbed
        sourceType='profile'
        screenName={userName}
        options={{ height: 600 }}
      />
    </div>
  );
};
export default Twitter;
