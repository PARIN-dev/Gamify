import { Box, HStack , Image } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props{
  onSearch : (search : string) => void;
}

const NavBar = ({onSearch} : Props) => {
  return (
    <HStack padding="10px">
        <Image src={logo} boxSize={{base : "40px" ,  md : "50px" , lg: "60px" }}/>
        <Box flexGrow={1}>
          <SearchInput onSearch={onSearch}></SearchInput>
        </Box>
        <Box flexShrink={1}>
          <ColorModeSwitch></ColorModeSwitch>
        </Box>
    </HStack>
  )
}

export default NavBar