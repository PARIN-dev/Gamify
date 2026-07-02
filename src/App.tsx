import { Box, Grid, GridItem, HStack, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GenereList from "./components/GenereList";
import { useState } from "react";
import type { Genre } from "./hooks/useGeneres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { motion, useScroll, useTransform } from "motion/react";
import GameGrid from "./components/GameGrid";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <div>
      <Grid
        gridTemplateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        gridTemplateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          ></NavBar>
        </GridItem>
        <Stack hideBelow="lg">
          <GridItem area="aside" paddingX={5}>
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7, ease: "circInOut" }}
            >
              <GenereList
                onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
                selectedGenre={gameQuery.genre}
              ></GenereList>
            </motion.div>
          </GridItem>
        </Stack>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery}></GameHeading>
            <HStack spaceX={5} marginBottom={5}>
              <PlatformSelector
                selectPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrders={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              ></SortSelector>
            </HStack>
          </Box>
          <motion.div >
            {/* <GameGrid gameQuery={gameQuery}></GameGrid> */}
          </motion.div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
