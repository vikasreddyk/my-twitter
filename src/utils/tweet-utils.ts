export const fetchTweets = (tweets: Tweets) => {
  const parsedTweets: Array<ParsedTweet> = [];
  const users = tweets.includes?.users ? tweets.includes.users : [];
  const media = tweets.includes?.media ? tweets.includes.media : [];
  tweets.data.forEach((tweet) => {
    const parsedTweet: ParsedTweet = {
      createdAt: tweet.created_at,
      id: tweet.id,
      attachments: tweet.attachments
        ? getAttachments(media, tweet.attachments.media_keys)
        : [],
      text:
        tweet.text.search("RT") === 0 ? tweet.text.split(": ")[1] : tweet.text,
      author: getAuthorDetails(users, tweet.author_id),
    };
    parsedTweets.push(parsedTweet);
  });
  return parsedTweets;
};

const getAuthorDetails = (users: Array<any>, authorId: string): TweetAuthor => {
  const userData = users.filter((user) => user.id === authorId)[0];
  const author = {
    id: authorId,
    name: userData.name,
    userName: userData.username,
    profileImageUrl: userData.profile_image_url,
  };
  return author;
};

const getAttachments = (
  media: Array<any>,
  mediaKeys: Array<string>
): Array<TweetAttachment> => {
  console.log(media);
  const attachments: Array<TweetAttachment> = [];
  mediaKeys.forEach((key) => {
    const attachmentData = media.filter((item) => item.media_key === key)[0];
    const attachment = {
      mediaKey: key,
      height: attachmentData.height,
      width: attachmentData.width,
      type: attachmentData.type,
      previewImageURL:
        attachmentData.type === "photo"
          ? attachmentData.url
          : attachmentData.preview_image_url,
    };
    attachments.push(attachment);
  });
  return attachments;
};

export type Tweets = {
  data: Array<any>;
  includes: {
    media: Array<any>;
    users: Array<any>;
  };
  meta: any;
};

export type ParsedTweet = {
  createdAt: string;
  id: string;
  attachments?: Array<TweetAttachment>;
  text: string;
  author: TweetAuthor;
};

export type TweetAttachment = {
  mediaKey: string;
  height: number;
  width: number;
  type: string;
  previewImageURL: string;
};

export type TweetAuthor = {
  id: string;
  name: string;
  userName: string;
  profileImageUrl: string;
};
