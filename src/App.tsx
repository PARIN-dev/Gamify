import { Button, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { LuGalleryHorizontal } from "react-icons/lu";
const App = () => {
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
        <GridItem area="aside" paddingX={5}>
          {/* <GenereList></GenereList> */}
        </GridItem>
        </Stack>
        <GridItem area="main">
           {/* <GameGrid></GameGrid> */}
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
