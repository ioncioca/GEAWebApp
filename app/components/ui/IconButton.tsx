import React from 'react';
import { Button } from '@chakra-ui/react';
import { useDraggable } from '@dnd-kit/core';

interface IconButtonExampleProps {
  icon: React.ReactElement;
  text: string;
  type: 'BANNER' | 'HERO' | 'GRID';
  layoutId?: string; // Add this prop for specific grid layout identifiers
}

function ButtonIcon({ icon, text, type, layoutId }: IconButtonExampleProps) {
  const draggableId = layoutId || type; // Use layoutId if available, otherwise use type

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
