import React from 'react';
import { Box, Button, Grid, GridItem } from '@chakra-ui/react';
import { useDroppable } from '@dnd-kit/core';

export type GridLayoutType = 'twoColumnEqual' | 'twoColumnWideLeft' | 'twoColumnWideRight' | 'threeColumnEqual' | 'singleColumn' | string;

interface DraggableItem {
  id: string;
  type: string;
  // Add any other properties you need for draggable items
}

interface GridComponentProps {
  layout: GridLayoutType;
  items: { [key: string]: DraggableItem[] }; // Array of items for each column
  onDrop: (droppableId: string, draggableId: string) => void;
}

const GridComponent: React.FC<GridComponentProps> = ({ layout, items, onDrop }) => {
  const renderDroppableGridItem = (key: React.Key | null | undefined) => {
    const droppableId = `droppable-${layout}-${key}`;
    const { setNodeRef, isOver } = useDroppable({ id: droppableId });

    const droppedItems = items[droppableId] || [];

    return (
      <GridItem ref={setNodeRef} key={key} border="2px dashed #020281" p={40} bg={isOver ? 'lightgray' : 'white'}>
        {droppedItems.map((item) => (
          // Render your component based on the item type
          // This is a placeholder, replace with your actual component rendering logic
          <div key={item.id}>{item.type}</div>
        ))}
        <Button colorScheme="#020281">Add Component Here</Button>
      </GridItem>
    );
  };

  const renderGridItems = () => {
    const numberOfColumns = layout === 'threeColumnEqual' ? 3 : 2;
    return Array.from({ length: numberOfColumns }, (_, index) => renderDroppableGridItem(index));
  };

  const gridTemplateColumns = {
    'twoColumnEqual': 'repeat(2, 1fr)',
    'twoColumnWideLeft': '2fr 1fr',
    'twoColumnWideRight': '1fr 2fr',
    'threeColumnEqual': 'repeat(3, 1fr)',
    'singleColumn': '1fr',
  }[layout] || '1fr';

  return (
    <Box>
      <Grid
        templateColumns={gridTemplateColumns}
        gap={4}
        overflow="hidden"
      >
        {renderGridItems()}
      </Grid>
    </Box>
  );
};

export default GridComponent;
