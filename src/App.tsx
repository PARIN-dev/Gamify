import { Button, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
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
        <GridItem area="aside" bg="green">
          Aside
        </GridItem>
        </Stack>
        <GridItem area="main" bg="red">
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
