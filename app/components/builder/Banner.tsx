import React from 'react';
import { Box, Editable, EditablePreview, EditableInput, Flex } from '@chakra-ui/react';
import { useDrag } from 'react-dnd';

// Define the interface for draggable items
interface DraggableItem {
  [x: string]: any;
  text: string;
  type: string;
}

function Banner() {
  const [, dragRef] = useDrag(() => ({
    type: 'BANNER', // Specify the type as 'BANNER'
  }));

  return (
    <Box
      ref={dragRef}
      w="60vw"
      h="375px"
      bg="#020281"
      margin="0 auto" // Center the entire Banner component horizontally
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
  );
}

export default Banner;
