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
    console.log(info);
    const { destination, draggableId, source } = info;

    if (!destination?.droppableId) return;
    if (destination?.droppableId === source.droppableId) {
      const newList = [...lists[source.droppableId]];
      newList.splice(source.index, 1);
      newList.splice(destination.index, 0, draggableId);
      setLists((prev) => ({ ...prev, [destination.droppableId]: newList }));
    } else {
      const originList = [...lists[source.droppableId]];
      const movedList = [...lists[destination?.droppableId]];

      originList.splice(source.index, 1);
      movedList.splice(destination.index, 0, draggableId);

      setLists((prev) => ({ ...prev, [source.droppableId]: originList, [destination.droppableId]: movedList }));
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
