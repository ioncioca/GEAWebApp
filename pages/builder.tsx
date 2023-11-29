import React, { useState } from 'react';
import Sidebar from '../app/components/layout/Sidebar';
import { Box, HStack, VStack } from '@chakra-ui/react';
import { useDrop } from 'react-dnd';
import Banner from '../app/components/builder/Banner';
import Hero from '@/app/components/builder/Hero';

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

  return (
    <HStack spacing={0} w="100vw" h="100vh" bg="#EBEBEB">
      <Sidebar />
      <Box ref={dropRef} w="calc(100% - 200px)" h="100vh" style={placeholderStyle}>
        <VStack spacing={12}>
          {droppedItems.map((item, index) => (
            <Box key={index} w="100%">
              {item.type === 'BANNER' && <Banner />} {/* Render Banner */}
              {item.type === 'HERO' && <Hero />} {/* Render Hero */}
            </Box>
          ))}
        </VStack>
        {isOver && <p>Drop items here...</p>}
      </Box>
    </HStack>
  );
}

export default MyComponent;
