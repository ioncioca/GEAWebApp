import React, { useState } from 'react';
import { Box, VStack, HStack } from '@chakra-ui/react';
import LayoutSelector from './LayoutSelector';

interface TemplateBuilderProps {
  selectedLayout: string | null;
  setSelectedLayout: (layout: string | null) => void; // Add this prop
}

function TemplateBuilder({ selectedLayout, setSelectedLayout }: TemplateBuilderProps) {
  // Your TemplateBuilder component logic here

  const handleLayoutSelect = (layout: string | null) => {
    // Update the selectedLayout state when a layout is selected
    setSelectedLayout(layout);
  };

  return (
    <Box flex={1} bg="#020281" p={4}>
      {/* Render the LayoutSelector component and pass the handleLayoutSelect callback */}
      <LayoutSelector setSelectedLayout={handleLayoutSelect} />
      
      {/* Other content of your TemplateBuilder */}
    </Box>
  );
}

export default TemplateBuilder;
