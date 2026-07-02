import { Box, Input, InputGroup } from "@chakra-ui/react";
import { motion, stagger } from "motion/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <motion.div initial={{y:-50}} animate={{y:0}} transition={{duration: 0.8}}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (inputRef.current) onSearch(inputRef.current.value);
        }}
      >
        <Box position="relative" overflow="hidden" borderRadius="20px">
          <InputGroup startElement={<BsSearch color="white" />} zIndex={1}>
            <Input
              ref={inputRef}
              placeholder="Search games..."
              _placeholder={{
                color: "white",
              }}
              bg="transparent"
              borderRadius="20px"
              borderColor="gray.600"
              color="white"
            />
          </InputGroup>
        </Box>
      </form>
    </motion.div>
  );
};

export default SearchInput;
