import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props{
    onSearch: (search : string) => void;
}

const SearchInput = ({onSearch } : Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        if(inputRef.current)  onSearch(inputRef.current.value);

    }}>
        <InputGroup startElement = {<BsSearch color="white"></BsSearch>}>
          <Input
            ref={inputRef}            
            placeholder="Search games..."
            variant={"outline"}
            borderRadius={20}
          />
        </InputGroup>
    </form>
  );
};

export default SearchInput;
