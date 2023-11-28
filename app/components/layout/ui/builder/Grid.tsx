import React from 'react';
import { Box, Grid as ChakraGrid } from '@chakra-ui/react';
import { useDrop } from 'react-dnd';

interface DraggableItem {
  text: string;
  type: string;
}

interface GridProps {
  layout: string;
}

function Grid({ layout }: GridProps) {
  const [droppedComponents, setDroppedComponents] = React.useState<DraggableItem[]>([]);

  const [, drop] = useDrop({
    accept: 'BUTTON',
    drop: (item: DraggableItem) => {
      setDroppedComponents([...droppedComponents, item]);
    },
  });

  let templateColumns = '1fr 1fr'; // Default template columns

  switch (layout) {
    case '2_COLUMN_EQUAL':
      templateColumns = '1fr 1fr';
      break;
    case '2_COLUMN_WIDE_LEFT':
      templateColumns = '2fr 1fr';
      break;
    case '2_COLUMN_WIDE_RIGHT':
      templateColumns = '1fr 2fr';
      break;
    case '3_COLUMN_EQUAL':
      templateColumns = '1fr 1fr 1fr';
      break;
    case 'SINGLE_COLUMN':
      templateColumns = '1fr';
      break;
    default:
      templateColumns = '1fr 1fr';
  }

  return (
    <Box p={4} flex={1} ref={drop}>
      <ChakraGrid
        templateColumns={templateColumns}
        gap={12}
        bg="none"
        borderRadius="4px"
      >
        {droppedComponents.map((component, componentIndex) => (
          <Box key={componentIndex} borderWidth="1px" p={4} minHeight="100px" bg="#020281">
            {component.text}
          </Box>
        ))}
      </ChakraGrid>
    </Box>
  );
}

export default Grid;
