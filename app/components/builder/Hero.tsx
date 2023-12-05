import React from 'react';
import { Box, Editable, EditablePreview, EditableInput, Flex } from '@chakra-ui/react';
import { useDraggable } from '@dnd-kit/core';

function Hero() {
  const {attributes, listeners, setNodeRef} = useDraggable({
    id: 'hero',
    data: { type: 'HERO' }, // Ensure this data is set
  });

  return (
    <Box
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      w="100%"
      h="375px"
      bg="#020281"
    >
      <Flex
      w="100%" 
      h="100%"
      >
        <Box w="50%" p="20px" color="white">
          <Editable defaultValue="Header" fontSize="2xl">
            <EditablePreview />
            <EditableInput />
          </Editable>
          <Editable defaultValue="Subheader" fontSize="xl" mt="2">
            <EditablePreview />
            <EditableInput />
          </Editable>
          <Editable defaultValue="Here is some body text. This section can contain additional information, descriptions, or other content." mt="2">
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Box>
        <Box w="50%" h="100%" bgImage="url(./assets/gea-dummy.png)" bgSize="cover" bgPos="center">
          {/* Background image is set here */}
        </Box>
      </Flex>
    </Box>
  );
}

export default Hero;