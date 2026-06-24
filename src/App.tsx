import { Button, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
const App = () => {
  return (
    <div>
      <Grid
        gridTemplateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="blue">
          Nav
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
