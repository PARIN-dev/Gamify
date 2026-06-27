import type { GameQuery } from '@/App'
import { Heading } from '@chakra-ui/react'
import React from 'react'

interface Props{
    gameQuery : GameQuery;
}

const GameHeading = ({gameQuery} : Props) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name||''} Games`; 
  return (
    <Heading as='h1' fontSize={"3xl"} marginY={"20px"}>
        {heading}
    </Heading>
  )
}

export default GameHeading