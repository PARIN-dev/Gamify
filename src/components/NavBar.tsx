import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { motion } from "motion/react";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backInOut" }}
      >
        <Image src={logo} boxSize={{ base: "40px", md: "50px", lg: "60px" }} />
      </motion.div>
      <Box flexGrow={1}>
          <SearchInput onSearch={onSearch}></SearchInput>
      </Box>
      <Box flexShrink={1}>
        <ColorModeSwitch></ColorModeSwitch>
      </Box>
    </HStack>
  );
};

export default NavBar;
