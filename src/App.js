import React from 'react';
import Board from './components/Board'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend' 

function App() {
  return (
    <DndProvider backend={HTML5Backend} >
    <div className="App">
      <Board />
    </div>
    </DndProvider>
  );
}

export default App;
