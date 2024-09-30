"use client";

import api from "@/services/api";
import { useCallback, useEffect, useState } from "react";

export const usePaginate = () => {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = useCallback(async () => {
    try {
      const response = await api.get(`top_rated?page=${currentPage}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data };
};
