import { Button, Grid, GridItem, SelectClearTrigger, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { useState } from "react";
import type { Genre } from "./assets/hooks/useGeneres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./assets/hooks/useGame";

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [gameQuery , setGameQuery] = useState<GameQuery>({} as GameQuery)


  return (
    <div>
      <Grid
        gridTemplateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        gridTemplateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Stack hideBelow="lg">
        <GridItem area="aside" paddingX={5}  >
          {/* <GenereList onSelectGenre={(genre) => setGameQuery({...gameQuery , genre})} selectedGenre={gameQuery.genre}></GenereList> */}
        </GridItem>
        </Stack>
        <GridItem area="main">
          {/* <PlatformSelector selectPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery , platform})}/> */}
           {/* <GameGrid gameQuery={gameQuery}></GameGrid> */}
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
