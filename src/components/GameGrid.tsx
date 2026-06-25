import useGame from "@/assets/hooks/useGame";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
    const {games , error , isLoading} = useGame();
    const skeleton = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  return (
    <>
    {error && <p>{error}</p>}
    <SimpleGrid column={3} gapX={10} columns={{sm: 1 , md: 2 , lg: 3, xl: 5}} padding='10px'>
        {isLoading && skeleton.map(s => <GameCardSkeleton></GameCardSkeleton>)}
        {games.map(game => <GameCard key={game.id} game={game}></GameCard>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid