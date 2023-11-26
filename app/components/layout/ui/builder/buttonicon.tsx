import React, { ReactElement, useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { useDrag, DragSourceHookSpec } from 'react-dnd';

interface IconButtonExampleProps {
  icon: ReactElement;
  text: string;
}

function ButtonIcon({ icon, text }: IconButtonExampleProps) {
  const [isMounted, setIsMounted] = useState(false); // Track component mount state
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'BUTTON',
    item: { text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // Use a dummy drag source specification with default values when not on the client
  const [{ isClient }, setIsClient] = useState({ isClient: false });

  useEffect(() => {
    setIsMounted(true); // Component is mounted on the client
    setIsClient({ isClient: true }); // Set isClient to true on the client
  }, []);

  if (!isMounted || !isClient) {
    // Delay rendering until after client-side hydration
    return null;
  }

  return (
    <Button
      ref={dragRef}
      leftIcon={icon}
      colorScheme="blue"
      opacity={isDragging ? 0.5 : 1}
    >
      {text}
    </Button>
  );
}

export default ButtonIcon;
