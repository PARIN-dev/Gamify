import apiClient from "@/services/api-client";
import { CanceledError, type AxiosError } from "axios";
import { useEffect, useState } from "react";

interface Genre{
    id : number;
    name: string;
}

interface FetchGenresResponse{
    count: number;
    results: Genre[];
}

const useGenres = () => {
  const [generes, setGenres] = useState<Genre[]>([]); 
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { generes , error, isLoading };
};

export default useGenres;
