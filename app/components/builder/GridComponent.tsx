import React from 'react';
import { Box, Button, Grid, GridItem } from '@chakra-ui/react';
import { useDroppable } from '@dnd-kit/core';
import Banner from './Banner'; 
import Hero from './Hero';  
import PageContent from './PageContent';
import RichText from './RichText';
import ImageBlock from './Image';

export type GridLayoutType = 'twoColumnEqual' | 'twoColumnWideLeft' | 'twoColumnWideRight' | 'threeColumnEqual' | 'singleColumn' | string;

interface DraggableItem {
  id: string;
  type: string;
  layoutType?: GridLayoutType;
}

interface GridComponentProps {
  layout: GridLayoutType;
  items: { [key: string]: DraggableItem[] };
  onDrop: (droppableId: string, draggableId: string, draggableItem: DraggableItem) => void;
}

const GridComponent: React.FC<GridComponentProps> = ({ layout, items, onDrop }) => {
  const renderDroppableGridItem = (key: number) => {
    const droppableId = `droppable-${layout}-${key}`;
    const { setNodeRef, isOver } = useDroppable({ id: droppableId });

    const droppedItems = items[droppableId] || [];

    return (
      <GridItem ref={setNodeRef} key={key} border="2px dashed #020281" p={40} bg={isOver ? 'lightgray' : 'white'}>
        {droppedItems.map((item) => {
          // Render different components based on item type
          switch (item.type) {
            case 'BANNER':
              return <Banner key={item.id} width="100%" />;
            case 'HERO':
              return <Hero key={item.id} />;
              case 'PAGE':
                return <PageContent key={item.id} />;
                case 'IMAGE':
                  return <ImageBlock key={item.id} />;
            default:
              return <div key={item.id}>{item.type}</div>;
          }
        })}
      </GridItem>
    );
  };



  const renderGridItems = () => {
    const numberOfColumns = {
      'twoColumnEqual': 2,
      'twoColumnWideLeft': 2,
      'twoColumnWideRight': 2,
      'threeColumnEqual': 3,
      'singleColumn': 1,
    }[layout] || 1;

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
        gap={32}
        margin="32px"
        padding="0px"
        overflow="hidden"
      >
        {renderGridItems()}
      </Grid>
    </Box>
  );
};

export default GridComponent;
