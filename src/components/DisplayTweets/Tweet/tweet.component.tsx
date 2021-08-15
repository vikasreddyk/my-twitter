import { Carousel } from "react-bootstrap";
import { ParsedTweet } from "../../../utils/tweet-utils";
import "./tweet.component.scss";
import { AppContext } from "../../../context/AppContext";
import { useContext } from "react";

type TweetProps = {
  tweet: ParsedTweet;
};

function TweetComponent(props: TweetProps) {
  const favoriteContext = useContext(AppContext);
  const isFavorite = (id: string, favorites: Array<ParsedTweet>) => {
    return favorites.filter((tweet) => tweet.id === id).length;
  };
  return (
    <div className="tweet-row">
      <div className="tweet-avatar-col">
        <img
          className="user-image"
          src={props.tweet.author.profileImageUrl}
          alt="Profile pic"
        ></img>
      </div>
      <div className="tweet-content-container">
        <div>
          <span className="author-name">{props.tweet.author.name} </span>
          <span className="author-id">@{props.tweet.author.userName} .</span>
          <span className="author-id">{props.tweet.createdAt} </span>
          {isFavorite(props.tweet.id, favoriteContext.favorites) ? (
            <i
              className="bi bi-star-fill tweet-fav-icon"
              title="Click to remove from favorites"
              onClick={() => favoriteContext.removeFavorites(props.tweet.id)}
            ></i>
          ) : (
            <i
              className="bi bi-star tweet-fav-icon"
              title="Click to add to favorites"
              onClick={() => favoriteContext.addFavorites(props.tweet)}
            ></i>
          )}
        </div>
        <div
          className="tweet-text"
          dangerouslySetInnerHTML={{ __html: props.tweet.text }}
        />
        <div className="tweet-attachments">
          {props.tweet.attachments && props.tweet.attachments?.length > 0 ? (
            <Carousel>
              {props.tweet.attachments?.map((attachment) => (
                <Carousel.Item key={attachment.mediaKey}>
                  <img
                    className="tweet-attachment-img"
                    src={attachment.previewImageURL}
                    width={attachment.width}
                    alt="Tweet Attachment"
                  ></img>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
export default TweetComponent;
