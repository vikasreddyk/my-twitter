import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import { ParsedTweet } from "./utils/tweet-utils";
import { AppContext } from "./context/AppContext";
import NavigationComponent from "./components/Navigation/navigation.component";
import ExploreComponent from "./components/Explore/explore.component";
import FavoritesComponet from "./components/Favorites/favorites.component"

function App() {
  const [favorites, setFavorites] = useState<Array<ParsedTweet>>(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );
  const addFavorites = (tweet: ParsedTweet) => {
    if (!isFavorite(tweet.id)) {
      const newFavorites = [...favorites];
      newFavorites.push(tweet);
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };
  const removeFavorites = (id: string) => {
    const newFavorites = favorites.filter((tweet) => tweet.id !== id);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };
  const isFavorite = (id: string) => {
    return favorites.filter((tweet) => tweet.id === id).length;
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          favorites: favorites,
          addFavorites: addFavorites,
          removeFavorites: removeFavorites,
          isFavorite: isFavorite
        }}
      >
        <Container className="app-container">
          <Row>
            <Router>
              <Col xs sm="2" md="3" lg="3" xl="2" className="nav-col">
                <NavigationComponent></NavigationComponent>
              </Col>
              <Col className="app-route-col">
                <Switch>
                  <Route path="/explore">
                    <ExploreComponent></ExploreComponent>
                  </Route>
                  <Route path="/favorites">
                    <FavoritesComponet tweets={favorites}></FavoritesComponet>
                  </Route>
                  <Route path="/">
                    <Redirect to="/explore" />
                  </Route>
                </Switch>
              </Col>
            </Router>
          </Row>
        </Container>
      </AppContext.Provider>
    </div>
  );
}

export default App;
