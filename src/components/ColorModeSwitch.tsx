import { HStack, Icon, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "@/componentsChakraUI/ui/color-mode";
import { FaMoon, FaSun } from "react-icons/fa";


const ColorModeSwitch = () => {
  const {colorMode ,toggleColorMode} = useColorMode();

  return (
    <HStack flexShrink={2}>
      <Switch.Root checked = {colorMode==='dark'} onCheckedChange={toggleColorMode}>
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
          <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400"/>} flexShrink={"2"}>
            <Icon as={FaSun} color="yellow.400" />
          </Switch.Indicator>
        </Switch.Control>
        <Switch.Label />
      </Switch.Root>
      <Text flexGrow={"2"} whiteSpace={"nowrap"} padding={"0px"}>{colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
