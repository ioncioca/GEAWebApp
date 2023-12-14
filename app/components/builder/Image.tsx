import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useDraggable } from '@dnd-kit/core';

function ImageBlock() {
    useDraggable({
        id: 'image',
        data: { type: 'IMAGE' },
    });
  return (
    <Flex
    flexDirection='column'
    flexWrap='wrap'
    justifyContent='center'
    alignContent='center'
    w="100%" 
    h="100%"
  >
    <Box w="50%" h="50%" bgImage="url(./assets/gea-dummy.png)" bgSize="cover" bgPos="center"></Box>
    </Flex>
  );
}

export default ImageBlock;
