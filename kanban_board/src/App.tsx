import React, { useState } from 'react';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';
import StrictModeDroppable from '@/components/StrictModeDroppable';
import BoardList from '@/components/BoardList';
import Card from '@/components/Card';
import { useRecoilState } from 'recoil';
import { listState } from '@/recoil/atoms';

function App() {
  const [lists, setLists] = useRecoilState(listState);
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    setLists((oldList) => {
      const newLists = [...oldList];
      const target = newLists.splice(source.index, 1);
      newLists.splice(destination?.index, 0, target[0]);
      return newLists;
    });

    console.log(lists);
  };

  return (
    <div className='wrap'>
      <DragDropContext onDragEnd={onDragEnd}>
        <StrictModeDroppable droppableId='one'>
          {(provided) => {
            return (
              <BoardList
                provided={provided}
                bd_obj={{ bd_color: 'bg-rose-50', bd_title: 'first', bd_title_color: 'text-violet-600' }}
              >
                {lists &&
                  lists.map((elem, idx) => (
                    <Draggable draggableId={elem} index={idx} key={elem}>
                      {(provided) => <Card provided={provided} text={elem} />}
                    </Draggable>
                  ))}
              </BoardList>
            );
          }}
        </StrictModeDroppable>
        {/* 
        <StrictModeDroppable droppableId='two'>
          {(provided) => {
            return (
              <BoardList
                provided={provided}
                bd_obj={{ bd_color: 'bg-rose-200', bd_title: 'second', bd_title_color: 'text-violet-600' }}
              >
                <Draggable draggableId='c' index={1}>
                  {(provided) => <Card provided={provided} text='ho'></Card>}
                </Draggable>
              </BoardList>
            );
          }}
        </StrictModeDroppable>

        <StrictModeDroppable droppableId='three'>
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
                <Draggable draggableId='d' index={1}>
                  {(provided) => <Card provided={provided} text='ho'></Card>}
                </Draggable>
              </BoardList>
            );
          }}
        </StrictModeDroppable> */}
      </DragDropContext>
    </div>
  );
}

export default App;
