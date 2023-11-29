import React from 'react';
import { Grid, GridItem, Button, Box } from '@chakra-ui/react';

export type GridLayoutType = 'twoColumnEqual' | 'twoColumnWideLeft' | 'twoColumnWideRight' | 'threeColumnEqual' | 'singleColumn';

interface GridLayoutSelectorProps {
  selectedLayout: GridLayoutType;
}

const GridLayoutSelector: React.FC<GridLayoutSelectorProps> = ({ selectedLayout }) => {
  const renderGridItems = () => {
    switch (selectedLayout) {
      case 'twoColumnEqual':
        return [1, 2].map(key => (
          <GridItem key={key} border="2px dashed #020281" p={40}>
            <Button colorScheme="#020281">Add Component Here</Button>
          </GridItem>
        ));
      case 'twoColumnWideLeft':
        return (
          <>
            <GridItem colSpan={1} border="2px dashed #020281" p={40}>
              <Button colorScheme="#020281">Add Component Here</Button>
            </GridItem>
            <GridItem border="2px dashed #020281" p={40}>
              <Button colorScheme="#020281">Add Component Here</Button>
            </GridItem>
          </>
        );
      case 'twoColumnWideRight':
        return (
          <>
            <GridItem border="2px dashed #020281" p={40}>
              <Button colorScheme="#020281">Add Component Here</Button>
            </GridItem>
            <GridItem colSpan={1} border="2px dashed #020281" p={40}>
              <Button colorScheme="#020281">Add Component Here</Button>
            </GridItem>
          </>
        );
      case 'threeColumnEqual':
        return [1, 2, 3].map(key => (
          <GridItem key={key} border="2px dashed #020281" p={40}>
            <Button colorScheme="#020281">Add Component Here</Button>
          </GridItem>
        ));
      case 'singleColumn':
        return (
          <GridItem border="2px dashed #020281" p={40}>
            <Button colorScheme="#020281">Add Component Here</Button>
          </GridItem>
        );
      default:
        return null;
    }
  };

  const gridTemplateColumns = () => {
    switch (selectedLayout) {
      case 'twoColumnEqual':
        return 'repeat(2, 1fr)';
      case 'twoColumnWideLeft':
        return '2fr 1fr';
      case 'twoColumnWideRight':
        return '1fr 2fr';
      case 'threeColumnEqual':
        return 'repeat(3, 1fr)';
      case 'singleColumn':
        return '1fr';
      default:
        return '1fr'; // Default value, adjust as needed
    }
  };
  
  console.log("Rendering grid layout for: ", selectedLayout); // Debugging statement

  return (
    <Box>
    <Grid 
      templateColumns={gridTemplateColumns()} 
      gap={4} // Adjust gap if necessary
      // Ensure that the grid does not wrap
      overflow="hidden"
    >
      {renderGridItems()}
    </Grid>
  </Box>
);
};

export default GridLayoutSelector;
