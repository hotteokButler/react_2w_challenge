import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import StrictModeDroppable from '@/components/StrictModeDroppable';
import BoardList from '@/components/BoardList';
import Card from '@/components/Card';
import { useRecoilState } from 'recoil';
import { listState } from '@/recoil/atoms';

function App() {
  const [lists, setLists] = useRecoilState(listState);
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) return;
    setLists((oldList) => {
      const newLists = [...oldList];
      newLists.splice(source.index, 1);
      newLists.splice(destination?.index, 0, draggableId);
      return newLists;
    });
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
                {lists && lists.map((elem, idx) => <Card card={elem} index={idx} key={elem} />)}
              </BoardList>
            );
          }}
        </StrictModeDroppable>
      </DragDropContext>
    </div>
  );
}

export default App;
