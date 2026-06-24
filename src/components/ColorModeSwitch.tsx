import { HStack, Icon, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "@/componentsChakraUI/ui/color-mode";
import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const {colorMode ,toggleColorMode} = useColorMode();

  return (
    <HStack>
      <Switch.Root checked = {colorMode==='dark'} onCheckedChange={toggleColorMode}>
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
          <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
            <Icon as={FaSun} color="yellow.400" />
          </Switch.Indicator>
        </Switch.Control>
        <Switch.Label />
      </Switch.Root>
      <Text>{colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
