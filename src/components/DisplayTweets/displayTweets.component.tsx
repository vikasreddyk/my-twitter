import { Container } from "react-bootstrap";
import { ParsedTweet } from "../../utils/tweet-utils";
import TweetComponent from "./Tweet/tweet.component";
import "./displayTweets.component.scss";

type DisplatTweets = {
  tweets: Array<ParsedTweet>;
};

function DisplayTweetsComponent(props: DisplatTweets) {
  console.log(props);
  return (
    <Container className="tweets-container">
      {props.tweets.map((tweet) => (
        <TweetComponent key={tweet.id} tweet={tweet}></TweetComponent>
      ))}
    </Container>
  );
}

export default DisplayTweetsComponent;
