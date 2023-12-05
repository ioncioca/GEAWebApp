import React, { useState } from 'react';
import Sidebar from '../app/components/layout/Sidebar';
import TemplateArea from '../app/components/builder/TemplateArea';
import GridComponent, { GridLayoutType } from '../app/components/builder/GridComponent';
import { DndContext, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { Box, HStack, VStack } from '@chakra-ui/react';

interface DraggableItem {
  id: string;
  type: string;
  layoutType?: GridLayoutType;
}

function Builder() {
  const [droppedItems, setDroppedItems] = useState<DraggableItem[]>([]);
  const [gridItems, setGridItems] = useState<{ [key: string]: DraggableItem[] }>({});
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: { active: any; over: any; delta: any; }) => {
    const { active, over, delta } = event;
    const { type: itemType, layoutId } = active.data.current;

    if (over?.id.startsWith('droppable-')) {
      const droppableId = over.id;
      const newGridItem = { id: active.id, type: itemType, layoutType: layoutId };

      setGridItems(prev => ({
        ...prev,
        [droppableId]: [...(prev[droppableId] || []), newGridItem]
      }));
    } else if (over?.id === 'droppable' && (Math.abs(delta.x) > 5 || Math.abs(delta.y) > 5)) {
      setDroppedItems(prevItems => [
        ...prevItems,
        { id: active.id, type: itemType, layoutType: layoutId }
      ]);
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <HStack spacing={0} w="100vw" h="100vh" bg="#EBEBEB">
        <Sidebar />
        <VStack w="calc(100% - 360px)" h="100vh" overflow="auto">
          {/* Replace TemplateArea with GridComponent */}
          <TemplateArea items={droppedItems} />
        </VStack>
      </HStack>
    </DndContext>
  );
}

export default Builder;
