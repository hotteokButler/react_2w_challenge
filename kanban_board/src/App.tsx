import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import StrictModeDroppable from './components/StrictModeDroppable';

function App() {
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <StrictModeDroppable droppableId='before'>
          {(provided) => {
            return (
              <ul ref={provided.innerRef} {...provided.droppableProps}>
                <Draggable draggableId='first' index={1}>
                  {(provided) => (
                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      one
                    </li>
                  )}
                </Draggable>
                <Draggable draggableId='second' index={2}>
                  {(provided) => (
                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      two
                    </li>
                  )}
                </Draggable>
                {provided.placeholder}
              </ul>
            );
          }}
        </StrictModeDroppable>
      </div>
    </DragDropContext>
  );
}

export default App;
