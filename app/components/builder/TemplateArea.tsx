// TemplateArea.tsx
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import Banner from './Banner';
import Hero from './Hero';
import GridComponent from './GridComponent';
import { GridLayoutType } from './GridComponent'

interface TemplateItem {
  id: string;
  type: string;
  layoutType?: GridLayoutType;
}

interface TemplateAreaProps {
  items: TemplateItem[];
}

const TemplateArea: React.FC<TemplateAreaProps> = ({ items }) => {
    const { setNodeRef } = useDroppable({ id: 'droppable' });
  
    const renderItem = (item: TemplateItem, index: number) => {

        
      const key = item.type === 'GRID' ? `GRID-${index}` : item.id;
  
      console.log("Rendering item:", item); // Check what's being rendered
  
      switch (item.type) {
        case 'BANNER':
          return <Banner key={key} />;
        case 'HERO':
          return <Hero key={key} />;
        case 'GRID':
          console.log("Rendering Grid with layout:", item.layoutType); // Specific check for grid items
          return (
            <div key={key}>
              {item.layoutType && <GridComponent layout={item.layoutType} onDrop={function (droppableId: string, draggableId: string): void {
                      throw new Error('Function not implemented.');
                  } } items={{}} />} {/* Pass the layout if it exists */}
            </div>
          );
        default:
          return null;
      }
    };
  
    console.log("Received items:", items);
  
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
          overflow: 'auto' // Allows scrolling if content exceeds the height
        }}
      >
        {items.map(renderItem)}
      </div>
    );
  }

export default TemplateArea;
