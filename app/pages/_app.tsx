import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    fetch('http://localhost:4001/api') // Update with your backend URL and port
      .then(response => response.json())
      .then(data => console.log('Response from backend:', data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <Component {...pageProps} />
    </DndProvider>
  );
}

export default MyApp;
