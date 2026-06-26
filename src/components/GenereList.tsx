import useGenres from '@/assets/hooks/useGeneres'
import getCroppedUrl from '@/services/image-url';
import { HStack, Image , List, Text } from '@chakra-ui/react';

const GenereList = () => {
  const {data} = useGenres();
  return (
    <List.Root as={"ul"} listStyleType={"none"}>
      {data.map(genere => <List.Item key={genere.id} paddingY={"5px"}>
        <HStack>
          <Image src={getCroppedUrl(genere.image_background)} boxSize={"32px"} borderRadius={8} />
          <Text fontSize={"lg"}>{genere.name}</Text>
        </HStack>
      </List.Item>)}
    </List.Root>
  )
}

export default GenereList