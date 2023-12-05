import React from 'react';
import { Box, Editable, EditablePreview, EditableInput, Flex } from '@chakra-ui/react';
import { useDraggable } from '@dnd-kit/core';

function Banner() {
  const {attributes, listeners, setNodeRef} = useDraggable({
    id: 'banner',
    data: { type: 'BANNER' },
  });

  return (
    <Flex justifyContent="center"> {/* Flex container to center the Banner */}
      <Box
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        w="50vw" // Width set to 90% of the viewport width
        h="375px"
        bg="#020281"
        margin="32px auto"
      >
        <Flex
          w="100%"
          h="100%"
          display="flex"
          justifyContent="center"
        >
          <Box w="50%" h="100%" bgImage="url(./assets/gea-dummy.png)" bgSize="cover" bgPos="center">
            {/* Background image is set here */}
          </Box>
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
        </Flex>
      </Box>
    </Flex>
  );
}

export default Banner;
