import useGenres, { type Genre } from "@/hooks/useGeneres";
import getCroppedUrl from "@/services/image-url";
import { Button, Heading, HStack, Image, List, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenereList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
    <Heading fontSize={"2xl"} marginBottom={2.5} >Genres</Heading>
    <List.Root as={"ul"} listStyleType={"none"} overflow={"hidden"}>
      {data.map((genere) => (
        <List.Item key={genere.id} paddingY={"5px"}>
          <HStack>
            <Image
              src={getCroppedUrl(genere.image_background)}
              boxSize={"32px"}
              borderRadius={8}
              objectFit={"cover"}
            />
            <Button
              fontWeight={genere.id === selectedGenre?.id ? "bold" : "normal"}
              flex={1}
              fontSize={"lg"}
              variant={"ghost"}
              _hover={{ bg: "hover" }}
              whiteSpace={"normal"}
              onClick={() => onSelectGenre(genere)}
            >
              {genere.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
    </>
  );
};

export default GenereList;
