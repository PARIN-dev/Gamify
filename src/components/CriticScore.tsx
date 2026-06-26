import { Badge, HStack } from '@chakra-ui/react';
import React from 'react'
import { FaStar } from 'react-icons/fa';

interface Props{
    criticscore : number;
}

const CriticScore = ({criticscore}:Props) => {
    let color = criticscore> 90 ? 'blue' : criticscore > 75 ? 'green' : criticscore > 60 ? 'yellow' : 'red';
    if (!criticscore) return null;
  return (
    <Badge size ="md" paddingX={2} borderRadius="4px" colorPalette={color} variant='outline'>
        <HStack>
            {criticscore > 90 && <FaStar></FaStar>}
            {criticscore}
        </HStack> 
    </Badge>
  )
}

export default CriticScore