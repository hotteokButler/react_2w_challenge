import React, { useState } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import StrictModeDroppable from '@/components/StrictModeDroppable';
import BoardList from '@/components/BoardList';
import Card from './components/Card';

const toDos = ['1', '2', '3', '4'];

function App() {
  const onDragEnd = () => {};

  return (
    <div className='wrap'>
      <DragDropContext onDragEnd={onDragEnd}>
        <StrictModeDroppable droppableId='before'>
          {(provided) => {
            return (
              <BoardList
                provided={provided}
                bd_obj={{ bd_color: 'bg-rose-50', bd_title: 'first', bd_title_color: 'text-violet-600' }}
              >
                {toDos.map((elem, idx) => (
                  <Draggable draggableId={elem} index={idx} key={idx}>
                    {(provided) => <Card provided={provided} text={elem} />}
                  </Draggable>
                ))}
              </BoardList>
            );
          }}
        </StrictModeDroppable>
      </DragDropContext>
      <DragDropContext onDragEnd={onDragEnd}>
        <StrictModeDroppable droppableId='before'>
          {(provided) => {
            return (
              <BoardList
                provided={provided}
                bd_obj={{ bd_color: 'bg-rose-200', bd_title: 'second', bd_title_color: 'text-violet-600' }}
              >
                <Draggable draggableId='first' index={1}>
                  {(provided) => <Card provided={provided} text='ho'></Card>}
                </Draggable>
              </BoardList>
            );
          }}
        </StrictModeDroppable>
      </DragDropContext>
      <DragDropContext onDragEnd={onDragEnd}>
        <StrictModeDroppable droppableId='before'>
          {(provided) => {
            return (
              <BoardList
                provided={provided}
                bd_obj={{
                  bd_color: 'bg-rose-300',
                  bd_title: 'third',
                  bd_title_color: 'text-violet-600',
                }}
              >
                <Draggable draggableId='first' index={1}>
                  {(provided) => <Card provided={provided} text='ho'></Card>}
                </Draggable>
              </BoardList>
            );
          }}
        </StrictModeDroppable>
      </DragDropContext>
    </div>
  );
}

export default App;
