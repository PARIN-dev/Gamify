import useData from "./useData";
import type { Genre } from "./useGeneres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (selectedGenre: Genre | null , selectedPlatform: Platform | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id , parent_platform: selectedPlatform?.id } }, [
    selectedGenre?.id,
    selectedPlatform?.id
  ]);

export default useGame;
