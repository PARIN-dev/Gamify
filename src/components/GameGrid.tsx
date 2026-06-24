import useGame from "@/assets/hooks/useGame";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
    const {games , error} = useGame();
  return (
    <>
    {error && <p>{error}</p>}
    <SimpleGrid column={3} gapX={10} columns={{sm: 1 , md: 2 , lg: 3, xl: 5}} padding='10px'>
        {games.map(game => <GameCard key={game.id} game={game}></GameCard>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid