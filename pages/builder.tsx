// 1. Import necessary libraries and components
import React, { useState } from 'react';
import Sidebar from '../app/components/layout/Sidebar';
import { Box, HStack, VStack, Button } from '@chakra-ui/react';
import { useDrop } from 'react-dnd';
import Banner from '../app/components/builder/Banner';
import Hero from '@/app/components/builder/Hero';

// 2. Define the enum for layout types
enum LayoutType {
  OneColumn = "ONE_COLUMN",
  TwoColumn = "TWO_COLUMN",
  TwoColumnWideLeft = "TWO_COLUMN_WIDE_LEFT",
  TwoColumnWideRight = "TWO_COLUMN_WIDE_RIGHT",
  ThreeColumn = "THREE_COLUMN",
}

// 3. Define the interface for draggable items
interface DraggableItem {
  [x: string]: any;
  text: string;
  type: string;
}

// 4. The main component function
function MyComponent() {
  // 5. useState hooks for managing state
  const [isOver, setIsOver] = useState(false);
  const [droppedItems, setDroppedItems] = useState<DraggableItem[]>([]);
  const [selectedLayout, setSelectedLayout] = useState(LayoutType.OneColumn);
  const [showPlaceholders, setShowPlaceholders] = useState(false); // New state for showing placeholders

  // 6. Function to handle item drop
  const handleBannerDrop = (item: DraggableItem) => {
    setDroppedItems((prevItems) => [...prevItems, item]);
    setIsOver(false);
    setShowPlaceholders(false); // Hide placeholders after an item is dropped
  };

  // 7. useDrop hook from react-dnd
  const [, dropRef] = useDrop(() => ({
    accept: 'BUTTON',
    drop: handleBannerDrop,
    hover: (_item, _monitor) => setIsOver(true),
    leave: (_item, _monitor) => setIsOver(false),
  }));

  // 8. Function to handle layout selection
  const handleLayoutSelection = (layout: LayoutType) => {
    setSelectedLayout(layout);
    setShowPlaceholders(true); // Show placeholders when a layout is selected
  };

  // 9. Function to get grid template columns based on the layout
  function getGridTemplateColumns(layout: LayoutType): string {
    switch (layout) {
      case LayoutType.OneColumn: return "1fr";
      case LayoutType.TwoColumn: return "1fr 1fr";
      case LayoutType.TwoColumnWideLeft: return "2fr 1fr";
      case LayoutType.TwoColumnWideRight: return "1fr 2fr";
      case LayoutType.ThreeColumn: return "1fr 1fr 1fr";
      default: return "1fr";
    }
  }

  // 10. Function to render placeholders based on the selected layout
  const renderPlaceholders = () => {
    let placeholders = [];
    const columns = getGridTemplateColumns(selectedLayout).split(" ").length;
    for (let i = 0; i < columns; i++) {
      placeholders.push(
        <Box key={i} border="2px dashed gray" height="200px" /> // Placeholder box
      );
    }
    return placeholders;
  };

  // 11. JSX for the component
  return (
    <HStack spacing={0} w="100vw" h="100vh" bg="#EBEBEB">
      <Sidebar />
      <Box ref={dropRef} w="calc(100% - 200px)" h="100vh" overflow="auto">
        <VStack spacing={4}>
          <HStack spacing={2}>
            {/* Layout selection buttons */}
            {Object.values(LayoutType).map((layout) => (
              <Button key={layout} onClick={() => handleLayoutSelection(layout)}>
                {layout.replace(/_/g, ' ')}
              </Button>
            ))}
          </HStack>
          <VStack
            spacing={12}
            style={{ display: 'grid', gridTemplateColumns: getGridTemplateColumns(selectedLayout) }}
          >
            {/* Render placeholders or dropped items */}
            {showPlaceholders ? (
              renderPlaceholders()
            ) : (
              droppedItems.map((item, index) => (
                <Box key={index} w="100%">
                  {item.type === 'BANNER' && <Banner />}
                  {item.type === 'HERO' && <Hero />}
                </Box>
              ))
            )}
          </VStack>
        </VStack>
        {isOver && <p>Drop items here...</p>}
      </Box>
    </HStack>
  );
}
// 12. Export the component
export default MyComponent;
