// TemplateArea.tsx
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import Banner from './Banner';
import Hero from './Hero';
import GridComponent from './GridComponent';
import { GridLayoutType } from './GridComponent';
import { DraggableItem } from '@/app/types'

export interface TemplateItem {
  id: string;
  type: string;
  layoutType?: GridLayoutType;
}

interface TemplateAreaProps {
  items: TemplateItem[];
  gridItems: { [key: string]: DraggableItem[] };
  onDrop: (droppableId: string, draggableId: string, draggableItem: TemplateItem) => void;
}

const TemplateArea: React.FC<TemplateAreaProps> = ({ items,gridItems, onDrop }) => {
  const { setNodeRef } = useDroppable({ id: 'droppable' });

  const renderItem = (item: TemplateItem, index: number) => {
    const key = item.type === 'GRID' ? `GRID-${index}` : item.id;

    switch (item.type) {
      case 'BANNER':
        return <Banner key={key} />;
      case 'HERO':
        return <Hero key={key} />;
        case 'GRID':
  return (
    <div key={key}>
      {item.layoutType && 
        <GridComponent 
          layout={item.layoutType} 
          items={gridItems} // Pass the gridItems here
          onDrop={(droppableId, draggableId, draggableItem) => onDrop(droppableId, draggableId, draggableItem)} 
        />
      }
    </div>
  );
      default:
        return null;
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={{
        width: '60vw',
        minHeight: '100vh',
        marginTop: '24px',
        marginBottom: '24px',
        border: '1px solid white',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        overflow: 'auto'
      }}
    >
      {items.map(renderItem)}
    </div>
  );
}

export default TemplateArea;
