import React from 'react';
import { DraggableProvided, DraggableRubric, DraggableStateSnapshot, DraggableChildrenFn } from 'react-beautiful-dnd';
import { FiMenu } from 'react-icons/fi';

interface ICard {
  provided: DraggableProvided;
  snapshot?: DraggableStateSnapshot;
  rubric?: DraggableRubric;
  children?: React.ReactElement | React.ReactElement[];
  text?: string | undefined;
}
export default function Card({ provided, snapshot, rubric, text, children }: ICard) {
  return (
    <>
      <li className='card' ref={provided.innerRef} {...provided.draggableProps}>
        <span className='card_btn' {...provided.dragHandleProps}>
          <FiMenu />
        </span>
        {text}
        {children}
      </li>
    </>
  );
}
