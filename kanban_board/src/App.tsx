import React, { useState } from 'react';

import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import StrictModeDroppable from '@/components/StrictModeDroppable';
import BoardList from '@/components/BoardList';
import Card from '@/components/Card';
import { useRecoilState } from 'recoil';
import { listState } from '@/recoil/atoms';

function App() {
  const [lists, setLists] = useRecoilState(listState);
  const onDragEnd = (info: DropResult) => {
    const { destination, draggableId, source } = info;

    if (!destination?.droppableId) return;
    if (destination?.droppableId === source.droppableId) {
      setLists((boardLists) => {
        const newList = [...boardLists[source.droppableId]];
        newList.splice(source.index, 1);
        newList.splice(destination.index, 0, draggableId);

        return { ...boardLists, [destination.droppableId]: newList };
      });
    } else {
      setLists((BoardLists) => {
        const originList = [...BoardLists[source.droppableId]];
        const movedList = [...BoardLists[destination?.droppableId]];

        originList.splice(source.index, 1);
        movedList.splice(destination.index, 0, draggableId);
        return { ...BoardLists, [source.droppableId]: originList, [destination.droppableId]: movedList };
      });
    }
  };

  return (
    <div className='wrap'>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(lists).map((elem, idx) => (
          <StrictModeDroppable droppableId={elem} key={idx}>
            {(provided) => {
              return (
                <BoardList
                  provided={provided}
                  bd_obj={{ bd_color: 'bg-rose-50', bd_title: elem, bd_title_color: 'text-violet-600' }}
                >
                  {lists[elem].map((elem, idx) => (
                    <Card card={elem} index={idx} key={elem} />
                  ))}
                </BoardList>
              );
            }}
          </StrictModeDroppable>
        ))}
      </DragDropContext>
    </div>
  );
}

export default App;
