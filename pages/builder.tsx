import React, { useState } from 'react';
import Sidebar from '../app/components/layout/ui/builder/sidebarnav';
import DroppableGridItem from '../app/components/layout/ui/builder/droppablegriditem'; // Adjust the path as needed
import { Box, HStack, VStack, Grid } from '@chakra-ui/react';
import { useDrop } from 'react-dnd';
import Banner from '@/app/components/layout/ui/builder/banner';

// Define the interface for draggable items
interface DraggableItem {
  [x: string]: any;
  text: string;
  type: string;
}

function MyComponent() {
  const [isOver, setIsOver] = useState(false);
  const [droppedItems, setDroppedItems] = useState<DraggableItem[]>([]);
  const handleBannerDrop = (item: DraggableItem) => {
    // Handle the drop of the Banner component here
    setDroppedItems((prevItems) => [...prevItems, item]);
    setIsOver(false);
  };


  const [, dropRef] = useDrop(() => ({
    accept: 'BUTTON',
    drop: (item: DraggableItem, monitor) => {
      setDroppedItems((prevItems) => [...prevItems, item]);
      setIsOver(false);
    },
    hover: (_item: any, _monitor: any) => {
      setIsOver(true);
    },
    leave: (_item: any, _monitor: any) => {
      setIsOver(false);
    },
  }));

  const placeholderStyle = {
    backgroundColor: isOver ? '#f0f0f0' : 'gray.100',
    border: isOver ? '2px dashed blue' : 'none',
  };

  const renderLayout = (item: DraggableItem, index: number) => {
    switch (item.type) {
      case '2_COLUMN_EQUAL':
        return (
          <Grid templateColumns="repeat(2, 1fr)" gap={12}>
            <DroppableGridItem bg="#020281" id="grid-part-1" onDrop={handleBannerDrop}/>
            <DroppableGridItem bg="#020281" id="grid-part-2" onDrop={handleBannerDrop}/>
          </Grid>
        );
      case '2_COLUMN_WIDE_LEFT':
        return (
          <Grid templateColumns="2fr 1fr" gap={12}>
            <DroppableGridItem bg="#020281" id="grid-part-1" onDrop={handleBannerDrop}/>
            <DroppableGridItem bg="#020281" id="grid-part-2" onDrop={handleBannerDrop}/>
          </Grid>
        );
      case '2_COLUMN_WIDE_RIGHT':
        return (
          <Grid templateColumns="1fr 2fr" gap={12}>
            <DroppableGridItem bg="#020281" id="grid-part-1" onDrop={handleBannerDrop}/>
            <DroppableGridItem bg="#020281" id="grid-part-2" onDrop={handleBannerDrop}/>
          </Grid>
        );
      case '3_COLUMN_EQUAL':
        return (
          <Grid templateColumns="repeat(3, 1fr)" gap={12}>
            <DroppableGridItem bg="#020281" id="grid-part-1" onDrop={handleBannerDrop}/>
            <DroppableGridItem bg="#020281" id="grid-part-2" onDrop={handleBannerDrop}/>
            <DroppableGridItem bg="#020281" id="grid-part-3"onDrop={handleBannerDrop}/>
          </Grid>
        );
      case 'SINGLE_COLUMN':
        return <Box w="100%" h="100px" bg="#020281" />;
        case 'BANNER':
      return <Banner />;
      default:
        return <p>Unknown layout</p>;
    }
  };

  return (
    <HStack spacing={0} w="100vw" h="100vh" bg="#EBEBEB">
      <Sidebar />
      <Box ref={dropRef} w="calc(100% - 200px)" h="100vh" style={placeholderStyle}>
        <VStack spacing={12}>
          {droppedItems.map((item, index) => (
            <Box key={index} w="100%">
              {renderLayout(item, index)}
            </Box>
          ))}
        </VStack>
        {isOver && <p>Drop items here...</p>}
      </Box>
    </HStack>
  );
}

export default MyComponent;
