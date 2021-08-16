import { FormControl, Button, InputGroup } from "react-bootstrap";
import "./explore.component.scss";
import axios from "axios";
import { fetchTweets, ParsedTweet } from "../../utils/tweet-utils";
import DisplayTweetsComponent from "../DisplayTweets/displayTweets.component";
import { useState } from "react";

function ExploreComponent() {
  let inputVal: string;

  const handleSearchChange = (event: any) => {
    inputVal = event.target.value;
  };

  const handleKeyPress = (event: any) =>{
    if(event.charCode === 13){
      handleNewSearch();
    }
  }

  const [tweets, setTweets] = useState<Array<ParsedTweet>>([]);
  const [status, setStatus] = useState("init");

  const handleNewSearch = () => {
    if(!inputVal || !inputVal.trim() || status === "searching"){
      return;
    }
    setStatus("searching");
    axios
      .get(`https://damp-wave-61642.herokuapp.com/?search=${inputVal}`, {
        headers: {
          Authorization:
            "Bearer AAAAAAAAAAAAAAAAAAAAAAkXSgEAAAAAQ%2B7CHvY%2FvZ7WmR2oPhespzsHi6s%3DRJhMfHjvRxa7t9BGm5Nzd0hmSExs8zPUXnxPQ4zHWNrHyJcaF3",
        },
      })
      .then((data) => {
        setStatus("success");
        setTweets(fetchTweets(data.data));
      })
      .catch((error) => {
        setStatus("error");
      });
  };

  return (
    <div className="explore">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search Tweets"
          aria-label="Search Tweets"
          aria-describedby="basic-addon2"
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
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
        {status === "success" &&
          (tweets.length ? (
            <DisplayTweetsComponent tweets={tweets}></DisplayTweetsComponent>
          ) : (
            <div className="search-message">No Results Found</div>
          ))}
        {status === "error" && <div className="search-message">Error Fetching tweets</div>}
        {status === "init" && <div className="search-message">Please Start searching</div>}
        {status === "searching" && <img alt="spinner" className="spinner-image" src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"></img>}
      </div>
    </div>
  );
}

export default ExploreComponent;
