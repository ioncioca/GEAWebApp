import React from 'react';
import { Button } from '@chakra-ui/react';
import { useDraggable } from '@dnd-kit/core';

interface IconButtonExampleProps {
  icon: React.ReactElement;
  text: string;
  type: 'BANNER' | 'HERO' | 'GRID' | 'PAGE'| 'TEXT' | 'IMAGE';
  layoutId?: string; 
}

function ButtonIcon({ icon, text, type, layoutId }: IconButtonExampleProps) {
  const draggableId = layoutId || type; 

  const { attributes, listeners, setNodeRef } = useDraggable({
    id: draggableId,
    data: { type, layoutId: draggableId }
  });
  return (
    <Button
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      leftIcon={icon}
      colorScheme="blue"
    >
      {text}
    </Button>
  );
}

export default ButtonIcon;
