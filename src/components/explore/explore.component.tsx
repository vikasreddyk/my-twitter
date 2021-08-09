import { FormControl, Button, InputGroup } from "react-bootstrap";
import "./explore.component.scss";
import axios from "axios";

function ExploreComponent() {
  let inputVal: string;

  const handleSearchChange = (event: any) => {
    inputVal = event.target.value;
  };

  const handleNewSearch = () => {
    axios
      .get(
        "https://api.twitter.com/2/tweets/search/recent?query=nyc&tweet.fields=author_id,created_at,entities,geo,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source",
        {
          headers: {
            Authorization:
              "Bearer AAAAAAAAAAAAAAAAAAAAAAkXSgEAAAAAQ%2B7CHvY%2FvZ7WmR2oPhespzsHi6s%3DRJhMfHjvRxa7t9BGm5Nzd0hmSExs8zPUXnxPQ4zHWNrHyJcaF3",
          },
        }
      )
      .then((data) => {
        console.log(data);
      });
    console.log(inputVal);
  };

  return (
    <div className="explore">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search Tweets"
          aria-label="Search Tweets"
          aria-describedby="basic-addon2"
          onChange={handleSearchChange}
        />
        <Button
          onClick={handleNewSearch}
          variant="outline-secondary"
          id="button-addon2"
        >
          <i className="bi bi-search"></i>
        </Button>
      </InputGroup>
      <div className="search-results">
        
      </div>
    </div>
  );
}

export default ExploreComponent;