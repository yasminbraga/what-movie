import { Dispatch, SetStateAction } from "react";

export interface MovieType {
  id: string;
  poster_path: string;
  original_title: string;
  release_date: string;
  runtime: number;
  genres: [];
  vote_count: number;
  vote_average: number;
  overview: string;
}

export interface DataTypes {
  results: Array<MovieType>;
}

export interface DataContextType {
  currentMovieIndex: number;
  setCurrentMovieIndex: Dispatch<SetStateAction<number>>;
  data: DataTypes;
  currentMovie: MovieType;
  liked: Array<MovieType>;
  setLiked: Dispatch<SetStateAction<Array<MovieType> | []>>;
  notLiked: Array<MovieType>;
  setNotLiked: Dispatch<SetStateAction<Array<MovieType> | []>>;
}
