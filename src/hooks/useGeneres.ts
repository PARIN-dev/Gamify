import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import type { FetchResponse} from "../services/api-client";
import generes from "@/data/generes";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["generes"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: {count: generes.length , results: generes}
  });

export default useGenres;
