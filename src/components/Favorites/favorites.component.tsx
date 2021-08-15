import { ParsedTweet } from "../../utils/tweet-utils";
import DisplayTweetsComponent from "../DisplayTweets/displayTweets.component";
import "./favorites.componet.scss";

function FavoritesComponet(props: { tweets: Array<ParsedTweet> }) {
  return (
    <div className="favorite-tweets">
      <h2 className="fav-title">Favorites</h2>
      {props.tweets.length > 0 ? (
        <DisplayTweetsComponent tweets={props.tweets}></DisplayTweetsComponent>
      ) : (
        <div className="search-message">No Favorites</div>
      )}
    </div>
  );
}

export default FavoritesComponet;
