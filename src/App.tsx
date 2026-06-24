import { Button, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
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
          Main
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
