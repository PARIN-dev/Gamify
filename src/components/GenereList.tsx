import useGenres from '@/assets/hooks/useGeneres'
import getCroppedUrl from '@/services/image-url';
import { HStack, Image , List, Spinner, Text } from '@chakra-ui/react';

const GenereList = () => {
  const {data , isLoading , error} = useGenres();
  if(error) return null;
  if(isLoading) return <Spinner></Spinner>
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