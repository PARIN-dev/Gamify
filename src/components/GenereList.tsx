import useGenres, { type Genre } from "@/assets/hooks/useGeneres";
import getCroppedUrl from "@/services/image-url";
import { Button, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenereList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <List.Root as={"ul"} listStyleType={"none"} overflow={"hidden"}>
      {data.map((genere) => (
        <List.Item key={genere.id} paddingY={"5px"}>
          <HStack width={"100%"}>
            <Image
              src={getCroppedUrl(genere.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            />
            <Button
              fontWeight={genere.id === selectedGenre?.id ? "bold" : "normal"}
              flex={"1"}
              fontSize={"lg"}
              variant={"ghost"}
              justifyContent={"flex-start"}
              whiteSpace={"normal"}
              onClick={() => onSelectGenre(genere)}
            >
              {genere.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenereList;
