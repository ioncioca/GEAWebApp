import React, { useState } from 'react';
import Sidebar from '../app/components/layout/ui/builder/Sidebar';
import LayoutSelector from '../app/components/layout/ui/builder/LayoutSelector';
import Grid from '../app/components/layout/ui/builder/grid'; // Correct casing
import { HStack } from '@chakra-ui/react';

function MyComponent() {
  const [selectedLayout, setSelectedLayout] = useState<string | null>(null);

  // Function to handle layout selection
  const handleLayoutSelect = (layout: string | null) => {
    setSelectedLayout(layout);
  };

  return (
    <HStack spacing={0} w="100vw" h="100vh" bg="#EBEBEB">
      <Sidebar setSelectedLayout={handleLayoutSelect} />
      <LayoutSelector setSelectedLayout={handleLayoutSelect} />
      {selectedLayout && (
        <Grid layout={selectedLayout} />
      )}
    </HStack>
  );
}

export default MyComponent;
