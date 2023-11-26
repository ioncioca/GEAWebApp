import React from 'react';
import { Box } from '@chakra-ui/react';
import { useDrop } from 'react-dnd';

// Define the interface for draggable items
interface DraggableItem {
  [x: string]: any;
  text: string;
  type: string;
}

interface DroppableGridItemProps {
  bg: string;
  id: string;
  onDrop: (item: DraggableItem) => void;
}

const DroppableGridItem: React.FC<DroppableGridItemProps> = ({ bg, id, onDrop }) => {
  const [, dropRef] = useDrop(() => ({
    accept: ['BANNER', 'GRID_ITEM'], // Accept both banner and grid item
    drop: (droppedItem: DraggableItem, monitor) => {
      onDrop(droppedItem);
    },
    collect: (monitor) => ({
      isOverGrid: monitor.isOver(),
    }),
  }));

  const itemStyle = {
    backgroundColor: bg,
    minHeight: '100px',
    border: '1px dashed #ccc',
  };

  return (
    <Box ref={dropRef} id={id} style={itemStyle}>
      {/* Content of the grid item */}
    </Box>
  );
};

export default DroppableGridItem;
