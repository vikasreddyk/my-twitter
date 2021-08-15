import { createContext } from "react";
import { ParsedTweet } from "../utils/tweet-utils";

type AppContextype = {
  favorites: Array<ParsedTweet>;
  addFavorites: Function;
  removeFavorites: Function;
  isFavorite: Function;
};
export const AppContext = createContext<AppContextype>({} as AppContextype);
