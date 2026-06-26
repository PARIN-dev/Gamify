import { Button, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
const App = () => {
  return (
    <div>
      <Grid
        gridTemplateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Stack hideBelow="lg">
        <GridItem area="aside">
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
