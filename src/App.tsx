import { Button, Grid, GridItem, SelectClearTrigger, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { LuGalleryHorizontal } from "react-icons/lu";
import { useState } from "react";
import type { Genre } from "./assets/hooks/useGeneres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./assets/hooks/useGame";
const App = () => {
  const  [selectedGenre , setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform , setSelectedPlatform] = useState<Platform | null>(null);
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
          {/* <GenereList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre}></GenereList> */}
        </GridItem>
        </Stack>
        <GridItem area="main">
          <PlatformSelector selectPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
           {/* <GameGrid selectPlatform={selectedPlatform} selectGenre={selectedGenre}></GameGrid> */}
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
