import { Box, Flex, HStack , Image , Text } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import React from 'react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack padding="10px">
        <Image src={logo} boxSize={{base : "40px" ,  md : "50px" , lg: "60px" }}/>
        <Box flexGrow={1}>
          <SearchInput></SearchInput>
        </Box>
        <Box flexShrink={1}>
          <ColorModeSwitch></ColorModeSwitch>
        </Box>
    </HStack>
  )
}

export default NavBar