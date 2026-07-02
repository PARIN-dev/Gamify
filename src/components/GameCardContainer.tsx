import { Box } from '@chakra-ui/react'
import { motion } from 'motion/react';
import { type ReactNode } from 'react'
interface Props{
    children : ReactNode;
}

const GameCardContainer = ({children}:Props) => {
  return (
     <motion.div
        layout
        whileHover={{
          scale: 1.3,
          zIndex: 100
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Box  borderRadius={10} overflow="hidden">{children}</Box>
      </motion.div>
  )
}

export default GameCardContainer