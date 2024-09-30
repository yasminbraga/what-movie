"use client";

import api from "@/services/api";
import { DataContextType, DataTypes, MovieType } from "@/types/types";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export const DataContext = createContext({} as DataContextType);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<DataTypes>();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [currentMovie, setCurrentMovie] = useState<MovieType>();
  const [liked, setLiked] = useState<MovieType[] | []>([]);
  const [notLiked, setNotLiked] = useState<MovieType[] | []>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await api.get(`top_rated?page=${currentPage}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [currentPage]);

  const fetchMovie = useCallback(async () => {
    try {
      const res = await api.get(`${data.results[currentMovieIndex].id}`);
      setCurrentMovie(res.data);
    } catch (error) {
      console.error(error);
    }
  }, [currentMovieIndex, data]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  return (
    <DataContext.Provider
      value={{
        currentMovieIndex,
        setCurrentMovieIndex,
        data,
        currentMovie,
        liked,
        setLiked,
        notLiked,
        setNotLiked,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
